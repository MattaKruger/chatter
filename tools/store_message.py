import pika
import json
connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
channel = connection.channel()

channel.exchange_declare(exchange='messages', exchange_type='fanout')


async def store_message(client_id: int, message: str):
    message_data = {'client_id': client_id, 'content': message}
    message_json = json.dumps(message_data)

    # Publish the message to the 'messages' exchange
    channel.basic_publish(exchange='messages', routing_key='', body=message_json)

# Example usage
client_id = 1
message = "Hello, this is a test message!"
# await store_message(client_id, message)

# Close the connection when done
connection.close()