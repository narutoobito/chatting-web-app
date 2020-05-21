const socket= io('http://localhost:3000');
const textArea=document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
messageInput= document.getElementById('message');

const name= prompt('your name');
appendMessage('You joined')
socket.emit('new-user', name)

socket.on('chat-message',data =>{
appendMessage(`${data.user} : ${data.message}`);
})

socket.on('user-connected',data =>{
appendMessage(`${data} connected`)
})

socket.on('user-connect',name=>{
appendMessage(`${name} disconnected`)
})

messageForm.addEventListener('submit', event=>
{
event.preventDefault();
message = messageInput.value;
appendMessage(`YOU: ${message}`);
socket.emit('send-chat-message',message)
messageInput.value="";
})

function appendMessage(message)
{
text=document.createElement('div');
text.addClass('getmessage');
text.innerText=message;

textArea.append(text);
}
