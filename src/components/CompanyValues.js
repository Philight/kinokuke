import React, { useState, useEffect, useLayoutEffect, useRef, createRef } from "react";

import Icon from "./Icon.js";
import SectionHeading from "./SectionHeading.js";
import SectionSubheading from "./SectionSubheading.js";

import "./../assets/css/components/companyvalues.css";

//import kinokukelogo from "./../assets/images/kinokuke-logo.png";
/*
class CompanyValues extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			scrollOffset: 0,
			containerTop: 0,
			containerBot: 0,
			windowInnerHeight: 0,
			containerRef: createRef(),
			enableFixed: ''
		}
		
		//this.scrollOffset = 0;
		//this.containerTop = 0;
		//this.containerBot = 0;
		//this.windowInnerHeight = 0;

		this.containerRef = React.createRef();
		
	}

	componentDidMount() {
        const onScroll = () => {
    		this.setState({ 
				scrollOffset: window.pageYOffset
			});
        };

		this.setState({ 
			windowInnerHeight: window.innerHeight 
		});

        window.addEventListener('scroll', onScroll, { passive: true });
	}

	componentDidUpdate(prevProps, prevState) {

		if (prevState.scrollOffset !== this.state.scrollOffset) {
			console.log('bounding top:' + this.state.containerRef.current.getBoundingClientRect().top);
			console.log('bounding bot:' + this.state.containerRef.current.getBoundingClientRect().bottom);
			//console.log('window.pageYOffset:' + window.pageYOffset);
			//console.log('screen.height:' + screen.height);
			//console.log('window.innerHeight:' + window.innerHeight);

			if (this.state.containerRef.current.getBoundingClientRect().top < 0) {
				//this.state.containerRef.current.classList.add("scroll-fixed");
				//this.state.containerRef.current.style.position = 'fixed';
				//this.state.containerRef.current.style.top = '0';
				//this.state.containerRef.current.style.left = '0';

				this.setState({ 
					enableFixed: 'scroll-fixed'
				});
			}
		}
	}

	render() {
		return (

			<div 
				className={`company-values__container`} 
				ref={this.props.innerRef}
			>
				<div className={`company-values__inner-container ${this.props.isFixed ? 'scroll-fixed' :''}`}>
					<div style={{color: '#fff', position: 'absolute', zIndex: '100'}}>
						{this.state.scrollOffset}, wHeight:{this.state.windowInnerHeight}
					</div>
					<div className="image-wrapper"><img src={this.props.imageSrc} /></div>
					<div className="company-values__overlay"></div>
					<Icon icon={this.props.icon} />
				</div>
			</div>
		)
	}
}
*/

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

    useEffect(() => {
    	const posTop = containerRef.current.getBoundingClientRect().top;
//console.log(id+': bounding top:' + posTop);
//console.log(id+': bounding bot:' + containerRef.current.getBoundingClientRect().bottom);
		//console.log('window.pageYOffset:' + window.pageYOffset);
		//console.log('screen.height:' + screen.height);
		//console.log('window.innerHeight:' + window.innerHeight);

		if (covering && posTop >= (windowInnerHeight*2/3)) {
//console.log('NEW IF 3');
			setCovering(false);
			setIsRevealed(false);
			setMoveContainer(false);
			setIsFixed(false);


		} else if (covering && posTop >= (windowInnerHeight/3) && posTop < (windowInnerHeight*2/3)) {
//console.log('NEW IF 2');

			const ratio = posTop / (windowInnerHeight*2/3);
//console.log('ratio: '+ratio);
			iconRef.current.style.top = 25+25*ratio+'%'; // 50% - 25%
			iconRef.current.style.transform = "translate(-50%, -50%) scale("+(0.5+0.5*ratio)+")" // scale 1 - 0.5
			//overlayRef.current.style.opacity = 0.15+0.75*ratio+''; // 0.9 - 0.15
			overlayRef.current.style.opacity = 0.35+0.55*ratio+''; // 0.9 - 0.35


		} else if ((covering || showContent) && posTop > 0 && posTop < (windowInnerHeight/3)) {
//console.log('NEW IF 1');
			setIsFixed(true);
			setCovering(true);
			setShowContent(false);


		} else if (posTop > 0 ) {
			setIsFixed(false);

			setIsRevealed(false);
			setShowContent(false);

		} else if (!showContent && posTop < 0 && posTop > (-windowInnerHeight/3)) {

			//containerRef.current.classList.add("scroll-fixed");
			//containerRef.current.style.position = 'fixed';
			//containerRef.current.style.top = '0';
			//containerRef.current.style.left = '0';
			setMoveContainer(false);
			setIsFixed(true);

			setIsRevealed(true);
			setShowContent(false);

			// TOP position: 0 - windowInnerHeight / 2
			const ratio = -(posTop / (windowInnerHeight/3));

//console.log('ratio: '+ratio);
			iconRef.current.style.top = 50-25*ratio+'%'; // 50% - 25%
			iconRef.current.style.transform = "translate(-50%, -50%) scale("+(1-0.5*ratio)+")" // scale 1 - 0.5
			//overlayRef.current.style.opacity = 0.9-0.75*ratio+''; // 0.9 - 0.15
			overlayRef.current.style.opacity = 0.9-0.55*ratio+''; // 0.9 - 0.35

		} else if (posTop <= (-windowInnerHeight/3)
				&& posTop > (-windowInnerHeight*2/3)) {
			setShowContent(true);
			//containerRef.current.classList.add("show-content");

		} else {
			setMoveContainer(true);
			setIsFixed(false);
			//setShowContent(false);
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
//console.log(scrollDown);

        return () => window.removeEventListener('scroll', onScroll);
    }, [scrollDown]);

	return (
		<div className={`company-values__container nav-visible ${moveContainer ? 'move-container' :''}`} ref={containerRef} data-id={id}>
			{/*<div style={{color: '#fff', position: 'fixed', zIndex: '100', top: 0, background: '#000'}}>
				{scrollOffset}, Height|{windowInnerHeight}, {scrollDown ? 'DOWN' : 'UP'}
			</div>*/}
			<div 
				className={`company-values__inner-container 
					${isFixed ? 'scroll-fixed' : ''} 
					${showContent ? 'show-content' : ''}
					${isRevealed ? 'revealed' : ''}`}
			>
				<div className="image-wrapper"><img src={imageSrc} /></div>
				<div className="company-values__overlay absolute-centered" ref={overlayRef}></div>
				<Icon icon={icon} ref={iconRef} />
				<div className="company-values__content absolute-centered">
					<SectionHeading heading={title} className="company-values__title" />
					<SectionSubheading subheading={text} className="company-values__text" />
				</div>
			</div>
		</div>
	)
	
})



/*
export default React.forwardRef((props, ref) => (
  <CompanyValues {...props} innerRef={ref} />
));
*/
export default CompanyValues;