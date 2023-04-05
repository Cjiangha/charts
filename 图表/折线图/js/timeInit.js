var dom = document.getElementById('container');
var myChart = echarts.init(
    dom
);
// http://echarts.zhangmuchen.top/#/detail?cid=x9j5YZlRyZ

let xLabel = ['2016', '2017', '2018', '2019', '2020', '2021']
// let goToSchool = ["40", "60", "22", "85", "50", "40"] 
let goToSchool = [["2022-12-07 04:22:22", 40], ["2022-12-07 08:22:22", 60], ["2022-12-07 09:22:22", 60], ["2022-12-07 10:22:22", 85]]
// let goOutSchool = ["20", "50", "12", "65", "30", "60"]
let goOutSchool = [["2022-12-07 04:22:22", 21], ["2022-12-07 08:22:22", 32], ["2022-12-07 09:22:22", 44], ["2022-12-07 12:22:22", 98]]
// let AtHome = ["16", "13", "56", "43", "12", "59"]
let AtHome = [["2022-12-07 04:22:22", 21], ["2022-12-07 05:22:22", 32], ["2022-12-07 05:22:22", 44], ["2022-12-07 11:22:22", 98]]

option = {
    backgroundColor: '#0e1c47',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        //提示只显示时间
        formatter: function (params) {
            console.log('params', params);
            if (params != null && params.length > 0) {
                if (params.length === 1) {
                    return params[0].data[0].substring(11, 16) + `<br/>` + `${params[0].marker} ${params[0].seriesName} ${params[0].value[1]} `
                } else if (params.length === 2) {
                    return params[0].data[0].substring(11, 16) + `<br/>` + `${params[0].marker} ${params[0].seriesName} ${params[0].value[1]}` + `<br/>` + `${params[1].marker} ${params[1].seriesName} ${params[1].value[1]}`
                } else if (params.length === 3) {
                    return params[0].data[0].substring(11, 16) + `<br/>` + `${params[0].marker} ${params[0].seriesName} ${params[0].value[1]}` + `<br/>` + `${params[1].marker} ${params[1].seriesName} ${params[1].value[1]}` + `<br/>` + `${params[2].marker} ${params[2].seriesName} ${params[2].value[1]}`
                }
            }
        }
    },
    legend: {
        data: [
            '去学校人数',
            '返回学校人数',
            '在家人数'
        ],
        align: "left",
        right: '10%',
        top: '10%',
        type: 'plain',
        textStyle: {
            color: '#7ec7ff',
            fontSize: 16
        },
        icon: 'roundRect',
        itemWidth: 24,
        itemHeight: 10,
        itemGap: 30,
    },
    grid: {
        top: '15%',
        left: '10%',
        right: '10%',
        bottom: '15%',
    },
    // xAxis: [{
    //     type: 'time',
    //     boundaryGap: false,
    //     axisLine: {
    //         show: true,
    //         lineStyle: {
    //             width: 1,
    //             type: "solid"
    //         }
    //     },
    //     axisLabel: { //坐标轴刻度标签的相关设置
    //         textStyle: {
    //             color: '#7ec7ff',
    //             padding: 16,
    //             fontSize: 14
    //         },
    //         formatter: function (data) {
    //             return data
    //         }
    //     },
    //     splitLine: {
    //         show: true,
    //         lineStyle: {
    //             color: '#192a44'
    //         },
    //     },
    //     axisTick: {
    //         show: true,
    //     },
    //     // data: xLabel
    // }],
    xAxis: {
        type: "time"
    },
    yAxis: [{
        name: '人数',
        type: "value",
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
    }],
    dataZoom: [{
        "show": true,
        "height": 20,
        brushSelect: false,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle: {
            color: "#d3dee5",

        },
        textStyle: {
            color: "#fff"
        },
        borderColor: "#90979c",
    }
    ],
    series: [{
        name: '去学校人数',
        type: 'line',
        //  symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
        //  showAllSymbol: true,
        symbolSize: 10,//标记的大小，可以设置成诸如 10 这样单一的数字，
        smooth: true,
        lineStyle: {
            normal: {
                width: 5,
            },
            borderColor: 'rgba(0,0,0,.4)',
        },
        tooltip: {
            trigger: "axis",
            formatter: function (params) {
                console.log(params);
                return params.marker.replace('[object Object]', '#ff0000') + ((params.value / 100) * 100).toFixed(2) + '%';
            },
            textStyle: {
                color: 'green'
            }
        },
        areaStyle: { //区域填充样式
            normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0.6, 0.6, 0.6, 1, [{
                    offset: 0,
                    color: "rgba(25,163,223,.3)"
                },
                {
                    offset: 1,
                    color: "rgba(25,163,223, 0)"
                }
                ], false),
                shadowColor: 'rgba(25,163,223, 0.5)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
        },
        data: goToSchool
    },
    {
        name: '返回学校人数',
        type: 'line',
        //  symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: false,
        smooth: true,
        symbolSize: 10,//标记的大小，可以设置成诸如 10 这样单一的数字，
        lineStyle: {
            normal: {
                width: 2,
                type: 'dashed'
            },
            borderColor: 'rgba(0,0,0,.4)',
        },
        areaStyle: { //区域填充样式
            normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "rgba(25,163,223,.3)"
                },
                {
                    offset: 1,
                    color: "rgba(25,163,223, 0)"
                }
                ], false),
                shadowColor: 'rgba(25,163,223, 0.5)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
        },
        data: goOutSchool
    },
        {
            name: '在家人数',
            type: 'line',
            //  symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: false,
            smooth: true,
            symbolSize: 10,//标记的大小，可以设置成诸如 10 这样单一的数字，
            lineStyle: {
                normal: {
                    width: 2,
                    type:'dashed'
                },
                borderColor: 'rgba(0,0,0,.4)',
            },
            areaStyle: { //区域填充样式
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "rgba(25,163,223,.3)"
                    },
                    {
                        offset: 1,
                        color: "rgba(25,163,223, 0)"
                    }
                    ], false),
                    shadowColor: 'rgba(25,163,223, 0.5)', //阴影颜色
                    shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                }
            },
            data: AtHome
        }
    ]
};
myChart.setOption(option);

window.addEventListener("resize", function () {
    myChart.resize();
});