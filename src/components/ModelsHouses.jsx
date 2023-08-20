import { Link } from 'react-router-dom';
import Image from '@components/graphic/Image';
import useDeviceDimensions, { createArrayGroups } from '@utils';

const getGridDimensions = (DEVICE_TYPE) => {
  switch (DEVICE_TYPE) {
  case 'MOBILE_SM':
  case 'MOBILE_LG':
    return { rows: 6, cols: 1 };
  case 'TABLET_SM':
  case 'TABLET_MD':
  case 'TABLET_LG':
  case 'DESKTOP_SM':
    return { rows: 3, cols: 2 };
  case 'DESKTOP_MD':
  case 'DESKTOP_LG':
  case 'DESKTOP_XL':
    return { rows: 2, cols: 3 };
  default:
    return { rows: 6, cols: 1 };
  }
};

const ModelsHouses = (props) => {
  let { className, houses, columns, rows } = props;

  const { DEVICE_TYPE } = useDeviceDimensions();

  const COLUMNS = columns ?? getGridDimensions(DEVICE_TYPE).cols;
  const ROWS = rows ?? getGridDimensions(DEVICE_TYPE).rows;

  const getRooms = (number) => {
    switch (number) {
    case '1':
      return 'izba';
    case '2':
    case '3':
    case '4':
      return 'izby';
    default:
      return 'izieb';
    }
  };

  return (
    <div className={`models-houses__c f-grid cols-${COLUMNS} rows-${ROWS} ${className}`}>
      <div className='f-grid-group'>
        {createArrayGroups(COLUMNS, houses).map((houseRow, rowIndex) => (
          <div key={`f-grid-row-${rowIndex}`} className='f-grid-row'>
            { houseRow.map((house, houseIndex) => (
              <div className='models-houses__item f-grid-item ' key={houseIndex + house.title}>
                <Link to={'/model/' + house.title} className='fill-absolute' />
                <div className='models-houses__item-inner f-col'>
                  <Image src={house.src} />
                  <div className='models-houses__item-content'>
                    <div className='models-houses__item-inner-content'>
                      <div className='models-houses__item-tags'>
                        <span
                          className={`models-houses__item-status ${
                            house.status?.toLowerCase().includes('preorder') ? 'preorder' : ''
                          }`}
                        >
                          {house.status}
                        </span>
                        <span
                          className={`models-houses__item-rooms ${house.rooms > 4 ? 'large' : ''}`}
                        >
                          {house.rooms} {getRooms(house.rooms)}
                        </span>
                      </div>
                      <h3 className='models-houses__item-title'>{house.title}</h3>
                      <h4 className='models-houses__item-size'>{house.size}</h4>
                      <h4 className='models-houses__item-price'>{house.price}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelsHouses;
