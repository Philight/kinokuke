import React, { useState, useEffect, useRef }  from "react";
import { Link } from "react-router-dom";

import KinoKukeLogo from "./KinoKukeLogo.js";
import Icon from "./Icon.js";

import "./../assets/css/components/footer.css";

const Footer = (props) => {
//	let { className, redirectUrl, socialFacebookUrl, socialInstagramUrl, title, subtitle, description, subdescription } = props;
	
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (window.innerWidth < 768) { setIsMobile(true); }
	}, [])

	return (
		<div className="footer__container section">
			<nav className="footer__navigation">
				<ul className="footer__navigation-container left" data-level="1">
					<li className="footer__navigation-item" data-level="1">
						<Link to="/">
							Privacy Policy
						</Link>
					</li>					
					<li className="footer__navigation-item" data-level="1">
						<Link to="/">
							Terms of Use
						</Link>
					</li>		
					<li className="footer__navigation-item" data-level="1">
					<Link to="/design/features">
						DIZAJN
					</Link>
					</li>
					<li className="footer__navigation-item" data-level="1">
					<Link to="/process">
						PROCES
					</Link>
					</li>	
				</ul>
				<ul className="footer__navigation-container right" data-level="1">
					<li className="footer__navigation-item" data-level="1">
					<Link to="/about">
						O NÁS
					</Link>
					</li>
					<li className="footer__navigation-item" data-level="1">GALÉRIA</li>
					<li className="footer__navigation-item" data-level="1">KONTAKT</li>
{/*
					<li className="footer__navigation-item" data-level="1">
						<Link to="/v2">
							V2
						</Link>
					</li>
*/}
				</ul>
			</nav>
			<div className="footer__bottom">
				<div className="footer__logo-slogan">
					<KinoKukeLogo isWhite /> 
					{isMobile && <span className="footer__logo-slogan-text">Lepší Zážitok.<br/>Lepší Domov.<br/><span>Lepší Život</span></span>}
					{!isMobile && <span className="footer__logo-slogan-text">Lepší Zážitok. Lepší Domov. <span>Lepší Život</span></span>}
				</div>
				<div className="footer__social">
					<Icon icon="facebook" className="facebook" />
					<Icon icon="instagram" className="instagram" />
					<Icon icon="youtube" className="youtube" />
					<Icon icon="linkedin" className="linkedin" />
				</div>
			</div>
			<div className="footer-copyright">
				Copyright © 2022 KK KINO KUKE. All rights reserved.
			</div>
		</div>
	)
}

export default Footer;