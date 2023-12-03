<template>
    <div>
        <div class="mb-6 flex w-full">
            <div class="w-2/6 pr-4">
                <label for="name" class="block text-white-300 text-sm font-bold mb-2">Name:</label>
                <input type="text" id="name" name="name" placeholder="Name" v-model="agentIn.name"
                    class="w-full border border-gray-300 p-2 rounded text-black" />
            </div>
            <div class="w-1/6 pl-4">
                <label for="model" class="block text-white-300 text-sm font-bold mb-2">Model:</label>
            </div>
        </div>
        <div class="mb-6">
            <label for="prompt" class="block text-white=300 text-sm font-bold mb-2">Prompt:</label>
            <textarea id="prompt" name="prompt" placeholder="Prompt"
                class="resize rounded-md w-full h-32 p-2 border border-gray-300 text-black" v-model="agentIn.prompt" />
        </div>
        <div class="mb-6 justify-end">
            <button @click="store.createAgent()" class="bg-success-600 text-white px-4 py-2 rounded-md">
                add
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useAgentStore } from '@/stores/agent'
import { storeToRefs } from 'pinia'
import TextField from './generic/TextField.vue'

const store = useAgentStore()
const { agents, agentIn } = storeToRefs(store)


const items = [
    { name: "" },
    { name: 'gpt-4-1106-preview' },
    { name: 'gpt-4' },
    { name: 'gpt-4-32k' },
    { name: 'gpt-3.5-turbo-1106' },
]

</script>