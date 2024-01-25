<template>
  <div class="container mt-5">
    <h2>View NFT</h2>
    <div class="iframe-container" v-if="nftUrl">
      <iframe :src="nftUrl" frameborder="0"></iframe>
    </div>
    <p v-else>NFT not found or URL missing.</p>
    <button @click="returnToGallery" class="btn btn-primary mt-3">Return to Gallery</button>
  </div>
</template>

<script>
export default {
  name: 'ViewPage',
  computed: {
    nftUrl() {
      // Retrieve the NFT URL from the route parameter or query
      return this.$route.params.nftUrl || this.$route.query.nftUrl;
    }
  },
  methods: {
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
