<template>
  <div class="panel l-large">
    <h1 class="title">PC portable - Ordinateur portable</h1>
    <p>Découvrez le meilleur de l'ordinateur portable sur Materiel.net. De l'entrée de gamme au PC portable gamer surpuissant tel que le PC portable RTX 30 series, nos experts renouvellent régulièrement la sélection pour répondre à chaque besoin. Si l'ordinateur portable bureautique convient au traitement de tâches quotidiennes, le PC portable pro mise sur la productivité en accomplissant du multi-tasking en toute fluidité. L'ultrabook séduira les nomades par son design fin et son poids plume. Pour vous permettre de jouer des heures sans ralentissement, notre sélection d'ordinateur portable gaming s'appuie sur un socle de composants ultra performants : processeur Intel / AMD et carte graphique de dernière génération, doublés d'un stockage SSD et d'un écran Full HD. De l'ordinateur portable Asus au PC portable MSI, en passant par Acer, Gigabyte ou HP, choisissez votre PC portable parmi les plus grandes marques et surfez, travaillez, jouez avec plaisir.</p>
  </div>
</template>

<script>
export default {
  name: 'Panel'
}
</script>

<style scoped>
  .title{
    font-size: 25px;
    padding-bottom: 20px;
    margin-bottom: 15px;
    position: relative;
  }
  .title::after{
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 68px;
    height: 1px;
    background-color: #f1001c;
  }
  .panel{
    padding: 30px 0;
  }
  .panel p {
    font-size: 12px;
    line-height: 16px;
  }
</style>