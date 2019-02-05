<template>
    <div class="row">
        <div class="col-xs-12">
            <div class="row">
                <div class="col-xs-1"></div>
                <div class="col-xs-10"><span class="section-header">{{ header }}</span></div>
            </div>
            <div class="row middle-xs test">
                <div class="col-xs-1 center-xs navigation-arrows full-height">
                    <div class="row middle-xs center-xs full-height">
                    </div>
                </div>
                <div class="col-xs-10">
                    <div class="row full-height">
                        <div class="col-xs-4" v-for="(article, key) in articles" :key="key">
                            <TileVueMock :article="article" tag="article"/>
                        </div>
                    </div>
                </div>
                <div class="col-xs-1 center-xs navigation-arrows full-height">
                    <div class="row middle-xs center-xs full-height">
                        <i class="fas fa-chevron-right fa-3x"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TileVueMock from './TileVueMock.vue';

export default {
  name: 'TileRowMock',
  props: ['header', 'articles'],
  components: {
    TileVueMock,
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style scoped>
    .fa-chevron-left,
    .fa-chevron-right {
        color: #999;
        transition: all .25s ease, text-shadow 0.25s ease, color 0.25s ease;
    }

    .navigation-arrows:hover > .row > .fa-chevron-left,
    .navigation-arrows:hover > .row > .fa-chevron-right {
        text-shadow: 1px 1px 10px #999;
        color: #4a9bc4;
        transform: scale(1.1);
        cursor: pointer;
    }

    .section-header {
        font-size: 1.5rem;
        display: block;
        padding-bottom: 0.25rem;
    }

    .navigation-arrows {
        position: relative;
        height: 160pt;
        transition: background-color 0.5s ease;
    }

    .navigation-arrows:hover {
        cursor: pointer;
        background: rgba(0, 0, 0, 0.1);
    }

    .navigation-arrows:focus {
        border: 2px solid yellow;
    }

</style>
