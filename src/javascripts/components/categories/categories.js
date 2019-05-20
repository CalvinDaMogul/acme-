import util from '../../helpers/utils';

const CatBuilder = (boards) => {
  let domString = '';
  boards.forEach((board) => {
    domString += '<div class="col-3">';
    domString += `<div id='${board.id}' class="card p-2">`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${board.name}</h5>`;
    domString += `<button class="btn btn-warning see-pins">${board.pins.length} Pins</button>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('user-categories', domString);
};


const initBoards = () => {
  boardData.loadBoards()
    .then(resp => pinsData.getPinsForEachBoard(resp.data.boards))
    .then((boardsWithPins) => {
      writeBoards(boardsWithPins);
    })
    .catch(err => console.error('error from initBoards requests', err));
};

export default { initBoards };
