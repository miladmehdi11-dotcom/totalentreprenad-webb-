// Enkel funktion för kontaktformulär
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Tack för ditt meddelande! Vi återkommer snart.");
  this.reset();
});
