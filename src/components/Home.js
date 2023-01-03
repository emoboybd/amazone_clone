import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
          alt="sofa"
        />

        <div className="home__row">
          <Product
            id={34637846}
            title="The lean startup"
            price={19.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51nzbA9IboL._SX330_BO1,204,203,200_.jpg"
          />
          <Product
            id={346334446}
            title="Kenwood KMC011 5 Quart Chef Titanium Kitchen Machine, Stainless Steel"
            price={499}
            rating={4}
            image="https://m.media-amazon.com/images/I/71kj5nomj0L.__AC_SY300_SX300_QL70_FMwebp_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={346545446}
            title="Apple AirPods Pro Wireless Earbuds with MagSafe Charging Case. Active Noise Cancelling, Transparency Mode, Spatial Audio, Customizable Fit, Sweat and Water Resistant. Bluetooth Headphones for iPhone"
            price={159.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71bhWgQK-cL._AC_SX522_.jpg"
          />

          <Product
            id={346544446}
            title="Echo Dot (3rd Gen, 2018 release) - Smart speaker with Alexa - Charcoal"
            price={39.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61MZfowYoaL._AC_SX679_.jpg"
          />
          <Product
            id={3434344446}
            title="Amazfit GTS 2 Mini Smart Watch GPS Fitness Tracker for Men Women, Alexa Built-in, 14 Days Battery Life, 70+ Sports Modes, Blood Oxygen Heart Rate Sleep Monitor, AMOLED Screen, 5 ATM Waterproof-Black"
            price={99.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61dHtJrlcOL._AC_SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={345452346}
            title="SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black, QHD, 120Hz"
            price={999.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/818jj0DF-dL._AC_SX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
