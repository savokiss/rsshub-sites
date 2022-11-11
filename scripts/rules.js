import got from 'got';
import { parseCategory } from './category';

const rulesURL = 'https://rsshub.js.org/build/radar-rules.js';

function fetchRules() {
  return got(rulesURL)
    .then((response) => {
      const rules = eval(response.body);
      return rules;
    })
    .catch((error) => {
      console.log(error.response.body);
    });
}

// format the rules to an array
function formatRules(rules) {
  if (!rules) {
    return [];
  }
  const rulesList = Object.keys(rules).map((key) => {
    const rule = rules[key];
    const link = key.startsWith('http') ? key : `http://${key}`;
    return {
      link,
      name: rule._name,
      item: rule,
      category: parseCategory(rule),
    };
  });
  return rulesList;
}

function fetchFormatedRules() {
  return fetchRules().then(formatRules);
}

function getCategoryRulesMap(rules) {
  const map = {};
  rules.forEach(rule => {
    const { category } = rule;
    if (!map[category]) {
      map[category] = {
        name: category,
        items: [],
      };
    }
    map[category].items.push(rule);
  });
  return map;
}

export {
  fetchRules,
  fetchFormatedRules,
  getCategoryRulesMap,
};
