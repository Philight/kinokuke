import { useState, useEffect, useRef } from "react";

import Image from "@components/graphic/Image";
import Icon from "@components/graphic/Icon";
import FullheightHeading from "@components/text/FullheightHeading";
import useDeviceDimensions, { createArrayGroups } from "@utils";

//import HOUSES from "@data";

const getGridDimensions = (DEVICE_TYPE) => {
  switch (DEVICE_TYPE) {
    case 'MOBILE_SM':
    case 'MOBILE_LG':
      return { rows: 1, cols: 1 };
    case 'TABLET_SM':
    case 'TABLET_MD':
    case 'TABLET_LG':
      return { rows: 1, cols: 2 };
    case 'DESKTOP_SM':
    case 'DESKTOP_MD':
    case 'DESKTOP_LG':
    case 'DESKTOP_XL':
      return { rows: 1, cols: 3 };
    default:
      return { rows: 1, cols: 1 };
  }
};

const GalleryCarousel = (props) => {
	let { 
		className, 
		gallery, columns, rows, 
		enableAutoplay, interval, 
		enableArrows, enableNavigation 
	} = props;

  const { DEVICE_TYPE } = useDeviceDimensions();
//	const [shownHouses, setShownHouses] = useState(gallery);

	const [activeIndex, setActiveIndex] = useState(0);
	const timeoutRef = useRef(null);

	const COLUMNS = columns ?? getGridDimensions(DEVICE_TYPE).cols;
	const ROWS = rows ?? getGridDimensions(DEVICE_TYPE).rows;
	const galleryLength = Object.keys(gallery).length;

	let arraySize = Math.ceil(galleryLength/COLUMNS); 
	const navDotIndexes = [...Array(arraySize).keys()];

	const updateIndex = (newIndex) => () => {
		if (newIndex > (galleryLength/COLUMNS*ROWS) - 1) {
			newIndex = 0;
		}
		setActiveIndex(newIndex);
	}

	const resetTimeout = () => {
		if (enableAutoplay && timeoutRef.current) {
		  clearTimeout(timeoutRef.current);
		}
	}

	useEffect(() => {
console.log('autoplay');
		if (enableAutoplay) {
console.log(`gallery.length ${galleryLength}`);
console.log(COLUMNS);
		    timeoutRef.current = setTimeout(
				() =>
					setActiveIndex((prevIndex) =>
						prevIndex+1 >= galleryLength/COLUMNS ? 0 : prevIndex + 1
					),
				interval
		    );

	    return () => {
	    	resetTimeout();
	    };
		}
	}, [activeIndex]);


	return (
		<div className={`gallery-carousel__c f-grid cols-${COLUMNS} rows-${ROWS}`}>
			{ enableArrows && <Icon 
					icon="chevron-left" className={`nav-arrow left highlight primary`} 
					onClick={updateIndex(activeIndex-1)}
				/>
			}
			<div className="gallery-carousel__houses-container carousel-view">
				<div 
					className="carousel-slider" 
					style={{ transform: `translateX(-${activeIndex * 100}%)` }}
				>

					{ createArrayGroups(COLUMNS*ROWS, gallery).map(gridGroup => 
						<div className="f-grid-group">

						{ createArrayGroups(COLUMNS, gridGroup).map((gridRow, rowIndex) => 
							<div className="f-grid-row">

								{ gridRow.map((item, index) =>

									<div className="gallery-carousel__item f-grid-item" id={`gallery-carousel__house-${index}`}>
										{ item.link && <a className="fill-absolute" href={item.link} /> }
										<Image className="gallery-carousel__image-wrapper" src={item.src} />
										<FullheightHeading heading1={item.title} heading2={`0${index+1}`} />
						    	</div>

				  			) }

				    	</div>
				  	) }

			    	</div>
				  ) }

				</div>
			</div>

			{ enableNavigation && 
				<div className="gallery-carousel__navigation">
					{ navDotIndexes.map((item, index) => 
						<div className={`gallery-carousel__navigation-dot ${activeIndex>=index ? 'active' :''}`}
							onClick={updateIndex(index)}>
						</div>
					)}
				</div>
			}
			{ enableArrows && <Icon 
					icon="chevron-right" className={`nav-arrow right highlight primary`} 
					onClick={updateIndex(activeIndex+1)}
				/>
			}
		</div>
	)
}

export default GalleryCarousel;