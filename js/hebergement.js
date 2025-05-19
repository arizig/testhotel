fetch("data/chambres.json")
  .then(response => {
    if (!response.ok) throw new Error("Erreur de chargement");
    return response.json();
  })
  .then(data => {
    const container = document.getElementById("chambres");
    data.forEach(chambre => {
      const div = document.createElement("div");
      div.className = "chambre";
      div.innerHTML = `
        <img src="${chambre.image}" alt="${chambre.nom}" style="width:100%; border-radius:10px;" />
        <h3>${chambre.nom}</h3>
        <p>${chambre.description}</p>
        <p><strong>Prix :</strong> ${chambre.prix}</p>
      `;
      container.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Erreur lors du chargement des chambres:", error);
    document.getElementById("chambres").innerHTML = "<p>Erreur de chargement des données.</p>";
  });



  