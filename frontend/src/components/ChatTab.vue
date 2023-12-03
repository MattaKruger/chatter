<script setup lang="ts">
import { ref } from 'vue'
import ChatOptions from './ChatOptions.vue';
import FileList from './FileList.vue';
import AgentList from './AgentList.vue'
import AgentCreate from './AgentCreate.vue';

const tabItems = [
    { tab: "chat options", component: ChatOptions },
    { tab: "agent", component: AgentList },
    { tab: "files", component: FileList }
]
const currentTab = ref('chat options');
</script>

<template>
    <div class=" mx-auto bg-primary-600 rounded shadow-md text-white">
        <!-- Tab Header -->
        <div class="flex">
            <button v-for="(tabItem, index) in tabItems" :key="index" @click="currentTab = tabItem.tab"
                class="w-1/2 py-2 px-4 text-center border-b focus:outline-none active:bg-gray-200">
                {{ tabItem.tab }}
            </button>
        </div>

        <!-- Tab Content -->
        <div class="p-4 w-full">
            <div class="tab-content" id="tab1" role="tabpanel" v-if="currentTab === 'chat options'">
                <ChatOptions />
            </div>
            <div class="tab-content" id="tab1" role="tabpanel" v-if="currentTab === 'agent'">
                <AgentList />
                <AgentCreate />
            </div>
            <div class="tab-content" id="tab1" role="tabpanel" v-if="currentTab === 'files'">
                <FileList />
            </div>
        </div>
    </div>
</template>
