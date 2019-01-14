$(function(){
    //make connection
    var socket = io.connect('http://localhost:3000');

    //buttons and inputs 
    var message = $("#message");
    var username = $("#username");
    var send_message = $("#send_message");
    var send_username = $("#send_username");
    var chatroom = $("#chatroom");

    //Emit a username
    send_username.click(() => {
        console.log(username.val());
        socket.emit('change_username',{username : username.val()});
    });
    //Emit a message
    send_message.click(() => {
        console.log(message.val());
        socket.emit('new_message',{message : message.val()});
    });
    socket.on("new_message",(data)=> {
        console.log(data);
        chatroom.append("<p class='message'>"+data.username+":"+data.message+"</p>");
    });
});