import { Routes, Route } from 'react-router-dom';
import Auth from './Auth/Auth';
import Reg from './Reg/Reg';
import Footer from './Footer/Footer';
import { Agreement } from './FooterLinks/Agreement/Agreement';
import { Contacts } from './FooterLinks/Contacts/Contacts';
import { Cookies } from './FooterLinks/Cookies/Cookies';
import { Help } from './FooterLinks/Help/Help';
import { Partnership } from './FooterLinks/Partnership/Partnership';
import { Privacy } from './FooterLinks/Privacy/Privacy';
import { Home } from './Home/Home';
import { NotFoundPage } from './NotFoundPage/NotFoundPage';
import { Notifications } from './Notifications/Notifications';
import { Ticket } from './Ticket/Ticket';
import { TicketDetails } from './TicketDetails/TicketDetails';
import { TravelOptions } from './TravelOptions/TravelOptions';
import { Trip } from './Trip/Trip';
import AboutUs from './FooterLinks/AboutUs/AboutUs';
import SiteMap from './FooterLinks/SiteMap/SiteMap';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tickets/:ticketId/" element={<Ticket />} />
        <Route path="cabinet/settings" element={<TicketDetails />} />
        <Route path="cabinet/options" element={<TravelOptions />} />
        <Route path="cabinet/options/trip" element={<Trip />} />
        <Route path="cabinet/notifications" element={<Notifications />} />
        <Route path='aboutus' element={<AboutUs />} />
        <Route path='agreement' element={<Agreement />} />
        <Route path='contacts' element={<Contacts />} />
        <Route path='cookies' element={<Cookies />} />
        <Route path='help' element={<Help />} />
        <Route path='partnership' element={<Partnership />} />
        <Route path='privacy' element={<Privacy />} />
        <Route path='auth' element={<Auth />} />
        <Route path='reg' element={<Reg />} />
        <Route path='sitemap' element={<SiteMap />} />
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
      <Footer />
    </>
  );
};
