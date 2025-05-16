// restauration.js
fetch("data/menu.json")
  .then((response) => response.json())
  .then((data) => {
    const menuContainer = document.getElementById("menu");
    data.plats.forEach((plat) => {
      const platDiv = document.createElement("div");
      platDiv.className = "plat";
      platDiv.innerHTML = `
        <img src="${plat.image}" alt="${plat.nom}" style="width:100%; border-radius:10px; margin-bottom:10px;" />
        <h3>${plat.nom}</h3>
        <p>${plat.description}</p>
        <p><strong>Prix :</strong> ${plat.prix}€</p>
      `;
      menuContainer.appendChild(platDiv);
    });
  })
  .catch((error) => {
    console.error("Erreur lors du chargement du menu:", error);
  });

