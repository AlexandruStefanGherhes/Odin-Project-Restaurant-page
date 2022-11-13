import { main } from "./homepage";

const menu = document.getElementById("menu");

menu.addEventListener("click", () => {
//   main.innerHTML = "";
  main.innerHTML = `
  <div class="menu">
          <div class="food">
            <img
              src="https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="greek salad"
            />
            <p>
              A fresh greek salad made with feta cheese, cherry tomatoes and
              virgin olive oil.
            </p>
          </div>
          <div class="food">
            <img
              src="https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="shrimp"
            />
            <p>Fries shrimp with barbeque sauce on a bed of salad.</p>
          </div>
          <div class="food">
            <img
              src="https://images.pexels.com/photos/812868/pexels-photo-812868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="vegetable bowl"
            />
            <p>
              A new take on the vegetable bowl, packed with greens and proteins
            </p>
          </div>
          <div class="food">
            <img
              src="https://images.pexels.com/photos/1988624/pexels-photo-1988624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avocado toast"
            />
            <p>
              The favorite breakfast meal for many, is just a simple slice of
              toats loaded with fresh avocado and tomatoes.
            </p>
          </div>
     </div>
  `;
});
