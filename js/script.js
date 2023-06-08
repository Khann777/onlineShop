const API = "https://dummyjson.com/products";
const wrapper = document.querySelector(".wrapper");
const ul = document.createElement("ul");
ul.setAttribute("class", "blockUl");

wrapper.appendChild(ul);

fetch(API)
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    const products = response.products;

    products.forEach((item) => {
      console.log("item.title: ", item);
      createCard(item);
    });
  });

const buy = () => {
  alert("You successfuly bought product");
};

const createCard = (item) => {
  const img = document.createElement("img");
  img.setAttribute("src", `${item.images[0]}`);
  img.setAttribute("class", "cardImg");

  const title = document.createElement("span");
  title.textContent = `${item.title}`;
  title.setAttribute("class", "cardTitle");

  const brand = document.createElement("span");
  brand.textContent = `${item.brand}`;
  brand.setAttribute("class", "cardBrand");

  const category = document.createElement("span");
  category.textContent = `Category: ${item.category}`;
  category.setAttribute("class", "cardCategory");

  const discount = document.createElement("span");
  discount.textContent = `Product's Discount: ${Math.floor(
    item.discountPercentage
  )}%`;
  discount.setAttribute("class", "cardDiscount");

  const price = document.createElement("span");
  price.textContent = `Price: ${item.price}$`;
  price.setAttribute("class", "cardPrice");

  const buttonBuy = document.createElement("button");
  buttonBuy.textContent = "Buy Product";
  buttonBuy.setAttribute("class", "cardButton");
  buttonBuy.addEventListener("click", buy);

  const li = document.createElement("li");
  li.setAttribute("class", "blockLi");

  li.appendChild(title);
  li.appendChild(img);
  li.appendChild(brand);
  li.appendChild(category);
  li.appendChild(discount);
  li.appendChild(price);
  li.appendChild(buttonBuy);
  ul.appendChild(li);
};
