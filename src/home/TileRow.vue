<template>
    <div class="row">
        <div class="col-xs-12">
            <div class="row">
                <div class="col-xs-1"></div>
                <div class="col-xs-10"><span class="section-header">{{ header }}</span></div>
            </div>
            <div class="row middle-xs test">
                <div class="col-xs-1 center-xs navigation-arrows full-height" :tabindex="indexBase">
                    <div class="row middle-xs center-xs full-height"
                    v-on:click="selectPreviousPosition()" v-if=showLeftArrow>
                        <i class="fas fa-chevron-left fa-3x"></i>
                    </div>
                </div>
                <div class="col-xs-10">
                    <div class="row full-height">
                        <div class="col-xs-4" v-for="(article, key) in articles"
                        :key="key" v-if="key <= current_position + 2 && key >= current_position">
                            <TileVue :index="parseInt(indexBase)+parseInt(key)"  :article="article" tag="article"/>
                        </div>
                    </div>
                </div>
                <div class="col-xs-1 center-xs navigation-arrows full-height" :tabindex='(parseInt(indexBase) + parseInt(10))'>
                    <div class="row middle-xs center-xs full-height"
                    v-on:click="selectNextPosition()">
                        <i class="fas fa-chevron-right fa-3x"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TileVue from './TileVue.vue';

function getPreviousValidPosition(position, length) {
  const deprecatedIndex = position - 3;
  return deprecatedIndex < 0 ? length - 3 : deprecatedIndex;
}

function getNextValidPosition(position, length) {
  const incrementedIndex = position + 3;
  return incrementedIndex > length - 3 ? 0 : incrementedIndex;
}

export default {
  name: 'TileRow',
  props: ['header', 'articles', 'indexBase'],
  components: {
    TileVue,
  },
  data() {
    return {
      number_of_tiles: 9,
      current_position: 0,
      showLeftArrow: 0,
    //   filteredArticles: [],
    };
  },
  methods: {
    //     filter(key) {
    //       return key <= this.current_position + 2 && key >= this.current_position
    //         ? this.filteredArticles[key] this.articles[key] : null;
    //     },
    selectNextPosition() {
      this.current_position = getNextValidPosition(
        this.current_position, this.number_of_tiles,
      );
      this.shouldShowLeftArrow();
    },
    selectPreviousPosition() {
      this.current_position = getPreviousValidPosition(
        this.current_position, this.number_of_tiles,
      );
    },
    shouldShowLeftArrow() {
      if (this.current_position >= 3) {
        this.showLeftArrow = 1;
      }
    },
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
