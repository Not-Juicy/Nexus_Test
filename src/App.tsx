import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import ServicesPage from './pages/ServicesPage';
import Contact from './pages/Contact';
import Ecommerce from './pages/Ecommerce';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="ecommerce" element={<Ecommerce />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

