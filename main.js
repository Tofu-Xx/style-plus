const getSelector = (el) => {
  let path = [];
  for (el; el.parentNode; el = el.parentNode) {
    let tag = el.tagName;
    if (el.id) {
      path.unshift(`#${el.id}`);
      break;
    }
    const siblings = [...el.parentNode.children];
    const nth = `:nth-child(${1 + siblings.indexOf(el)})`;
    path.unshift(tag + nth);
  };
  return `${path.join(' > ')}`.toLowerCase();
};

const styleEl = document.createElement('style');
document.head.appendChild(styleEl);
const csss = new Set();
new MutationObserver(mutations => {
  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      if (node.nodeType !== Node.ELEMENT_NODE) continue;
      // @ts-ignore
      const style = node?.getAttribute('style');
      if (!style?.trim().startsWith('&')) continue;
      // @ts-ignore
      node.removeAttribute('style');
      const css = style.replace('&', getSelector(node));
      if (csss.has(css)) continue;
      csss.add(css);
      styleEl.innerHTML += css;
    }
  }
}).observe(document.documentElement, {
  subtree: true,
  attributes: true,
  attributeFilter: ['style'],
  childList: true,
});
