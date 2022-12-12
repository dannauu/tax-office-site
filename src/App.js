import './App.css';
import Navigation from './components/Navigation/Navigation';
import HeroBanner from './components/HeroBanner/HeroBanner';
import FAQ from './components/FAQ/FAQ';
import Forms from './components/Forms/Forms';


function App() {
  return (
    <div>
      <Navigation />
      <HeroBanner />
      <Forms/>
      <FAQ/>
    </div>
  );
}

export default App;
