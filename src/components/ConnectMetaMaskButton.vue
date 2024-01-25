<template>
  <button @click="connectMetaMask" class="btn btn-warning" :disabled="isConnected">
    {{ isConnected ? 'Wallet Connected' : 'Connect Wallet' }}
  </button>
</template>

<script>
export default {
  name: 'ConnectToMetaMaskButton',
  data() {
    return {
      isConnected: false
    };
  },
  created() {
    this.checkWalletConnection();
  },
  methods: {
    async checkWalletConnection() {
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        this.isConnected = accounts.length > 0;
      }
    },
    async connectMetaMask() {
      if (typeof window.ethereum !== 'undefined') {
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          this.isConnected = true;
          console.log("Wallet Connected");
        } catch (error) {
          console.error("Error connecting wallet", error);
          this.isConnected = false;
        }
      } else {
        alert('MetaMask is not installed. Please install it to use this feature.');
      }
    }
  }
}
</script>
