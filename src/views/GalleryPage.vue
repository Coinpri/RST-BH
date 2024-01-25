<template>
  <div class="container mt-5">
    <h2>NFT Gallery</h2>
    <p>{{ discoveredCount }} Black Holes discovered</p>
    <p>{{ unchartedCount }} Uncharted Black Holes</p>
    <p><a href="#">Help us discover more black holes</a></p>
    <NFTGallery :tokenIds="unchartedTokenIds" />
  </div>
</template>

<script>
import NFTGallery from '@/components/NFTGallery.vue'; // Adjust path as needed

export default {
  name: 'GalleryPage',
  components: {
    NFTGallery
  },
  data() {
    return {
      unchartedTokenIds: [],
      discoveredCount: 0,
      unchartedCount: 0
    };
  },
  async mounted() {
    await this.fetchUnchartedTokenIds();
  },
  methods: {
    async fetchUnchartedTokenIds() {
      try {
        const metadataBaseUrl = process.env.VUE_APP_METADATA_URL;
        const response = await fetch(`${metadataBaseUrl}/uncharted.txt`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const text = await response.text();
        this.unchartedTokenIds = text.split('\n').filter(Boolean);
        console.log(this.unchartedTokenIds)
        this.unchartedCount = this.unchartedTokenIds.length;
      } catch (error) {
        console.error("Failed to fetch token IDs:", error);
      }
    }
  }
}
</script>
