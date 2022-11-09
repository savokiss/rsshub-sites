const got = require("got");

const rulesURL = "https://rsshub.js.org/build/radar-rules.js";

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

function formatRules (rules) {
  if (!rules) {
    return [];
  }
  const rulesList = Object.keys(rules).map(key => {
    const rule = rules[key];
    const link = key.startsWith('http') ? key : `http://${key}`;
    return {
      link,
      name: rule._name,
    }
  })
  return rulesList;
}

function fetchFormatedRules () {
  return fetchRules().then(formatRules);
}

module.exports = {
  fetchRules,
  fetchFormatedRules,
};
