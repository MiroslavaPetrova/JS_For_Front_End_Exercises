function solve() {
    let baseUrl = "https://judgetests.firebaseio.com/schedule/";
    let currentStopId = "depot";
    let currentStop;

    function depart(){
      $.ajax({
        url: baseUrl + currentStopId + ".json",
        method: "GET",
        success: loadBusStop
      })
    };

    function arrive(){
      $("#info").text(`Arriving at: ${currentStop.name}`);
      $("#depart").attr("disabled", false);
      $("#arrive").attr("disabled", true);
      
      currentStopId = currentStop.next;
    };

    function loadBusStop(data){
      currentStop = data;

     $("#info").text(`Next stop is: ${currentStop.name}`);
     $("#depart").attr("disabled", true);
     $("#arrive").attr("disabled", false);
    };

    return {
      depart,
      arrive
    };
  }