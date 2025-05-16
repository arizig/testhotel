// services.js
fetch("data/services.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("services");
    data.services.forEach(service => {
      const div = document.createElement("div");
      div.className = "service";
      div.innerHTML = `
        <img src="${service.image}" alt="${service.titre}" style="width:100%; border-radius:10px; margin-bottom:10px;" />
        <h3>${service.titre}</h3>
        <p>${service.description}</p>
      `;
      container.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Erreur lors du chargement des services :", error);
  });
