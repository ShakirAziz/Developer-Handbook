/* DOM Elements */
const colorSchemeForm = document.getElementById("color-scheme-form");
const colorInput = document.getElementById("color");
const schemeSelect = document.getElementById("scheme-mode");
const colorSchemeContainer = document.getElementById("color-scheme-container");

/* Helpers */
function fetchColorScheme(color, scheme) {
  const url = `https://www.thecolorapi.com/scheme?hex=${color}&mode=${scheme}&count=5`;
  fetch(url)
    .then((response) => response.json())
    .then((schemeData) => {
      console.log(schemeData.colors);
      renderColorScheme(schemeData.colors);
    });
}

/* Listners */

colorSchemeForm.addEventListener("submit", handleColorSchemeSubmit);

/* Handlers */

function handleColorSchemeSubmit(event) {
  event.preventDefault();
  const color = colorInput.value.replace("#", "");
  const scheme = schemeSelect.value;
  fetchColorScheme(color, scheme);
}

/* HTML */
function getColorSchemeHTML(colors) {
  return colors
    .map(
      (color) => `
    <div class="app-color-scheme">
        <div class="color-scheme-item" style="background-color: ${color.hex.value}"></div>
        <p class="color-value">${color.hex.value}</p>
    </div>
  `,
    )
    .join("");
}

/* Render */
function renderColorScheme(colors) {
  colorSchemeContainer.innerHTML = getColorSchemeHTML(colors);
}
