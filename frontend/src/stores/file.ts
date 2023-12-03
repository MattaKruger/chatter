import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { useFetch } from '@vueuse/core'

export const useFileStore = defineStore('file', () => {
    const files = ref<File[]>([])
    const { data } = useFetch("http://127.0.0.1:8000/file_list")

    function addFile(file: File) {
        files.value.push(file)
    }

    async function fetchFiles() {
        console.log(data)
    }
    return { files, addFile, fetchFiles }
})


interface File {
    name: string
}