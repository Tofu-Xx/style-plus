const getSelector = (el) => {
  let path = [];
  for (el; el.parentNode; el = el.parentNode) {
    let tag = el.tagName;
    if (el.id) {
      path.unshift(`#${el.id}`);
      break;
    }
    const siblings = [...el.parentNode.children];
    const count = siblings.filter(sibling => sibling.tagName === tag).length;
    const nth = count > 1 ? `:nth-child(${1 + siblings.indexOf(el)})` : '';
    path.unshift(tag + nth);
  };
  return `${path.join(' > ')}`.toLowerCase();
};
const handleStyle = (el) => {
  let style = el.getAttribute('style');
  el.removeAttribute('style');
  return `${getSelector(el)}{ ${style}}`;
};
new MutationObserver((mutations) => {
  for (const mutation of mutations) { 
    const added = mutation.addedNodes[0]
    if (added.nodeType !== 1) continue;
    // @ts-ignore
    if (!added?.hasAttribute('style')) continue;
    // @ts-ignore
    if (!added?.getAttribute('style').trim().startsWith('&')) continue;
    const style = handleStyle(added);
    const styleEl = document.createElement('style');
    styleEl.innerHTML = style
    document.head.appendChild(styleEl);
  }
}).observe(document, { childList: true, subtree: true });