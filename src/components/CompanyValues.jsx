import { useState, useEffect, useLayoutEffect, useRef } from "react";

import Icon from "@components/graphic/Icon";
import SectionHeading from "@components/text/SectionHeading";
import SectionSubheading from "@components/text/SectionSubheading";
import Image from "@components/graphic/Image";
import Layer from "@components/graphic/Layer";
import Functions from "@components/util/Functions";

//import "@css/components/companyvalues.css";

const CompanyValues = ((props) => {
	let { className, title, text, icon, imageSrc, id } = props;

	const [scrollOffset, setScrollOffset] = useState(0);
	const [scrollDown, setScrollDown] = useState(null);
	const [windowInnerHeight, setWindowInnerHeight] = useState(0);

	const [isFixed, setIsFixed] = useState(false);
	const [isRevealed, setIsRevealed] = useState(false);
	const [showContent, setShowContent] = useState(false);

	const [moveContainer, setMoveContainer] = useState(false); 

	const [revealing, setRevealing] = useState(false); 
	const [covering, setCovering] = useState(false); 

	const containerRef = useRef(null);
	const iconRef = useRef(null);
	const overlayRef = useRef(null);
//	let overlayOpacity = 1;
	let overlayOpacityRef = useRef(null);

  useEffect(() => {
  	const posTop = containerRef.current.getBoundingClientRect().top;

	if (covering && posTop >= (windowInnerHeight*2/3)) {
		setCovering(false);
		setIsRevealed(false);
		setMoveContainer(false);
		setIsFixed(false);


	} else if (covering && posTop >= (windowInnerHeight/3) && posTop < (windowInnerHeight*2/3)) {
		const ratio = posTop / (windowInnerHeight*2/3);
		iconRef.current.style.top = 25+25*ratio+'%'; // 50% - 25%
		iconRef.current.style.transform = "translate(-50%, -50%) scale("+(0.5+0.5*ratio)+")" // scale 1 - 0.5

//		overlayRef.current.style.opacity = 0.35+0.55*ratio+''; // 0.9 - 0.35
		overlayOpacityRef.current = 0.45+0.45*ratio+''; // 0.9 - 0.35

	} else if ((covering || showContent) && posTop > 0 && posTop < (windowInnerHeight/3)) {
		setIsFixed(true);
		setCovering(true);
		setShowContent(false);

	} else if (posTop > 0 ) {
		setIsFixed(false);

		setIsRevealed(false);
		setShowContent(false);

	} else if (!showContent && posTop < 0 && posTop > (-windowInnerHeight/3)) {
		setMoveContainer(false);
		setIsFixed(true);

		setIsRevealed(true);
		setShowContent(false);

		// TOP position: 0 - windowInnerHeight / 2
		const ratio = -(posTop / (windowInnerHeight/3));

		iconRef.current.style.top = 50-25*ratio+'%'; // 50% - 25%
		iconRef.current.style.transform = "translate(-50%, -50%) scale("+(1-0.5*ratio)+")" // scale 1 - 0.5
//		overlayRef.current.style.opacity = 0.9-0.55*ratio+''; // 0.9 - 0.35
		overlayOpacityRef.current = 0.9-0.45*ratio+''; // 0.9 - 0.35

	} else if (posTop <= (-windowInnerHeight/3)
			&& posTop > (-windowInnerHeight*2/3)) {
		setShowContent(true);

	} else {
		setMoveContainer(true);
		setIsFixed(false);
	}

  }, [scrollOffset])

	useEffect(() => {
		setIsFixed(false);
		setIsRevealed(false);
		setShowContent(false);
		setCovering(false);
		setRevealing(false);
		setMoveContainer(false);
	}, [])

	useLayoutEffect(() => {
		const threshold = 0;
		let lastScrollY = window.pageYOffset;
		let ticking = false;

		const updateScrollDir = () => {
			const scrollY = window.pageYOffset;

			if (Math.abs(scrollY - lastScrollY) < threshold) {
			  ticking = false;
			  return;
			}

			setScrollDown(scrollY > lastScrollY ? true : false);

			lastScrollY = scrollY > 0 ? scrollY : 0;
			ticking = false;
		};

        const onScroll = () => {
    	    if (!ticking) {
		      window.requestAnimationFrame(updateScrollDir);
		      ticking = true;
		    }

        	setScrollOffset(window.pageYOffset);
	    };

        setWindowInnerHeight(window.innerHeight);

        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, [scrollDown]);

	return (
		<section 
			className={`company-values__c nav-visible ${moveContainer ? 'move-container' :''}`} 
			ref={containerRef} 
			data-id={id}
		>
			<div 
				className={`company-values__inner-container
					${isFixed ? 'scroll-fixed' : ''} 
					${showContent ? 'show-content' : ''}
					${isRevealed ? 'revealed' : ''}`}
			>
				<Image src={imageSrc} />
				<Layer className="company-values__overlay" style={{ opacity: overlayOpacityRef.current }}/>
				<Icon className="absolute-center" icon={icon} ref={iconRef} />
				<div className="company-values__content fill-parent absolute-center f-center f-col">
					<h2 className="company-values__title">{Functions.strReplaceNewline(title)}</h2>
					<h3 className="company-values__text text-newline">{Functions.strReplaceNewline(text)}</h3>
				</div>
			</div>
		</section>
	)
	
})


/*
export default React.forwardRef((props, ref) => (
  <CompanyValues {...props} innerRef={ref} />
));
*/
export default CompanyValues;