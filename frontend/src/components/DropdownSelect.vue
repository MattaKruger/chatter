<template>
    <select class="select w-full max-w-xs">
        <option disabled selected>Pick an GPT model</option>
        <option v-for="(item, index) in options" :key="index">{{ item.name }}</option>
    </select>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

defineProps<{
    options: Option[]
}>()
const isOpen = ref(false)
let selectedOption = reactive<Option>({
    name: ''
})

const selectOption = (option: Option) => {
    selectedOption = option
}

const toggleDropdown = () => {
    isOpen.value = !isOpen.value
}

interface Option {
    name: string
}
</script>