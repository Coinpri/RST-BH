<template>
  <div class="container mt-5">
    <h2>View NFT</h2>
    <div class="iframe-container" v-if="nftUrl">
      <iframe :src="nftUrl" frameborder="0"></iframe>
    </div>
    <p v-else>NFT not found or token ID missing.</p>
    <button @click="returnToGallery" class="btn btn-primary mt-3">Return to Gallery</button>
  </div>
</template>

<script>
export default {
  name: 'ViewPage',
  data() {
    return {
      nftUrl: null // Store the NFT URL
    };
  },
  async mounted() {
    await this.fetchNftUrl();
  },
  methods: {
    async fetchNftUrl() {
      const tokenId = this.$route.params.tokenId || this.$route.query.tokenId;
      if (!tokenId) {
        console.error("Token ID is missing");
        return;
      }
      this.nftUrl = `${process.env.VUE_APP_NFT_URL}${tokenId}.html`;
    },
    returnToGallery() {
      this.$router.push('/gallery');
    }
  }
}
</script>

<style>
.iframe-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
}
.iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
