import { main } from "./homepage";

const contact = document.getElementById("contacts");

contact.addEventListener("click", () => {
  //   main.innerHTML = "";
  main.innerHTML = `
    <div class="about">
          <p>
            For more information or for bookings, you can find contact us thru
            the following channels:
          </p>
          <div class='icons'>
            <div class="phone"><a><i class="fa-solid fa-phone"></i> </a></div>
            <div class="insta"><a><i class="fa-brands fa-instagram"></i></a></div>
            <div class="facebook"><a><i class="fa-brands fa-facebook"></i></a></div>
          
          </div>
    </div>
    `;
});
