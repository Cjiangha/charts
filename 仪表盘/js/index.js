var dom = document.getElementById('container');
var myChart = echarts.init(
    dom,
);

let value = 65.23;
let title = '%';
let int = value.toFixed(2).split('.')[0];
let float = value.toFixed(2).split('.')[1];

const dataArr = 50;
const dataX = 100;
const height1 = { value: 800 };

var bgColor = "#222939";
var option = {
    backgroundColor: '#031f45',
    /** 标题*/
    title: {
        text: '{a|' + int + '}{c|' + title + '}',
        x: 'center',
        y: 'center',
        textStyle: {
            rich: {
                a: {
                    fontSize: 24,
                    // color: '#12D7EF',
                    color: "white",
                    fontWeight: '600',
                },
                c: {
                    fontSize: 24,
                    color: "white",
                    padding: [5, 0]
                }
            }
        }
    },
    /** 关闭必图例*/
    legend: {
        show: true,
        textStyle: {
            color: "white"
        }
    },
    series: [
        {
            name: '最外部进度条',
            type: 'gauge',
            radius: '90%',
            splitNumber: 10,
            axisLine: {
                lineStyle: {
                    color: [
                        [
                            dataArr / dataX,
                            {
                                type: 'linear',
                                x: 0,
                                y: 1,
                                x2: 0.5,
                                y2: 0.5,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'rgba(0,0,0,0)', // 0% 处的颜色
                                    },
                                    {
                                        offset: 0.8,
                                        color: '#583043', // 100% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: '#C34743', // 100% 处的颜色
                                    },
                                ],
                                global: false, // 缺省为 false
                            },
                        ],
                        [1, '#083158'],
                    ],
                    width: 10,
                },
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            itemStyle: {
                show: false,
            },
            detail: {
                show: false,
            },
            title: {
                // 标题
                show: false,
            },
            data: [
                {
                    name: 'title',
                    value: dataArr,
                },
            ],
            pointer: {
                show: false,
            },
            animationDuration: 4000,
        },
        {
            name: '内圈条',
            type: 'gauge',
            radius: '70%',
            splitNumber: 10,
            startAngle: 360,
            endAngle: 0,
            axisLine: {
                lineStyle: {
                    color: [
                        [
                            1,
                            {
                                type: 'linear',
                                x: 0,
                                y: 1,
                                x2: 0,
                                y2: 0,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'rgb(255,255,255,0.5)', // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgb(255,255,255,0.5)', // 0% 处的颜色
                                    },
                                ],
                                global: false, // 缺省为 false
                            },
                        ],
                    ],
                    width: 7,
                },
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                length: 30,
                lineStyle: {
                    color: '#031f45',
                    width: 3,
                },
            },
            itemStyle: {
                show: false,
            },
            detail: {
                show: false,
            },
            title: {
                // 标题
                show: false,
            },
            data: [
                {
                    name: 'title',
                    value: dataArr,
                },
            ],
            pointer: {
                show: false,
            },
            animationDuration: 4000,
        },
        {
            name: '外二红线',
            type: 'gauge',
            radius: '84.5%',
            axisLine: {
                lineStyle: {
                    color: [
                        [
                            dataArr / dataX,
                            {
                                type: 'linear',
                                x: 0,
                                y: 1,
                                x2: 0,
                                y2: 0,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'rgba(60,207,223,0)', // 0% 处的颜色
                                    },
                                    {
                                        offset: 0.9,
                                        color: 'rgba(60,207,223,0.5)', // 100% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(60,207,223,0.9)', // 100% 处的颜色
                                    },
                                ],
                                global: false, // 缺省为 false
                            },
                        ],
                    ],
                    width: 20,
                },
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            itemStyle: {
                show: false,
            },
            detail: {
                show: false,
            },
            title: {
                // 标题
                show: false,
            },
            data: [
                {
                    name: 'title',
                    value: dataArr,
                },
            ],
            pointer: {
                show: false,
            },
            animationDuration: 4000,
        },
        {
            name: '刻度尺',
            type: 'gauge',
            radius: '81%',
            splitNumber: 10, // 刻度数量
            min: 0, // 最小刻度
            max: dataX, // 最大刻度
            // 仪表盘轴线相关配置
            axisLine: {
                lineStyle: {
                    color: [
                        [
                            1,
                            {
                                type: 'radial',
                                x: 0.5,
                                y: 0.6,
                                r: 0.6,
                                colorStops: [
                                    {
                                        offset: 0.85,
                                        color: '#031F46', // 0% 处的颜色
                                    },
                                    {
                                        offset: 0,
                                        color: '#12D7EF', // 100% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: '#12D7EF', // 100% 处的颜色
                                    },
                                ],
                            },
                        ],
                    ],
                },
            },
            /** 分隔线样式*/
            splitLine: {
                show: true,
                length: 14,
                lineStyle: {
                    width: 3,
                    color: '#12E5FE', // 用颜色渐变函数不起作用
                },
            },
            /** 刻度线*/
            axisTick: {
                show: true,
                splitNumber: 5,
                lineStyle: {
                    color: '#12E5FE', // 用颜色渐变函数不起作用
                    width: 1,
                },
                length: 10,//刻度线长度
            },
            /** 刻度标签*/
            axisLabel: {
                distance: 10,
                color: '#CEF3FE',
                fontSize: 10,
            },
            detail: {
                show: false,
            },
            animationDuration: 4000,
        },
        {
            name: '渐变进度',
            type: 'gauge',
            radius: '80%',
            splitNumber: 15,
            axisLine: {
                lineStyle: {
                    color: [
                        [
                            dataArr / dataX,
                            {
                                type: 'linear',
                                x: 0,
                                y: 1,
                                x2: 0,
                                y2: 0,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'rgba(60,207,223,0)', // 0% 处的颜色
                                    },
                                    {
                                        offset: 0.9,
                                        color: 'rgba(60,207,223,0.5)', // 100% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(60,207,223,0.9)', // 100% 处的颜色
                                    },
                                ],
                                global: false, // 缺省为 false
                            },
                        ],
                    ],
                    width: 100,
                },
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            itemStyle: {
                show: false,
            },
            detail: {
                show: false,
            },
            title: {
                // 标题
                show: false,
            },
            data: [
                {
                    name: 'title',
                    value: dataArr,
                },
            ],
            pointer: {
                show: false,
            },
            animationDuration: 4000,
        },
        {
            name: '内层圈圈',
            type: 'gauge',
            radius: '61%',
            splitNumber: 10, // 刻度数量
            min: 0, // 最小刻度
            max: dataX, // 最大刻度
            // 仪表盘轴线相关配置
            axisLine: {
                show: false,
                lineStyle: {
                    color: [
                        [
                            1,
                            {
                                type: 'radial',
                                x: 0.5,
                                y: 0.59,
                                r: 0.6,
                                colorStops: [
                                    {
                                        offset: 0.72,
                                        color: '#032046',
                                    },
                                    {
                                        offset: 0.94,
                                        color: '#086989',
                                    },
                                    {
                                        offset: 0.98,
                                        color: '#0FAFCB',
                                    },
                                    {
                                        offset: 1,
                                        color: '#0EA4C1',
                                    },
                                ],
                            },
                        ],
                    ],
                    // width: 1000,
                },
            },
            /** 分隔线样式*/
            splitLine: {
                show: false,
            },
            /** 刻度线*/
            axisTick: {
                show: false,
            },
            /** 刻度标签*/
            axisLabel: {
                show: false,
            },
            /** 仪表盘指针*/
            pointer: {
                show: true,
                length: '120%',
                width: 2, // 指针粗细
            },
            /** 仪表盘指针样式*/
            itemStyle: {
                color: '#12E5FF',
            },
            data: [
                {
                    value: dataArr,
                },
            ],
            detail: {
                show: false,
            },
        },
        {
            name: '遮罩',
            tooltip: {
                show: false
            },
            type: 'pie',
            radius: '30%',
            center: ['50%', '50%'], // 默认全局居中
            hoverAnimation: false,
            itemStyle: {
                // normal: {
                //     color: bgColor
                // },
                // emphasis: {
                //     color: bgColor
                // }
                // color:'rgb(0,80,94,1)',
                color: {
                    type: 'radial',
                    x: 1,
                    y: 1,
                    r: 1,
                    colorStops: [{
                        offset: 0, color: 'rgb(3,107,135,1)' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'rgb(0,80,94,1)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                borderWidth: 7,
                borderType: "solid",
                borderColor: "#12D7EF"
            },
            animation: false,
            data: [1.9]
        }
    ],
};

myChart.setOption(option);

window.addEventListener("resize", function () {
    myChart.resize();
});