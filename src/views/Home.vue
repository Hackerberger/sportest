<template>
  <v-container grid-list-xs>
    <span id="welcome">Willkommen {{googleProfile.Name}}!</span>
    <span>
      <v-avatar size="36px">
        <img :src="googleProfile.ImageUrl">
      </v-avatar>
    </span>
    <br>

    <br>
    <span>
      Hallo {{googleProfile.GivenName}}, der Deutsche Motorik-Test (DMT) ermöglicht
      die Messung und Bewertung deiner motorischen Fähigkeiten.
      Der DMT wurde von führenden Experten der Deutschen Vereinigung für Sportwissenschaft entwickelt.
    </span>
    <br>
    <br>
    <span>Anleitungen der Übungen:</span>

    <div class="container">
      <v-dialog v-model="dialog">
        <template v-slot:activator="{ on }">
          <v-btn block rounded color="#4b7dbb" v-on="on">Balancieren</v-btn>
        </template>

        <v-card>
          <v-card-title class="headline white" primary-title>Balancieren</v-card-title>

          <v-card-text>
            <h3>Testziel</h3>
            Die Aufgabe dient der Überprüfung der Koordination bei Präzisionsaufgaben.
            <h3>Testaufgabe</h3>
            Die Ver­suchs­person muss hier rückwärts über einen 6 cm, 4,5 cm und 3 cm breiten Balken balan­cieren. Der Test­versuch beginnt stets mit beiden Füßen vom Startbrett aus. Gezählt wird jeweils die Anzahl der Schritte, bis es zum Bodenkontakt kommt. Vor dem Test wird jeweils ein Probeversuch vorwärts und rückwärts über die gesamte Balkenlänge durchgeführt. Somit wird als Vorübung pro Balken einmal vorwärts und einmal rückwärts, an­schließend zur Lei­stungs­messung je zweimal rück­wärts balanciert. Insge­samt werden damit zwei gültige Versuche pro Bal­ken ge­wer­tet.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" flat @click="dialog = false">OK</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-btn block rounded color="#4b7dbb">Seitliches Hin- u. herspringen</v-btn>
      <v-btn block rounded color="#4b7dbb">Rumpfbeuge</v-btn>
      <v-btn block rounded color="#4b7dbb">Liegestütze</v-btn>
      <v-btn block rounded color="#4b7dbb">Situps</v-btn>
      <v-btn block rounded color="#4b7dbb">Standweitsprung</v-btn>
      <v-btn block rounded color="#4b7dbb">20m-Sprint</v-btn>
      <v-btn block rounded color="#4b7dbb">6-Minuten-Lauf</v-btn>
      <br>
      <br>
    </div>
  </v-container>
</template>

<script>
export default {
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
    /* this.$getItem("objectest")
      .then(value => {
        this.testData = value;
      })
      .catch(err => {
        console.log("the rockets red glare has blinded me");
      });

    this.googleProfile.profiledata = this.$parent.globalData.getBasicProfile();
    this.googleProfile.ID = this.googleProfile.profiledata.getId();
    this.googleProfile.Name = this.googleProfile.profiledata.getName();
    this.googleProfile.GivenName = this.googleProfile.profiledata.getGivenName();
    this.googleProfile.Email = this.googleProfile.profiledata.getEmail();
    this.googleProfile.ImageUrl = this.googleProfile.profiledata.getImageUrl(); */

    /*  console.log("ID: " + this.googleProfile.getId());
      console.log("Full Name: " + this.googleProfile.getName());
      console.log("Given Name: " + this.googleProfile.getGivenName());
      console.log("Family Name: " + this.googleProfile.getFamilyName());
      console.log("Image URL: " + this.googleProfile.getImageUrl());
      console.log("Email: " + this.googleProfile.getEmail()); */
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
