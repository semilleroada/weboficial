$(function () {
	'use strict';

	/* Menu Movil Desplegable: Dropdown */
	$('.movil-nav').on('click', function(){
		$('.sub-ul').slideToggle();
	})

	/* Menu Desplegable de Áreas: DropDown */
	$('header .sub-ul li:first-child a').on('click', function() {
		$('.areas').slideToggle();
	})

	/* Divs de las Áreas */
	let divAreas = document.querySelector('.areas');
});