<template>
    <div class="bg-gray-100 h-screen flex items-center justify-center">

        <div class="bg-white p-8 rounded shadow-md w-96">
            <h2 class="text-2xl font-semibold mb-6 text-center">Login</h2>

            <!-- Login Form -->
            <form action="#" method="post">
                <!-- Username Field -->
                <div class="mb-4">
                    <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username:</label>
                    <input v-model="username" type="text" id="username" name="username"
                        class="w-full p-2 border rounded-md">
                </div>

                <!-- Password Field -->
                <div class="mb-6">
                    <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                    <input v-model="password" type="password" id="password" name="password"
                        class="w-full p-2 border rounded-md">
                </div>

                <!-- Submit Button -->
                <button type="submit"
                    class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
                    Login
                </button>
            </form>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia'

const store = useUserStore()
const { username, password } = storeToRefs(store)



</script>