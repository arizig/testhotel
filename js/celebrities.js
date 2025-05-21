// Liste des célébrités avec nom + image locale
const celebrities = [
  { name: "Elon Musk", image: "images/elon.jpg" },
  { name: "Taylor Swift", image: "images/taylor.jpg" },
  { name: "Emma Watson", image: "images/emma.jpg" },
  { name: "Cristiano Ronaldo", image: "images/ronaldo.jpg" }
];

const container = document.getElementById("celeb-list");

celebrities.forEach(celebrity => {
  fetch(`https://api.api-ninjas.com/v1/celebrity?name=${encodeURIComponent(celebrity.name)}`, {
    method: "GET",
    headers: {
      'X-Api-Key': 'AbZ/ehRdVN3Pbl9OeWKbGA==KH7iLF2W4B4E5jFv'
    }
  })
  .then(response => response.json())
  .then(data => {
    if (data.length > 0) {
      const c = data[0];
      const card = document.createElement("div");
      card.className = "celeb-card";

      card.innerHTML = `
        <img src="${celebrity.image}" alt="${c.name}" class="celeb-photo" />
        <h4>${c.name}</h4>
        <p><strong>Métier:</strong> ${c.occupation || "Non précisé"}</p>
        <p><strong>Nationalité:</strong> ${c.nationality || "Inconnue"}</p>
        <p><em>"${c.name} a adoré notre suite galactique."</em></p>
      `;

      container.appendChild(card);
    }
  })
  .catch(error => {
    console.error("Erreur de chargement:", error);
  });
});



