import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <Container fluid className='footerContainer py-5'>

                <Row>

                    <Col md={2}>
                        <h4 className='footer-heading-h4'>VACCINATION SERVICES</h4>
                        <hr className='footer-heading-hr' />
                        <ul className='footer-ul'>
                            <li> <Link to="#">Register Members </Link></li>
                            <li> <Link to="#">Search Vaccination Centers </Link></li>
                            <li> <Link to="#">Book Vaccination Slots </Link></li>
                            <li> <Link to="#">Manage Appointments </Link></li>
                            <li> <Link to="#">Download Certificate </Link></li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h4 className='footer-heading-h4'>PLATFORMS</h4>
                        <hr className='footer-heading-hr' />
                        <ul className='footer-ul'>
                            <li> <Link to="#">Co-WIN International </Link></li>
                            <li> <Link to="#">Vaccinator </Link></li>
                            <li> <Link to="#">Department Login </Link></li>
                            <li> <Link to="#">Verify Certificates </Link></li>
                            <li> <Link to="#">Vaccination Statistics </Link></li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h4 className='footer-heading-h4'>RESOURCES</h4>
                        <hr className='footer-heading-hr' />
                        <ul className='footer-ul'>
                            <li> <Link to="#">How To Get Vaccinated </Link></li>
                            <li> <Link to="#">Do's and Dont's </Link></li>
                            <li> <Link to="#">Overview </Link></li>
                            <li> <Link to="#">API Guidelines </Link></li>
                            <li> <Link to="#">Open API's </Link></li>
                            <li> <Link to="#">Grievance Guidelines </Link></li>
                        </ul>
                    </Col>

                    <Col md={6}>
                        <Row>
                            <Col md={5} >
                                <h4 className='footer-heading-h4'>SUPPORT</h4>
                                <hr className='footer-heading-hr' />
                                <ul className='footer-ul'>
                                    <li> <Link to="#">Frequently Asked Questions </Link></li>
                                    <li> <Link to="#">Certificate Corrections </Link></li>
                                </ul>

                            </Col>
                            <Col md={{ span: 5, offset: 1 }} >
                                <h4 className='footer-heading-h4'>CONTACT US</h4>
                                <hr className='footer-heading-hr' />
                                <ul className='footer-ul'>
                                    <li> <Link to="#">Helpline: +91-11-23978046 (Toll Free - 1075 ) </Link></li>
                                    <li> <Link to="#">Technical Helpline: 0120-4783222 </Link></li>
                                </ul>
                            </Col>
                        </Row>
                        <hr style={{ width: "100%", border: "1px solid black" }} />
                        <Row>
                            <Col md={3}>
                                <h4 className='footer-heading-h4'>CHILD</h4>
                                <ul className='footer-ul'>
                                    <li> <Link to="#">1098 </Link></li>
                                </ul>
                            </Col>
                            <Col md={3}>
                                <h4 className='footer-heading-h4'>MENTAL HEALTH</h4>
                                <ul className='footer-ul'>
                                    <li> <Link to="#">08046110007 </Link></li>
                                </ul>
                            </Col>
                            <Col md={3}>
                                <h4 className='footer-heading-h4'>SENIOR CITIZENS</h4>
                                <ul className='footer-ul'>
                                    <li> <Link to="#">14567 </Link></li>
                                </ul>
                            </Col>
                            <Col md={3}>
                                <h4 className='footer-heading-h4'>NCW</h4>
                                <ul className='footer-ul'>
                                    <li> <Link to="#">7827170170 </Link></li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>


            </Container>
        </>
    )
}

export default Footer