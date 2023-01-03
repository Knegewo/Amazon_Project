import React from "react";
import Product from "../product/Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="Invicta Men's Pro Diver 43mm Stainless Steel Quartz Watch, Silver (Model: 30806)"
            price={54}
            rating={5}
            image="	https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41-AXm8WBnL._AC_SY460_.jpg"
           />
          <Product
            id="12321341"
            title="Hoseili【2022new editionBluetooth Headphones】.Bluetooth 5.0 Wireless Earphones in-Ear Stereo"
            price={69.99}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71jp+2kTdyL._AC_SY450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="Panasonic LUMIX GH6, 25.2MP Mirrorless, 7.5-Stop 5-Axis Dual Image Stabilizer, 12-60mm F2.8-4.0 Leica Lens - DC-GH6LK"
            price={2297}
            rating={5}
            image="https://m.media-amazon.com/images/I/71Xh-Mmb0xL._AC_SX720_SY464_.jpg"
          />
          <Product
            id="49538094"
            title="Naiyee Women's High Stiletto Heel, PVC Pumps Crystal Rhinestones 100mm Clear Heels Closed Pointed Toe Slip On Pump Wedding Party Dress Shoes"
            price={65}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71vW7nNHAYL._AC_UY695_.jpg"
          />
          <Product
            id="49538094"
            title="Epic Racing Professional Gaming Chair with Adjustable Height, Full Recline and Headrest/Lumbar Support"
            price={159.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71t8UBllIgL._AC_UL320_.jpg"
          />
        </div>
      
        <div className="home__row">
          <Product
            id="4903850"
            title="New Apple Watch Series 6 (GPS, 40mm) - Space Gray Aluminum Case with Black Sport Band"
            price={499.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71yOGVLGWpL._AC_SX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
