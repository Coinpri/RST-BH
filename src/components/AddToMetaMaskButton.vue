<template>
  <button @click="addToMetaMask" class="btn btn-outline-primary">
    Add To MetaMask
  </button>
</template>


<script>
export default {
  name: 'AddToMetaMaskButton',

  methods: {
    async addToMetaMask() {
      try {
        // Check if MetaMask is installed
        if (typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask) {
          // Add RoseTea RollApp Network
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
              chainId: '0x118FCC', // Replace with your network's chain ID
              chainName: 'RoseTea RollApp',
              nativeCurrency: {
                  name: 'RoseTea', // Replace with your network's currency name
                  symbol: 'RST', // Replace with your network's currency symbol
                  decimals: 18
              },
              rpcUrls: ['https://rpc.rosetea.xyz'], // Replace with your network's RPC URL
              blockExplorerUrls: null // Replace with your network's block explorer URL
            }]
          });
        } else {
          alert('MetaMask is not installed. Please install it to use this feature.');
        }
      } catch (error) {
        console.error('Error adding RoseTea RollApp to MetaMask', error);
      }
    }
  }
}
</script>

<style>
/* Add any additional styling for your navbar here */
</style>
