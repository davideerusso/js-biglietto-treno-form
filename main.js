const nameImput = document.getElementById("nomeecognome");
const distanzaImput = document.getElementById("distanza");
const etaImput = document.getElementById("eta");
const datiBigliettoForm = document.getElementById("dati-biglietto");
const alertError = document.getElementById("errore");
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

  const price = distanza * 0.21 + " €";

  console.log(price);

  const price40 = (distanza * 0.21 * 40) / 100 + " €";
  const price20 = (distanza * 0.21 * 20) / 100 + " €";
  console.log(price40);

  let hasError = false;

  if (!name) hasError = true;
  if (!distanza || isNaN(distanza)) hasError = true;
  if (!eta) hasError = true;

  if (hasError) {
    alertError.classList.remove("d-none");
    return;
  }

  alertError.classList.add("d-none");

  nameCard.innerText = `${name}`;
  cardPrice.innerText = `${price}`;

  console.log("Persona Registrata");
  console.log(" Nome", name);
  console.log(" distanza", distanza);
  console.log(" eta", eta);
});
