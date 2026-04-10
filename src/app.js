import colors from '../colorpicker.json' with { type: 'json' };

const divRef = document.querySelector(".js-palette");

function opening(arr) {
  const item = arr.map((elem) => {
    return `
      <div class="color-card">
        <div class="color-swatch" 
             data-hex="${elem.hex}" 
             data-rgb="${elem.rgb}" 
             style="background-color: ${elem.hex}">
        </div>
        <div class="color-meta">
          <p>HEX: ${elem.hex}</p>
          <p>RGB: ${elem.rgb}</p>
        </div>
      </div>
    `;
  }).join("");

  divRef.innerHTML = item;
}
opening(colors);


