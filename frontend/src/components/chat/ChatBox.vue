<template>
    <div class="messages overflow-y-auto mx-auto px-4 py-2 rounded-md bg-primary-600">
        <div v-for="(message, index) in messages" :key="index" class="mb-4 p-2 rounded-md w-4/4 mx-auto ">
            <div v-if="message.user === 'user'">
                <div class="chat chat-end ">
                    <div class="chat-bubble bg-primary-800 text-white">
                        {{ message.content }}
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="chat chat-start ">
                    <div class="chat-bubble bg-primary-800 text-white">
                        {{ message.content }}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="p-4 flex justify-center">
        <input v-model="currentMessage" type="text" class="flex-1 p-2 border rounded-md mr-2 text-black"
            placeholder="Type your message..." @keyup.enter="store.addMessage" />
        <button @click="store.addMessage" class="bg-primary-600 text-white px-4 py-2 rounded-md">
            Send
        </button>
    </div>
</template>
<script setup lang="ts">
import { useChatStore } from '@/stores/chat'
import { storeToRefs } from 'pinia';
const store = useChatStore()
const { currentMessage, messages } = storeToRefs(store)
</script>