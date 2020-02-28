<template>
  <v-container grid-list-xs>
    <span class="white--text" id="welcome"
      >Willkommen Professor Michael Aschberger!</span
    >
    <span>
      <v-avatar size="36px">
        <img src="./../../public/aschberger.jpg" />
      </v-avatar>
    </span>
    <br />

    <br />
    <span class="white--text">
      <!-- {{ googleProfile.Name }} -->
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
    return {
      testData: [1, 2, 3],
      zahl1: null,
      zahl2: null,
      googleProfile: {
        profiledata: {},
        ID: "",
        Name: "",
        GivenName: "",
        FamilyName: "",
        ImageUrl: "",
        Email: ""
      },
      dialog: false
    };
  },
  created() {
    //  this.$getItem("objectest")
    //   .then(value => {
    //     this.testData = value;
    //   })
    //   .catch(err => {
    //     console.log("the rockets red glare has blinded me");
    //   });
    // this.googleProfile.profiledata = this.$parent.globalData.getBasicProfile();
    // this.googleProfile.ID = this.googleProfile.profiledata.getId();
    // this.googleProfile.Name = this.googleProfile.profiledata.getName();
    // this.googleProfile.GivenName = this.googleProfile.profiledata.getGivenName();
    // this.googleProfile.Email = this.googleProfile.profiledata.getEmail();
    // this.googleProfile.ImageUrl = this.googleProfile.profiledata.getImageUrl();
    //   console.log("ID: " + this.googleProfile.getId());
    //   console.log("Full Name: " + this.googleProfile.getName());
    //   console.log("Given Name: " + this.googleProfile.getGivenName());
    //   console.log("Family Name: " + this.googleProfile.getFamilyName());
    //   console.log("Image URL: " + this.googleProfile.getImageUrl());
    //   console.log("Email: " + this.googleProfile.getEmail());
  },
  methods: {
    add() {
      this.$setItem("objectest", [this.zahl1, this.zahl2])
        .then(value => {
          console.log("woot! we saved " + value);
        })
        .catch(err => {
          console.log("he's dead, jim!");
        });
    }
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
