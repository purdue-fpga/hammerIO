document.addEventListener('DOMContentLoaded', function () {
  const lightLogo = 'assets/logos/purdue_logo_light.png';  // Light theme logo path
  const darkLogo = 'assets/logos/purdue_logo_dark.png';    // Dark theme logo path

  const logoElement = document.querySelector('.md-header__brand img');

  function updateLogo() {
    if (document.body.hasAttribute('data-md-color-scheme') &&
      document.body.getAttribute('data-md-color-scheme') === 'purdue-dark') {
      logoElement.src = darkLogo;  // Set logo for dark mode
    } else {
      logoElement.src = lightLogo; // Set logo for light mode
    }
  }

  // Initial logo update based on the current theme
  updateLogo();

  // Watch for theme changes and update logo
  const themeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  themeMediaQuery.addEventListener('change', updateLogo);
});