const replaceAllMatches = (source, regex, replacer) => {
  let result = source;
  let match;
  while ((match = regex.exec(source)) !== null) {
    result = result.replace(match[0], replacer(match));
  }
  return result;
};

module.exports = {
  replaceAllMatches,
};
