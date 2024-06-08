<script setup>
    import products from "../data/products.json"
    import { RouterLink } from "vue-router"
</script>


<template>
<div>
    <h1>Home</h1>
    <div class="products">
        <RouterLink v-for="(product,index) in products" :key="index" :to="`/products/${index}`">{{ product.name }}</RouterLink>
    </div>
</div>
  </template>


<style scoped>
    .products {
        display: flex;
        flex-wrap: wrap;
        gap:1rem;
        padding: 1rem;
    }

</style>