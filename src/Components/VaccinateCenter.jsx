import React from "react";

export default function VaccinateCenter() {
  return (
    <>
      <section>
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md-12">
              <h1 className="vaccin_title d-flex justify-content-center">
                Search Your Nearest Vaccination Center
              </h1>
              <p className="vaccin_center_para d-flex justify-content-center">
                Get a preview list of the nearest centers and check availability
                of vaccination slots
              </p>
              <a
                href="https://selfregistration.cowin.gov.in"
                className="vaccian_anchor d-flex justify-content-center mb-4"
              >
                Login to book your slot
              </a>

              <div className="row">
                <div className="col-md-12">
                  <ul class="nav nav-pills mb-3 d-flex justify-content-center" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        By District
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        By PIN
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-contact"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        On the Map
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content" id="pills-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <div className="row tab_content_set">
                        <div className="col-md-5 mb-2">
                            <select class="form-select select_box" aria-label="Default select example">
                                <option selected>Select Your State</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Gujrat">Gujrat</option>
                                <option value="MP">MP</option>
                            </select>
                        </div>
                        <div className="col-md-5 mb-2">
                            <select class="form-select select_box" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-md-2 mb-2">
                            <button type="button" class="btn search_btn">Search</button>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <div className="row tab_content_set_2">
                        <div className="col-md-8 mb-2">
                        <input type="text" className="text_pin" id="fname" name="fname" placeholder="Enter Your PIN"></input>
                        </div>
                        <div className="col-md-4 mb-2">
                            <button type="button" class="btn search_btn">Search</button>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                    >
                      <div className="row tab_content_set_2">
                        <div className="col-md-8">
                        <input type="text" className="text_pin" id="fname" name="fname" placeholder="Enter Your PIN"></input>
                        </div>
                        <div className="col-md-4">
                            <button type="button" class="btn search_btn">Search</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
