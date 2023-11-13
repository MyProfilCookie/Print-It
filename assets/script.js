//Script du slider de la page d'accueil
if (document.readyState === "complete to start") {
  carouselSlider();
  } else {
  document.addEventListener("DOMContentLoaded", function () {
    carouselSlider();
  });
  }
  
  function carouselSlider() {
  // Définition des slides
  
  const slides = [
    {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
  ];
  // Calcul du nombre d'elements pour le slider
  let numberItems = slides.length - 1 ;
  // Position de départ 
  let numberDot = 0;
  // Dossier des images
  let srcImage = "./assets/images/slideshow/";

  // On selectionne les items suivants
  const bannerImg = document.querySelector(".banner-img");
  const bannerText = document.querySelector(".banner-text");
  const arrowLeft = document.querySelector(".arrow_left");
  const arrowRight = document.querySelector(".arrow_right");
  const dots = document.querySelector(".dots");

  // Apparition des éléments une fois le script chargé
  arrowLeft.classList.remove("hidden");
  arrowRight.classList.remove("hidden");

  // Mise en place des bullets points de sélection
  for (let i = 0; i <= numberItems; i++) {

    console.log('i'+i)
  dots.innerHTML += '<span id="dot' + i + '"class="dot" title="Image' + (i + 1) + '"></span>';
  }
  // La mise en place d'une liste de tous les élements ayant la class "dot"
  const dotList = document.querySelectorAll(".dot");
  console.log(dotList)
  
  // Mise en place d'un bullet point plein pour l'image active qui est actif, des bullets points vides pour les autres images
  const addSelected = () => {
    for (let i = 0; i <= numberItems; i++) {
      if (i === numberDot) {
        dotList[i].classList.add("dot_selected");
        } else {
        dotList[i].classList.remove("dot_selected");
        }
      }
    };
  // Selection du dot actif et chargement de l'image avec le texte
  const updateSlide = (arg) => {
    bannerImg.src = srcImage + slides[arg]["image"];
    console.log('arg'+arg)
    bannerImg.alt = "Banner Print-it - " + slides[arg]["image"];
    bannerText.innerHTML = slides[arg]["tagLine"];
    addSelected();
  };

  // Mise en place de l'image de départ du slider avec le texte
  updateSlide(numberDot);
  
  // Récupèration de l'id qui est dans target dans la liste des éléments "dot", la valeur finale est le nombre du dot cliqué
  dots.addEventListener("click", (e) => {
    if (e.target.id != "" && e.target.id != null) {
    numberDot = parseInt(e.target.id.substring(3));
    }
    updateSlide(numberDot);
  });
  // AddListener sur les fleches droite et gauche
  arrowLeft.addEventListener("click", () => {
    if (numberDot == 0) {
      numberDot = numberItems;
      } else {
        numberDot --;
      }
    updateSlide(numberDot);
  });
  arrowRight.addEventListener("click", () => {
    if (numberDot >= numberItems) {
      numberDot  = 0;
    } else {
      numberDot++;
    }
    updateSlide(numberDot);
    });
  }

