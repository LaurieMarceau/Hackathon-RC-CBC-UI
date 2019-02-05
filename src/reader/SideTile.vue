<template>
    <router-link :to="{ name: 'Reader', params: { id: article.id }}">
        <div class="tile"
            v-on:click="tileClick()"
            :style="{'background-image': 'url(' + article.thumbnail.url + ')'}">
            <h1 class="title">
                {{ article.title }}
            </h1>
        </div>
    </router-link>
</template>

<script>
export default {
  props: ['article'],
  methods: {
    tileClick() {
      this.$store.commit('setCurrentArticle', this.article);
      this.$store.commit('setSideTileChoices', [this.$store.getters.recommended[0], this.$store.getters.others_liked[1], this.$store.getters.to_discover[2]]);
    },
  },
};
</script>

<style scoped>
   .tile {
        position: relative;
        width: 100%;
        padding-top: 50%;
        background-size: 100%;
        background-repeat: no-repeat;
        background-color: black;
        overflow: hidden;
    }

    .title {
      position: absolute;
      padding: 0.25rem 0.5rem;
      width: calc(100% - 1rem);
      height: 2rem;
      font-size: 12px;
      font-family: Radio-Canada;
      color: white;
      background-color: rgba(0, 0, 0, 0.65);
      bottom: 0;
      transition: opacity 0.25s ease, visibility 0.5s ease;
      overflow: hidden;
    }

    .tile:hover {
        cursor: pointer;
    }

    .tile:hover > span.article-summary {
        opacity: 1;
    }

    .tile:hover > h1.title {
        opacity: 0;
    }

    .article-summary h2 {
        font-weight: bold;
        padding-bottom: 0.25rem;
        margin-bottom: 0.25rem;
        border-bottom: 1px solid #ccc;
        overflow: hidden;
    }
</style>
