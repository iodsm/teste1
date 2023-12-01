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
  
  



  




  // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

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

  
  



// Variação de imagens do card
const cardData = {
  card1: {
    currentImageIndex: 0,
    colorVariations: [
      "img-l/shemagh_black.png",
      "img-l/shemagh_green.png",
      "img-l/shemagh_tan.png",
    ]
  },
  card2: {
    currentImageIndex: 0,
    colorVariations: [
      "img-l/dye_black.jpg",
      "img-l/dye_blue.jpg",
      "img-l/dye_green.jpg",
    ]
  },
  card3: {
    currentImageIndex: 0,
    colorVariations: [
      "img-l/balaclava_black.png",
      "img-l/balaclava_tan.png",
      "img-l/balaclava_green.png",
    ]
  },
};

function changeImage(direction, cardId) {
  const card = cardData[cardId];

  card.currentImageIndex += direction;

  if (card.currentImageIndex < 0) {
    card.currentImageIndex = card.colorVariations.length - 1;
  } else if (card.currentImageIndex >= card.colorVariations.length) {
    card.currentImageIndex = 0;
  }

  updateImage(cardId);
}

function updateImage(cardId) {
  const card = cardData[cardId];
  const image = document.querySelector(`#${cardId}-front img`);

  // Adicione uma classe para iniciar a transição
  image.classList.add('image-fade');

  // Altere a opacidade gradualmente
  setTimeout(() => {
    image.src = card.colorVariations[card.currentImageIndex];
  }, 300); // Tempo correspondente à duração da transição

  // Remova a classe após a transição para permitir futuras alterações sem transição
  setTimeout(() => {
    image.classList.remove('image-fade');
  }, 400); // Tempo suficiente para garantir a conclusão da transição
}

// Fechar a expansão do card
function closeExpandedCard() {
  const expandedCard = document.querySelector('.cardstore.expanded');
  const expandedCardFront = expandedCard.querySelector('.cardstore-front');
  const expandedCardBack = expandedCard.querySelector('.cardstore-back');

  if (expandedCard) {
    expandedCardFront.classList.remove('expanded');
    expandedCardBack.classList.remove('expanded');

    toggleVerMaisIcon(expandedCardFront);
  }
}

const cardBacks = document.querySelectorAll('.cardstore-back');
cardBacks.forEach((cardBack) => {
  cardBack.addEventListener('click', (event) => {
    event.stopPropagation();
  });
});

const cardPairs = document.querySelectorAll('.cardstore-pair');

function toggleDescription(cardBack) {
  const description = cardBack.querySelector('.product-description');
  description.classList.toggle('hidden');
}

function toggleVerMaisIcon(cardFront) {
  const verMaisIcon = cardFront.querySelector('.ver-mais');
  const iconContainer = cardFront.querySelector('.icon-container');

  if (cardFront.classList.contains('expanded')) {
    verMaisIcon.textContent = 'VOLTAR ';
    iconContainer.style.transform = 'rotate(269deg)';
  } else {
    verMaisIcon.textContent = 'VER MAIS ';
    iconContainer.style.transform = 'rotate(0deg)';
  }
}

cardPairs.forEach((pair, index) => {
  pair.addEventListener('click', (event) => {
    const cardFront = document.getElementById(`card${index + 1}-front`);
    const cardBack = document.getElementById(`card${index + 1}-back`);
    const buyButton = cardBack.querySelector('.buy-button');

    cardFront.classList.toggle('expanded');
    cardBack.classList.toggle('expanded');

    toggleDescription(cardBack);
    toggleVerMaisIcon(cardFront);

    const arrowIcons = cardFront.querySelector('.cardstore-expansion-arrows');
    if (cardBack.classList.contains('expanded')) {
      buyButton.classList.remove('hidden');
      arrowIcons.classList.add('visible');
    } else {
      buyButton.classList.add('hidden');
      arrowIcons.classList.remove('visible');
    }
  });

  const arrowIcons = pair.querySelector('.cardstore-expansion-arrows');
  arrowIcons.addEventListener('click', (event) => {
    const direction = event.target.classList.contains('arrow-right') ? 1 : -1;
    changeImage(direction, `card${index + 1}`);
    event.stopPropagation();
  });
});

// Overlay
const cards = document.querySelectorAll('.cardstore-front');
const overlay = document.querySelector('.overlay');

cards.forEach(card => {
  card.addEventListener('click', () => {
    if (card.classList.contains('expanded')) {
      overlay.style.display = 'none';
    } else {
      overlay.style.display = 'block';
    }
  });
});








function filterContainers() {
  // Obtenha o valor selecionado
  var selectedValue = document.getElementById("containerFilter").value;

  // Obtenha todos os contêineres
  var gunsContainer = document.getElementById("guns-store");
  var lacatedralContainer = document.getElementById("lacatedral-store");
  var suppliesContainer = document.getElementById("supplies-store");
  var accessoriesContainer = document.getElementById("accessories-store");

  // Role até o contêiner correspondente
  switch (selectedValue) {
    case "#guns-store":
      gunsContainer.scrollIntoView({ behavior: 'smooth' });
      break;
    case "#lacatedral-store":
      lacatedralContainer.scrollIntoView({ behavior: 'smooth' });
      break;
    case "#supplies-store":
      suppliesContainer.scrollIntoView({ behavior: 'smooth' });
      break;
    case "#accessories-store":
      accessoriesContainer.scrollIntoView({ behavior: 'smooth' });
      break;
    default:
      // Role até o topo da página se nenhum contêiner específico for selecionado
      window.scrollTo({ top: 0, behavior: 'smooth' });
      break;
  }

  // Adicione um event listener para rolagens na página
  window.addEventListener('scroll', function resetFilterOnScroll() {
    // Redefina o valor do filtro
    document.getElementById("containerFilter").value = "all";

    // Remova o event listener após a primeira rolagem
    window.removeEventListener('scroll', resetFilterOnScroll);
  });

  // Adicione outras ações de filtragem conforme necessário
  // ...
}








