import React from "react";
import children_vaccination from '../assets/Children_Vaccination.svg'

const ChildVaccination = () => {
  return (
    <section>
    <div className="child_vaccination">
      <div className="container-fluid">
        <div className="container">
          <div className="row row_css">
            <div className="col-md-7">
              <h3 className="heading_child_css mb-0 mt-5 mt-md-0 mb-3 text-md-left text-lg-left">Children Vaccination</h3>
              <ul className="ul_css">
                <li className="para_child_css">
                    <p className="p_child_css">
                    Covovax vaccine is now available for Children of the age group 12+ yrs in Private 
                    Vaccination Center. The time span between first and second dose of Covovax is 21 days. 
                    Children can be administered with the second dose of Covovax within a month. 
                    </p>

                    <p className="p_child_css">
                    Covovax vaccine is now available for Children of the age group 12+ yrs in Private 
                    Vaccination Center. The time span between first and second dose of Covovax is 21 days. 
                    Children can be administered with the second dose of Covovax within a month. 
                    </p>
                </li>
              </ul>
              <a href="#" className="achore_css mb-2">Book Your Slot</a>
            </div>
            <div className="col-md-5 text-center">
              <img src={children_vaccination} alt="children_vaccination" className="img-fluid vaccine_css_img mb-2"/>
            </div>
        </div>
      </div>
      </div>
    </div>
    </section>
  );
};

export default ChildVaccination;
