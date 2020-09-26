import mergedData from '../../helpers/data/mergedData';
import card from '../cards/cowCard';

const cowsView = () => {
  mergedData.getDataForCowsView()
    .then((response) => {
      if (response.length) {
        response.forEach((item) => {
          $('#app').append(card.cowMaker(item));
        });
      } else {
        $('#app').html('<h1>No Cows!</h1>');
      }
    });
};

export default { cowsView };
