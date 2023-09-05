import './App.css';
import Body from './Components/Body/Body';
import Body2 from './Components/Body/Body2';
import CardCarousel from './Components/CardCarousel/CardCarousel';
import Carousel from './Components/Carousel/Carousel';
import NavBar from './Components/NavBar/NavBar';
import Offer from './Components/Body/Offer/Offer';
import CustomerReview from './Components/CustomerReview/CustomerReview';
import Suppliers from './Components/Suppliers/Suppliers';
import Desinger from './Components/Designer/Desinger';
import HomeInteriors from './Components/HomeInteriors/HomeInteriors';
import Visit from './Components/Vistit/Visit';
import Footer1 from './Components/Footer/Footer1';
import Footer2 from './Components/Footer/Footer2';
import FooterR from './Components/Footer/FooterR';
import { useState } from 'react';
import PopBox from './Components/PopBox/PopBox';
// import Pop from './Components/Pop/Pop';
// import Body3 from './Components/Body/Routerss/Body3';


function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {/* <Routes>
        <ul className='flex flex-row justify-around mt-5' >
          <Route path='' >Personalised for You </Route>
          <Route path='' >Quality Guaranteed </Route>
          <Route path='' >Project Management from A to Z </Route>
          <Route path='' >Easy EMI options </Route>
          <Route path='' >On-time Delivery </Route>
        </ul>
      </Routes> */}
      {/* <Pop  isOpen={isModalOpen} onClose={closeModal} /> */}
      <NavBar />
      <PopBox isOpen={isModalOpen} onClose={closeModal} />
      <Carousel />
      <Body />
      <Body2 />
      <CardCarousel />
      <Offer />
      {/* <Body3 /> */}
      <CustomerReview/>
      <Suppliers/>
      <Desinger/>
      <HomeInteriors/>
      <Visit/>
      <Footer1/>
      <Footer2/>
      <FooterR/>

    </>

  );
}

export default App;
