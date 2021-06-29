import $ from './lib/lib'

$('button').on('click', function () {
	$(this).toggleClass('active')
})

$('.active').addAttr('data-id', '23')
