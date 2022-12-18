import './App.css';
import Navigation from './components/Navigation/Navigation';
import HeroBanner from './components/HeroBanner/HeroBanner';
import FAQ from './components/FAQ/FAQ';
import Forms from './components/Forms/Forms';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navigation />
      <HeroBanner />
      <Forms />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
