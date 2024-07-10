const tabs = document.querySelectorAll('.trial-navtab');
const contents = document.querySelectorAll('.trial-content');
const underline = document.querySelector('.trial-underline');

function updateUnderline() {
  const activeTab = document.querySelector('.trial-navtab.tr-active');
  underline.style.width = `${activeTab.offsetWidth}px`;
  underline.style.left = `${activeTab.offsetLeft}px`;
}
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('tr-active'));
    tab.classList.add('tr-active');
    const target = tab.getAttribute('data-target');
    contents.forEach(content => {
      if (content.id === target) {
        content.classList.add('tr-active');
      } else {
        content.classList.remove('tr-active');
      }
    });
    updateUnderline();
  });
});
window.addEventListener('resize', updateUnderline);
updateUnderline();





// ------------------ Dropdown -------------

document.addEventListener('DOMContentLoaded', (event) => {
    const dropdown = document.querySelector('.trial-dropdown');
    const menu = document.querySelector('.trial-dropdown-menu');
    const sortButton = document.querySelector('.trial-sort-button');
    const toggleMenu = () => {
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    };

    dropdown.addEventListener('click', toggleMenu);
    sortButton.addEventListener('click', toggleMenu);
});