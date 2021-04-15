import data from '../data/data.js'

export default {
  computed: {
    getBrands: function(){
      let mapping = {};

      data.forEach(obj => {
        if(Object.prototype.hasOwnProperty.call(mapping, obj.brand)){
          return mapping[obj.brand]++
        }else{
          return mapping[obj.brand] = 1
        }
      })
      
      return mapping;
    }
  }
}