function getSelector(el: Element) {
  let path = ''
  while (el && el.nodeType === Node.ELEMENT_NODE) {
    let tagName = el.tagName.toLowerCase()
    const siblings = el.parentNode ? [...el.parentNode.children].filter(child => child.tagName === el.tagName) : []
    const index = siblings.indexOf(el) + 1
    tagName += `:nth-of-type(${index})`
    path = tagName + (path ? `>${path}` : '')
    el = el.parentElement
  }
  return path
}

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
      // const css = style.replace('&', getSelector(node))
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
