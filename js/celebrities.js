const apiKey = "TA_CLE_API_ICI"; // ضع مفتاحك المجاني من api-ninjas.com
const celebsContainer = document.getElementById("celebs");

const names = ["Elon Musk", "Beyoncé", "Emma Watson", "Cristiano Ronaldo"];

names.forEach(name => {
  fetch(`https://api.api-ninjas.com/v1/celebrity?name=${encodeURIComponent(name)}`, {
    headers: {
      "X-Api-Key": apiKey
    }
  })
    .then(res => res.json())
    .then(data => {
      if (data.length > 0) {
        const c = data[0];
        const div = document.createElement("div");
        div.className = "celebrity";
        div.innerHTML = `
          <h3>${c.name}</h3>
          <p><strong>Profession :</strong> ${c.occupation || "Inconnue"}</p>
          <p><strong>Nationalité :</strong> ${c.nationality || "Inconnue"}</p>
          <p><em>Anecdote :</em> ${c.name} a adoré notre suite orbitale avec vue sur Saturne !</p>
        `;
        celebsContainer.appendChild(div);
      }
    })
    .catch(error => {
      console.error("Erreur de chargement des célébrités :", error);
    });
});
