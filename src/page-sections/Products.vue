<template>
  <div class="products-list">
    <div class="product-item" 
        v-for='product in allProducts' 
        :key='product.id'>
      <img :src='product.img' :alt='product.name'/>
      <div>
        <h2 class="title">{{ product.name }}</h2>
        <p class="description">{{ product.description }}</p>
        <p class="note">Note moyenne: {{ product.customerReview }}/5</p>
        <span class="price">{{ product.price }} €</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Products',
  computed: mapGetters(['allProducts'])
}
</script>

<style scoped>
  .product-item{
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e4e4e4;
    background-color: white;
    padding: 15px 20px;
    position: relative;
  }
  .product-item:last-of-type{
    border-bottom: none;
  }
  .product-item .title{
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 2px;
    color: #353535;
  }
  .product-item img {
    margin-right: 40px;
  }
  .product-item .description{
    color: #919191;
    font-size: 12px;
    line-height: 1.4em;
    margin-bottom: 5px;
  }
  .product-item .note{
    font-size: 12px;
  }
  .product-item .price{
    font-family: Tahoma,Century Gothic,CenturyGothic,AppleGothic,sans-serif;
    font-size: 22px;
    font-weight: 500;
    white-space: nowrap;
    position: absolute;
    top: 10px;
    right: 18px;
  }
</style>