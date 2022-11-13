import Homepage from "./homepage";
import menu from "./menu";
import contact from "./contact";

import { main } from "./homepage";
import renderHomepage from "./homepage";
import "./style.scss";

const home = document.getElementById("home");
home.addEventListener("click", () => {
  main.innerHTML = `
  <div class="about">
          <p>
            Located in the heart of the city,Restaurant offers you a fine
            dinning experience combined with a relaxing atmosphere backed by
            relaxed jazz music
          </p>
        </div>
  `;
});
