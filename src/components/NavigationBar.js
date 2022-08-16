import React, { useLayoutEffect, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import KinoKukeLogo from "./KinoKukeLogo.js";
import Icon from "./Icon.js";
import SectionHeading from "./SectionHeading.js";
import HeadingUnderline from "./HeadingUnderline.js";
import SectionSubheading from "./SectionSubheading.js";

const NavigationBar = (props) => {
//	let { className, redirectUrl, socialFacebookUrl, socialInstagramUrl, title, subtitle, description, subdescription } = props;

	const [isMobile, setIsMobile] = useState(false);

    const [scrollOffset, setScrollOffset] = useState(0);
    const prevScrollOffset = usePrevious(scrollOffset);

    const [scrollDown, setScrollDown] = useState(false);

	const navRef = useRef(null);

    const [hideNavigation, setHideNavigation] = useState(false);
    const [menuShown, setMenuShown] = useState(false);
    const [submenuShown, setSubmenuShown] = useState(false);


	function usePrevious(value) {
	  const ref = useRef();
	  useEffect(() => {
	    ref.current = value;
	  });
	  return ref.current;
	}

	useEffect(() => {
		if(window.innerWidth < 768) {
			setIsMobile(true);
		}

		const closeNav = (e) => {
console.log('click');
console.log(e.target);
			if (!e.target.closest('.navigation-bar__wrapper ') || e.target.closest('.navigation-bar__link')) {
				setMenuShown(false);
				setSubmenuShown(false);
			}
		}

        window.addEventListener('click', closeNav, { passive: true });
		//document

        return () => window.removeEventListener('click', closeNav);
	}, [])

	useEffect(() => {
		window.addEventListener('hidenavigation', (e) => {
			console.log(e.detail);
			setHideNavigation(e.detail);
		});

		return () => window.removeEventListener('hidenavigation');
	}, [])

    useEffect(() => {
        //if (prevScrollOffset < scrollOffset && scrollOffset > 100) { 
        if (scrollOffset > 100) { 
        	setScrollDown(true);
        } else { 
        	setScrollDown(false);
        }
        //if(prevScrollOffset.setScrollOffset !== setScrollOffset) {

         // process here
        //}
    }, [scrollOffset])

    //useEffect(() => {
    useLayoutEffect(() => {
        const onScroll = () => {
        	setScrollOffset(window.pageYOffset);
        };

        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, []);


   	const handleBurgerShow = () => {
   		if (menuShown) {
   			setMenuShown(false); 
   			setSubmenuShown(false);

   		}  else { setMenuShown(true); }
   		//setMenuShown(prevValue => !prevValue);
   	}

   	const navSubmenuLabel = (
		<Link to="/design/features" className={`navigation-bar__link`}>
			<span className="navigation-bar__navigation-item-label" 
				onMouseEnter={() => setSubmenuShown(true)} 
				onClick={() => setSubmenuShown(true)}
			>
			dizajn<Icon icon="chevron-bold-bottom"/>
			</span>
		</Link>
   	);

   	const LinkWrap = ({ link, className, children }) => (
//   		!isMobile ? 
			<Link to={link} className={className}>
				{children}
			</Link>
//		: children
   	);

	return (
		<div className={`
			navigation-bar__container ${menuShown ? 'menu-shown' :''} 
			${submenuShown ? 'submenu-shown' :''}
			${hideNavigation ? 'hidden' :''}
		`}>
			<div className={`navigation-bar__wrapper ${scrollDown ? 'scrolling' : ''}`} ref={navRef}>
				<Link to="/" className="logo-container navigation-bar__link">
					<KinoKukeLogo />
					<KinoKukeLogo isWhite />
				</Link>
				<li className="navigation-bar__navigation-item findyourhome show-mobile" data-level="1">
					<Link to="/findyourhome" className="navigation-bar__link">
					<span className="navigation-bar__navigation-item-label">NÁJDI SVOJ DOMOV</span>
					</Link>
				</li>	
				
				<div style={{display: 'flex', alignItems: 'center'}}>
					<Icon 
						icon="menu-medium"
						className="burger-menu closed show-mobile"
						onClick={handleBurgerShow}
					/>
					<Icon 
						icon="x-mark-oval"
						className="burger-menu open show-mobile"
						onClick={handleBurgerShow}
					/>
				</div>

				<nav className="navigation-bar__navigation">
					<ul className="navigation-bar__navigation-container left" data-level="1">
						<li className={`navigation-bar__navigation-item has-child ${submenuShown ? 'selected' :''}`} 
							data-level="1"
						>
							<LinkWrap link="/design/features" className={`navigation-bar__link`}>
								<span className="navigation-bar__navigation-item-label" 
									//onMouseEnter={() => setSubmenuShown(true)} 
									//onClick={() => setSubmenuShown(true)}
								>
									dizajn
{/*
									<Icon icon="chevron-bold-bottom"/>
*/}
								</span>
							</LinkWrap>
							{/*
								<ul className={`navigation-bar__navigation-container section`} data-level="2"
									onMouseLeave={() => setSubmenuShown(false)}
								>
									<li className="navigation-bar__navigation-item" data-level="2">
									<Link to="/design/features" className="navigation-bar__link">
										<SectionHeading heading="dizajn v kinokuke" />
										<HeadingUnderline color="#fff" />
										<SectionSubheading subheading="Ako to robíme v Kinokuke a čím sa riadíme" />
									</Link>
									</li>
									<li className="navigation-bar__navigation-item" data-level="2">
									<Link to="/design/studio" className="navigation-bar__link">
										<SectionHeading heading="dizajn štúdio" />
										<HeadingUnderline color="#fff" />
										<SectionSubheading subheading="Personalizované riešenia pre každého" />
									</Link>
									</li>									
								</ul>
							*/}
						</li>
						<li className="navigation-bar__navigation-item" data-level="1">
							<Link to="/process" className="navigation-bar__link">
							<span className="navigation-bar__navigation-item-label">proces</span>
							</Link>
						</li>
{/*						
						<li className="navigation-bar__navigation-item" data-level="1">
							<span className="navigation-bar__navigation-item-label">novinky</span>
						</li>
*/}
						<li className="navigation-bar__navigation-item findyourhome show-desktop" data-level="1">
							<Link to="/findyourhome" className="navigation-bar__link">
							<span className="navigation-bar__navigation-item-label">NÁJDI SVOJ DOMOV</span>
							</Link>
						</li>						
					</ul>
					<ul className="navigation-bar__navigation-container right" data-level="1">
						<li className="navigation-bar__navigation-item" data-level="1">
							<Link to="/about" className="navigation-bar__link">
							<span className="navigation-bar__navigation-item-label">o nás</span>
							</Link>
						</li>
						<li className="navigation-bar__navigation-item" data-level="1">
							<Link to="/gallery" className="navigation-bar__link">
							<span className="navigation-bar__navigation-item-label">galéria</span>
							</Link>
						</li>
						<li className="navigation-bar__navigation-item" data-level="1">
							<Link to="/contact" className="navigation-bar__link">
							<span className="navigation-bar__navigation-item-label">kontakt</span>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default NavigationBar;