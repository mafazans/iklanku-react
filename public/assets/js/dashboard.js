function getReport(elem)
{
    $("#loading_chart").removeClass('hidden');
    $("#loading_chart").addClass('box-flex');

    $("#canvas").addClass('hidden');
    $("#canvas").removeClass('box-flex');

    $(elem).parent().find('a').removeClass("active");
    $(elem).addClass("active");
    var params = $(elem).data("day");
    var url = "/dashboard/getReport?range="+params;

    if(!params){
        url = "/dashboard/getReport";
    }

    request("GET",url,null,null,null,callbackReport,null);
}

function callbackReport(res){
    if(res != '404')
    {
        $("#chart_not_found").addClass('hidden');
        $("#canvas_wrapper").removeClass('hidden');

        renderChart(res.data.labels,res.data.total_show,res.data.total_click);

        $("#loading_chart").addClass('hidden');
        $("#loading_chart").removeClass('box-flex');

        $("#canvas").removeClass('hidden');
        $("#canvas").addClass('box-flex');
    }
    else
    {
        $("#chart_not_found").removeClass('hidden');
        $("#canvas_wrapper").addClass('hidden');
    }
}

var renderChart = function(labels,total_show,total_click){
    $('#canvas').remove(); //
    $('#canvas_wrapper').append('<canvas id="canvas" width="50" height="50"><canvas>');

    var config = {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: "Tayangan",
                fill: true,
                backgroundColor: 'rgba(0, 104, 235, 0.7)',
                borderColor: "rgba(0, 104, 235,0)",
                pointBackgroundColor: 'rgba(0, 104, 235, 0.7)',
                data: total_show,
                yAxisID: "A"
            }, {
                label: "Klik",
                fill: true,
                backgroundColor: 'rgba(0, 104, 235, 0.5)',
                borderColor: "rgba(0, 104, 235,0)",
                pointBackgroundColor: 'rgba(0, 104, 235, 0.5)',
                data: total_click,
                yAxisID: "B"
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            title: {
                display: true
            },
            drawBorder: false,
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: false,
                    scaleLabel: {
                        display: false,
                        labelString: 'Month'
                    }
                }],
                yAxes: [
                    {
                      id: "A",
                      display: false,
                      type: "linear",
                    }, {
                        id: "B",
                        display: false,
                        type: "linear",
                    }]
            },
            legend: {
                display: false
            },
        }
    };

    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.canvas.width = 505;
    ctx.canvas.height = 455;
    new Chart(ctx,config);

}


getReport();