import React from 'react'
import logo from "../assets/new-logo.svg"
import { Link } from 'react-router-dom'
import TopHeader from './TopHeader'
const Header = () => {
    return (


        <div className='sticky-top'>
            <TopHeader />
            <nav class="navbar navbar-expand-lg " style={{ background: "#017e7e" }} >
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/"><img src={logo} alt="" /></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                            <li class="nav-item mx-3">
                                <Link class="nav-link active li_color text-uppercase" aria-current="page" to="/">ABHA<span className='sub_name'>(Health ID)</span> </Link>
                            </li>
                            <li class="nav-item mx-3">
                                <Link class="nav-link active li_color text-uppercase" aria-current="page" to="/"> Dashboard </Link>
                            </li>
                            <li class="nav-item mx-3">
                                <Link class="nav-link active li_color text-uppercase" aria-current="page" to="/certificate"> Verify Certificate </Link>
                            </li>
                            <li class="nav-item mx-3">
                                <Link class="nav-link active li_color text-uppercase" aria-current="page" to="/faq"> FAQ </Link>
                            </li>
                            <li class="nav-item mx-3">
                                <Link class="nav-link active li_color text-uppercase" aria-current="page" to="/partners "> Partners </Link>
                            </li>

                            <button type="button" class="btn regi_btn mx-3">Register / Sign In </button>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Header