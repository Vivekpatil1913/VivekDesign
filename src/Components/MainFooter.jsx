import React from 'react'
import middle_img from "../assets/middle-top2.svg"
const MainFooter = () => {
    return (
        <>
            <div className='d-flex justify-content-between align-items-center px-5 py-2 footer-bottom text-white'>
                <div>
                    <p>Copyright &copy; 2021 Co-WIN. All Rights Reserved</p>
                </div>
                <div>
                   <img src={middle_img} alt="" style={{ height: "60px" }} />
                </div>
                <div>
                    <p>Terms of Service | Privacy Policy</p>
                </div>
            </div>
        </>
    )
}

export default MainFooter