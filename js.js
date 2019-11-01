fetch("techno_logo.svg")
  .then(e => e.text())
  .then(data => loadSVG(data));

function loadSVG(data) {
  document.querySelector(".theSVG").innerHTML = data;
  main();
}

function main() {}
