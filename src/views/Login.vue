<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center column fill-height>
      <g-signin-button
        :params="googleSignInParams"
        @success="onSignInSuccess"
        @error="onSignInError"

      >
        <v-icon left color="black">mdi-google</v-icon>Google-Login
      </g-signin-button>
      <!-- <button
        v-google-signin-button="clientId"
        :params = clientId
        class="google-signin-button"
        color="primary"
        justify-center
        ma-5
        @success="onSignInSuccess"
        @error="onSignInError"
      >
        
        <img id="img-button" src="../../public/img/Google/google_logo.png" />
      </button> -->
    </v-layout>
  </v-container>
</template>

<script>
// import GoogleSignInButton from "vue-google-signin-button-directive";

export default {
  // directives: {
  //   GoogleSignInButton
  // },
  data() {
    return {
      googleSignInParams: {
        client_id: "419461260696-531a21v1lv63e72ckd0rts3j72bl2tf5.apps.googleusercontent.com"
      }
    };
  },
  methods: {
    onSignInSuccess(googleUser) {
      // See https://developers.google.com/identity/sign-in/web/reference#users
      const profile = googleUser.getBasicProfile();

      this.$emit("googleUserData", profile);
      this.googleData = googleUser.getBasicProfile();
      console.log("ID: " + profile.getId());
      console.log("Full Name: " + profile.getName());
      console.log("Given Name: " + profile.getGivenName());
      console.log("Family Name: " + profile.getFamilyName());
      console.log("Image URL: " + profile.getImageUrl());
      console.log("Email: " + profile.getEmail());
    },
    onSignInError(error) {
      console.log("OH NO", error);
    },
    OnGoogleAuthSuccess(googleUser) {
      this.$parent.globalData = googleUser;

      // See https://developers.google.com/identity/sign-in/web/reference#users
      // const profile = googleUser.getBasicProfile();

      // this.$emit("googleUserData", profile);
      // this.googleData = googleUser.getBasicProfile();
      // console.log("ID: " + profile.getId());
      // console.log("Full Name: " + profile.getName());
      // console.log("Given Name: " + profile.getGivenName());
      // console.log("Family Name: " + profile.getFamilyName());
      // console.log("Image URL: " + profile.getImageUrl());
      // console.log("Email: " + profile.getEmail());

      if (this.installPossible) this.install();
      this.$router.push({ name: "home" });
    },
    install() {
      let res = this.$confirm("Do you want install Sportest?", {
        title: "Install"
      });
      if (res) {
        try {
          deferredPrompt.prompt();
          // Wait for the user to respond to the prompt
          deferredPrompt.userChoice.then(choiceResult => {
            if (choiceResult.outcome === "accepted") {
              console.log("User accepted the A2HS prompt");
            } else {
              console.log("User dismissed the A2HS prompt");
            }
            deferredPrompt = null;
          });
        } catch (error) {
          console.log("Installieren fehlgeschlagen");
          console.log(error);
        }
      }
    },
    OnGoogleAuthFail(error) {
      console.log(`Anmeldung fehlgeschlagen: ${error}`);
    }
  }
};
</script>

<style>
.g-signin-button {
  padding: 4px 8px;
  background-color: #ff6600;
  color: black;
  box-shadow: 0 3px 0 #ff6600;
}

body {
  background-color: white;
}
/* #img-button {
  margin-top: 5px;
} */
/* #googleButton {
  height: 50px;
  color: darkslategray;
} */

#g-log-text {
  margin-bottom: 50%;
}

/* <!-- <g-signin-button
          :params="googleSignInParams"
          @success="onSignInSuccess"
          @error="onSignInError"
        >
        
          <v-btn id="googleButton" to="home_l" color="#161616" large>
            <img id="img-button" src="../../public/img/Google/google_logo.png">
            <span>Log In mit Google</span>
          </v-btn>
        </g-signin-button> --> */

/* export default {
//   data() {
//     return {
//       googleSignInParams: {
//         client_id:
//           "419461260696-531a21v1lv63e72ckd0rts3j72bl2tf5.apps.googleusercontent.com"
//       },
//       installPossible: false,
//     };
//   },
//   created() {

//     //Save Install Prompt
//     window.addEventListener("beforeinstallprompt", e => {
//       // Prevent Chrome 67 and earlier from automatically showing the prompt
//       e.preventDefault();
//       // Stash the event so it can be triggered later.
//       deferredPrompt = e;

//       this.installPossible = true;
//     });
//   },
//   methods: {
//     async onSignInSuccess(googleUser) {
//       //googleUser für alle Components verfügbar machen
//       // this.$parent.globalData = googleUser;

//       // `googleUser` is the GoogleUser object that represents the just-signed-in user.
//       // See https://developers.google.com/identity/sign-in/web/reference#users
//       // const profile = googleUser.getBasicProfile();

//       //this.$emit("googleUserData", profile);
//       //this.googleData = googleUser.getBasicProfile();
//       // console.log("ID: " + profile.getId());
//       // console.log("Full Name: " + profile.getName());
//       // console.log("Given Name: " + profile.getGivenName());
//       // console.log("Family Name: " + profile.getFamilyName());
//       // console.log("Image URL: " + profile.getImageUrl());
//       // console.log("Email: " + profile.getEmail());

//       // if (this.installPossible) this.install();

//       this.$router.push({ name: "home" });
//     },
//     install() {
//       //Prompt for Installing
//       let res = this.$confirm("Do you want install Sportest?", {
//         title: "Install"
//       });
//       if (res) {
//         try {
//           deferredPrompt.prompt();
//           // Wait for the user to respond to the prompt
//           deferredPrompt.userChoice.then(choiceResult => {
//             if (choiceResult.outcome === "accepted") {
//               console.log("User accepted the A2HS prompt");
//             } else {
//               console.log("User dismissed the A2HS prompt");
//             }
//             deferredPrompt = null;
//           });
//         } catch (error) {
//           console.log("Installieren fehlgeschlagen");
//           console.log(error);
//         }
//       }
//     },
//   }
// }; */
</style>
