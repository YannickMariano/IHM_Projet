// // project import
// import pages from './pages';
// import dashboard from './dashboard';
// import utilities from './utilities';
// // import support from './support';

// // ==============================|| MENU ITEMS ||============================== //

// const menuItems = {
//   items: [dashboard, utilities, pages]
// };

// export default menuItems;


import pages from "./pages";
import dashboard from "./dashboard";
import eleveUtilities from "./eleveUtilities";



let defaultUtilities = require('./utilities').default;

const getUtilities = (type) => {
  switch (type) {
    case 'admin':
      return defaultUtilities;
    case 'eleve':
      return eleveUtilities;
    default:
      return defaultUtilities;
  }
};

// Initialisation du menu avec les utilitaires par défaut
let menuItems = {
  items: [dashboard, defaultUtilities, pages]
};

export { getUtilities };

export default menuItems;