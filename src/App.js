import './App.css';
import MyNavbar from './components/my-navbar/my-navbar-component'
import MyCarousel from './components/my-carousel/carousel';
import TitleMessage from './components/title-message/title-message';

const App = () => {
  return (
    <div >
      <MyCarousel />
      <MyNavbar />
      <TitleMessage />
    </div>
  );
}

export default App;
