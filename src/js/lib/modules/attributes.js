import $ from '../core'

$.prototype.addAttr = function (attrName, attrValue) {
	for (let i = 0; i < this.length; i++) {
		if (!this[i].setAttribute) {
			continue
		}

		this[i].setAttribute(attrName, attrValue)
	}

	return this
}

$.prototype.removeAttr = function (attrName) {
	for (let i = 0; i < this.length; i++) {
		if (!this[i].removeAttribute) {
			continue
		}

		this[i].removeAttribute(attrName)
	}

	return this
}
