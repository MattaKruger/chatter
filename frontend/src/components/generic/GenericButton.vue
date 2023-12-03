<template>
    <button class="btn btn-primary bg-success-600 text-white px-4 py-2 rounded-md">
        {{ text }}
    </button>
</template>
<script setup lang="ts">
defineProps<{
    text: string
}>()
</script>