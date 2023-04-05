var dom = document.getElementById('container');
var myChart = echarts.init(
    dom,
    //     'dark', {
    //     renderer: 'canvas',
    //     // useDirtyRect: false
    // }
);

let option = {
    title: {
        text: '2019年销售水量和主营业务收入对比',
        textStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 20,
        },
        top: '3%',
        left: '10%',
    },
    backgroundColor: '#0f375f',
    grid: {
        top: "25%",
        bottom: "10%"//也可设置left和right设置距离来控制图表的大小
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
            label: {
                show: true
            }
        }
    },
    legend: {
        data: ["销售水量", "主营业务"],
        top: "15%",
        // right:"15%",
        textStyle: {
            color: "#ffffff"
        }
    },
    xAxis: {
        data: [
            "当年完成水量",
            "去年同期水量",
            "滚动目标值水量",
            "全年目标值水量",
            "当年完成金额",
            "去年同期金额",
            "滚动目标金额",
            "全年目标值",

        ],
        axisLine: {
            show: true,
            lineStyle: {
                width: 1,
                type: "solid"
            }
        },
        //刻度
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#fff",
            }
        },
    },
    yAxis: [{
        type: "value",
        name: "亿元",
        nameTextStyle: {
            color: "#fff"
        },
        splitLine: {
            lineStyle: {
                color: 'rgb(99,113,141)', // 分割线颜色
                type: 'dashed'// 线的类型。
            }
        },
        axisLine: {
            show: false,        //隐藏y轴轴线
            lineStyle: {
                color: '#FFFFFF'
            }
        },
        //设置y轴刻度
        axisLabel: {
            show: true,
            textStyle: {
                color: "#fff"
            }
        },

    },
    {
        type: "value",
        gridIndex: 0,
        min: 50,
        max: 100,
        splitNumber: 8,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        // splitArea: {
        //     show: true,
        //     areaStyle: {
        //         color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
        //     }
        // }
    }
    ],
    series: [
        {
            name: "主营业务",
            type: "bar",
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        // color: "#00FFE3"
                        color: "rgb(25,214,236,1)"
                    },
                    {
                        offset: 1,
                        color: "rgb(63,92,241,1)"
                    }
                    ]),
                    // 修改柱子圆角
                    barBorderRadius: 20
                },

            },
            data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5],
            label: {
                show: true, //开启显示
                position: 'top', //在上方显示
                textStyle: { //数值样式
                    color: '#fff',
                    fontSize: 14
                }
            }
        }
    ]
};

myChart.setOption(option);

window.addEventListener("resize", function () {
    myChart.resize();
});