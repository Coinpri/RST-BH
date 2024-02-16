<template>
  <button @click="mint" class="btn btn-success" :disabled="isDisabled">
    Mint NFT
  </button>
</template>

<script>
import { Web3Provider } from '@ethersproject/providers';
import { Contract } from 'ethers';

export default {
  name: 'MintButton',
  props: {
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    async mint() {
  if (typeof window.ethereum === 'undefined') {
    alert('Please install MetaMask to mint an NFT.');
    return;
  }

  try {
    const provider = new Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []); // Request access
    const signer = provider.getSigner();
    const contract = new Contract(
      process.env.VUE_APP_CONTRACT_ADDR,
      [
        "function safeMint(address to) public",
        // Add other necessary functions from your ERC721 ABI
          "function hasMinted(address) view returns (bool)",
      ],
      signer
    );

    const toAddress = await signer.getAddress(); // The address to check and mint to

    // Call hasMinted to check if the address has already minted an NFT
    const alreadyMinted = await contract.hasMinted(toAddress);
    if (alreadyMinted) {
      alert('You have already minted an NFT.');
      return; // Stop the minting process
    }

    // If hasMinted is false, proceed with minting
    const tx = await contract.safeMint(toAddress);

    console.log(`NFT minted successfully. Transaction Hash: ${tx.hash}`);
  } catch (error) {
    console.error('Failed to mint NFT:', error);
    alert('Failed to mint NFT. See console for details.');
  }
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
