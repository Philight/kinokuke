import React from "react";
import { Link } from "react-router-dom";

import DescriptionWithImage from "./DescriptionWithImage.js";
//import "./../assets/css/components/landingpage.css";

const ModelsHouses = (props) => {
	let { className, houses, columns } = props;

	return (
		<div className={`models-houses__container section col-${columns}`}>
			{ houses.map((house, index) => (
				<div className="models-houses__item">
					<Link to={'/model/' + house.title}>
						<div className="image-wrapper"><img src={house.imageSrc} /></div>
						<div className="models-houses__item-wrapper">
							<div className="models-houses__item-content">
								<div className="models-houses__item-description">
									<div className="models-houses__item-heading">
										<span className={`${house.status.toLowerCase().includes('preorder') ? 'preorder' :''}`}>{house.status}</span>
										<span className={`models-houses__item-rooms ${house.rooms>4 ? 'large' :''}`}>{house.rooms} rooms</span>
									</div>
									<h3 className="models-houses__item-title">{house.title}</h3>
									<h4 className="models-houses__item-size">{house.size}</h4>
									<h4 className="models-houses__item-price">{house.price} € </h4>
								</div>
								<ul className="models-houses__item-characteristics">
									{ house.characteristics.map((characteristic, index) => (
										<li>{characteristic}</li>
									)) }
								</ul>
							</div>
						</div>
					</Link>
				</div>
			)) }
		</div>
	)
}

export default ModelsHouses;