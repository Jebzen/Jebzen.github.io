import Tooltip from './ninja-ui/tooltip';
import Dropdown from './ninja-ui/dropdown';
import Tabs from './ninja-ui/tabs';
import Snackbar from './ninja-ui/snackbar';
import CVR from './ninja-ui/cvr'

// create tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

// create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

// create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

// create snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('.snackbar-trigger');
button.addEventListener('click', () => {
  snackbar.show('you clicked me :)');
});

//create CVR
const cvr = new CVR();