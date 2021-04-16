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
  },
  sortProducts: (state, sort) => {
    switch(sort){
      case 'brand':
        state.products = state.products.sort((a,b) => {
          if(a.brand.toLowerCase() > b.brand.toLowerCase()) return 1;
          if(a.brand.toLowerCase() < b.brand.toLowerCase()) return -1;
          return 0
        })
        break;
      case 'asc':
        state.products = state.products.sort((a,b) => a.price - b.price)
        break;
      case 'desc':
        state.products = state.products.sort((a,b) => b.price - a.price)
        break;
      case 'reviews':
        state.products = state.products.sort((a,b) => b.customerReview - a.customerReview)
        break;  
      default:
        return state.products  
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}