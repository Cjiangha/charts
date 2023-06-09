var dom = document.getElementById('container');
var myChart = echarts.init(
    dom,
    //     'dark', {
    //     renderer: 'canvas',
    //     // useDirtyRect: false
    // }
);

option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'pictorialBar',
        symbol: 'path://M0, 0, L50, 0, L25, -100',
        symbolClip: true,
    }]
};
myChart.setOption(option);

window.addEventListener("resize", function () {
    myChart.resize();
});