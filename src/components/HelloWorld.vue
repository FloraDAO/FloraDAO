<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" lg="8" md="10" class="mb-4 mx-auto">
        <h1 class="display-3 wave font-weight-bold mb-3">
          Flora DAO
        </h1>

        <p class="subheading font-weight-regular">
          A Non-Fungible Token Decentralized Organization that is built to facilitate community ownership and development of NFTs innovations
        </p>
                <p class="subheading font-weight-regular">
          The DAO would be created to help individuals crowdfund to purchase valuable and scarce NFT artworks, curate artworks from upcoming NFT artist and build a fund on this valuable NFT art which would be locked in a vault.
        </p>
                <p class="subheading font-weight-regular">
          The DAO would also be able to crowdfund and participate as angel investors in upcoming viable NFT project in which the community has vetted and performed a consensus on.
        </p>
                <p class="subheading font-weight-regular">
          The DAO would also take advantage of the Metaverses in order to capture valuable assets, collectibles and create value-based services and structures in order to help us maximize the NFT ecosystem.
        </p>
                <p class="subheading font-weight-regular">
          The DAO would also invest into the NFT gaming ecosystem and provide a means for individuals to take part of the play to earn system by providing a community-based directive.
        </p>
                <p class="subheading font-weight-regular">
          The DAO would also sponsor research into new applications and usecase being developed in the NFT space in order to maximize the first mover advantage and become a force in the NFT ecosystem.
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          FloraDao
        </h2>
        <p class="subheading font-weight-regular">
          The Future of NFT Governance and Community Ownership
        </p>

        <h3 class="headline font-weight-bold mb-3">
          Pick a flower
        </h3>
        <p class="subheading font-weight-regular">
          A decentralized community for shared ownership and growth of NFT innovation, with a mission to bring NFTs and its technology to everyone with an internet connection.
        </p>

        <v-row justify="center">
          <v-col cols="12" xl="4" lg="4" md="4" class="d-flex flex-column" v-for="(text, t) in texts" :key="t">
            <v-card width="350" color="#0E0E12" class="card-border pa-5 mx-auto flex d-flex flex-column" outlined>
              <v-card-text>
                <v-row align="center" class="justify-between">
                  <!-- <v-avatar size="50" color="#16161E" >
                    <v-img
                      :alt="`${icon.title} avatar`"
                      :src="require(`@/assets/${icon.avatar}`)" class="shrink" width="25" contain
                    ></v-img>
                  </v-avatar> -->
                <small class="ml-2" v-text="text"></small>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Flora
        </h2>

        <v-row justify="center">
          <v-col cols="12" lg="6" md="10">
            <p class="subheading font-weight-regular">As the NFT space is constantly growing and innovating, here is a community to help direct, accelerate and maintain your knowledge and participation.</p>
          </v-col>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Growth Hack
        </h2>

        <v-row justify="center">
          <v-col cols="12" lg="6" md="10">
            <p class="subheading font-weight-regular">If you want to grow fast, go alone. If you want to continuously grow, DAO it together.</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      texts: ["Decentralized Autonomous Organization","NFT Crowdfunding","Cross Platform Interoperability","Extensive exploration into Gaming and Metaverses","NFTart Curation","Exploration into Real life applications"]
    }),
  }
</script>
