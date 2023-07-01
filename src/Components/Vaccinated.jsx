import React from "react";
import Step1 from "../assets/Step_1.svg";
import Step2 from "../assets/Step_2.svg";
import Step3 from "../assets/Step_3.svg";

function Vaccinated() {
  return (
    <>
      <section className="mt-5 vaccination_stats">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
                
            </div>
            <div className="col-md-2">
                <button type="button" class="btn vaccination_stats_btn"> View More </button>
            </div>
            <div className="col-md-5">
                
            </div>
          </div>
        </div>
      </section>
      

      <section className="vaccinate_main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="vaccin_title d-flex justify-content-center">
                Get Vaccinated in 3 Easy Steps
              </h1>

              <div className="row">
                <div className="col-md-4 set_vaccine_card mb-2">
                  <a target="_blank" href="https://prod-cdn.preprod.co-vin.in/assets/pdf/05092023-User-Guide-Citizen-Registration.pdf">
                  <div class="card vaccin_card" style={{ width: "18rem" }}>
                    <img
                      src={Step1}
                      class="card-img-top img-fluid vaccin_card_img"
                      alt="Step1"
                    />
                    <div class="card-body vaccin_description_start">
                      <p class="card-text vaccin_description text-center">
                        Book an Appointment on <br></br> Co-WIN or Walk into any
                        Vaccination Center
                      </p>
                    </div>
                    <div class="card-body">
                      <p class="card-text text-center">
                        How to Book Your <br></br> Appointment on Co-WIN?
                      </p>
                    </div>
                  </div>
                  </a>
                </div>
                <div className="col-md-4 set_vaccine_card mb-2">
                  <a target="_blank" href="https://prod-cdn.preprod.co-vin.in/assets/pdf/Dos_and_Donts_for_Citizens.pdf">
                  <div class="card vaccin_card" style={{ width: "18rem" }}>
                    <img
                      src={Step2}
                      class="card-img-top img-fluid vaccin_card_img"
                      alt="Step1"
                    />
                    <div class="card-body vaccin_description_start">
                      <p class="card-text vaccin_description text-center">
                        Book an Appointment on <br></br> Co-WIN or Walk into any
                        Vaccination Center
                      </p>
                    </div>
                    <div class="card-body">
                      <p class="card-text text-center">
                        How to Book Your <br></br> Appointment on Co-WIN?
                      </p>
                    </div>
                  </div>
                  </a>
                </div>
                <div className="col-md-4 set_vaccine_card mb-2">
                  <a target="_blank" href="https://selfregistration.cowin.gov.in">
                  <div class="card vaccin_card" style={{ width: "18rem" }}>
                    <img
                      src={Step3}
                      class="card-img-top img-fluid vaccin_card_img vaccin_img_3"
                      alt="Step1"
                    />
                    <div class="card-body vaccin_description_start">
                      <p class="card-text vaccin_description text-center">
                        Book an Appointment on <br></br> Co-WIN or Walk into any
                        Vaccination Center
                      </p>
                    </div>
                    <div class="card-body">
                      <p class="card-text text-center">
                        How to Book Your <br></br> Appointment on Co-WIN?
                      </p>
                    </div>
                  </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Vaccinated;
