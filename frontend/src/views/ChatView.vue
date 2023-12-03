<template>
  <main>
    <div class="grid grid-flow-row auto-rows-max justify-center bg-primary-700">
      <ChatBox />
      <div class="chat_config mt-4">
        <ChatTab />
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { useChatStore } from '@/stores/chat'
import { storeToRefs } from 'pinia'
import { useWebSocket, tryOnMounted, } from '@vueuse/core'
import ChatTab from '@/components/ChatTab.vue'
import ChatBox from '@/components/chat/ChatBox.vue'
import { watch } from 'vue'

interface Message {
  user: string
  content: string
  created_at: Date
}

const store = useChatStore()
const { status, data, send, open, close } = useWebSocket('ws://localhost:8000/ws', {})

const { messages, currentMessage } = storeToRefs(store)

watch(data, (newData: string) => {
  addAssistantMessage(newData)
})

tryOnMounted(() => {
  store.createConversation("test")
})

function addMessage() {
  if (currentMessage.value.length !== 0) {
    const message: Message = {
      user: 'user',
      content: currentMessage.value,
      created_at: new Date()
    }
    store.addMessage(message)
    send(JSON.stringify(message))
    currentMessage.value = ''
  }
}

function addAssistantMessage(message: string) {
  store.addMessage({
    user: 'assistant',
    content: message,
    created_at: new Date()
  })
}
</script>
<style scoped>
.messages {
  width: 1100px;
  height: 700px;
}

.option_box {
  height: 300px;
}

.chat_config {
  height: 800px;
}
</style>
