var menuData;

fetch("./menu.json")
  .then((response) => response.json())
  .then((json) => loadMenu(json));

// This function is designed to load the menu on screen.
function loadMenu(data) {
  data = data["data"];
  var containerHTML = "";
  container = document.getElementById("food-item-container");
  for (let i = 0; i < data.length; i++) {
    containerHTML += "<div class='food-item'>";
    containerHTML += `<img class='image-food' src=${data[i].img} />`;
    containerHTML += "<div class='food-text'>";
    containerHTML += "<div class='food-title'>";
    containerHTML += `<p>${data[i].name}</p>`;
    containerHTML += `<p>$${data[i].price}</p>`;
    containerHTML += "</div>";
    containerHTML += `<p>${data[i].description}</p>`;
    containerHTML += "</div>";
    containerHTML += "</div>";
  }
  container.innerHTML = containerHTML;
}

// 
function showItems(category) {
  console.log(category);
}
