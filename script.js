function getNewThing() {
    apiUrl = "https://api.random.org/json-rpc/4/invoke";

    var requestId = Math.floor((Math.random() * 2000) + 1);

    data = {
        "jsonrpc": "2.0",
        "method": "generateIntegers",
        "params": {
            "apiKey": "",
            "n": 1,
            "min": 1,
            "max": 6,
            "replacement": true,
            "base": 10,
            "pregeneratedRandomization": null
        },
        "id": requestId
    };

    // ajax call to the api
    return $.ajax({
        type: "POST",
        headers: {"Content-Type": "application/json"},
        url: apiUrl,
        data: JSON.stringify(data),
        fail: function() {
            return false
        },
        done: function(result) {
            return result
        }
    });

}

$(document).ready(function(){
    $("input").on("click", function(){
        rollNum = Math.floor((Math.random() * 6) + 1);

        $(".die-image-container img").attr("src", "images/roll-" + rollNum + ".png");
        $(".die-image-container img").css("display", "block");
        $("#result-text").text("You have rolled a " + rollNum + ".");
        $("#result-text").css("visibility", "visible");
    });
});



