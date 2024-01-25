<template>
  <button @click="mint" class="btn btn-success">
    Mint NFT
  </button>
</template>

<script>
export default {
  name: 'MintButton',
  methods: {
    mint() {
      // Logic to handle the minting process
      console.log("Minting process initiated");
      // Add your minting logic here
    }
  }
}
</script>

<style>
/* Style your button as needed */
.btn-success {
  /* Custom styles for your mint button */
}
</style>
