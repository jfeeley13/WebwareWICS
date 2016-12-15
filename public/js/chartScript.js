// $(function () {
    document.addEventListener("DOMContentLoaded", function() {
     var container = document.getElementById('container');
    // document.body.appendChild(container);
console.log(container);
     window.chart = new Highcharts.Chart({
    // Highcharts.chart('container', {

        chart: {
            type: 'column',
            renderTo: container,
            height: 400
        },

        title: {
            text: 'Selected WPI Majors, grouped by gender'
        },

        xAxis: {
            categories: ['2012', '2013', '2014', '2015', '2016']
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'Number of students'
            }
        },

        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },

        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },

        series: [
        {
            name: 'Robotics Male',
            data: [171, 190, 220, 235, 266],
            stack: 'Robotics'
        }, 
        {
            name: 'Robotics Women',
            data: [31, 43, 41, 46, 60],
            stack: 'Robotics'
        },
        {
            name: 'CS Male',
            data: [247, 293, 367, 417, 476],
            stack: 'CS'
        }, 
        {
            name: 'CS Women',
            data: [30, 48, 54, 59, 90],
            stack: 'CS'
        },        {
            name: 'ECE Male',
            data: [267, 267, 296, 280, 289],
            stack: 'ECE'
        }, 
        {
            name: 'ECE Women',
            data: [47, 63, 68, 64, 67],
            stack: 'ECE'
        },  
        {
            name: 'BME Male',
            data: [183, 189, 181, 153, 155],
            stack: 'BME'
        }, 
        {
            name: 'BME Women',
            data: [233, 235, 228, 244, 234],
            stack: 'BME'
        },      
        {
            name: 'ME Male',
            data: [651, 668, 708, 731, 759],
            stack: 'ME'
        }, 
        {
            name: 'ME Women',
            data: [155, 235, 183, 217, 259],
            stack: 'ME'
        }
        ]
    });
})