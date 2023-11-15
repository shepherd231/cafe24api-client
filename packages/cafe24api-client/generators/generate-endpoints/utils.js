const replaceAllMatches = (source, regex, replacer) => {
  let result = source;
  for (const match of source.matchAll(regex)) {
    result = result.replace(match[0], replacer(match));
  }
  return result;
};

module.exports = {
  replaceAllMatches,
};
