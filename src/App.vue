<template>
  <div id="app" class="root">
    <Header/>
    <Panel/>
    <div class="main-container container">
      <aside class="search-area">
        <h3>Affinez votre recherche</h3>
        <Brands/>
      </aside>
      <section class="products-area">
        <Products/>
      </section>
    </div>
  </div>
</template>

<script>
import Header from './page-sections/Header.vue';
import Panel from './page-sections/Panel.vue';
import Brands from './components/Filters/Brands.vue';
import Products from './page-sections/Products.vue'


export default {
  name: 'App',
  components: {
    Header,
    Panel,
    Brands,
    Products
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif
  }
  .l-large{
   max-width: 1340px;
   margin: 0 auto;
 }
  body{
    background-color: #e4e4e4;
  }
  .container{
    max-width: 1340px;
    margin: 0 auto;
  }
  .search-area{
    display: inline-block;
    vertical-align: top;
    background-color: white;
    padding-top: 10px;
    margin-right: 65px;
  }
  .search-area h3{
    font-size: 21px;
    font-weight: 100;
    margin-bottom: 20px;
    text-align: center;
  }
  .products-area{
    display: inline-block;
    vertical-align: top;
    width: 975px;
    padding: 10px 20px;
    background-color: white;
  }
</style>
