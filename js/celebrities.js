// Liste des noms de célébrités à rechercher
const celebrities = ["Elon Musk", "Beyoncé", "Emma Watson", "Cristiano Ronaldo"];

const container = document.getElementById("celebs");

celebrities.forEach(name => {
  fetch(`https://api.api-ninjas.com/v1/celebrity?name=${encodeURIComponent(name)}`, {
    method: "GET",
    headers: {
      'X-Api-Key': 'AbZ/ehRdVN3Pbl9OeWKbGA==KH7iLF2W4B4E5jFv' // <-- Remplacez ceci par votre clé API
    }
  })
  .then(response => response.json())
  .then(data => {
    if (data.length > 0) {
      const c = data[0];
      const div = document.createElement("div");
      div.className = "chambre";

      div.innerHTML = `
  <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(c.name)}&background=0D8ABC&color=fff&size=128" alt="Avatar de ${c.name}" class="avatar" />
  <h3>${c.name}</h3>
  <p><strong>Métier:</strong> ${c.occupation || "Non précisé"}</p>
  <p><strong>Nationalité:</strong> ${c.nationality || "Inconnue"}</p>
  <p><em>"${c.name} a adoré notre suite galactique et le spa interstellaire."</em></p>
`;

      container.appendChild(div);
    }
  })
  .catch(error => {
    console.error("Erreur de chargement:", error);
  });
});

