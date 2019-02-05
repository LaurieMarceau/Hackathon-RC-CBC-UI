<template>
    <router-link :to="{ name: 'Reader', params: { id: article.id }}"
                 :tabindex="index" class="tile"
                 :style="{'background-image': 'url(' + article.thumbnail.url + ')'}">
        <div v-on:click="tileClick()">
            <span class="article-summary">
                <h2>{{ article.title }}</h2>
                {{ article.summary }}
            </span>
            <h1 class="title">
                {{ article.title }}
            </h1>
        </div>
    </router-link>
</template>

<script>
export default {
  props: ['article', 'index'],
  methods: {
    tileClick() {
      this.$store.commit('setCurrentArticle', this.article);

      const targetArticle = this.article;

      let recommended = null;
      let othersLiked = null;
      let toDiscover = null;

      this.$store.getters.recommended.forEach((article) => {
        if (targetArticle.id !== article.id) {
          recommended = article;
        }
      });
      this.$store.getters.others_liked.forEach((article) => {
        if (targetArticle.id !== article.id) {
          othersLiked = article;
        }
      });

      this.$store.getters.to_discover.forEach((article) => {
        if (targetArticle.id !== article.id) {
          toDiscover = article;
        }
      });

      this.$store.commit('setSideTileChoices', [recommended, othersLiked, toDiscover]);
    },
  },
};
</script>

<style scoped>
    .tile {
        position: relative;
        width: 97%;
        padding-top: 50%;
        background-size: 100%;
        background-repeat: no-repeat;
        background-color: black;
        overflow: hidden;
        display: block;
    }

    .tile:focus {
        border: 2px solid yellow;
    }

    span.article-summary {
        position: absolute;
        top: 0;
        opacity: 0;
        transition: opacity 0.5s ease;
        color: white;
        background-color: rgba(0, 0, 0, 0.7);
        padding: 1em;
        height: calc(100% - 2em);
        width: calc(100% - 2em);
        font-size: 0.9rem;
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

    .title {
        position: absolute;
        padding: 0.25rem 0.5rem;
        width: calc(100% - 1rem);
        height: 3rem;
        font-size: 1rem;
        color: white;
        background-color: rgba(0, 0, 0, 0.65);
        bottom: 0;
        transition: opacity 0.25s ease, visibility 0.5s ease;
        overflow: hidden;
    }

    .article-summary h2 {
        font-size: 1em;
        font-weight: bold;
        padding-bottom: 0.25rem;
        margin-bottom: 0.25rem;
        border-bottom: 1px solid #ccc;
        overflow: hidden;
    }

</style>
