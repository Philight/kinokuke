import React, { useState, useEffect, useLayoutEffect, useRef } from "react";

import ImageBanner from "../components/ImageBanner.js";
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
//	const [scrollTrigger, setScrollTrigger] = useState(performance.now());

	const sidebarRef = useRef(null);
	const sidebarPlaceholderRef = useRef(null);

	useEffect(() => {
		//window.scrollTo(0, 0)
		const rootElement = document.documentElement;
		let nodeStyle = window.getComputedStyle(rootElement);

		setNavHeight( parseInt(nodeStyle.getPropertyValue("--navigation-height").replace('px', '')) );
console.log(nodeStyle.getPropertyValue("--navigation-height"));
console.log( parseInt(nodeStyle.getPropertyValue("--navigation-height").replace('px', '')) );
	}, [])

    useLayoutEffect(() => {
        const onScroll = () => {
        	setScrollOffset(window.pageYOffset);
console.log("element top");
console.log(sidebarRef.current.getBoundingClientRect().top);
setSidebarOffSet(sidebarRef.current.getBoundingClientRect().top);
        };

        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

	useEffect(() => {
console.log("### element top - nav");
console.log(sidebarOffSet - navHeight);
console.log("#-- sidebarOffSet");
console.log(sidebarOffSet);
console.log("#-- nav");
console.log(navHeight);
		if ((sidebarOffSet - navHeight + 1) > 0) {
console.log("-- sidebarFixed false");
			setSidebarIsFixed(false);
		} else {
console.log("++ sidebarFixed true");
			setSidebarIsFixed(true);
		}
	}, [sidebarOffSet])

	const images = [
		{
			src: 'https://admin.domtera.rs/server//storage/site/galerija/nova-dimenzija-planinskih-kuca-2.jpeg'
		}
	];

	const replaceNewline = (textWithoutBreaks) => {
		let textWithBreaks = textWithoutBreaks;

		let stringChunks;
		if (textWithBreaks.includes("<br/>")) {
			stringChunks = textWithBreaks.split('<br/>');

		} else if (textWithBreaks.includes("<br />")) {
			stringChunks = textWithBreaks.split('<br />');
		}

console.log(textWithBreaks);
		return stringChunks;
	}

	return (
		<div className="gdpr-page__container">
			<ImageBanner 
				images={images}
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
					{/* replaceNewline(gdprText).map((paragraph, index) => {
						if (paragraph.replace(/\s/g, '').length) return (<p className="gdpr-page__paragraph">{paragraph}</p>);
					} ) */}

{/*					
					<div className="gdpr-page__content-main">
						<h1>dagdhfkjtrguyijnt4efaniduthwntyokjhreak6nkwreajl6hk4njakrtyehatakjdagdhfkjtrguyijnt4efaniduthwntyokjhreak6nkwreajl6hk4njakrtyehatakjdagdhfkjtrguyijnt4efaniduthwntyokjhreak6nkwreajl6hk4njakrtyehatakjdagdhfkjtrguyijnt4efaniduthwntyokjhreak6nkwreajl6hk4njakrtyehatakjdagdhfkjtrguyijnt4efaniduthwntyokjhreak6nkwreajl6hk4njakrtyehatakjdagdhfkjtrguyijnt4efaniduthwntyokjhreak6nkwreajl6hk4njakrtyehatakjdagdhfkjtrguyijnt4efaniduthwntyokjhreak6nkwreajl6hk4njakrtyehatakjdagdhfkjtrguyijnt4efaniduthwntyokjhreak6nkwreajl6hk4njakrtyehatakjdagdhfkjtrguyijnt4efaniduthwntyokjhreak6nkwreajl6hk4njakrtyehatakjdagdhfkjtrguyijnt4efaniduthwntyokjhreak6nkwreajl6hk4njakrtyehatakj
						</h1>
					</div>
*/}
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