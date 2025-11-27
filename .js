let guestsData = JSON.parse(localStorage.getItem("guestsData")) || [];

function saveToLocal() {
  localStorage.setItem("guestsData", JSON.stringify(guestsData));
}

function renderList() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  guestsData.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>Email: ${item.email}</p>
      <p>Joy: ${item.location}</p>
      <p>Mehmonlar: ${item.guests}</p>
      <button onclick="deleteGuest(${index})" style="background:#e04b4b; margin-top:10px;">Delete</button>
    `;

    list.appendChild(div);
  });
}

function addGuest() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const location = document.getElementById("location").value.trim();
  const guests = document.getElementById("guests").value;

  if (!name || !email) {
    alert("Ism va email majburiy!");
    return;
  }

  const newGuest = {
    name,
    email,
    location,
    guests
  };

  guestsData.push(newGuest);
  saveToLocal();
  renderList();

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("location").value = "";
  document.getElementById("guests").value = 1;
}

function deleteGuest(index) {
  guestsData.splice(index, 1);
  saveToLocal();
  renderList();
}

renderList();
