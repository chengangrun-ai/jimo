/** Bounded least-recently-used cache. Large individual values are not cached. */
export class RenderCache<T> {
  private readonly entries = new Map<string, { value: T; bytes: number }>();
  private totalBytes = 0;
  private readonly maxBytes: number;
  private readonly sizeOf: (value: T) => number;

  constructor(maxBytes: number, sizeOf: (value: T) => number) {
    if (!Number.isSafeInteger(maxBytes) || maxBytes < 0) throw new Error('invalid cache budget');
    this.maxBytes = maxBytes;
    this.sizeOf = sizeOf;
  }

  get(key: string): T | undefined {
    const entry = this.entries.get(key);
    if (!entry) return undefined;
    this.entries.delete(key);
    this.entries.set(key, entry);
    return entry.value;
  }

  delete(key: string): void {
    const entry = this.entries.get(key);
    if (!entry) return;
    this.totalBytes -= entry.bytes;
    this.entries.delete(key);
  }

  set(key: string, value: T): void {
    const bytes = this.sizeOf(value);
    if (!Number.isSafeInteger(bytes) || bytes < 0) throw new Error('invalid cache entry size');
    this.delete(key);
    if (bytes > this.maxBytes) return;
    while (this.totalBytes + bytes > this.maxBytes && this.entries.size) {
      this.delete(this.entries.keys().next().value!);
    }
    this.entries.set(key, { value, bytes });
    this.totalBytes += bytes;
  }

  get size(): number { return this.entries.size; }
  get bytes(): number { return this.totalBytes; }
}
