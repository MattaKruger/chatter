<template>
    <div class="dropdown">
        <div tabindex="0" role="button" class="btn m-1">Click</div>
        <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li v-for="(option, index) in options" :key="index">
                {{ option.name }}
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
defineProps<{
    options: Option[]
}>()

interface Option {
    name: string
    label: string
}
</script>
