<template>
  <div class="container my-5">
    <div class="text-center mb-5">
      <h1 class="display-4 fw-bold">Mint Your NFT</h1>
      <p class="lead">Mint new NFTs from the RoseTea Black Holes collection.</p>
    </div>


      <AddToMetaMaskButton class="btn-lg mb-4"/>
    <div class="mint-steps mb-5">
      <ol class="list-group list-group-numbered">
        <li class="list-group-item">Add RoseTea Rollapp to MetaMask using the above button.</li>
        <li class="list-group-item">
          <a href="https://discord.gg/dymension" target="_blank">Get some RST tokens from the Dymension discord faucet</a>.
          <div class="command-instruction mt-2">
            <p>Go to the <b>#froopyland-faucet</b> channel and enter:</p>
            <code>$request &lt;Your wallet address&gt; rosetea_1150924-1</code>
          </div>
        </li>
        <li class="list-group-item">Mint your token!</li>
      </ol>
      <MintButton class="btn-lg mt-3"/>
    </div>
    
    <div class="further-info mt-5">
      <h5 class="fw-bold">To go further:</h5>
      <p>If you want to help us reach farther into the cosmos, <a href="https://discord.gg/dymension" target="_blank">get some DYM tokens from the Dymension discord faucet</a> and <a href="https://portal.dymension.xyz/rollapp/rosetea_1150924-1">stake them on our DymensionHub RollApp</a>. This will reveal more NFTs and increase the mint cap.</p>
    </div>
  </div>
</template>

<script>
import AddToMetaMaskButton from '@/components/AddToMetaMaskButton.vue';
import MintButton from '@/components/MintButton.vue';

export default {
  name: 'MintPage',
  components: {
    AddToMetaMaskButton,
    MintButton
  }
}
</script>
<style>
</style>