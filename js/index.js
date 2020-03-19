$(function () {
  $('#container').highcharts({
    title: {
      text: 'Burn Up Chart',
    },
    plotOptions: {
      line: {
        lineWidth: 3
      },
      tooltip: {
        hideDelay: 200
      }
    },
    xAxis: {
      categories: ['Sprint 1','Sprint 2','Sprint 3','Sprint 4']
    },
    yAxis: {
      min: 0,
      title: {
        text: null
      },
      plotLines: [{
        value: 0,
        width: 1
      }]
    },
    tooltip: {
      valueSuffix: ' Story Points',
      crosshairs: true,
      shared: true
    },
    series: [
       {
        name: 'Actual',
        color: 'rgba(0,120,200,0.75)',
        marker: {
          radius: 10
        },
        data: [5, 15, 30, 60]
      }
    ]
  });
});
