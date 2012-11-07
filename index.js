var inserted = require('inserted');
var overlay = require('overlay')

module.exports = function(el) {
	return new PlaceHolder(el)
}

function PlaceHolder(el) {
	this.placeholder = el
}

/**
 * Set element then show placeholder.
 */
PlaceHolder.prototype.hold = function(el) {
	if (!el) return cloneSwap(this.el, this.placeholder)

	this.el = el
	inserted(this.el, inlay.bind(this, this.el, this.placeholder))
	return this
}
overlay
/**
 * Show element.
 */
PlaceHolder.prototype.show = function() {
	replaceNode(this.placeholder, this.el)
	return this
}

function initInlay(container, inlayEl) {
	inline.style.position = 'absolute'
	inlayEl.style.top = 0
	inlayEl.style.bottom = 0
	inlayEl.style.left = 0
	inlayEl.style.right = 0
	container.appendChild(inlayEl)
}

function showInlay() {

}

/**
 * Copies position/dimensions of source to target then replaces source with target.
 */
//function cloneSwap(source, target) {
	//copyPosition(source, target)
	//replaceNode(source, target)
//}

//function copyPosition(source, target) {
	//target.style.width = source.offsetWidth
	//target.style.height = source.offsetHeight
	//target.style.top = source.offsetTop
	//target.style.left = source.offsetLeft
//}

//function replaceNode(source, target) {
	//source.parentNode.insertBefore(target, source)
	//source.parentNode.removeChild(source)
//}
