import React, {useState} from "react";

import DesignAndArchitectureTiles from "./DesignAndArchitectureTiles.js";
import FullwidthHeading from "./text/FullwidthHeading.js";
import Icon from "./utility/Icon.js";

import "./../assets/css/components/designandarchitecture.css";

const DesignAndArchitecture = (props) => {
	let { tiles } = props;

	const [activeIndex, setActiveIndex] = useState(0);
	var groupSize = 2;

	const updateIndex = (newIndex) => {
		if (newIndex >= (tiles.length / groupSize)) {
			newIndex = 0;
		} 
		setActiveIndex(newIndex);
	}
	
	var tileGroups = tiles.map((tile, i) => {
        // map content to html elements
        return (<DesignAndArchitectureTiles tile={tile} index={i} />);

    }).reduce(function(r, element, index) {
        // create element groups with size 3, result looks like:
        // [[elem1, elem2, elem3], [elem4, elem5, elem6], ...]
        index % groupSize === 0 && r.push([]);
        r[r.length - 1].push(element);
        return r;

    }, []).map(function(tilePage) {
        // surround every group with 'row'
        return (<div className="design-and-architecture__tiles-group">{tilePage}</div>);
    });

    return (
		<div className="design-and-architecture__container">
			<FullwidthHeading heading1={`dizajn`} heading2={`a architektúra`}/>

			<div className="design-and-architecture__slider">
				<div className="design-and-architecture__tiles-wrapper"
					style={{ transform: `translateX(-${activeIndex * 100}%)` }}
				>
					{tileGroups}
				</div>
			</div>

			<Icon icon="chevron-right" className="nav-arrow highlight flying right" 
				onClick={() => {updateIndex(activeIndex + 1)}}
			/>
		</div>
	)
}

export default DesignAndArchitecture;