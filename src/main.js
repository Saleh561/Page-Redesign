const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");
const basketCount = document.querySelector("#basketCount");
const basketButton = document.querySelector("#basketButton");
const toast = document.querySelector("#toast");
const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#siteSearch");
const productCards = [...document.querySelectorAll(".product-card")];
const filterButtons = [...document.querySelectorAll(".filter-pill")];
let basketItems = 0;
let toastTimer;

document.querySelector("#year").textContent = new Date().getFullYear();

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2800);
}

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("nav-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("nav-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

function filterProducts(category = "All", query = "") {
  const normalizedQuery = query.trim().toLowerCase();
  let visible = 0;
  productCards.forEach(card => {
    const matchesCategory = category === "All" || card.dataset.category === category;
    const matchesSearch = !normalizedQuery || card.dataset.name.toLowerCase().includes(normalizedQuery) || card.dataset.category.toLowerCase().includes(normalizedQuery);
    const show = matchesCategory && matchesSearch;
    card.hidden = !show;
    if (show) visible++;
  });
  return visible;
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => item.classList.remove("selected"));
    button.classList.add("selected");
    const count = filterProducts(button.dataset.filter, searchInput.value);
    if (!count) showToast("No matching items in this small homepage preview.");
  });
});

document.querySelectorAll(".category-card").forEach(card => {
  card.addEventListener("click", () => {
    const category = card.dataset.filter;
    filterButtons.forEach(button => {
      button.classList.toggle("selected", button.dataset.filter === category);
    });
    filterProducts(category, "");
  });
});

searchForm.addEventListener("submit", event => {
  event.preventDefault();
  const query = searchInput.value;
  filterButtons.forEach(button => button.classList.toggle("selected", button.dataset.filter === "All"));
  const count = filterProducts("All", query);
  document.querySelector("#featured").scrollIntoView({ behavior: "smooth" });
  showToast(count ? `${count} matching item${count === 1 ? "" : "s"} in this preview.` : "No matches found. Try another search.");
});

document.querySelectorAll(".quick-add").forEach(button => {
  button.addEventListener("click", () => {
    basketItems += 1;
    basketCount.textContent = basketItems;
    showToast(`${button.dataset.product} added to your demo basket.`);
  });
});

basketButton.addEventListener("click", () => {
  showToast(`Demo basket: ${basketItems} item${basketItems === 1 ? "" : "s"}. This preview does not process orders.`);
});

const backToTop = document.querySelector("#backToTop");
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 500);
}, { passive: true });
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// A graceful fallback if an external image URL is unavailable.
document.querySelectorAll("img").forEach(image => {
  image.addEventListener("error", () => {
    image.classList.add("image-failed");
    image.alt = "Bedroom image unavailable";
  }, { once: true });
});
