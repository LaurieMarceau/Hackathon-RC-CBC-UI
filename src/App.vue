<template>
    <div id="app">
        <header class="header-style">
            <div class="row top-bar first-level">
                <router-link tabindex=1 class="col-xs-2 static center-xs logo-container" :to="{name: 'Home'}" exact>
                    <img class="logo"
                         src="./assets/logo-placeholder2.png"
                         style="margin-top: 0.7em;" width="180"><br>
                </router-link>
                <div class="col-xs-10 static end-xs">
                    <div class="header-navigator">
                        <div style="display: inline-block">
                            {{ $t('header.affichage') }}
                            <a tabindex="10" class="article-lang"
                               v-on:click="$i18n.locale = 'fr'"
                               v-on:keydown.space="$i18n.locale = 'fr'"
                               :class="{ 'active' : $i18n.locale === 'fr' }">Français</a>

                            <a tabindex="20" class="article-lang"
                               v-on:click="$i18n.locale = 'en'"
                               v-on:keydown.space="$i18n.locale = 'en'"
                               :class="{ 'active' : $i18n.locale === 'en' }">English</a>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div style="display: inline-block">
                            {{ $t('home.source') }}
                            <a tabindex="30" class="article-lang"
                               v-on:click="$store.commit('updateQueryLanguage')"
                               v-on:keydown.space="$store.commit('updateQueryLanguage')"
                               :class="{ 'active' : $store.getters.query_language === 'en'
                            || $store.getters.query_language === 'bi' }">cbc.ca</a>

                            <a tabindex="40" class="article-lang"
                               v-on:click="$store.commit('updateQueryLanguage')"
                               v-on:keydown.space="$store.commit('updateQueryLanguage')"
                               :class="{ 'active' : $store.getters.query_language === 'fr'
                            || $store.getters.query_language === 'bi' }">RADIO-CANADA.CA</a>
                        </div>
                        <span class="user-select"
                              v-on:click="$store.commit('switchUser')"
                              v-on:keydown.space="$store.commit('switchUser')"
                              tabindex="50"
                        >
                            <i class="fas fa-user-circle fa-lg"></i> {{ $store.getters.user }}
                        </span>
                    </div>
                </div>
            </div>
        </header>
        <div class="row home first-level">
            <div class="col-xs-2 static center-xs">
                <HomePub/>
            </div>
            <div class="col-xs-10 main-view">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
  import HomePub from './sidebar/HomePub.vue';

  export default {
    name: 'App',
    components: {
      HomePub,
    },
  };
</script>

<style scoped>

    .main-view {
        position: relative;
        height: 100%;
        overflow: hidden;
    }

    .header-style {
        font-size: 11pt;
    }

    .user-select {
        cursor: pointer;
        padding: 0.25em;
        margin-left: 1.5em;
        border: 1px solid rgba(0, 0, 0, 0);
    }

    .user-select:focus {
        border: 1px solid yellow;
    }

    .logo-container:focus {
        border: 1px solid yellow;
    }

</style>
