
<template>
    <div class="reader">
        <div class="row center-xs">
          <div class="col-xs-11">
            <div class="article-title">{{ content.title }}</div>
            <div class="date">{{ $t('reader.published') }} {{ getDate(content.date) }}
                {{ $t('reader.at') }} {{ getTime(content.date) }} </div>
            <img class="image" :src='content.thumbnail.url' :title='content.thumbnail.alt'/>
            <div class="summary">{{ content.summary }}</div>
            <div class= "row">
                <div class="headersocial">
                    <img class="social" src="../assets/reseau-sociaux-linkedin.png"
                    title="Share this article"/>
                    <img class="social" src="../assets/reseau-sociaux-twitter.png"
                    title="Share this article"/>
                    <img class="social" src="../assets/reseau-sociaux-facebook.png"
                    title="Share this article"/>
                </div>
                <div class="headersize">
                    <span v-on:click="adjustSize('10pt')"
                    v-bind:style="{ 'background' : activeSizeButton(0), 'color' : activeColorButton(0)}"
                    tabindex="400" class="size" id="size-s">
                        <span style="font-size: 0.8rem;">A</span>
                    </span>
                    <span v-on:click="adjustSize('12pt')"
                    v-bind:style="{ 'background' : activeSizeButton(1), 'color' : activeColorButton(1)}"
                    tabindex="401" class="size" id="size-m">
                        <span style="font-size: 1.5rem;">A</span>
                    </span>
                    <span v-on:click="adjustSize('14pt')"
                    v-bind:style="{ 'background' : activeSizeButton(2), 'color' : activeColorButton(2)}"
                    tabindex="402" class="size" id="size-g">
                        <span style="font-size: 2rem;">A</span>
                    </span>
                </div>
            </div>
            <div v-html="content.html" v-bind:style="{ 'font-size': computedTextSize }"
            class="articlebody"></div>
            <div class= "row footer center-xs">
                <div>
                    <img class="thumbs" src="../assets/thumbs_up.png" title="Like this article"/>
                </div>
                <div>
                    <img class="thumbs" src="../assets/thumbs_down.png" title="Shame this article"/>
                </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Reader',
  props: ['content'],
  data() {
    return {
      fontsize: '12pt',
      activeFont: ['white', '#58b9ea', 'white'],
      activeColor: ['#ccc', 'white', '#ccc'],
    };
  },
  computed: {
    computedTextSize() {
      return this.fontsize;
    },
  },
  methods: {
    adjustSize(size) {
      this.fontsize = size;
      if (size === '10pt') {
        this.activeFont = ['#58b9ea', 'white', 'white'];
        this.activeColor = ['white', '#ccc', '#ccc'];
      }
      if (size === '12pt') {
        this.activeFont = ['white', '#58b9ea', 'white'];
        this.activeColor = ['#ccc', 'white', '#ccc'];
      }
      if (size === '14pt') {
        this.activeFont = ['white', 'white', '#58b9ea'];
        this.activeColor = ['#ccc', '#ccc', 'white'];
      }
    },
    activeSizeButton(index) {
      return this.activeFont[index];
    },
    activeColorButton(index) {
      return this.activeColor[index];
    },
    getDate(datetime) {
      return moment(String(datetime)).format('L');
    },
    getTime(datetime) {
      return moment(String(datetime)).format('LTS');
    },
  },
};
</script>

<style scoped>

    .reader {
        padding-top: 10px;
    }

    .article-title {
        text-align: left;
        font-size: 2rem;
        font-family: Radio-Canada;
        font-weight: bold;
        color: #424242;
    }

    .date {
        position: relative;
        text-align: left;
        font-size: 11pt;
        font-family: Radio-Canada;
        font-weight: lighter;
        color: black;
        left: 1pt;
    }

    .image {
        width: 100%;
        max-height: 500pt;
        object-fit: cover;
        object-position: top;
    }

    .summary {
        color: #666666;
        font-size: 11pt;
        font-family: Radio-Canada;
        text-align: left;
        font-weight: bold;
    }

    .headersocial {
        width: 48%;
        padding-top: 5px;
        text-align: left;
        padding-left: 5px;
    }

    .headersize {
        width: 50%;
        text-align: right;
        left: 5px;
    }

    .social {
        cursor: pointer;
        width: 30px;
    }

    .articlebody {
        color: black;
        text-align: left;
        padding-bottom: 2em;
    }

    .articlebody >>> footer {
        padding-bottom: 12px;
        font-size: inherit;
        font-family: Radio-Canada;
    }

    .articlebody >>> p {
        padding-bottom: 12px;
        font-size: inherit;
        font-family: Radio-Canada;
    }

    .articlebody >>> h2 {
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 15pt;
        font-family: Radio-Canada;
        font-weight: bold;
    }

    .thumbs {
        cursor: pointer;
        width: 60px;
    }

    .headersize a {
        font-family: Radio-Canada;
        position: relative;
        top: 9pt;
    }

    .footer {
        text-align: right;
        padding-bottom: 30pt;
    }

    .size {
        position: relative;
        border: 1px solid #ccc;
        color: #ccc;
        cursor: pointer;
        border-right: 0;
        height: 2em;
        width: 1.5em;
        overflow: hidden;
        padding-left: 0.1rem;
        padding-right: 0.1rem;
        display: inline-block;
        text-align: center;
    }

    .size span {
        line-height: 1.8rem;
    }

    .size:last-of-type {
        border-right: 1px solid #ccc;
    }

    .size.active {
        background: #58b9ea;
        color: white;
    }

    .size:focus {
        border: 2px solid yellow;
    }
</style>
