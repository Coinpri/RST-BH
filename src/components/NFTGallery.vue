<template>
  <div class="row">
    <div class="col-md-4 mb-3" v-for="(nft, index) in nfts" :key="index">
      <router-link :to="{ name: 'View', query: { nftUrl: nft.nftUrl } }">
        <img :src="nft.thumbnail" class="img-fluid" :alt="nft.name" />
        <h4 class="text-center">{{nft.name}}</h4>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NFTGallery',
  watch: {
    tokenIds: {
      immediate: true,
      handler(newTokenIds) {
        if (newTokenIds.length > 0) {
          this.fetchMetadata();
        }
      }
    }
  },
  props: {
    tokenIds: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      nfts: []
    };
  },
  async mounted() {
    console.log(this.tokenIds)
    await this.fetchMetadata();
  },
  methods: {
    async fetchMetadata() {
      const metadataBaseUrl = process.env.VUE_APP_METADATA_URL;
      try {
        await Promise.all(this.tokenIds.map(tokenId => this.fetchNFT(metadataBaseUrl, tokenId)));
      } catch (error) {
        console.error("Failed to fetch NFT metadata:", error);
      }
    },
    async fetchNFT(baseUrl, tokenId) {
      try {
        const response = await fetch(`${baseUrl}${tokenId}.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const metadata = await response.json();
        this.nfts.push({
          id: tokenId,
          thumbnail: metadata.image,
          nftUrl: metadata.animation_url,
          name: metadata.name
        });
      } catch (error) {
        console.error(`Failed to fetch metadata for token ID ${tokenId}:`, error);
      }
    }
  }
}
</script>
