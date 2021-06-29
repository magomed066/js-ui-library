import $ from './lib/lib'

// $('button').on('click', function () {
// 	console.log($('div').eq(1).toggleClass('active'))
// })

// $('div').on('click', function () {
// 	console.log($(this).index())
// })

console.log($('div').eq(2).find('.some').addClass('active'))
