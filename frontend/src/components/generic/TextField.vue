<template>
    <div>
        <label :for="label" class="block text-white-300 text-sm font-bold mb-2">{{ label }}</label>
        <input :type="type" :placeholder="placeholder" v-model="textFieldValue"
            class="input input-bordered w-full max-w-xs" />
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
const textFieldValue = ref('');


defineProps<{
    type: string
    placeholder: string
    label: string
}>()
</script>