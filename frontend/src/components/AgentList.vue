<template>
    <div class="bg-primary-700 w-full">
        <ul class="list-disc p-4 ">
            <div class="max-w-md rounded-md overflow-hidden shadow-md">
                <div class="p-4">
                    <h2 class="text-xl font-semibold mb-4">Material List</h2>
                    <ul v-for=" (agent, index) in agents" :key="index" class="list-disc list-inside">
                        {{ agent.name }}
                    </ul>
                </div>
            </div>
        </ul>
    </div>
</template>
<script setup lang="ts">
import { useAgentStore } from '@/stores/agent';
import { storeToRefs } from 'pinia';

const store = useAgentStore()
const { agents } = storeToRefs(store)
store.fetchAgents();

</script>