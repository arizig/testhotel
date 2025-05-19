// services.js
fetch("data/services.json")
  .then(response => {
    if (!response.ok) throw new Error("Erreur lors du chargement des services");
    return response.json();
  })
  .then(data => {
    const container = document.getElementById("services");

    data.forEach(service => {
      const div = document.createElement("div");
      div.className = "chambre"; // réutilisation du style des chambres
      div.innerHTML = `
        <img src="${service.image}" alt="${service.nom}" style="width:100%; border-radius:10px; margin-bottom:10px;" />
        <h3>${service.nom}</h3>
        <p>${service.description}</p>
      `;
      container.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Erreur :", error);
    document.getElementById("services").innerHTML = "<p>Impossible de charger les services pour le moment.</p>";
  });

