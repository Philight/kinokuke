import React from "react";

import DesignAndArchitectureTiles from "./DesignAndArchitectureTiles.js";
import FullwidthHeading from "./FullwidthHeading.js";
import FullheightHeading from "./FullheightHeading.js";

import "./../assets/css/components/designandarchitecture.css";

const DesignAndArchitecture = (props) => {
	let { tiles } = props;

	var groupSize = 2;
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
			<div className="design-and-architecture__tiles-wrapper">{tileGroups}</div>
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