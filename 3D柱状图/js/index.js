var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;
const labels = ['春节', '元宵节', '端午节', '中秋节'];
const seriesData = [
  {
    label: '春节',
    value: [32],
  },
  {
    label: '元宵节',
    value: [24],
  },
  {
    label: '端午节',
    value: [42],
  },
  {
    label: '中秋节',
    value: [20],
  }
]
const colors = [
  [
    { offset: 0, color: 'rgba(26, 132, 191, 1)' },
    { offset: 1, color: 'rgba(52, 163, 224, 0.08)' },
  ],
  [
    { offset: 0, color: 'rgba(137, 163, 164, 1)' },
    { offset: 1, color: 'rgba(137, 163, 164, 0.08)' },
  ],
  [
    { offset: 0, color: 'rgba(44, 166, 166, 1)' },
    { offset: 1, color: 'rgba(44, 166, 166, 0.08)' },
  ],
  [
    { offset: 0, color: 'rgba(34, 66, 186, 1)' },
    { offset: 1, color: 'rgba(34, 66, 186, 0.08)' },
  ],
];

option = {
  xAxis: {
    axisTick: {
      show: false
    },
    nameTextStyle: {
      color: '#fff'
    },
    data: labels,
  },
  legend: {
    data: getlegendData(),
    right: '25',
    top: '18',
    icon: 'rect',
    itemHeight: 10,
    itemWidth: 10,
    textStyle: {
      color: '#000'
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      color: '#000'
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: 'dashed',
        color: ['#ccc']
      }
    }
  },
  series: getSeriesData()
};
// 定义柱状图左侧图形元素
const leftRect = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
    width: 19, //柱状图宽
    zWidth: 8, //阴影折角宽
    zHeight: 4 //阴影折角高
  },
  buildPath: function (ctx, shape) {
    const api = shape.api;
    const xAxisPoint = api.coord([shape.xValue, 0]);
    const p0 = [shape.x - shape.width / 2, shape.y - shape.zHeight];
    const p1 = [shape.x - shape.width / 2, shape.y - shape.zHeight];
    const p2 = [xAxisPoint[0] - shape.width / 2, xAxisPoint[1]];
    const p3 = [xAxisPoint[0] + shape.width / 2, xAxisPoint[1]];
    const p4 = [shape.x + shape.width / 2, shape.y];

    ctx.moveTo(p0[0], p0[1]);
    ctx.lineTo(p1[0], p1[1]);
    ctx.lineTo(p2[0], p2[1]);
    ctx.lineTo(p3[0], p3[1]);
    ctx.lineTo(p4[0], p4[1]);
    ctx.lineTo(p0[0], p0[1]);
    ctx.closePath();
  }
});
// 定义柱状图右侧以及顶部图形元素
const rightRect = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
    width: 18,
    zWidth: 15,
    zHeight: 8
  },
  buildPath: function (ctx, shape) {
    const api = shape.api;
    const xAxisPoint = api.coord([shape.xValue, 0]);
    const p1 = [shape.x - shape.width / 2, shape.y - shape.zHeight / 2];
    const p3 = [xAxisPoint[0] + shape.width / 2, xAxisPoint[1]];
    const p4 = [shape.x + shape.width / 2, shape.y];
    const p5 = [xAxisPoint[0] + shape.width / 2 + shape.zWidth, xAxisPoint[1]];
    const p6 = [
      shape.x + shape.width / 2 + shape.zWidth,
      shape.y - shape.zHeight / 2
    ];
    const p7 = [
      shape.x - shape.width / 2 + shape.zWidth,
      shape.y - shape.zHeight
    ];
    ctx.moveTo(p4[0], p4[1]);
    ctx.lineTo(p3[0], p3[1]);
    ctx.lineTo(p5[0], p5[1]);
    ctx.lineTo(p6[0], p6[1]);
    ctx.lineTo(p4[0], p4[1]);

    ctx.moveTo(p4[0], p4[1]);
    ctx.lineTo(p6[0], p6[1]);
    ctx.lineTo(p7[0], p7[1]);
    ctx.lineTo(p1[0], p1[1]);
    ctx.lineTo(p4[0], p4[1]);
    ctx.closePath();
  }
});

// 注册图形元素
echarts.graphic.registerShape('leftRect', leftRect);
echarts.graphic.registerShape('rightRect', rightRect);

function getlegendData() {
  const data = [];
  labels.forEach((item, index) => {
    data.push(
      {
        name: item,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, colors[index]),
          },
      }
    )
  })
  return data
}

function getSeriesData() {
  const data = [];
  seriesData.forEach((item, index) => {
    data.push(
      {
        type: 'custom',
        name: item.label,
        renderItem: function (params, api) {
          return getRenderItem(params, api);
        },
        data: item.value,
        itemStyle: {
          color: () => {
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, colors[index]);
          },
        },
      }
    )
  })
  return data
}

function getRenderItem(params, api) {
  const index = params.seriesIndex;
  let location = api.coord([api.value(0) + index, api.value(1)]);
  var extent = api.size([0, api.value(1)]);
  return {
    type: 'group',
    children: [
      {
        type: 'leftRect',
        shape: {
          api,
          xValue: api.value(0) + index,
          yValue: api.value(1),
          x: location[0],
          y: location[1]
        },
        style: api.style()
      },
      {
        type: 'rightRect',
        shape: {
          api,
          xValue: api.value(0) + index,
          yValue: api.value(1),
          x: location[0],
          y: location[1]
        },
        style: api.style()
      }
    ]
  };
}


option && myChart.setOption(option);

