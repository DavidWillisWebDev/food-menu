var menuData;

fetch("./menu.json")
  .then((response) => response.json())
  .then((json) => loadMenu(json));

// This function is designed to load the menu on screen.
function loadMenu(data) {
  data = data["data"];
  var containerHTML = "";

  // Fill in breakfast-container.
  container = document.getElementById("breakfast-container");
  for (let i = 0; i < data.length; i++) {
    if (data[i].category === "Breakfast") {
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
  }
  container.innerHTML = containerHTML;
  
  // Fill in entree-container.
  containerHTML = "";
  container = document.getElementById("entree-container");
  
  for (let i = 0; i < data.length; i++) {
    if (data[i].category === "Entree") {
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
  }
  container.innerHTML = containerHTML;

  // Fill in the sides-container.
  containerHTML = "";
  container = document.getElementById("sides-container");

  for (let i = 0; i < data.length; i++) {
    if (data[i].category === "Sides") {
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
  }
  container.innerHTML = containerHTML;

  // Fill in dessert-container.
  containerHTML = "";
  container = document.getElementById("dessert-container");

  for (let i = 0; i < data.length; i++) {
    if (data[i].category === "Dessert") {
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
  }
  container.innerHTML = containerHTML;

  // Fill in drinks-container.
  containerHTML = "";
  container = document.getElementById("drinks-container");

  for (let i = 0; i < data.length; i++) {
    if (data[i].category === "Drinks") {
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
  }
  container.innerHTML = containerHTML;
}

// Scrolls to a specific section of the menu.
function showItems(category) {
  document.getElementById(category).scrollIntoView({behavior: 'smooth'});
}
