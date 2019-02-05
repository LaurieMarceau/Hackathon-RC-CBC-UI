import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

// const URL = 'http://localhost:8080/v1/';
const URL = 'https://mozaik-api.herokuapp.com/v1/';

export default new Vuex.Store({
  state: {
    recommended: [],
    others_liked: [],
    to_discover: [],
    current_language: 'fr',
    query_language: 'en',
    current_article: null,
    side_tile_choices: [],
    user: 'user1',
  },
  mutations: {
    resetRecommended(state) {
      state.recommended = [];
    },
    addRecommended(state, recommended) {
      state.recommended.push(recommended);
    },

    resetOthersLiked(state) {
      state.others_liked = [];
    },
    addOthersLiked(state, othersLiked) {
      state.others_liked.push(othersLiked);
    },

    resetToDiscover(state) {
      state.to_discover = [];
    },
    addToDiscover(state, toDiscover) {
      state.to_discover.push(toDiscover);
    },

    updateCurrentLanguage(state, currentLanguage) {
      state.current_language = currentLanguage;
    },

    setCurrentArticle(state, currentArticle) {
      state.current_article = currentArticle;
    },

    setSideTileChoices(state, sidetileChoices) {
      state.side_tile_choices = sidetileChoices;
    },

    updateQueryLanguage(state) {
      switch (state.query_language) {
        case 'en':
          state.query_language = 'fr';
          break;
        case 'fr':
          state.query_language = 'bi';
          break;
        case 'bi':
          state.query_language = 'en';
          break;
        default:
          state.query_language = 'en';
      }
      this.dispatch('loadRecommended');
    },

    switchUser(state) {
      switch (state.user) {
        case 'user1':
          state.user = 'user2';
          break;
        case 'user2':
          state.user = 'user3';
          break;
        case 'user3':
          state.user = 'user4';
          break;
        default:
          state.user = 'user1';
      }
      this.dispatch('loadRecommended');
    },

    change(state, queryLanguage) {
      state.query_language = queryLanguage;
    },
  },
  actions: {
    loadRecommended({
      commit,
    }) {
      axios.get(`${URL}recs/me?lang=${this.state.query_language}&userId=${this.state.user}`).then((response) => {
        commit('resetRecommended', []);
        response.data.articles.forEach((element) => {
          axios.get(`${URL}articles/${element.id}`).then((response) => {
            commit('addRecommended', response.data);
          });
        });
      });

      axios.get(`${URL}recs/lookalike?lang=${this.state.query_language}&userId=${this.state.user}`).then((response) => {
        commit('resetOthersLiked', []);
        response.data.articles.forEach((element) => {
          axios.get(`${URL}articles/${element.id}`).then((response) => {
            commit('addOthersLiked', response.data);
          });
        });
      });

      axios.get(`${URL}recs/discover?lang=${this.state.query_language}&userId=${this.state.user}`).then((response) => {
        commit('resetToDiscover', []);
        response.data.articles.forEach((element) => {
          axios.get(`${URL}articles/${element.id}`).then((response) => {
            commit('addToDiscover', response.data);
          });
        });
      });
    },
  },
  getters: {
    recommended: state => state.recommended,
    others_liked: state => state.others_liked,
    to_discover: state => state.to_discover,
    current_language: state => state.current_language,
    query_language: state => state.query_language,
    current_article: state => state.current_article,
    side_tile_choices: state => state.side_tile_choices,
    user: state => state.user,
  },
});
