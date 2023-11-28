import React from "react";

export default function EEfilterBar() {
  const handleMouseOver = (e) => {
    e.currentTarget.style.color = "#03b2cb";
    e.currentTarget.style.borderColor = "#03b2cb";
    e.currentTarget.style.transition =
      "color 0.2s ease-in-out, border-color 0.3s ease-in-out";
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.color = "";
    e.currentTarget.style.borderColor = "";
    e.currentTarget.style.transition =
      "color 0.2s ease-in-out, border-color 0.3s ease-in-out";
  };
  return (
    <>
      <div className=" pt-3  justify-content-center align-items-center row desktop mw-100">
        <div className="col-3 col-md-2 ps-4 ">
          <button
            className="btn d-flex text-white align-items-center justify-self-start py-2 rounded-5 align-self-start"
            style={{
              backgroundColor: "#151618",
              border: "1px solid #303133",
              fontSize: "16px",
              fontWeight: "lighter",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#03b2cb")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#151618")
            }
          >
            <img
              src="https://posh-b2.s3.us-east-2.amazonaws.com/filter.svg"
              alt=""
              className="img-fluid"
              style={{ width: "18px" }}
            />
            <p className="ps-3 m-0 pe-2 hideable">FILTER</p>
          </button>
        </div>

        <div className="d-flex justify-content-start align-items-center pe-5 col-9 col-md-10 text-white filter-input">
          <div className="d-flex justify-content-center ps-3">
            <h4
              className="me-4 pb-1"
              style={{
                borderBottom: "1px solid #fff",
                fontSize: "30px",
                fontWeight: "900",
              }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Trending
            </h4>
            <h4
              className="me-4 pb-1"
              style={{
                borderBottom: "1px solid #fff",
                fontSize: "30px",
                fontWeight: "900",
              }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              This Week
            </h4>
            <p className="me-4 " style={{ fontWeight: "lighter" }}>
              in
            </p>
            <h4
              className="pb-1"
              style={{
                borderBottom: "1px solid #fff",
                fontSize: "30px",
                fontWeight: "900",
              }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              New York City
            </h4>
          </div>
        </div>
      </div>

      <div className="phones flex-nowrap  row align-items-center justify-content-center">
        <div className="col-6 text-center py-2 border-right">
          <i class="fa-solid fa-star"></i> <span>FEATURED</span>
        </div>
        <div className="col-6 text-center py-2">
          <i class="fa-solid fa-filter"></i> <span>FILTER</span>
        </div>
      </div>
    </>
  );
}
