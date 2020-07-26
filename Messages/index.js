function attachEvents(){
    const baseUrl = "https://messages-b46c9.firebaseio.com/messages.json";
    
    $("#submit").on("click", sendMessage);
    $("#refresh").on("click", refreshData);

    function sendMessage(){
        let author = $("#author").val();
        let content = $("#content").val();

        $("#author").val("");
        $("#content").val("");
      
        let timestamp = Date.now();
        let message = {
            author,
            content,
            timestamp
        };

        $.ajax({
            url: baseUrl,
            method: "POST",
            data: JSON.stringify(message)
        });
    };

    function refreshData(){
        $.ajax({
            url: baseUrl,
            method: "GET",
            success: loadAllMessages
        });
    };

    function loadAllMessages(data){
        let allMessages ="";

        for(let message of Object.values(data)){
            allMessages += `${message.author}: ${message.content}\n`;
        }
        $("#messages").text(allMessages);
    };
};