$(document).ready(function () {

    var data = {
        labels: ["一月", "二月", "三月", "四月", "五月", "六月", "七月"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    var dataPolar = [
        {
            value: 300,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "Red"
        },
        {
            value: 50,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        },
        {
            value: 100,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow"
        },
        {
            value: 40,
            color: "#949FB1",
            highlight: "#A8B3C5",
            label: "Grey"
        },
        {
            value: 120,
            color: "#4D5360",
            highlight: "#616774",
            label: "Dark Grey"
        }

    ];


    var options = {
        bezierCurve: true
    };

    // line chart
    var ctxLine = $("#myChartLine").get(0).getContext("2d");
    new Chart(ctxLine).Line(data,options);

    // bar chart
    var ctxBar=$("#myChartBar").get(0).getContext("2d");
    new Chart(ctxBar).Bar(data,{
        barShowStroke: false
    });

    // radar chart
    var ctxRadar=$("#myChartRadar").get(0).getContext("2d");
    new Chart(ctxRadar).Radar(data,{
        pointDot: false
    });

    // polar area chart
    var ctxPolar=$("#myChartPolar").get(0).getContext("2d");
    new Chart(ctxPolar).PolarArea(dataPolar,{
        segmentStrokeColor: "#000000"
    });

    // pie chart
    var ctxPie=$("#myChartPie").get(0).getContext("2d");
    new Chart(ctxPie).Pie(dataPolar,{
        animateScale: true
    });

    // doughnut chart
    var ctxDoughnut=$("#myChartDoughnut").get(0).getContext("2d");
    new Chart(ctxDoughnut).Doughnut(dataPolar,{
        animateScale: true
    });

});

var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};