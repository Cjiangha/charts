var dom = document.getElementById('container');
var myChart = echarts.init(
    dom
);
option = {
    title: {
        subtext: '单位(万)',
        subtextStyle: {
            color: '#eff6fb',
            fontWeight: 'normal'
        },
        padding: [0, 10]
    },
    backgroundColor: 'rgb(128,128,128,0)',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
                backgroundColor: '#333'
            }
        }
    },
    grid: {

        containLabel: true
    },
    //legend图表;
    legend: {
        data: ['邮件营销', '邮件营销1', '视频广告','邮件营销2'],
        textStyle: {
            color: '#badafc',
        },
        // backgroundColor:['#ccc','yellow','blue','green'],
        padding: 10,
        itemStyle:{
            
        }
    },
    xAxis: {
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#6c96b7',

            },
        },
        axisLabel: { //坐标轴刻度标签的相关设置。
            interval: 0,
            rotate: "45",

        },

    },
    yAxis: [{
            type: 'value',
            axisLabel: {
                formatter: '{value}',

            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#6c96b7',

                }
            },
            splitLine: {
                lineStyle: {
                    color: '#25609d',

                }
            }
        },
        {
            type: 'value',
            min: 0,
            max: 1,
            interval: 0.25,
            axisLabel: {
                formatter: '{value}',

            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#6c96b7'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#25609d'
                }
            }
        },
    ],
    series: [{
            name: '邮件营销1',
            type: 'line',
            symbol: 'circle',
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: "#35d396",
                    borderColor: '#35d396',

                }
            },
            symbolSize: 10,
            data: [0.1, 0.4, 0.5, 0.8, 0.3, 0.6, 0.5],
        }, {
            name: '邮件营销2',
            type: 'line',
            symbol: 'circle',
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: "#35d396",
                    borderColor: '#35d396',

                }
            },
            symbolSize: 10,
            data: [0.5, 0.1, 0.7, 0.4, 0.2, 0.55, 0.123],
        }, {
            name: '视频广告',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: '#6a8ffd'
                            },
                            {
                                offset: 1,
                                color: '#56cbfe'
                            }
                        ]
                    )
                }
            },
            data: [700, 300, 500, 800, 300, 600, 500],
        },
        {
            name: '营销',
            type: 'bar',

            itemStyle: {
                normal: {
                    color: '#4a6c8d'
                }
            },
            data: [700, 300, 500, 800, 300, 600, 500],
        }
    ]
};

myChart.setOption(option);

window.addEventListener("resize", function () {
    myChart.resize();
});