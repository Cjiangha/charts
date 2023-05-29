var dom = document.getElementById('container');
var myChart = echarts.init(
    dom
);

var value = 15;
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

        // x轴全部设置为false
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
        // y轴全部设置为false
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
        // 全部的样式都是由series构成。
        series: [
            //下方顶部的圈
            {
                name: '',
                type: 'pictorialBar',
                symbolSize: [100, 45],
                symbolOffset: [-10, -20],
                z: 12,
                data: [
                    {
                        name: '',
                        value: valueTTT,
                        symbolPosition: 'end',
                        itemStyle: {
                            normal: {
                                color: 'rgba(0, 255, 136, 0.5)', //圆柱顶部颜色
                            },
                        },
                    },
                ],
            },

            //下方的底部的圈
            {
                name: '',
                type: 'pictorialBar',
                symbolSize: [100, 45],
                symbolOffset: [-10, 24],
                z: 12,
                data: [
                    {
                        name: '',
                        value: valueTTT,
                        itemStyle: {
                            normal: {
                                color: 'rgba(0, 255, 136, 1)', //圆柱底部颜色
                            },
                        },
                    },
                ],
            },

            // 下方中间的柱形，长方形
            {
                type: 'bar',
                // silent: true,
                barWidth: 100,
                // "barGap": "-1100%",
                data: [
                    {
                        name: '',
                        // value: value,
                        value: valueTTT,
                        label: {
                            normal: {
                                show: true,
                                // formatter: '{c}'+'%',
                                position: 'top',
                                // distance: 4,
                                textStyle: {
                                    color: 'rgba(0, 255, 136, 1)', //柱子对应数值颜色
                                    fontSize: 24,
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

            // 外部柱顶上的椭圆
            {
                name: '',
                type: 'pictorialBar',
                symbolSize: [140, 45],
                symbolOffset: [-10, -20],
                offset: [11111, 20],
                // symbolSize: [120, 45],
                // symbolOffset: [-10, -20],
                z: 12,
                data: [
                    {
                        name: '',
                        value: fenmu,
                        symbolPosition: 'end',
                        itemStyle: {
                            normal: {
                                color: 'rgba(0, 255, 136, 0.1)', //圆柱顶部颜色
                            },
                        },
                    },
                ],
            },


            {
                name: '',
                type: 'pictorialBar',
                symbolSize: [150, 75],
                symbolOffset: [-10, 41],
                z: 12,
                data: [
                    {
                        name: '',
                        value: fenmu,
                        itemStyle: {
                            normal: {
                                color: 'rgba(0, 255, 136, .1)', //圆柱底部颜色
                            },
                        },
                    },
                ],
            },

            // 底部的深色颜色的圈圈
            {
                name: '',
                type: 'pictorialBar',
                symbolSize: [150, 75],
                symbolOffset: [-10, 55],
                z: 11,
                data: [
                    {
                        name: '',
                        value: fenmu,
                        itemStyle: {
                            normal: {
                                color: 'transparent',
                                borderColor: 'rgba(0, 255, 136, 1)', //底部内圆圈颜色
                                borderWidth: 30,
                            },
                        },
                    },
                ],
            },

            // 最下方最外层带点的圈圈
            {
                name: '',
                type: 'pictorialBar',
                symbolSize: [200, 100],
                symbolOffset: [-10, 62],
                z: 10,
                data: [
                    {
                        name: '关井数',
                        value: fenmu,
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

            {
                type: 'bar',
                silent: true,
                barWidth: 140,
                barGap: '-120%',
                data: [
                    {
                        name: '',
                        value: fenmu,
                        // value:"200000",
                        // label: {
                        //     normal: {
                        //         show: false,
                        //     },
                        // },
                        label: {
                            normal: {
                                show: true,
                                // formatter: '{c}'+'%',
                                position: 'top',
                                // distance: 4,
                                textStyle: {
                                    color: 'rgba(0, 255, 136, 1)', //柱子对应数值颜色
                                    fontSize: 24,
                                },
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: {
                                    x: 1,
                                    y: 1,
                                    x2: 1,
                                    y2: 0,
                                    type: 'linear',
                                    global: false,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: 'rgba(0, 255, 136, 0)',
                                        },
                                        {
                                            offset: 0.3,
                                            color: 'rgba(0, 255, 136, .1)',
                                        },
                                        {
                                            offset: 0.5,
                                            color: 'rgba(0, 255, 136, .1)',
                                        },
                                        {
                                            offset: 0.8,
                                            color: 'rgba(0, 255, 136, .1)',
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgba(0, 255, 136, 0)', //底部渐变颜色
                                        },
                                    ],
                                },
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
