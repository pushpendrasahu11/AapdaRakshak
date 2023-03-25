import React from "react";
import DonationCard from "./DonationCard";
import Flood from "../../assets/flood.jpg";
import Flood2 from "../../assets/flood2.jpg";
import Typhoon from "../../assets/typhoon.jpg";
import Fab from '@mui/material/Fab';
import '../../styles/donation.scss'
import { useNavigate } from 'react-router-dom';

const Donation = () => {
  const addToCartHandler = (itemNum) => {};

  const navigate = useNavigate();

  const handleRaise=()=>{
    navigate("/raisefund");
  }

  return (
    <section id="menu">
      <h1>DONATE</h1>
      <div className="raise"><Fab onClick={handleRaise} style={{padding:"0px 50px", backgroundColor:"rgb(232, 43, 43)"}} variant="extended">
        
        Raise Fund
       </Fab></div>
      <div>
        <DonationCard
          itemNum={1}
          burgerSrc={Flood}
          price={200}
          title="Emergency management, also referred to as disaster management"
          handler={addToCartHandler}
          delay={0.1}
        />
        <DonationCard
          itemNum={2}
          burgerSrc={Flood2}
          price={500}
          title="Emergency management, also referred to as disaster management"
          delay={0.3}
          handler={addToCartHandler}
        />
        <DonationCard
          itemNum={3}
          burgerSrc={Typhoon}
          price={1800}
          title="Emergency management, also referred to as disaster management"
          delay={0.6}
          handler={addToCartHandler}
        />
      </div>
    </section>
  );
};

export default Donation;