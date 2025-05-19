// Chargement des données des chambres depuis le fichier JSON
fetch('data/chambres.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('chambres');

    // Pour chaque chambre dans le fichier JSON
    data.forEach(chambre => {
      // Création d'un élément div pour afficher la chambre
      const div = document.createElement('div');
      div.className = 'chambre';

      // Insertion du contenu HTML avec image, nom, description et prix
      div.innerHTML = `
        <img src="${chambre.image}" alt="${chambre.nom}" style="width:100%; border-radius:10px; margin-bottom:10px;" />
        <h3>${chambre.nom}</h3>
        <p>${chambre.description}</p>
        <p><strong>Prix :</strong> ${chambre.prix}</p>
      `;

      // Ajout de l'élément au conteneur principal
      container.appendChild(div);
    });
  })
  .catch(error => {
    // En cas d'erreur de chargement
    console.error("Erreur lors du chargement des chambres:", error);
  });
