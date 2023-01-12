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
            title="Tory Burch Women's 73221 Large T-Logo Stud Earrings Tory Silver and Tory Gold" 
            price={108.98}
            rating={5}
            image="	https://m.media-amazon.com/images/I/51cvvAP6pHL._AC_UY695_.jpg
            "
           />
          <Product
            id="12321341"
            title="CHANEL Women's Pre-Loved Black Lambskin 2.55 10" 
            price={7150.00}
            rating={5}
            image="	https://m.media-amazon.com/images/I/71eYyWt5EiL._AC_UY695_.jpg"
           />
            <Product
            id="12321341"
            title="All-new Amazon Fire HD 8 Kids tablet, 8 inches HD display, ages 3-7, with age-appropriate curated content and easy-to-"
            price={27.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/51AgSxZ0eGL._AC_UY654_FMwebp_QL65_.jpg"
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
            price={2229.93}
            rating={5}
            image="https://m.media-amazon.com/images/I/71Xh-Mmb0xL._AC_SX720_SY464_.jpg"
          />
          <Product
            id="49538094"
            title="Naiyee Women's High Stiletto Heel, PVC Pumps Crystal Rhinestones 100mm Clear Heels Closed Pointed Toe Slip On Pump Wedding Party Dress Shoes"
            price={65.99}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71vW7nNHAYL._AC_UY695_.jpg"
          />
          <Product
            id="49538094"
            title="Gucci Made to Measure Eau de Toilette Spray for Men, 3 Ounce"
            price={222.99}
            rating={4}
            image="	https://m.media-amazon.com/images/I/61lrZDkSCOL._SL1000_.jpg"
          />
        </div>
      
        <div className="home__row">
        <Product
            id="4903850"
            title="WOOD 3D Wood World Map Wall Art Large Wood Wall Décor Housewarming Gift Idea Wood Wall Art World"
            price={338.00}
            rating={4}
            image="	https://m.media-amazon.com/images/I/51-GJhtZF5L.jpg"
          />
          <Product
            id="4903850"
            title="Liberty Furniture INDUSTRIES Magnolia Manor 3 Piece Desk & Hutch Set, White"
            price={2316.75}
            rating={4}
            image="	https://m.media-amazon.com/images/I/81Pq3ZqcsXL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
