document.addEventListener("DOMContentLoaded", function () {
  const marker = document.querySelector("a-nft");
  const model = document.querySelector("a-entity");

  marker.addEventListener("markerFound", function () {
    console.log("Marker Found!");
    model.setAttribute("visible", "true");
  });

  marker.addEventListener("markerLost", function () {
    console.log("Marker Lost!");
    model.setAttribute("visible", "false");
  });
});