import React from "react";
import vaccineimg from '../assets/free_covid_precaution_dose.svg'

const PreCovid = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="container">
          <div className="row row_css">
            <div className="col-md-7">
              <h3 className="heading_css mb-0 mt-5 mt-md-0">Free COVID Precaution Dose</h3>
              <p className="my-4 para_css"> Now Precaution dose for 18-59 age group free at Government Vaccination Center. </p>
              <a href="#" className="achore_css">Book Your Slot</a>
            </div>
            <div className="col-md-5 text-center">
              <img src={vaccineimg} alt="vaccineimg" className="img-fluid vaccine_css"/>
            </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default PreCovid;
