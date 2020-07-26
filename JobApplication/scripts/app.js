(function attachEvents(){
    $("#twitter-btn").on("click", loadFacebook);

    function loadFacebook(){
        swal({
            title: "Leave this site?",
            text: "If you click OK, you will be redirected to https://twitter.com.",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-primary",
            confirmButtonText: "OK",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        },
          function(isConfirm) {
            if (isConfirm) {
              window.location.href = "https://twitter.com";
            }
        });

    }


    $("#google-btn").on("click", loadGoogle);

    function loadGoogle(){
        swal({
            title: "Leave this site?",
            text: "If you click OK, you will be redirected to https://google.com.",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-primary",
            confirmButtonText: "OK",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        },
          function(isConfirm) {
            if (isConfirm) {
              window.location.href = "https://google.com";
            }
        });
    }
} ());