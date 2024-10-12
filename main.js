const getSelector = (el) => {
  let path = [];
  for (el; el.parentNode; el = el.parentNode) {
    let tag = el.tagName;
    if (el.id) {
      path.unshift(`#${el.id}`);
      break;
    }
    const siblings = [...el.parentNode.children];
    const nth = `:nth-child(${1 + siblings.indexOf(el)})` 
    path.unshift(tag + nth);
  };
  return `${path.join(' > ')}`.toLowerCase();
};
document.addEventListener('DOMContentLoaded', () => {
  const els = document.querySelectorAll('[style*="&"][style*="{"][style*="}"]');
  let css = '';
  els.forEach(el => {
    const style = el.getAttribute('style');
    if (!style?.trim().startsWith('&')) return;
    const selector = getSelector(el);
     css +=  style.replace('&', selector);
  });
  const styleEl = document.createElement('style');
  styleEl.innerHTML = css;
  document.head.appendChild(styleEl);
})