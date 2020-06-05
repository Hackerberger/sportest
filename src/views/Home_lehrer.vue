<template>
  <v-container grid-list-xs>
    <span class="white--text" id="welcome"
      >Willkommen Prof.
      {{ globalData.googleUser.getBasicProfile().getName() }}</span
    >
    <span>
      <v-avatar size="36px">
        <img :src="globalData.googleUser.getBasicProfile().getImageUrl()" />
      </v-avatar>
    </span>
    <br />

    <br />
    <span class="white--text">
      Hallo, sportest ermöglicht Ihren Schüler/innen die Messung und Bewertung
      ihrer motorischen Fähigkeiten. [Lehrer-Ansicht]
    </span>
    <br />
    <br />
    <span class="white--text">Anleitungen zu den Übungen:</span>

    <Description class="ma-5"></Description>
  </v-container>
</template>

<script>
import Description from "../components/Descriptions.vue";

export default {
  components: { Description },
  data() {
    return {};
  }
};
</script>

<style>
#welcome {
  font-size: 18px;
}
.v-avatar {
  margin: 10px;
}
</style>
