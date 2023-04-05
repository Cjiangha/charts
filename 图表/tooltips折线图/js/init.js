var dom = document.getElementById('container');
var myChart = echarts.init(
    dom
);
// http://echarts.zhangmuchen.top/#/detail?cid=x9j5YZlRyZ
var dataAll = [
    [30, 14, 28, 49, 32, 9, 44],
    [20, 17, 83, 32, 10, 71, 58],
    [80, 100, 30, 20, 10, 10, 80]
];

var avtotal = 0;
for (var v in dataAll[2]) {
    avtotal += dataAll[2][v];
}

option = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'item',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }

    },
    legend: {
        data: ['line1', 'bar2', 'line3'],
        align: 'left'
    },
    grid: [{
            x: '7%',
            y: '7%',
            width: '78%',
            height: '38%'
        },

        {
            x: '7%',
            y2: '12.3%',
            width: '78%',
            height: '38%'
        },

        {
            x: '7%',
            y2: '12.3%',
            width: '78%',
            height: '38%'
        }, {
            x: '7%',
            y: '7%',
            width: '78%',
            height: '38%'
        }
    ],
    xAxis: [{
            gridIndex: 0,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                show: false
            },
            nameGap: '50'
        },
        {
            gridIndex: 1,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
        }, {
            gridIndex: 2,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
        }, {
            gridIndex: 3,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
        }

    ],
    yAxis: [{
            gridIndex: 0,
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        {
            gridIndex: 1,
            inverse: true,
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        {
            gridIndex: 2,
            min: 0,
            max: 100,
            inverse: true,
            position: 'right',
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }, {
            gridIndex: 3,
            min: 0,
            max: 100,
            position: 'right',
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }

    ],
    series: [
        {
            name: 'line1',
            type: 'line',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: dataAll[0],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 1, 0, 0,
                        [{
                                offset: 1,
                                color: 'rgb(199,154,180)'
                            },
                            {
                                offset: 0,
                                color: 'rgb(143,139,209)'
                            }
                        ]
                    )
                }
            },
            barWidth: 20,
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
        },
        {
            name: 'bar2',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: dataAll[1],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 1, 0, 0,
                        [{
                                offset: 1,
                                color: 'rgb(210,184,206)'
                            },
                            {
                                offset: 0,
                                color: 'rgb(230,176,176)'
                            }
                        ]
                    )
                }
            },
            barWidth: 20,
            label: {
                normal: {
                    show: true,
                    position: 'bottom'
                }
            },
        }, {
            name: 'line3',
            type: 'line',
            xAxisIndex: 2,
            yAxisIndex: 2,
            data: dataAll[2],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 1, 0, 0,
                        [{
                                offset: 1,
                                color: 'green'
                            },
                            {
                                offset: 0,
                                color: 'green'
                            }
                        ]
                    )
                }
            },
            barWidth: 20,
            tooltip: {
                trigger:"axis",
                formatter: function(params) {
                    console.log(params);
                    return params.marker.replace('[object Object]','#ff0000')+ ((params.value / 100) * 100).toFixed(2) + '%';
                },
                textStyle: {
                    color: 'green'
                }
            },
            label: {
                show: true,
                distance: 30,
                position: 'bottom',
                formatter: function(params) {
                    return ((params.value / 100) * 100).toFixed(2) + '%';
                },
                color: 'green'
            },
        }
    ]
};

console.log('option',option)

myChart.setOption(option);

window.addEventListener("resize", function () {
    myChart.resize();
});