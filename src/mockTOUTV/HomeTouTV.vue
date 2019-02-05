<template>
    <div class="home col-xs-12">
        <div class="display-row">
            <TileRowMock class="row"
            :header="$t('home.recommended_for_you')" :articles="Content.first"/>
        </div>

        <div class="display-row">
            <TileRowMock class="row"
            :header="$t('home.others_liked')" :articles="Content.second" />
        </div>

        <div class="display-row">
            <TileRowMock  class="row"
            :header="$t('home.to_discover')" :articles="Content.third" />
        </div>
    </div>
</template>

<script>
import TileRowMock from './TileRowMock.vue';
import Content from './mockContent';

export default {
  name: 'HomeTouTV',
  components: {
    TileRowMock,
  },
  data() {
    return {
      Content,
    };
  },
};
</script>

<style scoped>
    .home {
        position: relative;
        height: 100%;
        color: #333;
    }

    .display-row {
        position: relative;
        height: 33%;
    }

    .display-row h1 {
        position: relative;
        font-size: 20px;
        text-align: left;
    }

    .display-row:first-of-type {
      padding-top: 5pt;
    }
</style>
