import React, { useLayoutEffect, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import KinoKukeLogo from "./KinoKukeLogo.js";
import Icon from "./Icon.js";
//import SectionHeading from "./SectionHeading.js";
//import HeadingUnderline from "./HeadingUnderline.js";
//import SectionSubheading from "./SectionSubheading.js";

const NavBar = (props) => {
//	let { className, redirectUrl, socialFacebookUrl, socialInstagramUrl, title, subtitle, description, subdescription } = props;


    const [scrollOffset, setScrollOffset] = useState(0);
    const prevScrollOffset = usePrevious(scrollOffset);

    const [scrollDown, setScrollDown] = useState(false);
	const navRef = useRef(null);

    const [submenuShown, setSubmenuShown] = useState(false);

	function usePrevious(value) {
	  const ref = useRef();
	  useEffect(() => {
	    ref.current = value;
	  });
	  return ref.current;
	}

    useEffect(() => {
        if (prevScrollOffset < scrollOffset && scrollOffset > 100) { 
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
   		setSubmenuShown(prevValue => !prevValue);
   	}

   	const hideMenu = () => {
   		window.scrollTo(0, 0);
		setTimeout(() => { window.scrollTo(0, 0); }, 100);
   		setSubmenuShown(false);
   	}

	return (
		<div className={`nav-bar__container ${submenuShown ? 'submenu-shown' :''}`}>
			<div className={scrollDown ? 'nav-bar__wrapper hidden' : 'nav-bar__wrapper'} ref={navRef}>
				<Link to="/v2" onClick={hideMenu}><KinoKukeLogo className="menu-closed" /><KinoKukeLogo blackFill className="menu-open" /></Link>
				<div style={{display: 'flex', alignItems: 'center'}}>
					<Icon 
						icon="menu-thick"
						className="burger-menu-closed show-mobile"
						onClick={handleBurgerShow}
					/>
					<Icon 
						icon="x-mark"
						className="burger-menu-open show-mobile"
						onClick={handleBurgerShow}
					/>
				</div>
				{/*scrollOffset}{prevScrollOffset}*/}
				<nav className="nav-bar__navigation">
					<ul className="nav-bar__navigation-container left" data-level="1">
						<li className="nav-bar__navigation-item" data-level="1">
							<Link to="/v2/models" onClick={hideMenu}>
							<span className="nav-bar__navigation-item-label">MODELY</span>
							</Link>
						</li>
						<li className="nav-bar__navigation-item" data-level="1">
							<Link to="/v2/process" onClick={hideMenu}>
							<span className="nav-bar__navigation-item-label">PROCES</span>
							</Link>
						</li>
						<li className="nav-bar__navigation-item" data-level="1">
							<Link to="/v2" onClick={hideMenu}>
							<span className="nav-bar__navigation-item-label">O KINOKUKE</span>
							</Link>
						</li>
						<li className="nav-bar__navigation-item" data-level="1">
							<Link to="/v2" onClick={hideMenu}>
							<span className="nav-bar__navigation-item-label">NOVINKY</span>
							</Link>
						</li>
						<li className="nav-bar__navigation-item" data-level="1">
							<Link to="/v2" onClick={hideMenu}>
							<span className="nav-bar__navigation-item-label">KONTAKT</span>
							</Link>
						</li>
						<li className="nav-bar__navigation-item" data-level="1">
							<Link to="/">
							<span className="nav-bar__navigation-item-label">V1</span>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default NavBar;