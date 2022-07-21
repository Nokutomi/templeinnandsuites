let temples = document.querySelector(".temples");

function displayTemple(item) {
  // Create elements to add to the document
  const {
    id,
    name,
    address,
    phone,
    schedule,
    appointment,
    imageurl,
    services,
    history,
  } = item;

  const addressText = address.split("\n");
  const clothingRental = services["clothing-rental"]
    ? "Clothing rental available"
    : "NO clothing rental available";
  const cafeteria = services.cafeteria
    ? "Cafeteria food served"
    : "NO cafeteria food served";
  const housing = services.housing
    ? "Patron housing available"
    : "NO patron housing available";
  const distributionCenter = services["distribution-center"]
    ? "Distribution center nearby"
    : "NO distribution center nearby";

  let historyText = "";
  history.forEach((part) => {
    let heading = part.title ? `<h3>${part.title}</h3>` : "";
    let paragraph = `<p>${part.text}</p>`;
    historyText = historyText + heading + paragraph;
  });

  let card = document.createElement("section");
  card.classList.add("main-temple-card");
  card.innerHTML = `
    <h2>${name}</h2>
    <div id="main-temple-card-box">
      <figure>
        <img
          src="${imageurl}temple.webp"
          alt="${name}"
          width="450"
          height="300"
        />
      </figure>
      <div>
        <details>
          <summary>Info</summary>
          <p>
            <em>Schedule:</em><br />
            ${schedule}
          </p>
          <p>
            <a
              href="${appointment}"
              target="_blank"
              >Make appointment</a
            >
          </p>
          <p>
            <em>Address:</em><br />
            ${addressText[0]}<br />
            ${addressText[1]}<br />
            ${addressText[2]}
          </p>
          <p>
            <em>Phone:</em><br />
            ${phone}
          </p>
          <p>
            <em>Services:</em><br />
            ${clothingRental}<br />
            ${cafeteria}<br />
            ${housing}<br />
            ${distributionCenter}<br />
          </p>
        </details>
        <details class="temple-history">
          <summary>History</summary>
          ${historyText}
        </details>
      </div>
    </div>
    `;

  // Add/append the existing HTML div with the cards class with the section(card)
  temples.appendChild(card);
}

const requestURL = "store/data.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject); // temporary checking for valid response and data parsing
    const temples = jsonObject;
    temples.forEach(displayTemple);
  });
