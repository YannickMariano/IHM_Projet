
// assets
import {
    // TeamOutlined,       // Déjà utilisé pour "Professeur"
    // BookOutlined,       // Suggestion pour "Matière"
    // RiseOutlined,       // Suggestion pour "Niveau"
    // ClusterOutlined,    // Suggestion pour "Parcours"
    // HomeOutlined,       // Déjà utilisé pour "Salle"
    // CalendarOutlined
    // ClockCircleOutlined,
    ScheduleOutlined,   // Suggestion pour "Horaire"
    OrderedListOutlined
  } from '@ant-design/icons';
  
  // icons
  const icons = {
    // TeamOutlined,       // Déjà utilisé pour "Professeur"
    // BookOutlined,       // Suggestion pour "Matière"
    // RiseOutlined,       // Suggestion pour "Niveau"
    // ClusterOutlined,    // Suggestion pour "Parcours"
    // HomeOutlined,       // Déjà utilisé pour "Salle"
    // ClockCircleOutlined,
    // CalendarOutlined 
    ScheduleOutlined,   // Suggestion pour "Horaire"
    OrderedListOutlined
  };
  
  // ==============================|| MENU ITEMS - UTILITIES ||============================== //
  
  const eleveUtilities = {
    id: 'utilities',
    title: 'Planification',
    type: 'group',
    children: [
      {
        id: 'util-calendrier',
        title: 'Calendrier',
        type: 'item',
        url: '/calendrier',
        icon: icons.ScheduleOutlined
      },
      {
        id: 'util-EDT',
        title: 'Emploi du temps',
        type: 'item',
        url: '/EDT',
        icon: icons.OrderedListOutlined
      }
    ]
  };
  
  export default eleveUtilities;
  