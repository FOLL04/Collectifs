document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("toggle");

    // Sélectionne tous les éléments de prix mensuels et annuels
    const priceElements = document.querySelectorAll(".js-price-card__price");

    toggle.addEventListener("change", function () {
        priceElements.forEach((priceElement, index) => {
            // Affiche un sur deux selon l'état du toggle
            if (toggle.checked) {
                // Mode mensuel : afficher le premier prix
                if (index % 2 === 0) {
                    priceElement.style.display = "block";
                } else {
                    priceElement.style.display = "none";
                }
            } else {
                // Mode annuel : afficher le deuxième prix
                if (index % 2 === 0) {
                    priceElement.style.display = "none";
                } else {
                    priceElement.style.display = "block";
                }
            }
        });
    });

    // Initialisation : afficher les prix mensuels par défaut
    toggle.dispatchEvent(new Event("change"));
});
