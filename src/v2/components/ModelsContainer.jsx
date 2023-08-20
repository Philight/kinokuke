// const LOGO_URL = './../assets/images/kinokuke-logo.png';
// import LOGO from './../assets/images/kinokuke-logo-bw.png';

const ModelsContainer = (props) => {
  let { className, models } = props;

  let indexedModels = models.map((model, modelIndex) => {
    let layoutIndex = modelIndex % 4;
    let layoutClass = '';
    switch (layoutIndex) {
    case 0:
      layoutClass = 'layout-1';
      break;
    case 1:
      layoutClass = 'layout-2';
      break;
    case 2:
      layoutClass = 'layout-3';
      break;
    case 3:
      layoutClass = 'layout-4';
      break;
    default:
      layoutClass = '';
    }

    return (
      <div
        key={`model-${modelIndex}`}
        className={`models-container__model ${layoutClass} ${className}`}
      >
        <div className='models-container__image'>
          <img src={model.imageSrc} />
        </div>
        <div className='models-container__content'>
          <h2 className='model-title'>{model.title}</h2>
          <h3 className='model-description'>{model.description}</h3>
        </div>
      </div>
    );
  });

  return (
    <div className='models-container__container'>
      {indexedModels}
      {/* models.map((model, index) => (
				<div className={`models-container__model ${index%2 == 0 ? 'layout-1' : 'layout-2'}`}>
					<div className="models-container__image">
						<img src={model.imageSrc} />
					</div>
					<div className="models-container__content">
						<h2>{model.title}</h2>
						<h3>{model.description}</h3>
					</div>
				</div>
			)) */}
    </div>
  );
};

export default ModelsContainer;
