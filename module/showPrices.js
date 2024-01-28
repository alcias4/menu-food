import menu from "../data/data.js"

const price = document.getElementById("prices")
const dark = document.createElement("div");
const img = document.createElement("img");
const h3 = document.createElement("h3");
const span = document.createElement("span");
const p = document.createElement("p")
const showPrice = (text) =>{
  
  const select = menu.find((e) => e.name === text);
  h3.textContent = text;
  
  span.textContent = `Price: $${select.price}.000`
  img.src = select.url;
  p.textContent = select.description;
  dark.id = "card";
  price.appendChild(dark);
  dark.appendChild(img);
  dark.appendChild(h3);
  dark.appendChild(p)
  dark.appendChild(span);
  
}

export default showPrice;
