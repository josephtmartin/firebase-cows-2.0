import cowData from '../../helpers/data/cowData';
import card from '../cards/cowCard';

const cowsView = () => {
  cowData.getCows().then((response) => {
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
