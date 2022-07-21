let directory = document.querySelector(".directory");

function displayBusinesses(item) {
    // Create elements to add to the document
    let image = document.createElement("img");
    let card = document.createElement("section");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let website = document.createElement("a");
    
    // Change the textContent property of the h2 element to contain the item's full name
    website.textContent = item.website;
    website.setAttribute('href', item.website);
    website.setAttribute('target', '_blank');
    
    address.textContent = `${item.address}`;
    phone.textContent = `${item.phone}`;
    
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    image.setAttribute("src", item.imageurl);
    image.setAttribute("alt", `${item.name}`);
    image.setAttribute("loading", "lazy");
    image.setAttribute("width", 100);
    image.setAttribute("height", 75);


    
    // Add/append the section(card) with the h2 element
    card.appendChild(image);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    
    // Add/append the existing HTML div with the cards class with the section(card)
    directory.appendChild(card);
}

const requestURL = "store/data.json";

fetch(requestURL)
.then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject); // temporary checking for valid response and data parsing
    const businesses = jsonObject;
    businesses.forEach(displayBusinesses);
  });
