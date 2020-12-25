$(document).ready(function () {
    $.getJSON("data/items.json",
        function (data, textStatus, jqXHR) {
            console.log(data);
        }
    );
});