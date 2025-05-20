// Liste des célébrités avec nom + image locale
const celebrities = [
  { name: "Elon Musk", image: "images/elon.jpg" },
  { name: "Beyoncé", image: "images/beyonce.jpg" },
  { name: "Emma Watson", image: "images/emma.jpg" },
  { name: "Cristiano Ronaldo", image: "images/ronaldo.jpg" }
];

const container = document.getElementById("celebs");

celebrities.forEach(celebrity => {
  fetch(`https://api.api-ninjas.com/v1/celebrity?name=${encodeURIComponent(celebrity.name)}`, {
    method: "GET",
    headers: {
      'X-Api-Key': 'AbZ/ehRdVN3Pbl9OeWKbGA==KH7iLF2W4B4E5jFv' // Remplacez avec votre clé API personnelle
    }
  })
  .then(response => response.json())
  .then(data => {
    if (data.length > 0) {
      const c = data[0];
      const div = document.createElement("div");
      div.className = "chambre";

      div.innerHTML = `
        <div class="celebrity-card">
          <img src="${celebrity.image}" alt="${c.name}" class="avatar-left" />
          <div class="celebrity-info">
            <h3>${c.name}</h3>
            <p><strong>Métier:</strong> ${c.occupation || "Non précisé"}</p>
            <p><strong>Nationalité:</strong> ${c.nationality || "Inconnue"}</p>
            <p><em>"${c.name} a adoré notre suite galactique et le spa interstellaire."</em></p>
          </div>
        </div>
      `;
      container.appendChild(div);
    }
  })
  .catch(error => {
    console.error("Erreur de chargement:", error);
  });
});


