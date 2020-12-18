import React from 'react'

import Button from 'elements/Button'
import IconText from 'elements/parts/IconText'
export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-auto" style={{width:350}}>
                        <IconText/> <br/>
                        <a href="
                        " className="brand-tagline">
                            We kaboom your beauty holiday <br/> instantly and memorable
                        </a>
                    </div>
                    <div className="col-auto mr-5">
                        <h6 className="mt-2">For Beginners</h6>
                        <ul className="list-group listgroup-flush">
                            <li className="list-group-item">
                                <Button href="/register" type="link">New Account</Button>
                            </li>
                            <li className="list-group-item">
                                <Button href="/properties" type="link">Start Booking Room</Button>
                            </li>
                            <li className="list-group-item">
                                <Button href="/use-payments" type="link">Use Payments</Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2 mr-5">
                        <h6 className="mt-2">Explore Us</h6>
                        <ul className="list-group listgroup-flush">
                            <li className="list-group-item">
                                <Button href="/careers" type="link">Our Career</Button>
                            </li>
                            <li className="list-group-item">
                                <Button href="/privacy" type="link">Privacy</Button>
                            </li>
                            <li className="list-group-item">
                                <Button href="/terms" type="link">Terms & Condition</Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3 ">
                        <h6 className="mt-2">Connect Us</h6>
                        <ul className="list-group listgroup-flush">
                            <li className="list-group-item">
                                <Button isExternal href="/mailto:support@gmail.com" type="link">support.staycation@gmail.com</Button>
                            </li>
                            <li className="list-group-item">
                                <Button href="tel:+6325647451" type="link">084 - 445 - 4654</Button>
                            </li>
                            <li className="list-group-item">
                                <span>Staycation, Kemang Jakarta</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center copyrights">
                            Copyrights 2020  ▪   All Rights Reserved    ▪    Staycation  
                    </div>
                </div>
            </div>
        </footer>
    )
}
