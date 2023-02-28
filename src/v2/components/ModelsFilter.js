import React, { useState, useEffect } from "react";

//const LOGO_URL = './../assets/images/kinokuke-logo.png';
//import LOGO from './../assets/images/kinokuke-logo-bw.png';
import Icon from "./../components/Icon.js";

const ModelsFilter = (props) => {
//	let { className, redirectUrl, socialFacebookUrl, socialInstagramUrl, title, subtitle, description, subdescription } = props;
	let { className, models } = props;

	const leftArrowURL = 'https://ik.imagekit.io/0ovzivqyfai/_personal/icon/arrow-left-circle-fill_5dTlQgcEU.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1652820112822';
	const rightArrowURL = 'https://ik.imagekit.io/0ovzivqyfai/_personal/icon/arrow-right-circle-fill_SCGmR7MGA.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1652820112843';
	
	const [activeIndex, setActiveIndex] = useState(0);
	const [filterShown, setFilterShown] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if(window.innerWidth < 768) {
			setIsMobile(true);
		}
		//setWindowHeight(window.innerHeight);
	}, [])

	const updateIndex = (mode) => {
//console.log('click');
//console.log(models.length);
		if (mode === 'inc') {
			setActiveIndex((activeIndex) => activeIndex+1 >= models.length ? models.length-1 : activeIndex+1);
		
		} else if (mode === 'dec') {
			setActiveIndex((activeIndex) => activeIndex-1 < 0 ? 0 : activeIndex-1);
		}
	}

	const showFilter = () => {
		setFilterShown(true);
	}
	const hideFilter = () => {
		setFilterShown(false);
	}

	return (
		<div className="models-filter__container">
			<div className="models-filter__inner-container">
			
				<div className="models-filter__models-container">
					<h3 className="models-filter__title is-mobile">Vyberte si modely <br/> ktoré sa hodia k Vášmu životnému štýlu</h3>

					<div className="models-filter__models-carousel" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
						{ models.map((model, index) => (
						<div className={`models-filter__model ${activeIndex==index ? 'active' : ''}`} data-index={index}>
							<div className="models-filter__model-image">
								<img src={model.modelImageSrc} />
							</div>
							<div className="models-filter__model-content">
								<h2 className="model-title">{model.title}</h2>
								<h3 className="model-description">{model.description}</h3>
							</div>
						</div>
						)) }
					</div>
					<div className="models-filter__models-nav">
						<span className={`left-nav icon ${activeIndex==0 ? 'disabled' :''}`}
							style={{WebkitMask: `url(${leftArrowURL}) no-repeat center`, mask: `url(${leftArrowURL}) no-repeat center`}} 
							onClick={() => { updateIndex('dec') }}
							//onClick={() => { updateIndex(activeIndex - 1) }}
						/>
						<span className={`right-nav icon ${activeIndex==models.length-1 ? 'disabled' :''}`} 
							style={{WebkitMask: `url(${rightArrowURL}) no-repeat center`, mask: `url(${rightArrowURL}) no-repeat center`}} 
							onClick={() => { updateIndex('inc') }}
							//onClick={() => { updateIndex(activeIndex + 1) }}
						/>
					</div>
					<div className="btn-wrapper is-mobile">
						<button className="models-filter__models-show-filter" onClick={showFilter}>Filtre</button>
					</div>
				</div>
				
				<form className={`models-filter__filter-container ${isMobile ? (filterShown ? 'open' : 'closed') : ''}`}>
					<h3 className="models-filter__title">Vyberte si modely <br/> ktoré sa hodia k Vášmu životnému štýlu:</h3>
					<Icon icon="x-mark" className="is-mobile" onClick={hideFilter} />
					<fieldset>
						<select name="size" id="rooms">
						  <option value="default">Metrov štvorcových</option>
						  <option value="saab">&lt;100 m²</option>
						  <option value="saab">&lt;100-120 m²</option>
						  <option value="saab">&gt;120 m²</option>
						</select>
						<select name="floors" id="floors">
						  <option value="default"># poschodí</option>
						  <option value="volvo">1 story</option>
						  <option value="saab">2 stories</option>
						</select>
						<select name="rooms" id="rooms">
						  <option value="default"># spálňí</option>
						  <option value="volvo">1 spálňa</option>
						  <option value="saab">Aspoň 2</option>
						  <option value="saab">Aspoň 3</option>
						  <option value="saab">Aspoň 4</option>
						</select>						
					</fieldset>
					<div className="models-filter__btn-container">
						<div className="btn-wrapper filter"><button>Filtrovať</button></div>
						<div className="btn-wrapper reset"><button>Reset</button></div>
					</div>
				</form>

			</div>
		</div>
	)
}

export default ModelsFilter;