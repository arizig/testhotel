// Chargement des services depuis le fichier JSON
fetch("data/services.json")
  .then(response => {
    if (!response.ok) throw new Error("Erreur de chargement des services");
    return response.json();
  })
  .then(data => {
    const container = document.getElementById("services");

    data.forEach(service => {
      const div = document.createElement("div");
      div.className = "chambre"; // Réutilisation du style de carte
      div.innerHTML = `
        <img src="${service.image}" alt="${service.nom}" />
        <h3>${service.nom}</h3>
        <p>${service.description}</p>
      `;
      container.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Erreur :", error);
    document.getElementById("services").innerHTML =
      "<p>Impossible de charger les services pour le moment.</p>";
  });

