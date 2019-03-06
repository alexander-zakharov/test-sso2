$(document).ready(function() {
    var socket = new SockJS('http://api1:8080/stomp');
    var stompClient = Stomp.over(socket);
    stompClient.connect({ }, function(frame) {

        stompClient.subscribe("/topic/refresh", function(data) {
            location.reload(true);
        });

    });
});