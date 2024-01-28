import showPrice from "./showPrices.js";

const listInput = () => {
  const inputText = document.getElementById("text");
  const contentMenu = document.getElementById("con");
  const check  = document.getElementById("check");

  const list = ["Hamburguer", "Hot dog", "Ice cream","Salad"]
  

  list.forEach(e => {
    let li = document.createElement("li");
    li.textContent = e;
    contentMenu.appendChild(li)
    li.addEventListener("click",()=> {
      inputText.value = e;
      check.checked = false;
      showPrice(e);
    })
    
  })
  
}

export default listInput;