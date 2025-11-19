import React from 'react';

function Hero() {
  return (
    <div className="container mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero2.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1>Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <a className="nav-link active" aria-current="page" href="https://investmatedashboard.onrender.com/register">
          <button style={{ width: "20%", margin: "0 auto" }} className="p-2 btn btn-primary fs-5">
            Signup Now
          </button>
        </a>
      </div>
    </div>
  );
}

export default Hero;