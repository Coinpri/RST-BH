<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">RoseTea Black Holes</router-link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/gallery">Gallery</router-link>
          </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/mint">Mint</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/my-tokens">My Tokens</router-link>
            </li>
            <AddToMetaMaskButton />
      
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import AddToMetaMaskButton from '@/components/AddToMetaMaskButton.vue';


export default {
  name: 'NavbarMenu',
  components: {
    AddToMetaMaskButton
  }
}
</script>

<style>
/* Add any additional styling for your navbar here */
</style>
