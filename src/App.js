import './App.css';
import MyNavbar from './components/my-navbar/my-navbar-component'
import MyCarousel from './components/my-carousel/carousel';
import TitleMessage from './components/title-message/title-message';
import About from './pages/About/about';
import Skills from './pages/Skills/skills';
import { Parallax } from 'react-parallax';
import Container from 'react-bootstrap/Container'
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";



const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyCarousel />
      <MyNavbar />
      <TitleMessage />

      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require('./assets/img/parallex/background.webp')}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>

    </div>
  );
}

export default App;
