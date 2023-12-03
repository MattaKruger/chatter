import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { DefaultApi } from '@/api/api'
import type { AgentIn, AgentOut } from "@/api"

export const useAgentStore = defineStore('agent', () => {
    const api = new DefaultApi();
    const agents = ref<AgentOut[]>([])
    let activeAgent = reactive<AgentOut>({
        agent_id: 0,
        name: '',
        prompt: '',
        model: '',
        conversation_id: 0
    })

    const agentIn = reactive<AgentIn>({
        name: '',
        prompt: '',
        model: '',
        conversation_id: 0
    })

    async function createAgent() {
        const request = await api.createAgentCreateAgentPost(agentIn)
    }

    async function fetchAgents() {
        const request = await api.getAgentsGetAgentsPost()
        agents.value = request.data
    }

    function loadAgent(agent: AgentOut) {
        agents.value.push(agent)
    }

    return { agents, agentIn, createAgent, fetchAgents }
})