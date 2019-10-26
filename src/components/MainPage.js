import React, { useState } from 'react';
import logo from '../images/logo.png'
import no from '../images/no.png'
import noA from '../images/noA.png'
import yes from '../images/yes.png'
import yesA from '../images/yesA.png'

const MainPage = function  () {
    const [active, setActive] = useState(1);

    return (
        <>
            <div className="z-header">
                <img className="z-logo" src={logo} alt=""/>
            </div>
            <div className="z-content">
                <div className="z-title"> Choose the plan that’s right for you</div>
                <div className="z-subtitle">Downgrade or upgrade at any time</div>
                <div className="z-row-cards">
                    <div className={`z-card ${active === 1 ? 'active' : ''}`} onClick={() => setActive(1)}>Basic</div>
                    <div className={`z-card ${active === 2 ? 'active' : ''}`} onClick={() => setActive(2)}>Standart</div>
                    <div className={`z-card ${active === 3 ? 'active' : ''}`} onClick={() => setActive(3)}>Premium</div>
                </div>
                <div className="z-table">
                    <div className="z-table-row">
                        <div className="z-item-1">Monthly price after free month ends on 11/24/19</div>
                        <div className={`z-item-2 ${active === 1 ? 'active' : ''}`} >EUR7.99</div>
                        <div className={`z-item-3 ${active === 2 ? 'active' : ''}`}>EUR9.99</div>
                        <div className={`z-item-4 ${active === 3 ? 'active' : ''}`}>EUR11.99</div>
                    </div>
                    <div className="z-table-row">
                        <div className="z-item-1">HD available</div>
                        <div className="z-item-2">
                            <img src={active === 1 ? noA : no} alt=""/>
                        </div>
                        <div className="z-item-3">
                            <img src={active === 2 ? yesA : yes} alt=""/>
                        </div>
                        <div className="z-item-4">
                            <img src={active === 3 ? yesA : yes} alt=""/>
                        </div>
                    </div>
                    <div className="z-table-row">
                        <div className="z-item-1">Ultra HD available</div>
                        <div className="z-item-2">
                            <img src={active === 1 ? noA : no} alt=""/>
                        </div>
                        <div className="z-item-3">
                            <img src={active === 2 ? noA : no} alt=""/>
                        </div>
                        <div className="z-item-4">
                            <img src={active === 3 ? yesA : yes} alt=""/>
                        </div>
                    </div>
                    <div className="z-table-row">
                        <div className="z-item-1">Screens you can watch on at the same time</div>
                        <div className={`z-item-2 ${active === 1 ? 'active' : ''}`} >1</div>
                        <div className={`z-item-3 ${active === 2 ? 'active' : ''}`}>2</div>
                        <div className={`z-item-4 ${active === 3 ? 'active' : ''}`}>4</div>
                    </div>
                    <div className="z-table-row">
                        <div className="z-item-1">Watch on your laptop, TV, phone and tablet</div>
                        <div className="z-item-2">
                            <img src={active === 1 ? yesA : yes} alt=""/>
                        </div>
                        <div className="z-item-3">
                            <img src={active === 2 ? yesA : yes} alt=""/>
                        </div>
                        <div className="z-item-4">
                            <img src={active === 3 ? yesA : yes} alt=""/>
                        </div>
                    </div>
                    <div className="z-table-row">
                        <div className="z-item-1">Unlimited movies and TV shows</div>
                        <div className="z-item-2">
                            <img src={active === 1 ? yesA : yes} alt=""/>
                        </div>
                        <div className="z-item-3">
                            <img src={active === 2 ? yesA : yes} alt=""/>
                        </div>
                        <div className="z-item-4">
                            <img src={active === 3 ? yesA : yes} alt=""/>
                        </div>
                    </div>
                    <div className="z-table-row">
                        <div className="z-item-1">Cancel anytime</div>
                        <div className="z-item-2">
                            <img src={active === 1 ? yesA : yes} alt=""/>
                        </div>
                        <div className="z-item-3">
                            <img src={active === 2 ? yesA : yes} alt=""/>
                        </div>
                        <div className="z-item-4">
                            <img src={active === 3 ? yesA : yes} alt=""/>
                        </div>
                    </div>
                    <div className="z-table-row">
                        <div className="z-item-1">First month free</div>
                        <div className="z-item-2">
                            <img src={active === 1 ? yesA : yes} alt=""/>
                        </div>
                        <div className="z-item-3">
                            <img src={active === 2 ? yesA : yes} alt=""/>
                        </div>
                        <div className="z-item-4">
                            <img src={active === 3 ? yesA : yes} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="z-subtext">
                    HD and Ultra HD availability subject to your Internet service and device capabilities. Not all content available in HD or Ultra HD. See Terms of Use for more details.
                </div>

                <div className='text-center'>
                    <button className="z-btn">CONTINUE</button>
                </div>

            </div>
        </>
    );
}

export default MainPage