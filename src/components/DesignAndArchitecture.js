import React, {useState} from "react";

import DesignAndArchitectureTiles from "./DesignAndArchitectureTiles.js";
import FullwidthHeading from "./FullwidthHeading.js";
import FullheightHeading from "./FullheightHeading.js";
import Icon from "./Icon.js";

import "./../assets/css/components/designandarchitecture.css";

const DesignAndArchitecture = (props) => {
	let { tiles } = props;

	const [activeIndex, setActiveIndex] = useState(0);
	var groupSize = 2;

	const updateIndex = (newIndex) => {
//		if (newIndex > React.Children.count(posts)) {
console.log('newIndex: ' + newIndex);
//console.log(Object.keys(tiles).length);

		if (newIndex >= (tiles.length / groupSize)) {
			newIndex = 0;
		
		} else {
			console.log('allgoodindex: '+newIndex);
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
			{/*<FullheightHeading heading1={`dizajn`} heading2={`a architektúra`} />*/}

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
/*
	return (
		<div className="design-and-architecture__container">
			{ tiles.map((tile, index) => {

					<div className="design-and-architecture__tiles-wrapper">
						<DesignAndArchitectureTiles tile={tile} index={index} />
						<DesignAndArchitectureTiles tile={tile} index={index} />
					</div>

		    }) }

		</div>
	)
	*/
}

export default DesignAndArchitecture;