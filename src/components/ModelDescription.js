import React from "react";

import ImageBanner from "./media/ImageBanner.js";

const ModelDescription = (props) => {
	let { className, model } = props;

	return (
		<div className="model-description__container">
			<div className="model-description__inner-content">
				<ul className="model-description__details">
					<div className="col left">
						<li className="model-description__detail title"><span className="model-description__detail-title">názov</span> <span className="model-description__detail-data">{model.title}</span></li> 
						<li className={`model-description__detail status ${model.status.toLowerCase().includes('preorder') ? 'preorder' :''}`}><span className="model-description__detail-title">stav</span> <span className="model-description__detail-data">{model.status}</span></li> 
					</div>
					<div className="col right">
						<li className={`model-description__detail rooms ${model.rooms>4 ? 'large' :''}`}><span className="model-description__detail-title">Izby</span> <span className="model-description__detail-data">{model.rooms}</span></li> 
						<li className="model-description__detail size"><span className="model-description__detail-title">Plocha</span> <span className="model-description__detail-data">{model.size}</span></li> 
						<li className="model-description__detail price"><span className="model-description__detail-title">Cena</span> <span className="model-description__detail-data">{model.price}</span></li> 
					</div>
				</ul>
			</div>
		</div>
	)
}

export default ModelDescription;