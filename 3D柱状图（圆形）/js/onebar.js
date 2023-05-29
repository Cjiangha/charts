var dom = document.getElementById('container');
var myChart = echarts.init(
    dom
);

var fenmu = 5000;
var valueTTT = 3456;
let option = {};
setInterval(() => {
    fenmu = fenmu + 3030;
    valueTTT = valueTTT + 2030;
    console.log(111)
    option = {
        backgroundColor: '#0e202d',
    
        grid: {
            top: 200,
            bottom: 150,
        },
        // tooltip: {},
        xAxis: {
            data: [],
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            // axisLabel: {
            //     interval: 0,
            //     textStyle: {
            //         color: '#beceff',
            //         fontSize: 20,
            //     },
            //     margin: 80, //刻度标签与轴线之间的距离。
            // },
        },
        yAxis: {
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
        },
        series: [
            {
                name: '',
                type: 'pictorialBar',
                symbolSize: [100, 45],
                symbolOffset: [-0, -20],
                z: 12,
                data: [
                    {
                        name: '',
                        value: value,
                   
                        symbolPosition: 'end',
                        itemStyle: {
                            normal: {
                                color: 'rgba(0, 255, 136, 0.5)', //圆柱顶部颜色
                            },
                        },
                    },
                ],
            },
            {
                name: '',
                type: 'pictorialBar',
                symbolSize: [100, 45],
                symbolOffset: [-0, 24],
                z: 12,
                data: [
                    {
                        name: '',
                        value: value,
                       
                        itemStyle: {
                            normal: {
                                color: 'rgba(0, 255, 136, 1)', //圆柱底部颜色
                            },
                        },
                    },
                ],
            },
            {
                type: 'bar',
                // silent: true,
                barWidth: 100,
                barGap: "-120%",
    
                data: [
                    {
                        name: '',
                        value: value,
                        label: {
                            
                            normal: {
                                show: true,
                                formatter: '{c}'+'%',
                                position: 'top',
                                // distance: 4,
                                textStyle: {
                                    color: 'rgba(0, 255, 136, 1)', //柱子对应数值颜色
                                    fontSize: 48,
                                },
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: {
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    type: 'linear',
                                    global: false,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: 'rgba(0, 255, 136, 0)',
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgba(0, 255, 136, 1)', //底部渐变颜色
                                        },
                                    ],
                                },
                            },
                        },
                    },
                ],
            },
    
            //往上是内部柱状图
            //往下是外部柱状图
            {
                name: '',
                type: 'pictorialBar',
                symbolSize: [150, 75],
                symbolOffset: [-0, 55],
                z: 11,
                data: [
                    {
                        name: '',
                        value: '100',
                        itemStyle: {
                            normal: {
                                color: 'transparent',
                                borderColor: 'rgba(0, 255, 136, 1)', //底部内圆圈颜色
                                borderWidth: 30,
                                show:false
                            },
                        },
                    },
                ],
            },
          //   最外层的圈
            {
                name: '',
                type: 'pictorialBar',
                symbolSize: [200, 100],
                symbolOffset: [-0, 62],
                z: 10,
                data: [
                    {
                        name: '关井数',
                        value: '100',
                     
                        itemStyle: {
                            normal: {
                                color: 'transparent',
                                borderColor: 'rgba(0, 255, 136, 1)', //底部外圆圈颜色
                                // borderType: 'dashed',
                                borderWidth: 2,
                            },
                        },
                    },
                ],
            },
        ],
    };
    
    
}, 2000);



setInterval(() => {
    console.log('option', option)
    myChart.clear();
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}, 2000);
