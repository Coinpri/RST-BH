<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 mb-3" v-for="(nft, index) in nfts" :key="index">
        <router-link :to="{ name: 'View', query: { nftUrl: nft.nftUrl } }">
          <img :src="nft.thumbnail" class="img-fluid" :alt="nft.name" />
          <h3>{{nft.name}}</h3>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NFTGallery',
  props: {
    nfts: {
      type: Array,
      required: true
    }
  }
}
</script>
