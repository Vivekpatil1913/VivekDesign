import React from "react";
import Banner from "../Components/Banner";
import Vaccinated from "../Components/Vaccinated";
import ChildVaccination from "../Components/ChildVaccination";
import VaccinateCenter from "../Components/VaccinateCenter"
import PreCovid from "../Components/PreCovid"
import Report from "../Components/Report"

function MainIndex() {
    return (
        <>
            {/* <TopHeader />
      <Header /> */}
            <Banner />
            <Vaccinated />
            <VaccinateCenter />
            <PreCovid />
            <Report />
            <ChildVaccination />
        </>
    );
}

export default MainIndex;