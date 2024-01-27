<template>
  <div class="container mt-5">
    <h2>View NFT</h2>
    <div v-if="nftUrl" class="iframe-container">
      <iframe :src="nftUrl" frameborder="0"></iframe>
    </div>
    <p v-else>NFT not found or token ID missing.</p>
  </div>
</template>

<script>
export default {
  name: 'ViewPage',
  data() {
    return {
      nftUrl: null // Store the NFT URL extracted from the metadata
    };
  },
  async mounted() {
    await this.fetchNftMetadata();
  },
  methods: {
    async fetchNftMetadata() {
      const tokenId = this.$route.params.tokenId || this.$route.query.tokenId;
      if (!tokenId) {
        console.error("Token ID is missing");
        return;
      }

      const metadataUrl = `${process.env.VUE_APP_METADATA_URL}${tokenId}.json`;

      try {
        const response = await fetch(metadataUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const metadata = await response.json();
        this.nftUrl = metadata.animation_url;
      } catch (error) {
        console.error(`Failed to fetch metadata for token ID ${tokenId}:`, error);
        this.nftUrl = null;
      }
    },
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
