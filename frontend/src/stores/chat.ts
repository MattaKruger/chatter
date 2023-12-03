import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

import { DefaultApi } from '@/api/api'
import type { ConversationIn, ConversationOut } from '@/api'
import { watchWithFilter } from '@vueuse/core'

export const useChatStore = defineStore('chat', () => {
  const api = new DefaultApi()
  const messages = ref<Message[]>([])
  const currentMessage = ref('')

  const conversation: ConversationIn = reactive<ConversationIn>({
    name: '',
    updated_at: null,
    created_at: null
  })

  const chatOptions = reactive<ChatOptions>({
    return_tokens: 150,
    temperature: 0.7,
    agents: [],
    system_context: ''
  })

  // TODO finish function
  watchWithFilter(messages, () => {
    const last_message = messages.value.slice(-1);
  })

  function addMessage(message: Message) {
    messages.value.push(message)
  }

  function summarizeChat() {
    // TODO add call to summarize chat
  }

  function callGPT(message: Message) { }

  function addAgent(agent: Agent) {
    chatOptions.agents.push(agent)
  }

  async function createConversation(name: string) {
    conversation.name = name;
    const request = await api.createConversationCreateConversationPost(conversation)
    const response = request.data
  }

  return { messages, currentMessage, chatOptions, addMessage, createConversation }
})

interface Message {
  user: string
  content: string
  created_at: Date
}

interface ChatOptions {
  return_tokens: number
  temperature: number
  agents: Agent[]
  system_context: string
}

interface Agent {
  name: string
  prompt: string
}
