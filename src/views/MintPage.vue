<template>
  <div class="container my-5">
    <div class="text-center mb-5">
      <h1 class="display-4 fw-bold">Mint Your NFT</h1>
      <p class="lead">Mint new NFTs from the RoseTea Black Holes collection.</p>
    </div>


      <AddToMetaMaskButton class="btn-lg mb-4"/>
      <br>
      <ConnectMetaMaskButton @connected="isWalletConnected = true" />

    <div class="mint-steps mb-5">
      <ol class="list-group list-group-numbered">
        <li class="list-group-item">Add RoseTea Rollapp to MetaMask and connect your MetaMask wallet using the above buttons.</li>
        <li class="list-group-item">
          <a href="https://discord.gg/dymension" target="_blank">Get some RST tokens from the Dymension discord faucet</a>.
          <div class="command-instruction mt-2">
            <p>Go to the <b>#froopyland-faucet</b> channel and enter:</p>
            <code>$request &lt;Your wallet address&gt; rosetea_1150924-1</code>
          </div>
        </li>
        <li class="list-group-item">Mint your token!</li>
      </ol>
      <div class="alert alert-warning mt-4" role="alert">
        <strong>Notice:</strong> Each address is only permitted to mint a single NFT.
      </div>
      <div class="alert alert-danger mt-4" role="alert">
        <strong>Avail network down</strong><br>Due to instability on the Goldberg Avail testnet, minting is currently disabled. It will be re-enabled as soon as the Avail network stabilizes. For more information, please visit <a href="https://discord.com/invite/y6fHnxZQX8" target="_blank">the official Avail discord</a>.
      </div>
      <MintButton :isDisabled="true" class="btn-lg mt-3" />
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
import ConnectMetaMaskButton from '@/components/ConnectMetaMaskButton.vue';

export default {
  name: 'MintPage',
  components: {
    AddToMetaMaskButton,
    MintButton,
    ConnectMetaMaskButton
  },
  data() {
    return {
      isWalletConnected: false // Tracks the MetaMask connection status
    };
  }

}
</script>
<style>
</style>