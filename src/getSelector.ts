export function getSelector(el: Element) {
  let path = ''
  while (el?.nodeType === Node.ELEMENT_NODE) {
    let tagName = el.localName
    const siblings = el.parentNode ? [...el.parentNode.children].filter(child => child.tagName === el.tagName) : []
    const index = siblings.indexOf(el) + 1
    tagName += `:nth-of-type(${index})`
    path = tagName + (path ? `>${path}` : '')
    el = el.parentElement
  }
  return path
}
