import axios from 'axios';

const loadPinsForBoard = boardId => new Promise((resolve, reject) => {
  axios.get('../db/products.json')
    .then((resp) => {
      const allPins = resp.data.products;
      const matchingProducts = allPins.filter(pin => pin.boardId === boardId);
      resolve(matchingProducts);
    })
    .catch(err => reject(err));
});

const getPinsForEachBoard = boards => new Promise((resolve, reject) => {
  axios.get('../db/products.json')
    .then((resp) => {
      const { products } = resp.data;
      const boardsWithPins = boards.map((category) => {
        const newBoard = category;
        const matchingProducts = products.filter(products => products.boardId === category.id);
        newBoard.products = matchingProducts;
        return newBoard;
      });

      resolve(boardsWithPins);
    })
    .catch(err => reject(err));
});

export default { loadPinsForBoard, getPinsForEachBoard };
