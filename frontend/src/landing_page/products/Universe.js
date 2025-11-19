import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The InvestMate Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img className="mb-3" style={{ height: "55px" }} src="media/images/goldenpi.png" alt="GoldenPi" />
          <p className="text-small text-muted">Our Bond trading platform <br></br>that is creating simple and transparent index funds to help you save for your goals.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img className="mb-3" style={{ height: "55px", width: "75%" }} src="media/images/sensibull.svg" alt="Sensibull" />
          <p className="text-small text-muted">Options trading platform that lets you <br></br>create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img className="mb-3" style={{ height: "55px" }} src="media/images/tijori.svg" alt="Tijori" />
          <p className="text-small text-muted">Investment research platform <br></br>that offers detailed insights on stocks,<br></br> sectors, supply chains, and more.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img className="mb-3" style={{ height: "55px" }} src="media/images/streak.png" alt="Streak" />
          <p className="text-small text-muted">Systematic trading platform<br></br> that allows you to create and backtest<br></br> strategies without coding.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img className="mb-3" style={{ height: "55px" }} src="media/images/smallcase.png" alt="Smallcase" />
          <p className="text-small text-muted">Thematic investment platform <br></br>that helps you invest in diversified <br></br>baskets of stocks on ETFs.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img className="mb-3" style={{ height: "55px" }} src="media/images/ditto.png" alt="Ditto" />
          <p className="text-small text-muted">Personalized advice on life<br></br> and health insurance. No spam<br></br> and no mis-selling.</p>
        </div>
        <a className="nav-link active" aria-current="page" href="http://localhost:3000/register">
          <button
            className="p-2 btn btn-primary fs-5 mt-5 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Signup Now
          </button>
        </a>
      </div>
    </div>
  );
}

export default Universe;