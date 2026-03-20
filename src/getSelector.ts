/**
 * 为指定的 DOM元素 生成唯一路径的 CSS 选择器。
 * 该选择器基于元素的标签名及其在同级元素中按类型的位置（:nth-of-type），
 * 从目标元素一直向上追溯到根元素（不包括 document 或非元素节点）。
 *
 * @param {Element} el - 需要生成选择器的 DOM 元素
 * @returns {string} 生成的 CSS 选择器字符串
 *
 */
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
