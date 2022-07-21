// Updating the Copyright Year
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const copyrightElem = document.querySelector("#copyright");
copyrightElem.textContent = `© ${currentYear}`;


// Updating the Last Modified date
const lastUpdated = new Date(document.lastModified);
const dateOptions = {
  month: "numeric",
  day: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
};
dateOptions.timeZone = 'UTC';
dateOptions.timeZoneName = 'short';
const lastUpdatedText = lastUpdated.toLocaleDateString("en-US", dateOptions);
const lastUpdatedElem = document.querySelector("#last-updated");
lastUpdatedElem.textContent = `Last Updated: ${lastUpdatedText}`;


function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;


// select the elements to manipulate (output to)
const datefield = document.querySelector("#header-date");
// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
datefield.innerHTML = `<em>${fulldate}</em>`;
