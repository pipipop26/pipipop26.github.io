const gifts = [
  {
    name: "Беспроводные наушники",
    image: "https://example.com/headphones.jpg",
    link: "https://market.example.com/headphones"
  },
  {
    name: "Спортивные перчатки",
    image: "https://example.com/gloves.jpg",
    link: "https://market.example.com/gloves"
  },
  {
    name: "Настольная лампа",
    image: "https://example.com/lamp.jpg",
    link: "https://market.example.com/lamp"
  }
];

const giftList = document.getElementById("gift-list");

gifts.forEach((gift, index) => {
  const giftDiv = document.createElement("div");
  giftDiv.className = "gift";

  giftDiv.innerHTML = `
    <img src="${gift.image}" alt="${gift.name}">
    <div class="gift-info">
      <h3>${gift.name}</h3>
      <a href="${gift.link}" target="_blank">Ссылка на товар</a><br>
      <label>Твоё имя: <input type="text" placeholder="Напиши имя..." id="name-${index}"></label>
    </div>
  `;

  giftList.appendChild(giftDiv);
});
