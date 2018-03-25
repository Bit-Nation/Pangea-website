$( document ).ready(function() {

    //Display invested ETH
    $.ajax({
        url: "https://ico-fund-calculation.herokuapp.com/",
        success: function (data) {
            if(typeof data.collected_eth === "number"){
                $('#amount').text(data.collected_eth);
                return;
            }
            console.log("collected_eth is not a number: "+JSON.stringify(data));
        },
        error: console.error
    });

    // Checkboxes validation
    $(".accept").click(function (event) {
        var counter = 0;
        $(".accept").each(function(key, checkbox) {
            if(checkbox.checked == false) {
                $("#checkboxes-continue").attr("disabled", "disabled");
                return false;
            } else {
                counter++;
                if(counter == $(".accept").length) {
                    $("#checkboxes-continue").attr("disabled", false);
                }
            }
        });
    });
    // Show address
    $("#checkboxes-continue").click(function(){
        $( "#checkboxes" ).addClass( "hidden" );
        $( "#address" ).removeClass( "hidden" );
    });
});
