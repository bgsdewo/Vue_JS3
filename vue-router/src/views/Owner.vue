<script setup>

import { useRoute } from 'vue-router';
import products from "../data/products.json"
const route = useRoute()
const { owner } = products.find((product) => product.id === parseInt(route.params.id))
</script>

<template>
    <div>
        <h1>Owner</h1>
      <h2>{{ owner.name }} - {{ owner.email }}</h2>
    </div>
</template>