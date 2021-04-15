<template>
  <div class="brand-filter">
    <h4 class="brand-filter-title">Marque</h4>
    <form class="form">
      <ul>
        <li class='brand-item' 
            v-for='(value , propertyName) in getBrands' 
            :key='propertyName'>
          <input type='checkbox' 
                 :value="propertyName" 
                 :id='propertyName' 
                 v-model="selected">
          <label :for='propertyName'>
            <span>{{ propertyName }}</span>
            <span>({{ value }})</span>
          </label>
        </li>
      </ul>
      <button class='button' 
              type="submit" 
              @click.prevent='filterBrands(selected)'>Valider</button>
    </form>  
  </div>
</template>

<script>
import getBrands from '../../mixins/index.js';
import { mapMutations } from 'vuex';

export default {
  name: 'Brands',
  data: function(){
    return {
      selected: []
    }
  },
  methods: {
    ...mapMutations(['filterBrands'])
  },
  mixins: [getBrands]
}
</script>

<style scoped>
  .form{
    text-align: center;
    padding-bottom: 30px;
  }
  .brand-filter{
    width: 300px;
  }
  .brand-filter-title{
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 700;
    line-height: 30px;
    padding-left: 12px;
    background-color: #d4d4d4;
    border-bottom: 1px solid #d4d4d4;
    border-top: 1px solid #d4d4d4;
    margin-bottom: 20px;
    position: relative;
  }
  .brand-filter-title::before{
    content: "";
    height: 100%;
    left: 0;
    top: 0;
    width: 4px;
    background: #f46036;
    position: absolute;
    z-index: 1;
  }
  .brand-filter ul {
    padding: 10px;
  }
  .brand-item{
    display: flex;
    align-items: center;
    list-style: none;
    margin-bottom: 5px;
  }
  .brand-item input{
    margin-right: 10px;
    cursor: pointer;
  }
  .brand-item label{
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    cursor: pointer;
  }
  .button{
    border-radius: 5px;
    font-size: 15px;
    line-height: 15px;
    padding: 10px 15px;
    color: #fff;
    background-color: #f46036;
    cursor: pointer;
    border: none;
  }
</style>