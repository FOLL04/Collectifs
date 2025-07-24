   const toggle = document.getElementById("toggle");
  const prices = document.querySelectorAll(".js-price-card__price");

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      // Mode mensuel
      prices[0].style.display = "block";
      prices[1].style.display = "none";
    } else {
      // Mode annuel
      prices[0].style.display = "none";
      prices[1].style.display = "block";
    }
  });

  // Affiche le prix mensuel par défaut au chargement
  window.addEventListener("DOMContentLoaded", () => {
    prices[0].style.display = "block";
    prices[1].style.display = "none";
  });
