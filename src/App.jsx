import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Main';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Articles from './pages/Articles';
import Article from './pages/Article';
import About from './pages/About';
import IntroAnimation from './pages/IntroAnimation';
import SakuraRain from './components/SakuraRain';
import Navbar from './components/Navbar';
import './App.css';

// Layout component to wrap pages that need the navbar and container
const AppLayout = () => (
  <main className="app-container">
    <Navbar />
    <section className="container">
      <div className="sakura-decoration">❀</div>
      <Outlet /> 
    </section>
  </main>
);

function App() {
  return (
    <div className="App">
      <SakuraRain />
      <Routes>
        <Route path="/" element={<IntroAnimation />} />
        <Route element={<AppLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result/:type" element={<Result />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/article/:slug" element={<Article />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
