import './App.css';
import Header from './components/Header';
import Content from './components/Content'
import Footer from './components/Footer'
import { useEffect, useState } from "react";

function App() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
    <Header scrollPosition={scrollPosition}/>
    <Content/>
    <Footer/>
    </div>
  );
}

export default App;
