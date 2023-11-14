document.getElementById("date").textContent = new Date().getFullYear();
const headerTop = document.querySelector(".header-top");
const navLinksContainer = document.getElementById("nav-links-container");
const navLinks = document.querySelector(".nav-links");
const barsBtn = document.getElementById("bars-btn");

let showNave = false;

barsBtn.addEventListener("click", () => {
  if (!showNave) {
    navLinksContainer.style.height = `${navLinks.clientHeight}px`;
  } else {
    navLinksContainer.style.height = "0";
  }

  showNave = !showNave;
});

document.querySelectorAll(".scroll-link").forEach((scrollLink) => {
  scrollLink.addEventListener("click", (e) => {
    e.preventDefault();
    navLinksContainer.style.height = "0";

    const id = scrollLink.getAttribute("href").slice(1);
    const destinationElement = document.getElementById(id);

    window.scroll({
      left: 0,
      top: destinationElement.offsetTop - headerTop.clientHeight,
      behavior: "smooth",
    });
  });
});
