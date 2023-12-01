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

// navLinkClick function
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
  
	// Ocultar a barra de pesquisa inicialmente
	searchInput.style.display = "none";
  
	// Evento de clique no ícone de pesquisa
	searchButton.addEventListener("click", function (e) {
	  e.stopPropagation();
	  if (searchInput.style.display === "none") {
		searchInput.style.display = "block";
		searchInput.focus();
	  } else {
		searchInput.style.display = "none";
	  }
	});
  
	// Evento de clique em qualquer lugar do documento
	document.addEventListener("click", function (e) {
	  if (e.target !== searchInput && e.target !== searchButton) {
		searchInput.style.display = "none";
	  }
	});
  });
  




// Carrossel
$(function () {
	var total = $('.carousel01-item').length;
	var current = 0;
  
	// Função para atualizar os indicadores de bolinhas
	function updateIndicator(current) {
	  $('.indicator01-dot').removeClass('active');
	  $('.indicator01-dot[data-slide="' + current + '"]').addClass('active');
	}
  
	// Inicialize os indicadores
	updateIndicator(current);
  
	// Defina o primeiro slide para ser exibido inicialmente
	setSlide(-1, 0); // Isso define o slide anterior como -1
  
	// Atualize os slides ao clicar nas bolinhas
	$('.indicator01-dot').on('click', function () {
	  var index = $(this).data('slide');
	  setSlide(current, index);
	  current = index;
	  updateIndicator(current);
	});
  
	$('#moveRight').on('click', function () {
	  var next = current + 1;
	  setSlide(current, next);
	  current = next;
	  updateIndicator(current);
	});
  
	$('#moveLeft').on('click', function () {
	  var prev = current - 1;
	  setSlide(current, prev);
	  current = prev;
	  updateIndicator(current);
	});
  
	function setSlide(prev, next) {
	  if (next >= total) {
		next = 0;
	  }
	  if (next < 0) {
		next = total - 1;
	  }
	  $('.carousel01-item').eq(prev).removeClass('active');
	  $('.carousel01-item').eq(next).addClass('active');
	}
  });

