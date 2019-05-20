import axios from 'axios';

const loadCat = () => axios.get('../db/categories.json');

export default { loadCat };
