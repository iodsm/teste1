
// Recarregar página
if ('scrollRestoration' in history) {
	history.scrollRestoration = 'manual';
}

window.addEventListener('beforeunload', function () {
	window.scrollTo(0, 0);
});





// Navbar

// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
	// toggler icon click event
	navToggler.addEventListener('click', togglerClick);
	// nav links click event
	navLinks.forEach(elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
	navToggler.classList.toggle('toggler-open');
	navMenu.classList.toggle('open');
}

function navLinkClick() {
	if (navMenu.classList.contains('open')) {
		navToggler.click();
	}
}

// Barra de pesquisa
document.addEventListener("DOMContentLoaded", function () {
	const searchInput = document.getElementById("search-input");
	const searchButton = document.getElementById("search-button");
	const suggestionContainer = document.getElementById("suggestion-container");

	searchInput.style.display = "none";

	searchButton.addEventListener("click", function (e) {
		e.stopPropagation();
		if (searchInput.style.display === "none") {
			searchInput.style.display = "block";
			searchInput.focus();
		} else {
			searchInput.style.display = "none";
		}
	});

	document.addEventListener("click", function (e) {
		if (e.target !== searchInput && e.target !== searchButton) {
			searchInput.style.display = "none";
		}
	});
});
	



$(function () {
	var total = $('.carousel01-item').length;
	var current = 0;

	function updateIndicator(current) {
		$('.indicator01-dot').removeClass('active');
		$('.indicator01-dot[data-slide="' + current + '"]').addClass('active');
	}

	function setSlide(prev, next) {
		if (next >= total) {
			next = 0;
		}
		if (next < 0) {
			next = total - 1;
		}
		$('.carousel01-item').eq(prev).removeClass('active');
		$('.carousel01-item').eq(next).addClass('active');
		current = next;
		updateIndicator(current);
	}

	function nextSlide() {
		var next = current + 1;
		setSlide(current, next);
	}

	// Inicialize os indicadores
	updateIndicator(current);

	// Defina o primeiro slide para ser exibido inicialmente
	setSlide(-1, 0);

	// Atualize os slides ao clicar nas bolinhas
	$('.indicator01-dot').on('click', function () {
		var index = $(this).data('slide');
		setSlide(current, index);
	});

	// Altere automaticamente as imagens a cada 3 segundos
	setInterval(nextSlide, 4000);
});





// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx





// Carrossel militar
$(function () {
	var total = $('.carousel-item').length;
	var current = 0;

	function updateIndicator(current) {
		$('.indicator-dot').removeClass('active');
		$('.indicator-dot[data-slide="' + current + '"]').addClass('active');
	}

	function setSlide(prev, next) {
		if (next >= total) {
			next = 0;
		}
		if (next < 0) {
			next = total - 1;
		}
		$('.carousel-item').eq(prev).removeClass('active');
		$('.carousel-item').eq(next).addClass('active');
		current = next;
		updateIndicator(current);
	}

	function nextSlide() {
		var next = current + 1;
		setSlide(current, next);
	}

	// Inicialize os indicadores
	updateIndicator(current);

	// Defina o primeiro slide para ser exibido inicialmente
	setSlide(-1, 0);

	// Atualize os slides ao clicar nas bolinhas
	$('.indicator-dot').on('click', function () {
		var index = $(this).data('slide');
		setSlide(current, index);
	});

	// Altere automaticamente as imagens a cada 3 segundos
	setInterval(nextSlide, 4000);
});







// botão "Enviar"
var submitButton = document.querySelector('mail-btn');

submitButton.addEventListener('click', function () {
	// Verificar todos os campos
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var message = document.getElementById('message').value;

	if (name && email && message) {
		// mensagem de sucesso
		var successMessage = document.querySelector('.success-message');
		successMessage.style.display = 'block';

		// Ocultar mensagem após 15 segundos
		setTimeout(function () {
			successMessage.style.display = 'none';
		}, 15000);

	} else {
		// mensagem de erro
		alert('Por favor, preencha todos os campos do formulário.');
	}
});





//Botão email (animado)
$(".mail-btn").on("click touchstart", function () {
	$(this).addClass("fly");
	that = this
	setTimeout(function () {
		$(that).removeClass("fly");
	}, 5400)
});































