// Update reason text
function updateReason() {
    const reason = document.getElementById("reason-text");
    reason.textContent = "Now offering express 1-hour laundry pickup and delivery!";
  }
  
  // Highlight offer text
  function highlightOffer() {
    const offer = document.getElementById("offer-text");
    offer.textContent = "💥 10% off for first-time customers this week!";
    offer.classList.toggle("highlight");
  }
  
  // Add a new service
  function addService() {
    const services = document.getElementById("services-list");
    const newService = document.createElement("li");
    newService.textContent = "Ironing";
    services.appendChild(newService);
  }
  
  // Remove last service
  function removeService() {
    const services = document.getElementById("services-list");
    if (services.children.length > 0) {
      services.removeChild(services.lastElementChild);
    }
  }
  