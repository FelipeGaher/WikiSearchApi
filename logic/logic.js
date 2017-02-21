$(document).ready(function () {

    $("#search").click(function () {

        var searchTerm = $("#searchTerm").val();

        //API Wiki
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";

        $.ajax({
            type: "GET",
            url: url,
            async: false,
            dataType: "json",
            success: function (data) {
                console.log(data);

                $("#result").prepend(data[1][0]);

                $("#result").html("");

                for (var i = 0; i < data[1].length; i++) {
                    $("#result").prepend("<li class='list-group-item text-justify'><a target='blank' href=" + data[3][i] + ">" + data[1][i] + "</a><p class='text-justify'>" + data[2][i] + "</p></li>");

                }
                $("#searchTerm").val("");
            },
            error: function (errorMessage) {

            }
        });

    });

    //Enter functionality
    $("#searchTerm").keypress(function (key) {
        if (key.which == 13) {
            $("#search").click();
        }
    });
});
