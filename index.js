/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author wenlong
*/
module.exports = function(source) {
	this.cacheable && this.cacheable();
	var value = typeof source === "string" ? JSON.parse(source) : source;
	this.value = [value];
	var env = process.env['WANFA_ENV'] || 'development';
	return "module.exports = " + JSON.stringify(value[env] || {}, undefined, "\t") + ";";
}
