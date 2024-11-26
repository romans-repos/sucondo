import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import OneBedroom from './pages/OneBedroom';
import TwoBedroom from './pages/TwoBedroom';
import Amenities from './pages/Amenities';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/one-bedroom" element={<OneBedroom />} />
            <Route path="/two-bedroom" element={<TwoBedroom />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;