const container = document.getElementById("soldiers-list");

soldiers.forEach(soldier => {
  const card = document.createElement("div");
  card.className = "soldier-card";
  card.innerHTML = `
    <h2>${soldier.name}</h2>
    <p><strong>תאריך:</strong> ${soldier.date}</p>
    <p><strong>גיל:</strong> ${soldier.age}</p>
    <p>${soldier.story}</p>
  `;
  container.appendChild(card);
});
