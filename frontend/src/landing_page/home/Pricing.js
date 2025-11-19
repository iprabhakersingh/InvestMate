import React from 'react';

function Pricing() {
  return (
    <div className="container p-5">
      <div className="row mt-5">
        <div className="col-4 mt-5">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See Pricing{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-1"></div>
        <div className="col-6 mt-5">
          <div className="row mt-5">
            <img src="media/images/pricing&text2.png" alt="Pricing" style={{ transform: "scale(1.3)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;