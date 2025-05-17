// Utilisation de fetch pour récupérer les données JSON des chambres
fetch('data/chambres.json')
  .then(response => {
    if (!response.ok) {
      throw new Error("Erreur lors du chargement des données des chambres");
    }
    return response.json();
  })
  .then(chambres => {
    const container = document.getElementById('chambres');

    chambres.forEach(chambre => {
      // Création de la carte chambre
      const divChambre = document.createElement('div');
      divChambre.classList.add('chambre');

      divChambre.innerHTML = `
        <img src="${chambre.image}" alt="Photo de ${chambre.nom}" />
        <h3>${chambre.nom}</h3>
        <p>${chambre.description}</p>
        <p><strong>Prix :</strong> ${chambre.prix}</p>
      `;

      container.appendChild(divChambre);
    });
  })
  .catch(error => {
    console.error(error);
    document.getElementById('chambres').innerHTML = '<p>Impossible de charger les chambres pour le moment.</p>';
  });
