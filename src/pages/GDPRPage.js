import React, { useState, useEffect, useLayoutEffect, useRef } from "react";

import ImageBanner from "../components/media/ImageBanner.js";
import HeadingWithBackground from "../components/text/HeadingWithBackground.js";

import "./../assets/css/pages/gdprpage.css";

import gdprHTMLText from "../data/gdpr.js";
import gdprCookiesHTMLText from "../data/gdpr_cookies.js";

const GDPRPage = (props) => {
//	let { className, redirectUrl, socialFacebookUrl, socialInstagramUrl, title, subtitle, description, subdescription } = props;
	
	const [currentTitle, setCurrentTitle] = useState("Zásady ochrany osobných údajov");
	const [currentPage, setCurrentPage] = useState(0);
	const [contentPages, setContentPages] = useState({
		0: "Zásady ochrany osobných údajov",
		1: "Pravidlá cookies"
	});
	const [navHeight, setNavHeight] = useState(0);
    const [sidebarOffSet, setSidebarOffSet] = useState(0);
    const [sidebarIsFixed, setSidebarIsFixed] = useState(false);

    const [scrollOffset, setScrollOffset] = useState(0);

	const sidebarRef = useRef(null);
	const sidebarPlaceholderRef = useRef(null);

	useEffect(() => {
		const rootElement = document.documentElement;
		let nodeStyle = window.getComputedStyle(rootElement);

		setNavHeight( parseInt(nodeStyle.getPropertyValue("--navigation-height").replace('px', '')) );
	}, [])

    useLayoutEffect(() => {
        const onScroll = () => {
        	setScrollOffset(window.pageYOffset);

			setSidebarOffSet(sidebarRef.current.getBoundingClientRect().top);
        };

        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

	useEffect(() => {
		if ((sidebarOffSet - navHeight + 1) > 0) {
			setSidebarIsFixed(false);
		} else {
			setSidebarIsFixed(true);
		}
	}, [sidebarOffSet])

	const images = [
		{
			src: 'https://static.vecteezy.com/system/resources/previews/002/822/354/non_2x/abstract-geometric-lines-connection-and-social-network-concept-with-lines-and-dots-minimalistic-design-vector.jpg'
		}
	];

	return (
		<div className="gdpr-page__container">
			<ImageBanner 
				images={images}
				isBkg
			/>

			<div className="gdpr-page__page-content section">
				<HeadingWithBackground heading={contentPages[currentPage]} />

				<div className={`gdpr-page__sidebar-wrapper `} ref={sidebarRef}>
					<div className={`gdpr-page__sidebar ${sidebarIsFixed ? 'fixed' :''}`} >
						<ul className="gdpr-page__navigation">
							<li className={`gdpr-page__navigation-item ${currentPage==0 ? 'selected' :''}`} onClick={() => setCurrentPage(0)}>Ochrana osobných údajov</li>
							<li className={`gdpr-page__navigation-item ${currentPage==1 ? 'selected' :''}`} onClick={() => setCurrentPage(1)}>Pravidlá cookies</li>
						</ul>
					</div>
					<div className={`gdpr-page__sidebar placeholder`} ref={sidebarPlaceholderRef} style={{ display: `${sidebarIsFixed ? 'block' : 'none'}` }}>
						<ul className="gdpr-page__navigation">
							<li className="gdpr-page__navigation-item" onClick={() => setCurrentPage(0)}>Ochrana osobných údajov</li>
							<li className="gdpr-page__navigation-item" onClick={() => setCurrentPage(1)}>Pravidlá cookies</li>
						</ul>
					</div>
				</div>

				<div className="gdpr-page__inner-content">
					{ currentPage==0 && <div className="gdpr-page__content main"
						dangerouslySetInnerHTML={{ __html: gdprHTMLText }} /> }
					{ currentPage==1 && <div className="gdpr-page__content cookies"
						dangerouslySetInnerHTML={{ __html: gdprCookiesHTMLText }} /> }
				</div>
			</div>
		
		</div>
	)
}

export default GDPRPage;