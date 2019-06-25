$(function () {
	'use strict';

	/* Menu Movil Desplegable: Dropdown */
	$('.movil-nav').on('click', function(){
		$('.sub-ul').slideToggle();
		$('div.areas').slideUp();
	})

	/* Menu Desplegable de Áreas: DropDown */
	$('header .sub-ul li:first-child a').on('click', function() {
		$('.areas').slideToggle();
	})
});