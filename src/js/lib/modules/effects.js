import $ from '../core'

$.prototype.animateOverTime = function (dur, cb, fin) {
	let startTime

	function _animateOverTime(time) {
		if (!startTime) {
			startTime = time
		}

		let timeEllapsed = time - startTime
		let complection = Math.min(timeEllapsed / dur, 1)

		cb(complection)

		if (timeEllapsed < dur) {
			requestAnimationFrame(_animateOverTime)
		} else {
			if (typeof fin === 'function') {
				fin()
			}
		}
	}

	return _animateOverTime
}

$.prototype.fadeIn = function (dur, display, fin) {
	for (let i = 0; i < this.length; i++) {
		this[i].style.display = display || 'block'

		const _fadeIn = (complection) => {
			this[i].style.opacity = complection
		}

		const ani = this.animateOverTime(dur, _fadeIn, fin)

		requestAnimationFrame(ani)
	}

	return this
}

$.prototype.fadeOut = function (dur, fin) {
	for (let i = 0; i < this.length; i++) {
		let _fadeOut = (complection) => {
			this[i].style.opacity = 1 - complection
			if (complection === 1) {
				this[i].style.display = 'none'
			}
		}

		let ani = this.animateOverTime(dur, _fadeOut, fin)

		requestAnimationFrame(ani)
	}

	return this
}
