(function () {
  const storageKey = "neur0tide-theme";
  const root = document.documentElement;
  const icon = document.getElementById("appIcon");
  const toggle = document.getElementById("themeToggle");

  function applyTheme(theme) {
    root.dataset.theme = theme;
    localStorage.setItem(storageKey, theme);

    if (icon) {
      icon.src =
        theme === "dark"
          ? icon.dataset.dark || "/assets/logo-dark.png"
          : icon.dataset.light || "/assets/logo-light.png";
    }

    if (toggle) {
      const isDark = theme === "dark";
      toggle.setAttribute("aria-pressed", String(isDark));
      toggle.title = isDark ? "Switch to bright mode" : "Switch to dark mode";
    }
  }

  function initialTheme() {
    const saved = localStorage.getItem(storageKey);
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  applyTheme(initialTheme());

  requestAnimationFrame(() => {
    root.classList.add("is-animating");
    window.setTimeout(() => {
      root.classList.remove("is-animating");
    }, 900);
  });

  if (toggle) {
    toggle.addEventListener("click", () => {
      const next = root.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(next);
    });
  }
})();
