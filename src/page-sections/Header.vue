<template>
  <header class="header">
    <div class="container l-large">
      <a href="#" class="logo-materiel-link">
        <img class='logo-materiel' src='https://media.materiel.net/cms/2021-01/site-logo-white.svg' alt=''>
      </a>
      <img class='logo-vue' src='../assets/logo.png'>
    </div>  
  </header>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style scoped>
 .header{
   background: linear-gradient(90deg,#353535 0,#515151 20%,#515151 46%,#353535);
   padding: 20px 0;
 }
 .container{
   display: flex;
   justify-content: space-between;
   align-items: center;
   
 }
 .logo-materiel-link{
   width: 100%;
 }
 .logo-materiel{
   width: 30%;
 }
 .logo-vue{
   height: auto;
   width: 50px;
 }
</style>