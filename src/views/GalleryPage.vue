<template>
  <div class="container mt-5">
    <h2>NFT Gallery</h2>
        <div class="row">
            <div class="col-md-4 mb-3" v-for="(nft, index) in nfts" :key="index">
                <router-link :to="{ name: 'View', query: { nftUrl: nft.nftUrl } }">
                    <img :src="nft.thumbnail" class="img-fluid" :alt="nft.name" />
                </router-link>
            </div>
        </div>
  </div>
</template>
<script>
export default {
  name: 'GalleryPage',
  data() {
    return {
      nfts: []
    };
  },
  async mounted() {
    await this.fetchTokenIds();
  },
  methods: {
    async fetchTokenIds() {
      try {
        const metadataBaseUrl = process.env.VUE_APP_METADATA_UNCHARTED_URL;
        const response = await fetch(`${metadataBaseUrl}/ids.txt`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const text = await response.text();
        const tokenIds = text.split('\n').filter(Boolean); // Filter out empty lines

        await Promise.all(tokenIds.map(tokenId => this.fetchMetadata(metadataBaseUrl, tokenId)));
      } catch (error) {
        console.error("Failed to fetch token IDs:", error);
        // Handle errors appropriately
      }
    },
    async fetchMetadata(baseUrl, tokenId) {
      try {
        const response = await fetch(`${baseUrl}${tokenId}.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const metadata = await response.json();
        this.nfts.push({
          id: tokenId,
          thumbnail: metadata.image,
          nftUrl: metadata.animation_url
        });
      } catch (error) {
        console.error(`Failed to fetch metadata for token ID ${tokenId}:`, error);
        // Handle errors appropriately
      }
    }
  }
}
</script>



