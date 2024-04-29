$(window).load(function () { $(".loading").fadeOut() })
$(function () {

    echarts_2()
    echarts_3()
    echarts_4()
    echarts_5()
    echarts_6()

    function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));
        var data = [23050, 12805, 12166, 10444, 10169, 9632, 9613, 9261, 9187, 8704]
        var titlename = ['湖北', '河南', '贵州', '山东', '河北', '广西', '浙江', '湖南', '四川', '重庆'];
        option = {
            grid: {
                left: '0',
                top: '0',
                right: '0',
                bottom: '0%',
                containLabel: true
            },
            xAxis: {
                show: false,
                type: 'log'
            },
            yAxis: [{
                show: true,
                data: titlename,
                inverse: true,
                axisLine: { show: false },
                splitLine: { show: false },
                axisTick: { show: false },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                },

            }, {
                show: false,
                type: 'log',
                inverse: true,
                data: data,
                axisLabel: { textStyle: { color: '#fff' } },
                axisLine: { show: false },
                splitLine: { show: false },
                axisTick: { show: false },
            }],
            series: [{
                name: '条',
                type: 'bar',
                yAxisIndex: 0,
                data: data,
                barWidth: 15,
                itemStyle: {
                    normal: {
                        barBorderRadius: 50,
                        color: '#1089E7',
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{c}',
                        textStyle: { color: 'rgba(255,255,255,.5)' }
                    }
                },
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart3'));
        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#dddc6b'
                    }
                }
            },
            grid: {
                left: '10',
                top: '20',
                right: '30',
                bottom: '10',
                containLabel: true
            },

            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 14,
                    },
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.2)'
                    }

                },

                data: ['2018', '2019', '2020', '2021', '2022', '2023']

            }, {

                axisPointer: { show: false },
                axisLine: { show: false },
                position: 'bottom',
                offset: 20,



            }],

            yAxis: [{
                type: 'value',
                axisTick: { show: false },
                splitNumber: 4,
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 16,
                    },
                },

                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)',
                        type: 'dotted',
                    }
                }
            }],
            series: [
                {
                    name: '用户流失率',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 5,
                    showSymbol: false,
                    lineStyle: {

                        normal: {
                            color: 'rgba(31, 174, 234, 1)',
                            width: 2
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(31, 174, 234, 0.4)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(31, 174, 234, 0.1)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#1f7eea',
                            borderColor: 'rgba(31, 174, 234, .1)',
                            borderWidth: 5
                        }
                    },
                    data: [2.28, 1.61, 3.59, 2.83, 1.18, 3.62]

                },

            ]

        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));
        var option = {
            grid: {
                left: '0',
                top: '30',
                right: '0',
                bottom: '10',
                containLabel: true
            },
            legend: {

                top: 0,

                textStyle: {

                    color: "#fff",

                },

                itemWidth: 10,  // 设置宽度

                itemHeight: 10, // 设置高度

            },

            tooltip: {

                trigger: 'axis',

                axisPointer: { // 坐标轴指示器，坐标轴触发有效

                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'

                }

            },

            xAxis: {

                type: 'category',

                data: ["2018", "2019", "2020", "2021", "2022", "2023"],

                axisTick: { //---坐标轴 刻度

                    show: true, //---是否显示

                },

                axisLine: { //---坐标轴 轴线

                    show: true, //---是否显示

                    lineStyle: {

                        color: 'rgba(255,255,255,.1)',

                        width: 1,

                        type: 'dotted',

                    },

                },

                axisLabel: {//X轴文字

                    textStyle: {

                        fontSize: 12,

                        color: '#fff'

                    },

                },

            },

            yAxis: {

                type: 'log',


                splitLine: {//分割线

                    show: true,

                    lineStyle: {
                        color: 'rgba(255,255,255,.1)',

                        width: 1,
                        type: 'dotted'

                    }

                },

                axisLabel: {//Y轴刻度值

                    formatter: '{value}',

                    textStyle: {

                        fontSize: 12,

                        color: '#fff'

                    },

                },

                axisLine: { //---坐标轴 轴线

                    show: false, //---是否显示

                },

            },
            series: [{

                name: '学习时长',

                type: 'bar',

                data: [4102.72, 41309.04, 379019.28, 507518.44, 653956.61, 468391.33],

                barWidth: 15,

                barGap: 1, //柱子之间间距 //柱图宽度      两种情况都要设置，设置series 中对应数据柱形的itemStyle属性下的emphasis和normal的barBorderRadius属性初始化时候圆角  鼠标移上去圆角

                itemStyle: {

                    normal: {
                        barBorderRadius: 50,
                        color: "#446ACF",

                    }

                },

            }, {

                name: '任务完成数',

                type: 'bar',

                data: [4322, 64399, 623326, 959932, 1412697, 895318],

                barWidth: 15, //柱图宽度

                itemStyle: {

                    normal: { //设置颜色的渐变
                        barBorderRadius: 50,
                        color: "#4fb69d",

                    }

                },

            }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));
        option = {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                itemWidth: 10,
                itemHeight: 10,
                textStyle: {
                    color: 'rgba(255,255,255,.5)'
                },
                top: '20%',
                right: 5,
                data: ['none', 'unpassed', 'passed', 'excellent', 'good']
            },
            color: [  '#9fe6b8', '#37a2da','#ffdb5c', '#ff9f7f', '#32c5e9','#fb7293', '#e7bcf3', '#8378ea'],
            tooltip : {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            series: [
                {
                    name: '成绩',
                    type: 'pie',
                    radius: '50%',
                    center: ["40%", "50%"],
                    data: [
                        { value: 11338, name: 'none' },
                        { value: 63991, name: 'unpassed' },
                        { value: 127284, name: 'passed' },
                        { value: 536, name: 'excellent' },
                        { value: 605, name: 'good' },
                    ],

                }
            ]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    
    function echarts_6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart6'));
        option = {

            tooltip: {
                trigger: 'axis'
            },
            radar: [{
                indicator: [{
                    text: '2018',

                }, {
                    text: '2019',

                }, {
                    text: '2020',

                }, {
                    text: '2021',

                }, {
                    text: '2022',

                }, {
                    text: '2023',
                    //max: 100
                }],
                textStyle: {
                    color: 'red'
                },
                center: ['50%', '50%'],
                radius: '70%',
                startAngle: 90,
                splitNumber: 4,
                shape: 'circle',

                name: {
                    padding: -5,
                    formatter: '{value}',
                    textStyle: {

                        color: 'rgba(255,255,255,.5)'
                    }
                },
                splitArea: {
                    areaStyle: {
                        color: 'rgba(255,255,255,.05)'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.05)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.05)'
                    }
                }
            },],
            series: [{
                name: '雷达图',
                type: 'radar',
                tooltip: {
                    trigger: 'item'
                },
                data: [{
                    name: '注册数',
                    value: [1199, 18654, 32778, 33591, 43761, 12268],
                    lineStyle: {
                        normal: {
                            color: '#03b48e',
                            width: 2,
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: '#03b48e',
                            opacity: .4
                        }
                    },
                    symbolSize: 0,

                }, {
                    name: '登录数',
                    value: [789, 15989, 25189, 36427, 45253, 18604],
                    symbolSize: 0,
                    lineStyle: {
                        normal: {
                            color: '#3893e5',
                            width: 2,
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: 'rgba(19, 173, 255, 0.5)'
                        }
                    }
                }]
            },]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
})








