<template>
    <div class="home col-xs-12">
        <div class="display-row">
            <TileRow indexBase=60 class="row"
            :header="$t('home.recommended_for_you')" :articles="$store.getters.recommended"/>
        </div>

        <div class="display-row">
            <TileRow indexBase=80 class="row"
            :header="$t('home.others_liked')" :articles="$store.getters.others_liked" />
        </div>

        <div class="display-row">
            <TileRow indexBase=100 class="row"
            :header="$t('home.to_discover')" :articles="$store.getters.to_discover" />
        </div>
    </div>
</template>

<script>
import TileRow from './TileRow.vue';

export default {
  name: 'HomePage',
  components: {
    TileRow,
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
