import ImageBanner from "@components/media/ImageBanner";
import GalleryMasonry from "@components/media/GalleryMasonry";
import HeadingWithBackground from "@components/text/HeadingWithBackground";

import social from "@data/social.js";

const images = [
	{
		src: 'https://admin.domtera.rs/server//storage/site/galerija/nova-dimenzija-planinskih-kuca-2.jpeg'
	}
];

const GalleryPage = (props) => {
	let { className } = props;

	return (
		<div className={`gallery-page__c ${className}`}>		
			<ImageBanner 
				className="background-image"
				images={images}
			/>

			<div className="gallery-page__inner-section section">
				<HeadingWithBackground heading="Galéria" />
				<GalleryMasonry 
					gallery={social}
//					showLimit="12"
					loadBtnText="Zobraziť viac"
				/>
	
			</div>
		</div>
	)
}

export default GalleryPage;