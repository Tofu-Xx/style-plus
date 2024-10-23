;(() => {
  function getSelector(el) {
    const path = []
    while (el && el.nodeType === Node.ELEMENT_NODE) {
      let selector = el.tagName.toLowerCase()
      if (el.id) {
        selector = `#${el.id}`
        path.unshift(selector)
        break
      }
      if (el.className) {
        selector += `.${el.className.trim().replace(/\s+/g, '.')}`
      }
      const siblings = el.parentNode ? [...el.parentNode.children].filter(child => child.tagName === el.tagName) : []
      if (siblings.length > 1) {
        const index = siblings.indexOf(el) + 1
        selector += `:nth-of-type(${index})`
      }
      path.unshift(selector)
      el = el.parentNode
    }
    return path.join(' > ')
  }

  const csss = new Set()
  const sheet = new CSSStyleSheet()
  document.adoptedStyleSheets.push(sheet)

  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType !== Node.ELEMENT_NODE)
          continue
        const style = node?.getAttribute('style')
        if (!style?.trim().startsWith('&'))
          continue
        node.removeAttribute('style')
        const css = style.replace('&', getSelector(node))
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
})()
