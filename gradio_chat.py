import gradio as gr
import openai
from typing import List


def chatbot(input_text: str, chat_history: List):
    chat_history.append(f"User: {input_text}")
    conversation_prompt = "\n".join(chat_history)
    response = openai.ChatCompletion.create(
        engine="gpt-4-1106-preview",
        prompt=conversation_prompt,
        max_tokens=150,
    )
    reply = response['choices'][0]['text'].strip() # type: ignore 
    chat_history.append(f"AI Assistant: {reply}")
    chat_display = "\n".join(chat_history[-6:])  # Display the last 6 lines of the conversation
    return "", chat_display

gr.ChatInterface(
    chatbot,
    chatbot=gr.Chatbot(height=600),
    textbox=gr.Textbox(placeholder="Ask me anything", container=False, scale=7),
    title="Research assistant",
    description="Ask me anything",
    theme="soft",
    examples=["Hello", "Am I cool?", "Are tomatoes vegetables?"],
    cache_examples=True,
    retry_btn=None,
    undo_btn="Delete Previous",
    clear_btn="Clear",
).launch()



