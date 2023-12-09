let poplarList = document.querySelector(".popular-list");
let poplarItem = document.querySelector(".popular-item");
let hotelList = document.querySelector(".hotel-list");
let hotelItem = document.querySelector(".hotel-item");
let popularData = [
  {
    img: "./assets/p1.png",
    name: "Big Sur",
    national: "California, USA",
  },
  {
    img: "./assets/p2.png",
    name: "Prescott",
    national: "Arizona, USA",
  },
  {
    img: "./assets/p3.png",
    name: "Fort Mayers",
    national: "Florida, USA",
  },
  {
    img: "./assets/p4.png",
    name: "Tucson",
    national: "Arizona, USA",
  },
  {
    img: "./assets/p5.png",
    name: "St. Joseph",
    national: "Michigan, USA",
  },
  {
    img: "./assets/p6.png",
    name: "Madrid",
    national: "Spain",
  },
];
let hotelArr = [
  {
    img: "./assets/h1.png",
    name: "Monastero Santa Rosa Hotel & Spa",
    location: "Salerno, Italy",
    star: 5,
  },
  {
    img: "./assets/h2.png",
    name: "Grand Hotel Tremezzo",
    location: "Lake Como, Italy",
    star: 3,
  },
  {
    img: "./assets/h3.png",
    name: "The Oberoi Udaivilas, Udaipur",
    location: "Udaipur, India",
    star: 4,
  },
  {
    img: "./assets/h4.png",
    name: "TucAKA Beverly Hillsson",
    location: "Los Angeles, United States",
    star: 3,
  },
];
function renderPopularItem(item) {
  return `
  <div class="popular-item">
    <div class="poppular-item--image">
      <img src="${item.img}" alt="" />
    </div>
    <div class="popular-item--content">
      <span>${item.name}</span>
      <span>${item.national}</span>
    </div>
  </div>
  `;
}
function renderRating(number) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= number) {
      stars += '<img src="./assets/fillstar.svg" alt="filled star" />';
    } else {
      stars += '<img src="./assets/emptystar.svg" alt="empty star" />';
    }
  }
  return stars;
}
function renderHotelItem(item) {
  const starRating = renderRating(item.star);
  return `
    <div class="card-item">
    <div class="card-item-image">
      <img src="${item.img}" alt="" />
    </div>
    <div class="card-item-content">
      <div class="card-top">${item.name}</div>
      <div class="card-item-bottom">
        <div class="item-content-left">
          <img src="./assets/hi1.svg" alt="" />
          <span>${item.location}</span>
        </div>
        <div class="item-content-rating">
        ${starRating}
        </div>
      </div>
    </div>
  </div>
    `;
}
function renderList(data, renderFunc) {
  return data.map(renderFunc).join("");
}
let popularHtmlContent = renderList(popularData, renderPopularItem);
poplarList.innerHTML = popularHtmlContent;
let hotelHtmlContent = renderList(hotelArr, renderHotelItem);
hotelList.innerHTML = hotelHtmlContent;
