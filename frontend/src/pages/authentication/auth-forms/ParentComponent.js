// import React, { useState } from 'react';
// import FirebaseLogin from './Accueil';
// import EleveUtilities from '../../../menu-items/eleveUtilities';
// // import ProfUtilities from '../../../menu-items/ProfUtilities';
// import DefaultUtilities from '../../../menu-items/utilities';

// const ParentComponent = () => {
//   const setUtilities = useState(DefaultUtilities);

//   const handleClick = (type) => {
//     switch (type) {
//       case 'admin':
//         setUtilities(DefaultUtilities);
//         break;
//     //   case 'prof':
//     //     setUtilities(ProfUtilities);
//     //     break;
//       case 'eleve':
//         setUtilities(EleveUtilities);
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <div>
//       <FirebaseLogin handleClick={handleClick} />
//       {/* Utiliser les utilitaires en fonction de l'état */}
//       {/* Par exemple, si vous voulez afficher quelque chose basé sur les utilitaires */}
//       {/* <SomeComponent utilities={utilities} /> */}
//     </div>
//   );
// };

// export default ParentComponent;



import React, { useState } from 'react';
import FirebaseLogin from './Accueil';
import menuItems, { getUtilities } from '../../../menu-items';

const ParentComponent = () => {
  const [menuItemsState, setMenuItemsState] = useState(menuItems);

  const handleClick = (type) => {
    // Obtenir les utilitaires en fonction du type
    const utilities = getUtilities(type);
    
    // Mettre à jour les items du menu avec les nouveaux utilitaires
    const updatedMenuItems = {
      items: [
        ...menuItemsState.items.slice(0, 1), // Garder le premier élément (dashboard)
        utilities,
        ...menuItemsState.items.slice(2) // Garder le reste des éléments
      ]
    };

    // Mettre à jour l'état du menuItemsState
    setMenuItemsState(updatedMenuItems);
  };

  return (
    <div>
      <FirebaseLogin handleClick={handleClick} />
      {/* Utiliser menuItemsState pour rendre votre menu */}
    </div>
  );
};

export default ParentComponent;

