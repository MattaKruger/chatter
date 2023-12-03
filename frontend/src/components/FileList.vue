<template>
    <div>
        <div class="mb-6 w-full">
            <ul class="list-disc pl-4">
                <!-- Replace the file paths with the actual paths to your PDFs -->
                <li v-for="(file, index) in files" :key="index"><a href="path/to/your/pdf1.pdf" target="_blank"
                        class="text-blue-500 hover:underline">{{ file.name }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useFileStore } from '@/stores/file';
import { storeToRefs } from 'pinia';

const store = useFileStore()
const { files } = storeToRefs(store)

store.fetchFiles()
</script>
<styles>
</styles> 