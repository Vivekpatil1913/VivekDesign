import React from 'react'
import logo from "../assets/emblem-gov.svg"
const TopHeader = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row topheader" style={{ background: "#045d5d" }}>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-1">
                                <img style={{ width: "80%" }} src={logo} alt="" />
                            </div>
                            <div className="col">
                                <span> Ministry of Health and <br /> <span> Family Welfare</span></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 heder_btn">
                        <button type="button" class="btn header_a_btn mx-3 my-2">A+ </button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default TopHeader