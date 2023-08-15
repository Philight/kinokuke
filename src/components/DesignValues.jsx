import { useState, useEffect, useRef } from "react";

import Image from "@components/graphic/Image";
import Layer from "@components/graphic/Layer";
import useDeviceDimensions, { createArrayGroups } from "@utils";

const getGridDimensions = (DEVICE_TYPE) => {
  switch (DEVICE_TYPE) {
    case 'MOBILE_SM':
    case 'MOBILE_LG':
      return { rows: 8, cols: 1 };
    case 'TABLET_SM':
    case 'TABLET_MD':
    case 'TABLET_LG':
    case 'DESKTOP_SM':
      return { rows: 4, cols: 2 };
    case 'DESKTOP_MD':
    case 'DESKTOP_LG':
    case 'DESKTOP_XL':
      return { rows: 3, cols: 3 };
    default:
      return { rows: 8, cols: 1 };
  }
};

const DesignValues = (props) => {
	let { tiles, rows, columns, enableAutoplay, interval } = props;

  	const { DEVICE_TYPE } = useDeviceDimensions();
	const [contentShown, setContentShown] = useState(false);
	const timeoutRef = useRef(null);

	const COLUMNS = columns ?? getGridDimensions(DEVICE_TYPE).cols;
	const ROWS = rows ?? getGridDimensions(DEVICE_TYPE).rows;

	const resetTimeout = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	}

	useEffect(() => {
		if (enableAutoplay) {
		    resetTimeout();

		    timeoutRef.current = setTimeout(
				() =>
					setContentShown((prevValue) => !prevValue),
				interval
		    );
		}

	    return () => {
	    	resetTimeout();
	    };
	}, [contentShown]);


	return (
		<div className={`design-values__c f-grid cols-${COLUMNS} rows-${ROWS}`}>

			{ createArrayGroups(COLUMNS, tiles).map((gridRow, rowIndex) => (
			<div className="f-grid-row">

				{ gridRow.map((item, index) => (
					<div className="f-grid-item">
						<div className={`design-values__item
							${index%2==0 && contentShown ? 'shown' :''} 
							${index%2==1 && !contentShown ? 'shown' :''}`}
						>
							<Image src={item.imageSrc} />
							<Layer className="design-values__item-overlay" />
							<h2 className="absolute-center">{item.heading}</h2>
							<div className="design-values__item-content f-col fill-parent-absolute">
								<h3>{item.title}</h3>
								<p>{item.text}</p>
							</div>
						</div>
					</div>
				)) }

			</div>
			)) }

		</div>
	)
}

export default DesignValues;