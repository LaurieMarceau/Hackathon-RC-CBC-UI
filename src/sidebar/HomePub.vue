<template>
    <router-link :to="{ name: 'Toutv'}">
        <div v-if="$i18n.locale === 'en'">
            <img class="pubimage" src="../assets/pub1.png" title="Pub"/>
        </div>
        <div v-if="$i18n.locale === 'fr'">
            <img class="pubimage" src="../assets/pub2.png" title="Pub"/>
        </div>
    </router-link>
</template>

<script>
export default {
  name: 'HomePub',
};
</script>

<style scoped>
    .pubimage {
        width: 100%
    }

</style>
