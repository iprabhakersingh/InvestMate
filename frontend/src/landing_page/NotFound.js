
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container p-5 mb-5 mt-5">
      <div className="row">
        <div className="col-6 d-flex flex-column align-self-center">
          <h1 className="fs-4">404</h1>
          <p className="text-muted fs-5 mt-2">
            We couldn’t find the page you were looking <br />
            for Visit{" "}
            <Link to="/" style={{ textDecoration: "none", color: "#387ed1" }}>
              InvestMate’s home page
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}// import React from "react";

// function NotFound() {
//   return (
//     <div className="container p-5 mb-5">
//       <div className="row text-center">
//         <h1 className="mt-5">404 Not Found</h1>
//         <p>Sorry, the page you are looking for does not exist.</p>
//       </div>
//     </div>
//   );
// }

export default NotFound;