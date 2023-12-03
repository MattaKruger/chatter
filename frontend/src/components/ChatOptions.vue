<template>
  <div>
    <div class="mb-6 flex w-full">
      <div class="w-1/6 pr-4">
        <TextField type="number" placeholder="Return tokens" label="returnTokens" />
      </div>
      <div class=" w-1/6 pl-4">
        <TextField type="number" placeholder="Temperature" label="temperature" />
      </div>
    </div>
    <div class="mb-6">
      <label for="systemContext" class="block text-white=300 text-sm font-bold mb-2">System
        context:</label>
      <textarea id="systemContext" name="systemContext" placeholder="System context"
        class="resize rounded-md w-full h-32 p-2 border border-gray-300 text-black"
        v-model="chatOptions.system_context"></textarea>
    </div>
    <div class="mb-6 justify-end">
      <button class="bg-success-600 text-white px-4 py-2 rounded-md">
        save
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useChatStore } from '@/stores/chat';
import { storeToRefs } from 'pinia';
import TextField from './generic/TextField.vue';
const store = useChatStore()
const { chatOptions } = storeToRefs(store)

</script>
<style scoped></style>
