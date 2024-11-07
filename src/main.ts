import { getSelector } from './getSelector'

const csss = new Set()
const sheet = new CSSStyleSheet()
document.adoptedStyleSheets.push(sheet)

new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      if (!(node instanceof Element))
        continue
      const style = node?.getAttribute('style')
      if (!/\{|\}/.test(style))
        continue
      node.removeAttribute('style')
      const css = `${getSelector(node)}{${style}}`
      if (csss.has(css))
        continue
      csss.add(css)
      sheet.insertRule(css)
    }
  }
}).observe(document.documentElement, {
  subtree: true,
  attributes: true,
  attributeFilter: ['style'],
  childList: true,
})
