<template>
  <div class="about">
    <div class="product-wrapper">
        <div class="product-image">
          <img :src="product.image" >
        </div>
        <div class="product-info">
          <h1> {{ product.title }} </h1>
          <h5> {{ product.price }} </h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non curabitur. Neque sodales ut etiam sit amet nisl. Porttitor lacus luctus accumsan tortor.</p>
          <button @click="beli()">Beli</button>
        </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// layout
.product-wrapper {
  display: flex;
  border: 1px;
  margin: 0 auto;
  padding: 1em;
  width: 50%;

  .product-image {
    margin: 1em;
  }
  .product-info {
    padding: 1em;
    text-align: left;

    button {
      padding: 1em;
      background: #f37021;
      color: #fff;
      border: none;
      font-size: 1em;
      font-weight: bold;
      width: 100px;
      cursor: pointer;
    }
  }
}
</style>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Product',
  computed: {
    ...mapGetters(['product']),
    id() {
      return this.$route.params.product_id
    }
  },
  created(){
      this.getProduct({
        id: this.id
      })
  },
  methods: {
    beli() {
      return this.$router.push('/cart')
    },
    ...mapActions([
      'getProduct'
    ])
  }
}
</script>
