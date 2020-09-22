import farmerData from '../../helpers/data/farmerData';
import card from '../cards/farmerCards';

const farmersView = () => {
  farmerData.getAllFarmers().then((response) => {
    if (response.length) {
      response.forEach((item) => {
        $('#app').append(card.farmerMaker(item));
      });
    } else {
      $('#app').html('<h1>No Farmers!</h1>');
    }
  });
};

export default { farmersView };
