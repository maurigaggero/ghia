// Configuración de Tailwind para el CDN
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                title: ["Plus Jakarta Sans", "sans-serif"],
            },
            colors: {
                ghia: {
                    primary: "#2563eb",
                    secondary: "#38bdf8",
                    dark: "#030b30",
                },
            },
        },
    },
};

// Animaciones con Intersection Observer
const setupAnimations = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll(".fade-in, .reveal").forEach((el) => observer.observe(el));
};

// Menú Mobile
const setupMobileMenu = () => {
    const menuBtn = document.getElementById("menu-btn");
    const closeMenu = document.getElementById("close-menu");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileLinks = document.querySelectorAll(".mobile-link");

    const toggle = () => {
        if (mobileMenu) {
            mobileMenu.classList.toggle("open");
            document.body.style.overflow = mobileMenu.classList.contains("open") ? "hidden" : "";
        }
    };

    menuBtn?.addEventListener("click", toggle);
    closeMenu?.addEventListener("click", toggle);
    mobileLinks.forEach(link => link.addEventListener("click", toggle));
};

// Inicializar todo
document.addEventListener("DOMContentLoaded", () => {
    setupAnimations();
    setupMobileMenu();
});