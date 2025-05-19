// Récupération des données des chambres depuis le fichier JSON
fetch("data/chambres.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Erreur lors du chargement des données");
    }
    return response.json();
  })
  .then(data => {
    const container = document.getElementById("chambres");

    // Pour chaque chambre, on crée une carte HTML
    data.forEach(chambre => {
      const div = document.createElement("div");
      div.className = "chambre";
      div.innerHTML = `
        <img src="${chambre.image}" alt="${chambre.nom}" />
        <h3>${chambre.nom}</h3>
        <p>${chambre.description}</p>
        <p><strong>Prix :</strong> ${chambre.prix}</p>
        <a href="contact.html" class="btn-reserver">Réserver cette chambre</a>
      `;
      container.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Erreur lors du chargement des chambres:", error);
    document.getElementById("chambres").innerHTML =
      "<p>Impossible de charger les chambres pour le moment.</p>";
  });


  