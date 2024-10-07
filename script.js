function calculerPrix() {
  const activite = document.getElementById("activity").value;

  const nbAdulte = document.getElementById("nbAdulte").value;
  const nbEnfant = document.getElementById("nbEnfant").value;

  const prixTotal = nbAdulte * activite + nbEnfant * (activite - 3);

  document.getElementById("prix").value = prixTotal + "€";
}

console.log("slt");

document.addEventListener("DOMContentLoaded", function() {
    const boutonEnvoyer = document.getElementById("envoyerButton");
    const popup = document.getElementById("popup");
    const fermerPopup = document.getElementById("fermerPopup");

    boutonEnvoyer.addEventListener("click", function() {
        popup.style.display = "flex";
    });

    fermerPopup.addEventListener("click", function() {
        popup.style.display = "none";
        alert("Merci pour votre réservation !");
    });
});
