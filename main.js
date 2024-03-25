$(document).ready(function () {

    var fullDate = new Date()
    var twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) : '0' + (fullDate.getMonth()+1);
    var currentDate = fullDate.getDate() + "/" + twoDigitMonth + "/" + fullDate.getFullYear();

    $("#today-date").text("Data Till : "+currentDate)

    

    init()
    function init() {
        var url = "https://api.covid19api.com/summary"
        var newConfirmed = $("#newConfirmed");
        var totalConfirmed = $("#totalConfirmed");
        var newRecovered = $("#newRecovered");
        var newDeaths = $("#newDeaths");
        var totalDeaths = $("#totalDeaths");

        $.get(url, function (data) {
            console.log(data.Global);
            var newConfirmed = data.Global.NewConfirmed;
            var totalConfirmed = data.Global.TotalConfirmed;
            var newRecovered = data.Global.NewRecovered;
            var newDeaths = data.Global.NewDeaths;
            var totalDeaths = data.Global.TotalDeaths;

            $("#newConfirmed").text(newConfirmed);
            $("#totalConfirmed").text(totalConfirmed);
            $("#newRecovered").text(newRecovered);
            $("#newDeaths").text(newDeaths);
            $("#totalDeaths").text(totalDeaths);
        })
    }
})