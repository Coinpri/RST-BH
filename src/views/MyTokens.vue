<template>
  <div class="container mt-5">
    <h1 class="text-center">My Tokens</h1>
    <p class="text-center">Here you can view your own NFTs from the RoseTea Black Holes collection.</p>
    <ConnectMetaMaskButton @connected="fetchMyTokenIds" />
    <NFTGallery v-if="myTokenIds.length > 0" :tokenIds="myTokenIds" />
  </div>
</template>

<script>
import { Web3Provider } from '@ethersproject/providers';
import { Contract } from 'ethers'; // Direct import of the Contract class
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
      myTokenIds: []
    };
  },
  methods: {
    async fetchMyTokenIds() {
      console.log("running");
      if (typeof window.ethereum !== 'undefined') {
        const provider = new Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new Contract(
          process.env.VUE_APP_CONTRACT_ADDR,
          [
            // The ABI of the ERC721 contract, particularly the "tokenOfOwnerByIndex" and "balanceOf" functions
            'function balanceOf(address owner) view returns (uint256)',
            'function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256)'
          ],
          signer
        );

        try {
          const account = await signer.getAddress();
          const balance = await contract.balanceOf(account);
          const tokenIds = [];
          console.log(typeof balance)
          for (let i = 0; i < Number(balance); i++) {
            const tokenId = await contract.tokenOfOwnerByIndex(account, i);
            console.log(tokenId);
            tokenIds.push(tokenId.toString());
          }
          this.myTokenIds = tokenIds;
        } catch (error) {
          console.error('Failed to fetch token IDs:', error);
        }
      } else {
        console.log('Ethereum object does not exist!');
      }
    }
  }
}
</script>
