<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center column fill-height>
      <v-container class="text-center">
        <g-signin-button name="g-signin-button"
          :params="googleSignInParams"
          @success="onSignInSuccess"
          @error="onSignInError"
        >
          <v-icon left color="black">mdi-google</v-icon>Google-Login
        </g-signin-button>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      googleSignInParams: {
        client_id:
          '545491340068-hb3lse39ve85bsgsoatc53luofqs6vb7.apps.googleusercontent.com'
      }
    };
  },

  methods: {
    onSignInSuccess(googleUser) {
      // See https://developers.google.com/identity/sign-in/web/reference#users
      this.$emit('googleUserData', googleUser);

      this.$emit('userLogin');

      console.log(googleUser);

      //this.install();

      this.$router.push({ name: 'home' });
    },
    onSignInError(error) {
      console.log('Anmeldung fehlgeschlagen', error);
    },

    install() {
      let res = this.$confirm('Do you want install Sportest?', {
        title: 'Install'
      });
      if (res) {
        try {
          deferredPrompt.prompt();
          // Wait for the user to respond to the prompt
          deferredPrompt.userChoice.then(choiceResult => {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the A2HS prompt');
            } else {
              console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
          });
        } catch (error) {
          console.log('Installieren fehlgeschlagen');
          console.log(error);
        }
      }
    }
  }
};
</script>

<style>
.g-signin-button {
  margin: 0 auto;
  display: block;
  margin-bottom: 40%;
  width: 80%;
  padding: 10px;
  background-color: #ff6600;
  color: black;
  box-shadow: 0 3px 0 #ff6600;
  border-radius: 8px;
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
  margin-bottom: 10%;
}
</style>
