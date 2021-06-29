import $ from '../core'

$.prototype.on = function (event, callback) {
	if (!event || !callback) {
		return this
	}

	for (let i = 0; i < this.length; i++) {
		this[i].addEventListener(event, callback)
	}

	return this
}

$.prototype.off = function (event, callback) {
	if (!event || !callback) {
		return this
	}

	for (let i = 0; i < this.length; i++) {
		this[i].removeEventListener(event, callback)
	}

	return this
}

$.prototype.click = function (handler) {
	for (let i = 0; i < this.length; i++) {
		if (handler) {
			this[i].addEventListener('click', handler)
		} else {
			this[i].click()
		}
	}

	return this
}
