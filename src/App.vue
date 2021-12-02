
<template>
  <div>
    <MessageForm @send="handleSend"></MessageForm>
    <MessageList :messages="messages"></MessageList>
  </div>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import MessageForm from './components/MessageForm.vue';
import MessageList from './components/MessageList.vue';
import { reactive } from 'vue';

const messages = reactive([]);

function handleSend(msg) {
  messages.push(msg);
}
</script>

<style>
</style>
