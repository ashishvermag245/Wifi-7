// ------------------ TAbs -------------
const tabs = document.querySelectorAll('.trial-navtab');
const contents = document.querySelectorAll('.trial-content');
const underline = document.querySelector('.trial-underline');

function updateUnderline() {
  const activeTab = document.querySelector('.trial-navtab.active');
  underline.style.width = `${activeTab.offsetWidth}px`;
  underline.style.left = `${activeTab.offsetLeft}px`;
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const target = tab.getAttribute('data-target');
    contents.forEach(content => {
      if (content.id === target) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
    updateUnderline();
  });
});

window.addEventListener('resize', updateUnderline);
updateUnderline();
// ------------------ TAbs -------------






// ------------------ Dropdown -------------

document.addEventListener('DOMContentLoaded', (event) => {
    const dropdown = document.querySelector('.trial-duration-dropdown');
    const menu = document.querySelector('.duration-trial-dropdown');
    const usdDropdown = document.querySelector('.trial-dropdown-menu-usd')
    const sortDropdown = document.querySelector('.trial-dropdown-menu-sort')
    const sortButton = document.querySelector('.trial-sort-button');
    const USDButton = document.querySelector('.trial-currency-dropdown')
    const toggleMenu = () => {
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    };
    const UsdtoggleMenu = () => {
      if (usdDropdown.style.display === 'none' || usdDropdown.style.display === '') {
          usdDropdown.style.display = 'block';
      } else {
          usdDropdown.style.display = 'none';
      }
  };
  const SorttoggleMenu = () => {
    if (sortDropdown.style.display === 'none' || sortDropdown.style.display === '') {
        sortDropdown.style.display = 'block';
    } else {
        sortDropdown.style.display = 'none';
    }
};

    dropdown.addEventListener('click', toggleMenu);
    sortButton.addEventListener('click', SorttoggleMenu);
    USDButton.addEventListener('click', UsdtoggleMenu);

    document.addEventListener('click', (event) => {
      if (!dropdown.contains(event.target) && !menu.contains(event.target) && !sortButton.contains(event.target) && !USDButton.contains(event.target)) {
          menu.style.display = 'none';
      }
      if (!usdDropdown.contains(event.target) && !USDButton.contains(event.target)) {
          usdDropdown.style.display = 'none';
      }
      if (!sortDropdown.contains(event.target) && !sortButton.contains(event.target)) {
          sortDropdown.style.display = 'none';
      }
    });
  });
// ------------------ Dropdown -------------

  
  // ------------------ Sidebar -------------

  window.onresize = setContentHeight;

  const overlayContainer = document.getElementById("trial-overlay-container");

  function openSidebar() {
    document.getElementById("offcanvas-sidebar").style.transform = "translateX(0)";
    overlayContainer.style.display = "block";
  }
  function closeSidebar() {
    document.getElementById("offcanvas-sidebar").style.transform = "translateX(100%)";
    overlayContainer.style.display = "none";
  }
  overlayContainer.addEventListener("click", function(event) {
    if (event.target === overlayContainer) {
      closeSidebar();
    }
  });
  function setContentHeight() {
  }

 // ------------------ Sidebar -------------