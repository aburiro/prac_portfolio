import Header from "./components/Header"
import logo from './logo.svg';
// import './App.css';
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import { BuyerReview , SellerReview } from "./components/Reviews";
import ContactUs from "./components/ContactUs";
import SocialMediaProfiles from "./components/SocialMediaProfiles"

function App() {
  return (
    <div >
      <div>
     <Header/>
      <HeroSection/>
      <SocialMediaProfiles />
      <Projects/>

      <BuyerReview/>
      <SellerReview/>
      <ContactUs/>
     </div>
     
     
    </div>
  );
}

export default App;
