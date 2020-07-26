function getInfo() {
    $("#buses").text("");
    $("#stopName").text("");

    const baseURL ="https://judgetests.firebaseio.com/businfo/";

    let stopId = $("#stopId").val();
    $("#stopId").val("");

    $.ajax({
        url: baseURL + stopId + ".json",
        method: "GET",
        success: displayBusSchedule,
        error: handleError
    })
    
    function displayBusSchedule(data){
        $("#stopName").text(data.name);

        for(let [key, value] of Object.entries(data.buses)){
            $("#buses").append(`<li>Bus ${key} arrives in ${value} minutes</li>`);
        }
    }

    function handleError(){
        $("#stopName").text("Error");
    }

}

