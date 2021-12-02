<template>
  <div>
    <input v-model="message" type="text" data-test="messageText" />
    <button @click="send">send</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('');
const emit = defineEmits(['send']);
function send() {
  emit('send', message.value);
  message.value = '';
}
</script>

<style></style>
