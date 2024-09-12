import { useRoutes } from 'react-router-dom';

// project import
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';
import EleveRoutes from './EleveRoutes';
import ProfRoutes from './ProfRoutes';
import AccueilRoutes from './AccueilRoutes';
import EleveMainRoutes from './EleveMain';
// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([AccueilRoutes, ProfRoutes, EleveRoutes, LoginRoutes, EleveMainRoutes, MainRoutes]);
}
