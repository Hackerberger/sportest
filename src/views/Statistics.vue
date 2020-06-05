<template>
  <v-container class="mb-3">
    <v-layout column justify-space-between fill-height>
      <v-flex>
        <ChartCard
          v-for="t in globalData.tests"
          :test="t"
          :key="t._id"
          class="mb-5"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ChartCard from "../components/ChartCard";

export default {
  components: { ChartCard },
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

<style></style>
