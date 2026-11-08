/**
 * 用真实浏览器（EGO）逐个验收 15 个模板：
 *   - /preview/<slug> 打开
 *   - 读 iframe 内 document 的文字、图形、破图
 *   - 往下拉到底，再读一次（用户明确要求「往下拉」）
 *   - 输出结果到 analysis/template-browser-audit.json
 *
 * 本脚本通过 ego_cli 的 page 门面调用，不依赖 HTTP 200 或原始 HTML。
 */
