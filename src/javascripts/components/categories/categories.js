import util from '../../helpers/utils';
import productsData from '../../helpers/data/productsData';
// import products from '../products/products';
import categoryData from '../../helpers/data/categoriesData';

const CatBuilder = (boards) => {
  let domString = '';
  boards.forEach((category) => {
    domString += '<div class="col-3">';
    domString += `<div id='${category.id}' class="card p-2">`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${category.name}</h5>`;
    domString += `<button class="btn btn-warning see-pins">${category.length} Categories</button>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('user-category', domString);
};


const initCategories = () => {
  categoryData.loadCategories()
    .then(resp => productsData.getProductsForEachCategory(resp.data.categories))
    .then((boardsWithPins) => {
      CatBuilder(boardsWithPins);
    })
    .catch(err => console.error('error from initCategories requests', err));
};

export default { initCategories };
