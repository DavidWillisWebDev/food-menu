fetch("./menu.json")
  .then((response) => response.json())
  .then((json) => loadMenu(json));

// This function is designed to load the menu on screen.
function loadMenu(data) {
  data = data["data"];
  container = document.getElementById("food-item-container");
  for (let i = 0; i < data.length; i++) {
    container.innerHTML +=
      "<div class='food-item'>" +
      "<img class='image-food' src=" +
      data[i].img +
      " />" +
      "<div class='food-text'>" +
      "<div class='food-title'>" +
      "<p>" +
       data[i].name  +
      "</p>" +
      "<p>" + 
        data[i].price + 
      "</p>" +
      "</div>" +
      "<p> " + 
        data[i].description +
      "</p>" +
      "</div>" +
      "</div>";
  }
}
