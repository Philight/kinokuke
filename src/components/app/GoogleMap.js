import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';

const GOOGLE_API_KEY = 'AIzaSyAlFi842tZ5Wl0aikbm77AWmKKuKuu5TcA';

import Icon from "../utility/Icon.js";
import "../../assets/css/components/googlemap.css";

const LocationPin = ({ text }) => {
	return (
		<div className="google-map__location">
			<Icon icon="location" />
			<span>{text}</span>
		</div>
	)
}

const GoogleMap = (props) => {
	let { className, title, location, zoom } = props;
	
	const [textArray, setTextArray] = useState([]);

	useEffect(() => {
		replaceNewline(location.address);
	}, [location])

	const replaceNewline = (textWithoutBreaks) => {
		let textWithBreaks = '';

		if (textWithoutBreaks.indexOf('<br/>') !== -1) {
			textWithBreaks = textWithoutBreaks.split('<br/>');
		}

		if (textWithoutBreaks.indexOf('\n') !== -1) {
			textWithBreaks = textWithoutBreaks.split('\n');
		}
		setTextArray(textWithBreaks);
	}

	return (
		<div className="google-map__container">
			{title && <h3 className="google-map__map-title">{title}</h3>}
			<div className="google-map__map-wrapper">
			    <GoogleMapReact
					bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
					defaultCenter={location}
					defaultZoom={zoom}
		        >
	                <LocationPin
					  	lat={location.lat}
					  	lng={location.lng}
					  	text={textArray[0]}
					/>
		        </GoogleMapReact>
			</div>
			<div className="google-map__address">
				{ textArray.map((text, index) => {
					return (index==0 ? <h3>{text}</h3>
						: <p>{text}</p>
				)})}
			</div>
		</div>
	)
}

export default GoogleMap;
