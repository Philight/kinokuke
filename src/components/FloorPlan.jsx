import { ImageBanner } from '@components/media';

const FloorPlan = (props) => {
  let { className, plan, technicalCharacteristics, roomDetails } = props;

  return (
    <div className={`floor-plan__c ${className} f-col`}>
      <ImageBanner images={[ { src: plan } ]} />
      <div className='floor-plan__technical-details f-col'>
        <h3>Celkový rozmer</h3>
        <div className='floor-plan__data'>
          <span>Plocha (Neobývateľných)</span>
          <span>{technicalCharacteristics.surfaceGross}</span>
          <span>Plocha (Obývateľných)</span>
          <span>{technicalCharacteristics.surfaceNet}</span>
        </div>
        <h3 className='floor-plan__technical-details-heading'>Detaily jednotlivých izieb</h3>
        <div className='floor-plan__data'>
          {Object.entries(roomDetails).map(([ key, item ], index) => (
            <>
              <span>{index + 1 + '. ' + key}</span>
              <span>{item} m²</span>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloorPlan;
