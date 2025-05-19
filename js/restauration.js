// Chargement des données des plats depuis le fichier JSON
fetch("data/plats.json")
  .then(response => {
    if (!response.ok) throw new Error("Erreur de chargement du menu");
    return response.json();
  })
  .then(data => {
    const container = document.getElementById("menu");

    data.forEach(plat => {
      const div = document.createElement("div");
      div.className = "chambre"; // Réutilisation du style de carte
      div.innerHTML = `
        <img src="${plat.image}" alt="${plat.nom}" />
        <h3>${plat.nom}</h3>
        <p>${plat.description}</p>
        <p><strong>Prix :</strong> ${plat.prix}</p>
        <a href="contact.html" class="btn-reserver">Commander</a>
      `;
      container.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Erreur :", error);
    document.getElementById("menu").innerHTML =
      "<p>Impossible de charger le menu pour le moment.</p>";
  });

