const headerContainer = document.getElementById("header");

let isScrolled = false;
let isMobileMenuOpen = false;
const currentPath = window.location.pathname;

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services.html", label: "Services" },
  { href: "/about.html", label: "About Us" },
  { href: "/blog.html", label: "Blog" },
  { href: "/contact.html", label: "Contact" }
];

function renderHeader() {
  headerContainer.innerHTML = `
    <div class="sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-lg" : "bg-white/80 backdrop-blur"
    }">
      <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" class="text-2xl font-bold text-[#3FB8A8]">
          Life Choice Services
        </a>

        <div class="hidden md:flex gap-8 items-center">
          ${navLinks
            .map(
              (link) => `
              <a 
                href="${link.href}"
                class="transition-colors ${
                  currentPath === link.href
                    ? "text-[#3FB8A8] font-semibold"
                    : "text-gray-700 hover:text-[#3FB8A8]"
                }"
              >
                ${link.label}
              </a>
            `
            )
            .join("")}

          <a href="tel:07397149133"
             class="bg-[#3FB8A8] text-white px-6 py-2 rounded-lg font-semibold">
             Call Us
          </a>
        </div>

        <button id="menuBtn" class="md:hidden text-[#3FB8A8] p-2">
          ${isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </nav>

      ${
        isMobileMenuOpen
          ? `
        <div class="md:hidden bg-white border-t shadow-lg">
          <div class="px-4 py-4 flex flex-col gap-4">
            ${navLinks
              .map(
                (link) => `
                <a href="${link.href}"
                   class="py-2 px-4 rounded-lg ${
                     currentPath === link.href
                       ? "bg-[#3FB8A8]/10 text-[#3FB8A8]"
                       : "hover:bg-gray-100"
                   }">
                  ${link.label}
                </a>
              `
              )
              .join("")}
          </div>
        </div>`
          : ""
      }
    </div>
  `;

  document
    .getElementById("menuBtn")
    ?.addEventListener("click", () => {
      isMobileMenuOpen = !isMobileMenuOpen;
      renderHeader();
    });
}

window.addEventListener("scroll", () => {
  isScrolled = window.scrollY > 50;
  renderHeader();
});

renderHeader();
