<template>
  <div class="select-area">
    <select v-model="selected" @change='sortProducts(selected)'>
      <option value="undefined" disabled>Trier les produits</option>
      <option value="brand">Marque</option>
      <option value='asc'>Du - cher au + cher</option>
      <option value='desc'>Du + cher au - moins cher</option>
      <option value="reviews">Note moyenne</option>
    </select>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Sort',
  data: function(){
    return {
      selected: undefined
    }
  },
  methods: mapMutations(['sortProducts'])
}
</script>

<style scoped>
  .select-area{
    display: flex;
    justify-content: flex-end;
    margin-bottom: 40px;
  }
  .select-area select{
    padding: 10px;
  }
</style>