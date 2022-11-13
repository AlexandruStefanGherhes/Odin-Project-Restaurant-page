const main = document.createElement("main");

export default function renderHomepage() {
  //main div
  const div = document.createElement("div");
  div.classList.add("div");

  // header container
  const header = document.createElement("header");
  header.classList.add("header");
  header.innerHTML = `
  <h1>Restaurant</h1>
        <nav class="nav">
          <div class="categories">
            <a href="#" id="home">Home</a>
            <a href="#" id="menu">Menu</a>
            <a href="#" id="contacts">Contacts</a>
          </div>
        </nav>
  `;

  // main container
  // const main = document.createElement("main");
  main.classList.add("main");
  main.innerHTML = `
  <div class="about">
          <p>
            Located in the heart of the city,Restaurant offers you a fine
            dinning experience combined with a relaxing atmosphere backed by
            relaxed jazz music
          </p>
        </div>
        `;

  // footer
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  footer.innerHTML = `
  <p>Website made by yours truly Alex Gherhes</p>
        <div class="contact"></div>
  `;

  document.body.appendChild(div);

  div.appendChild(header);
  div.appendChild(main);
  div.appendChild(footer);
}

renderHomepage();
export { main };
