let poplarList = document.querySelector(".popular-list");
let poplarItem = document.querySelector(".popular-item");

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
let htmlContent = popularData
  .map((item, index) => {
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
  })
  .join("");
poplarList.innerHTML = htmlContent;
