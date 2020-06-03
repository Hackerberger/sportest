<template>
  <v-container grid-list-xs>
    <span class="white--text" id="welcome"
      >Willkommen {{ globalData.googleUser.getBasicProfile().getName() }}!</span
    >
    <span>
      <v-avatar size="36px">
        <img :src="globalData.googleUser.getBasicProfile().getImageUrl()" />
      </v-avatar>
    </span>

    <br />
    <span mt-11 class="white--text">
      Hallo {{ globalData.googleUser.getBasicProfile().getGivenName() }},
      sportest ermöglicht dir die Messung und Bewertung deiner motorischen
      Fähigkeiten.
    </span>
    <br />
    <br />
    <span class="white--text">Anleitungen zu den Übungen:</span>

    <Description class="ma-5 mb-12"></Description>
  </v-container>
</template>

<script>
import Description from "../components/Descriptions.vue";

export default {
  components: { Description },
  props: {
    globalData: {
      type: Object
    }
  },
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
