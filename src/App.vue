<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">
    <v-app-bar
      app hide-on-scroll flat
       :style="{background: $vuetify.theme.themes[theme].background}"
      dark
    >
      <div class="d-flex align-center">
        <v-app-bar-nav-icon v-if="isMobile" @click="overlay = !overlay" :ripple="false"></v-app-bar-nav-icon>
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/img/Asset-9@3x.png"
          transition="scale-transition"
          width="40"
        />

        <v-app-bar-title v-if="!isMobile" class="font-weight-bold text-h5 head">FloraDAO</v-app-bar-title>
      </div>

      <v-spacer></v-spacer>

      <div v-if="!isMobile" class="d-flex justify-space-around">
        <v-btn plain text :ripple="false">
          <span class="text-capitalize">Home</span>
        </v-btn>
        <v-btn plain text :ripple="false">
          <span class="text-capitalize">About</span>
        </v-btn>
        <v-btn plain text :ripple="false">
          <span class="text-capitalize">FAQ</span>
        </v-btn>
        <v-btn plain text :ripple="false">
          <span class="text-capitalize">Governance</span>
        </v-btn>
        <v-btn plain text :ripple="false">
          <span class="text-capitalize">Vault</span>
        </v-btn>
        <v-btn :href="`${publicPath}FloraDAO_Whitepaper.pdf`" download="FloraDAO_Whitepaper" plain text :ripple="false">
          <span class="text-capitalize">Whitepaper</span>
        </v-btn>
        <v-btn plain text :ripple="false">
          <span class="text-capitalize">Curators</span>
        </v-btn>
      </div>
    </v-app-bar>


    <v-main>
      <router-view/>
    </v-main>
    <v-footer color="#0E0E12"
      
      padless
    >
      <v-container>
        <v-row>
            <v-col color="primary" class="text-justify mt-5" cols="5" xl="5" lg="5">
              <v-img src="@/assets/img/floradao.jpeg" class="shrink mr-2 br-15" width="80" contain></v-img>
            </v-col>
            <v-col color="primary" class="text-justify mt-5" cols="3" md="3">
              <div v-for="(social, s) in socials" :key="s" class="pa-2 text-body-2">
              <a :href="social.url" target="_blank"> {{ social.name }} </a>
              </div>
            </v-col>
        </v-row>
      </v-container>
    </v-footer>
     <v-overlay :opacity="opacity" :value="overlay">
        <v-icon @click="overlay = false" size="1.5x" class="custom-class" style="position: fixed; top: 2%; right: 1.5em;">mdi-close</v-icon>
        <v-row class="text-center">
          <v-col cols="12">
            <v-btn href="/" text plain :ripple="false">
              <span class="font-weight-light text-capitalize white--text">Home</span>
            </v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn href="#" text plain :ripple="false">
              <span class="font-weight-light text-capitalize white--text">About</span>
            </v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn href="#" text plain :ripple="false">
              <span class="font-weight-light text-capitalize white--text">FAQ</span>
            </v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn href="#" text plain :ripple="false">
              <span class="font-weight-light text-capitalize white--text">Governance</span>
            </v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn href="#" text plain :ripple="false">
              <span class="font-weight-light text-capitalize white--text">Vault</span>
            </v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn :href="`${publicPath}FloraDAO_Whitepaper.pdf`" download="FloraDAO_Whitepaper" text plain :ripple="false">
              <span class="font-weight-light text-capitalize white--text">Whitepaper</span>
            </v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn text plain :ripple="false">
              <span class="font-weight-light text-capitalize white--text">Curators</span>
            </v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn href="https://t.me/joinchat/8bR3KMe3JAI4Yzg0" target="_blank" color="#FFB39C" outlined rounded>
              <span class="font-weight-light text-capitalize white--text">Join Community</span>
            </v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn to="/private_sales" class="px-8" color="#FFB39C" rounded>
              <span class="font-weight-light text-capitalize white--text">Private Sale</span>
            </v-btn>
          </v-col>
      </v-row>
    </v-overlay>
  </v-app>
</template>

<script>
// import { SunIcon } from 'vue-feather-icons'
// import { MoonIcon } from 'vue-feather-icons'

export default {
  name: 'App',

  components: {
    // SunIcon,
    // MoonIcon
  },

  data: () => ({
    opacity: 0.9,
    overlay: false,
    publicPath: process.env.BASE_URL,
    socials: [
      {
        name: 'Email',
        url: 'mailto:floradao.io@gmail.com'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/FloraDAO2?s=09'
      },
      {
        name: 'Telegram',
        url: 'https://t.me/joinchat/8bR3KMe3JAI4Yzg0'
      },
      {
        name: 'Github',
        url: 'https://github.com/FloraDAO/FloraDAO'
      },
    ],
  }),

  computed:{
    theme(){
      return (this.$vuetify.theme.dark) ? 'dark' : 'light';

    },
    isMobile(){
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      return isMobile;
    }
  },

  mounted() {
    this.$vuetify.theme.dark = true;
  },
};
</script>

<style>
.head {
  font-family: Kanit, sans-serif !important;
}

.br-15 {
  border-radius: 15px !important;
}

a {
  text-decoration: none;
}

.wave {
    animation: flow 5s ease-in-out infinite;
    background: linear-gradient(-60deg, #904e95, #904e95, #e73c7e, #ee7752);
    background-size: 300%;
    -webkit-background-clip: text;
            background-clip: text;
      -webkit-text-fill-color: transparent;
}
@keyframes flow {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
</style>