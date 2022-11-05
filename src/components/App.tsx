import { Routes, Route } from 'react-router-dom';
import { Footer } from './Footer/Footer';
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

        <Route path='agreement' element={<Agreement />} />
        <Route path='contacts' element={<Contacts />} />
        <Route path='cookies' element={<Cookies />} />
        <Route path='help' element={<Help />} />
        <Route path='partnership' element={<Partnership />} />
        <Route path='privacy' element={<Privacy />} />

        <Route path="*" element={<NotFoundPage />} />

      </Routes>
      <Footer />
    </>
  );
};
