<template>
  <ul>
    <li v-for="(message, i) in messages" :key="i">{{ message }}</li>
  </ul>
</template>

<script setup>
defineProps(['messages']);
</script>

<style></style>
