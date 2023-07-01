import React from "react";
import logo from "../assets/emblem-gov.svg";
const TopHeader = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row topheader" style={{ background: "#045d5d" }}>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6 d-flex p-1">
                <img src={logo} alt="logo" className="set_head_logo" />
              
                <span>
                  {" "}
                  Ministry of Health and <br /> <span> Family Welfare</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4 heder_btn">
            <button type="button" class="btn header_a_btn my-2">
              A+{" "}
            </button>
            <button type="button" class="btn header_a_btn mx-2 my-2">
              A{" "}
            </button>
            <button type="button" class="btn header_a_btn my-2">
              A-{" "}
            </button>
          </div>
          <div className="col-md-2">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
