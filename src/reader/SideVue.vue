<template>
  <div>
    <div class="up-next">{{ $t('reader.suggestions') }}</div>
    <div class="row-vue" v-for="(article, index)
    in this.$store.getters.side_tile_choices" :key="`article-${index}`">
        <SideTile :article="article" tag="article"/>
    </div>
  </div>
</template>

<script>
import SideTile from './SideTile.vue';

export default {
  name: 'SideVue',
  components: {
    SideTile,
  },
};
</script>

<style scoped>
  .row-vue:first {
    padding-top:0%;
  }

  .row-vue {
    padding-top:5%;
  }

  .up-next {
    text-align: left;
    font-size: 16pt;
    font-family: Radio-Canada;
    font-weight: bold;
  }

</style>
