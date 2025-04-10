const nameImput = document.getElementById("nomeecognome");
const distanzaImput = document.getElementById("distanza");
const etaImput = document.getElementById("eta");
const datiBigliettoForm = document.getElementById("dati-biglietto");
const alertError = document.getElementById("errore");

const ticket = document.getElementById("ticket");
const nameCard = document.getElementById("card-name");
const nameTicket = document.getElementById("card-ticket");
const cardCarrozza = document.getElementById("card-carrozza");
const cardCode = document.getElementById("card-code");
const cardPrice = document.getElementById("card-price");

datiBigliettoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameImput.value;
  const distanza = distanzaImput.value;
  const eta = etaImput.value;
  const code = Math.round(Math.random() * 99999 + 90000) - 90000;
  const carrozza = Math.round(Math.random() * 9 + 1);

  const priceStandard = distanza * 0.21;
  const price40 = priceStandard - (distanza * 0.21 * 40) / 100;

  console.log(price40);

  let typeTicket = "";
  let price;

  let hasError = false;

  if (!name) hasError = true;
  if (!distanza || isNaN(distanza)) hasError = true;
  if (!eta) hasError = true;
  if (!ticket) hasError = true;

  if (hasError) {
    alertError.classList.remove("d-none");
    ticket.classList.add("d-none");
    return;
  }
  ticket.classList.remove("d-none");
  alertError.classList.add("d-none");

  if (eta === "minorenne") {
    nameTicket.innerHTML = "Ridotto Giovani";
    price = priceStandard - (distanza * 0.21 * 20) / 100;
  }
  if (eta === "maggiorenne") {
    nameTicket.innerHTML = "Biglietto Standard";

    price = priceStandard;
  } else if (eta === "over65") {
    nameTicket.innerHTML = "Ridotto Over";
    price = priceStandard - (distanza * 0.21 * 40) / 100;
  }
  cardPrice.innerText = `${price.toFixed(2) + " €"}`;
  nameCard.innerText = `${name}`;
  cardCode.innerText = `${code}`;
  cardCarrozza.innerText = `${carrozza}`;
  //   nameTicket.innerText = `${typeTicket}`;

  console.log(price);

  console.log("Persona Registrata");
  console.log(" Nome", name);
  console.log(" distanza", distanza);
  console.log(" eta", eta);
});
