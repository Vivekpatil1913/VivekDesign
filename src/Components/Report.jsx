import React from 'react'
import report_img from "../assets/reports-aefi.svg";

export default function Report() {
  return (
    <section className="vaccinate_main">
    <div className="container">
      <div className="row">
        <div className="col-md-12">

          <div className="row">
            <div className="col-md-6 mb-2">
                <img
                    src={report_img}
                    class="img-fluid report_img"
                    alt="Step1"
                />
            </div>
            <div className="col-md-6 mb-2">
                <h1 className="vaccin_title my-4">
                    Report Side Effect
                </h1>
                <p className='report_para my-4'>
                    If you have experienced any side effect after COVID-19 vaccination, it can be reported on Co-WIN using your registered mobile number.
                </p>
                <button type="button" class="btn report_btn"> Report Now </button>
              
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
