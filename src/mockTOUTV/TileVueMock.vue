<template>
    <div class="tile"
        :style="{'background-image': 'url(' + article.thumbnail.url + ')'}">
        <span class="article-summary">
            <h2>{{ article.title }}</h2>
            {{ article.summary }}
        </span>
        <h1 class="title">
            {{ article.title }}
        </h1>
    </div>
</template>

<script>
export default {
  props: ['article'],
  methods: {

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
    }

    .tile:focus {
        border: 1px solid yellow;
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
