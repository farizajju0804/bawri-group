import { useLocation, matchPath, Routes, Route } from 'react-router-dom';
import Timber from "./pages/timber/Timber";
import Antiques from "./pages/antiques/Antiques";

import Retail from "./pages/retail/Retail";

import Quantta from "./pages/quantta/Quantta";

import Cijen from "./pages/cijen/Cijen";

import Road from "./pages/road/Road";
import Home from "./pages/home/Home";

import About from "./pages/aboutus/About";
import Mission from "./pages/mission/Mission";
import Values from "./pages/values/Values";

import Contact from "./pages/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Main from './pages/main/main';
import CompanyPage from "./pages/CompanyPage";
import NonProfitCompanyPage from "./pages/NonProfitCompanyPage";
import Footer from "./components/footer/footer";
import StoryPage from "./pages/our-story/Story";
import PartsPage from "./pages/our-story/PartsPage";
import TeamPage from './pages/TeamPage/TeamPage';
import PrivacyPolicy from './pages/home/components/IndustriesSection/PrivacyPolicy';
import LegalDisclaimer from './pages/home/components/IndustriesSection/TermsOfService';

function App() {
  const location = useLocation();

  // Define the routes where you don't want to show the footer
  const noFooterRoutes = ['/profit', '/our-story', '/our-story/:partId'];

  const shouldShowFooter = () => {
    return !noFooterRoutes.some(route => matchPath(route, location.pathname));
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profit' element={<Road />} />
        <Route path='/our-story' element={<PartsPage />} />
        <Route path="/our-story/:partId" element={<StoryPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/mission' element={<Mission />} />
        <Route path='/values' element={<Values />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/non-profit' element={<Main />} />
        <Route path='/team' element={<TeamPage/>} />
        <Route path='/terms' element={<LegalDisclaimer/>} />
        <Route path='/privacy' element={<PrivacyPolicy/>} />
        <Route path='/profit/:id' element={<CompanyPage />} />
        <Route path='/non-profit/:id' element={<NonProfitCompanyPage />} />
      </Routes>
      {shouldShowFooter() && <Footer />}
    </>
  );
}

export default App;
