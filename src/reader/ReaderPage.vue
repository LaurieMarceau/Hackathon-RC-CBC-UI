<template>
    <div class="row" :style="{height: '100%'}">
      <div v-if="$store.getters.current_article" class="col-xs-10 center-xs full-height">
        <div class="row center-xs scroll-pane" tabindex=80 v-focus>
          <div class="col-xs-10 readercontent">
            <ReaderContent :content="$store.getters.current_article"/>
          </div>
        </div>
      </div>
      <div class="col-xs-2 static end-xs">
        <SideVue :articles="$store.getters.side_tile_choices"/>
      </div>
    </div>
</template>

<script>
import SideVue from './SideVue.vue';
import ReaderContent from './ReaderContent.vue';

export default {
  name: 'ReaderPage',
  components: {
    SideVue,
    ReaderContent,
  },

};
</script>

<style scoped>
  .scroll-pane {
    overflow: scroll;
    height: 100%;
  }

  .scroll-pane:focus {
    border: 2px solid yellow;
  }
</style>
