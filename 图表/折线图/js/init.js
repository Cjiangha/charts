var dom = document.getElementById('container');
var myChart = echarts.init(
    dom
);
// http://echarts.zhangmuchen.top/#/detail?cid=x9j5YZlRyZ

let xLabel = ['2016', '2017', '2018', '2019', '2020', '2021']
let goToSchool = ["40", "60", "22", "85", "50", "40"]
let goOutSchool = ["20", "50", "12", "65", "30", "60"]

option = {
    backgroundColor: '#0e1c47',
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        data: [
            '去学校人数',
            '返回学校人数'
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
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        //  axisLine: { //坐标轴轴线相关设置。数学上的x轴
        //      show: true,
        //      lineStyle: {
        //          color: '#233653'
        //      },
        //  },
        axisLine: {
            show: true,
            lineStyle: {
                width: 1,
                type: "solid"
            }
        },
        axisLabel: { //坐标轴刻度标签的相关设置
            textStyle: {
                color: '#7ec7ff',
                padding: 16,
                fontSize: 14
            },
            formatter: function (data) {
                return data
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#192a44'
            },
        },
        axisTick: {
            show: true,
        },
        data: xLabel
    }],
    yAxis: [{
        name: '人数',
        type: "value",
        // name: "亿元",
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
    series: [{
        name: '去学校人数',
        type: 'line',
        //  symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
        //  showAllSymbol: true,
        symbolSize: 10,//标记的大小，可以设置成诸如 10 这样单一的数字，
        smooth: true,
        // label: {
        //     show: true,
        //     position: 'top',
        //     textStyle: {
        //         color: '#fff',
        //     },
        // },
        lineStyle: {
            normal: {
                width: 5,
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
        data: goToSchool
    }, {
        name: '返回学校人数',
        type: 'line',
        //  symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: false,
        smooth: true,
        symbolSize: 10,//标记的大小，可以设置成诸如 10 这样单一的数字，
        lineStyle: {
            normal: {
                width: 5,
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
    }]
};
// let len = 0
//  setInterval(()=>{
//      if(len === xLabel.length){
//          len = 0
//      }
//      myChart.dispatchAction({
//          type: 'showTip',
//          seriesIndex: 0,
//          dataIndex: len,
//      })
//      len ++
//  }, 1000)


myChart.setOption(option);

window.addEventListener("resize", function () {
    myChart.resize();
});