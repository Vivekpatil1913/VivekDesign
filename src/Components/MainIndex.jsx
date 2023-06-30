import React from 'react'
import Header from './Header'
import TopHeader from './TopHeader'
import Vaccinated from './Vaccinated'
import Banner from './Banner'

function MainIndex() {
    return (
        <>
            <TopHeader />
            <Header />
            <Banner />
            <Vaccinated />
        </>
    )
}

export default MainIndex