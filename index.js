module.exports = function() {
  if (this.cacheable) this.cacheable();
  var path = this.resourcePath.replace(this.context, "");
  var output = ["module.exports = '", path, "'"].join("");
  this.value = output;
  return output;
};
