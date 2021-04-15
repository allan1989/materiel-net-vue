import data from '../../data/data.js';

const state = {
  products: data,
};

const getters = {
  allProducts: (state) => state.products,
};

const actions = {
};

const mutations = {
  filterBrands: (state, arrFilters) => {
    if(arrFilters.length === 0) return state.products = data;
    return state.products = data.filter(el => arrFilters.indexOf(el.brand) > -1);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}