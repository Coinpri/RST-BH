<template>
  <div class="container mt-5">
    <h1 class="text-center">My Tokens</h1>
    <p class="text-center">Here you can view your own NFTs from the RoseTea Black Holes collection.</p>
    <ConnectMetaMaskButton />
    <NFTGallery :tokenIds="myTokenIds" />
  </div>
</template>

<script>
import NFTGallery from '@/components/NFTGallery.vue';
import ConnectMetaMaskButton from '@/components/ConnectMetaMaskButton.vue';


export default {
  name: 'MyTokens',
  components: {
    NFTGallery,
    ConnectMetaMaskButton
  },
  data() {
    return {
      myTokenIds: [] // This will hold the user's token IDs
    };
  },
  async mounted() {
    await this.fetchMyTokenIds();
  },
  methods: {
    async fetchMyTokenIds() {
      // Logic to fetch the user's token IDs
      // For example, fetching from a user's wallet or a backend API
    }
  }
}
</script>
