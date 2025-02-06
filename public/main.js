document.getElementById('themeSwitch').addEventListener('change', (event) => {
  const htmlElement = document.querySelector('html');

  event.target.checked
    ? htmlElement.setAttribute('data-theme', 'light')
    : htmlElement.setAttribute('data-theme', 'dark');
});
