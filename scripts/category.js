// @see the format in https://rsshub.js.org/build/radar-rules.js
function parseCategory (ruleItem) {
  // find the key with rss infos
  const infoKey = Object.keys(ruleItem).find(key => Array.isArray(ruleItem[key]));
  const infoItem = ruleItem[infoKey];
  const docsItem = infoItem.find(v => v.docs);
  if (docsItem) {
    return parseLink(docsItem.docs);
  }
  return '';
}

function parseLink (link) {
  const url = new URL(link);
  let pathname = url.pathname.slice(1);
  if (pathname.startsWith('/')) {
    pathname = pathname.slice(1);
  }
  const res = pathname.split('.').shift();
  return res;
}

export {
  parseCategory,
}