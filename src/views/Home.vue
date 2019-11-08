<template>
  <v-container grid-list-xs>
    <span class="white--text" id="welcome">Willkommen Timo Naderer!</span>
    <span>
      <v-avatar size="36px">
        <img src="./../../public/naderer.png">
      </v-avatar>
    </span>
    <br>

    <br>
    <span class="white--text">
      Hallo {{googleProfile.GivenName}}, sportest ermöglicht
      dir die Messung und Bewertung deiner motorischen Fähigkeiten.
    </span>
    <br>
    <br>
    <span class="white--text">Anleitungen zu den Übungen:</span>








<!-- <div>
  <v-app>
    <v-expansion-panels dark> -->
      <!-- <v-expansion-panel dark>
        <v-expansion-panel-header color="#800000" class="white--text"> <h4> Balancieren </h4> </v-expansion-panel-header>
        <v-expansion-panel-content >
                     <h4>Testziel</h4>
            Die Aufgabe dient der Überprüfung der Koordination bei Präzisionsaufgaben.
            <h4>Testaufgabe</h4>
            Die Ver­suchs­person muss hier rückwärts über einen 6 cm, 4,5 cm und 3 cm breiten Balken balan­cieren. Der Test­versuch beginnt stets mit beiden Füßen vom Startbrett aus. Gezählt wird jeweils die Anzahl der Schritte, bis es zum Bodenkontakt kommt. Vor dem Test wird jeweils ein Probeversuch vorwärts und rückwärts über die gesamte Balkenlänge durchgeführt. Somit wird als Vorübung pro Balken einmal vorwärts und einmal rückwärts, an­schließend zur Lei­stungs­messung je zweimal rück­wärts balanciert. Insge­samt werden damit zwei gültige Versuche pro Bal­ken ge­wer­tet.
        </v-expansion-panel-content>
        </v-expansion-panel>

<v-expansion-panel>
        <v-expansion-panel-header> <h4> Seitliches Hin- U. Herspringen </h4> </v-expansion-panel-header>
        <v-expansion-panel-content>
               <h4>Testziel</h4>
            Die Aufgabe dient dazu...
            <h4>Testaufgabe</h4>
            Die Ver­suchs­person muss...
        </v-expansion-panel-content>
                </v-expansion-panel>

<v-expansion-panel>

        <v-expansion-panel-header>  <h4> Rumpfbeuge</h4> </v-expansion-panel-header>
        <v-expansion-panel-content>
                          <h4>Testziel</h4>
            Die Aufgabe dient für...
            <h4>Testaufgabe</h4>
            Die Ver­suchs­person muss das..
        </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>

        <v-expansion-panel-header>  <h4>Liegestütze</h4> </v-expansion-panel-header>
        <v-expansion-panel-content>
                          <h4>Testziel</h4>
            Die Aufgabe dient für...
            <h4>Testaufgabe</h4>
            Die Ver­suchs­person muss das..
        </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>

        <v-expansion-panel-header>  <h4>Situps</h4> </v-expansion-panel-header>
        <v-expansion-panel-content>
                          <h4>Testziel</h4>
            Die Aufgabe dient für...
            <h4>Testaufgabe</h4>
            Die Ver­suchs­person muss das..
        </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>

        <v-expansion-panel-header>  <h4>Standweitsprung</h4> </v-expansion-panel-header>
        <v-expansion-panel-content>
                          <h4>Testziel</h4>
            Die Aufgabe dient für...
            <h4>Testaufgabe</h4>
            Die Ver­suchs­person muss das..
        </v-expansion-panel-content>
                  </v-expansion-panel>

                  <v-expansion-panel>

        <v-expansion-panel-header> <h4> 20m-Sprint </h4> </v-expansion-panel-header>
        <v-expansion-panel-content>
                          <h4>Testziel</h4>
            Die Aufgabe dient für...
            <h4>Testaufgabe</h4>
            Die Ver­suchs­person muss das..
        </v-expansion-panel-content>
                  </v-expansion-panel>

                  <v-expansion-panel>

        <v-expansion-panel-header> <img src="./../../public/img/lauf.jpg" alt="" style="height: 50%; width: 45%" srcset=""> <h4> 6-Minuten-Lauf</h4> </v-expansion-panel-header>
        <v-expansion-panel-content>
                          <h4>Testziel</h4>
            Die Aufgabe dient für...
            <h4>Testaufgabe</h4>
            Die Ver­suchs­person muss das..
        </v-expansion-panel-content>
                  </v-expansion-panel>
    </v-expansion-panels> -->

  <!-- </v-app>
</div> -->










    <div class="container">
      <v-dialog v-model="dialog">
        <template v-slot:activator="{ on }">
                <div class="my-2">
          <v-btn href="./../../public/img/lauf.jpg" color="#800000" class="white--text" block rounded  v-on="on">Balancieren</v-btn>
             </div>
        </template>

        <v-card>
          <v-card-title class="headline white" primary-title>Hin. u. her Springen</v-card-title>

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


<!-- Seitliches Hin- u. herspringen -->
            <v-dialog v-model="dialog">
        <template v-slot:activator="{ on }">
           <div class="my-2">
          <v-btn block rounded color="#800000" class="white--text" v-on="on">Hin- u. herspringen</v-btn>
          </div>
        </template>

        <v-card>
          <v-card-title class="headline white" primary-title>Hin. u. Her Springen</v-card-title>

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





      <!-- Rumpfbeuge -->
            <v-dialog v-model="dialog">
        <template v-slot:activator="{ on }">
           <div class="my-2">
          <v-btn block rounded color="#800000" class="white--text" v-on="on">Rumpfbeuge</v-btn>
          </div>
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


      
      <!-- Liegestütze -->
            <v-dialog v-model="dialog">
        <template v-slot:activator="{ on }">
          <v-btn block rounded color="#800000" class="white--text" v-on="on">Liegestütze</v-btn>
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



          <!-- Situps -->
            <v-dialog v-model="dialog">
        <template v-slot:activator="{ on }">
           <div class="my-2">
          <v-btn block rounded color="#800000" class="white--text" v-on="on">Situps</v-btn>
          </div>
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

          <!-- Standweitsprung -->
            <v-dialog v-model="dialog">
        <template v-slot:activator="{ on }">
           <div class="my-2">
          <v-btn block rounded color="#800000" class="white--text" v-on="on">Standweitsprung</v-btn>
          </div>
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

          <!-- 20m-Sprint -->
            <v-dialog v-model="dialog">
        <template v-slot:activator="{ on }">
          <v-btn block rounded color="#800000" class="white--text" v-on="on">20m-Sprint</v-btn>
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


          <!-- 6 min Lauf -->
            <v-dialog v-model="dialog">
        <template v-slot:activator="{ on }">
           <div class="my-2">
          <v-btn block rounded color="#800000" class="white--text" v-on="on">6-Minuten-Lauf</v-btn>
          </div>
        </template>

        <v-card>
          <v-card-title class="headline white" primary-title>6-Minuten-Lauf</v-card-title>

          <v-card-text>
            <h3>Testziel</h3>
            Die Aufgabe dient der Überprüfung der Koordination bei Präzisionsaufga
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
