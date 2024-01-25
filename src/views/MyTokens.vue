<template>
  <div class="container mt-5">
    <h2>NFT Gallery</h2>
    <p>You have {{ discoveredCount }} Discovered Black Holes, and {{ unchartedCount }} Uncharted Black Holes</p>
    <p><a href="#">Help us discover more black holes</a></p>
    <NFTGallery :nfts="nfts" />
  </div>
</template>

<script>
import NFTGallery from '@/components/NFTGallery.vue'; // Adjust path as needed

export default {
  name: 'MyTokens',
  components: {
    NFTGallery
  },
  data() {
    return {
      nfts: [],
      discoveredCount: 0, // Initialize your count variables
      unchartedCount: 0
    };
  },
  async mounted() {
    await this.fetchUnchartedTokenIds();
  },
  methods: {
    async fetchUnchartedTokenIds() {
      try {
        const metadataBaseUrl = process.env.VUE_APP_METADATA_UNCHARTED_URL;
        const response = await fetch(`${metadataBaseUrl}/ids.txt`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const text = await response.text();
        const unchartedTokenIds = text.split('\n').filter(Boolean); // Filter out empty lines

        this.unchartedCount = unchartedTokenIds.length

        await Promise.all(unchartedTokenIds.map(unchartedTokenId => this.fetchMetadata(metadataBaseUrl, unchartedTokenId)));
      } catch (error) {
        console.error("Failed to fetch token IDs:", error);
        // Handle errors appropriately
      }
    },
    async fetchMetadata(baseUrl, unchartedTokenId) {
      try {
        const response = await fetch(`${baseUrl}${unchartedTokenId}.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const metadata = await response.json();
        this.nfts.push({
          id: unchartedTokenId,
          thumbnail: metadata.image,
          nftUrl: metadata.animation_url,
          name: metadata.name
        });
      } catch (error) {
        console.error(`Failed to fetch metadata for token ID ${unchartedTokenId}:`, error);
        // Handle errors appropriately
      }
    }
  }
}
</script>



