
$(function () {
    map();
    function map() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('map'));
        var geoCoordMap = {
            '广州': [113.2336, 23.1607],
            '湖北': [114.3418, 30.5465],
            '河南': [113.6503, 34.7579],
            '贵州': [106.7134, 26.5783],
            '山东': [117.0169, 36.6667],
            '河北': [114.5024, 38.0464],
            '广西': [108.3267, 22.8251],
            '浙江': [120.1535, 30.2682],
            '湖南': [112.9823, 28.1941],
            '四川': [104.0651, 30.6528],
            '重庆': [106.5516, 29.5631],
            '陕西': [108.9481, 34.2632],
            '江苏': [118.7639, 32.0617],
            '安徽': [117.2831, 31.8612],
            '山西': [112.5492, 37.857],
            '福建': [119.3062, 26.0826],
            '江西': [115.8921, 28.6763],
            '北京': [116.4074, 39.9042],
            '上海': [121.4737, 31.2304],
            '甘肃': [103.8231, 36.0572],
            '云南': [102.7123, 25.0406],
            '黑龙江': [126.6425, 45.756],
            '辽宁': [123.4291, 41.8364],
            '吉林': [125.3245, 43.8868],
            '内蒙古': [111.765, 40.8167],
            '天津': [117.1997, 39.1318],
            '海南': [110.3312, 20.0171],
            '宁夏': [106.2707, 38.4663],
            '新疆': [87.6278, 43.7928],
            '青海': [96.6392, 34.7481],
            '香港': [114.1733, 22.3200],
            '澳门': [113.5439, 22.1987],
            '台湾': [121.5091, 25.0344],
            '西藏': [91.1322, 29.6510]
        };
        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };

        var option = {
            title: {
                text: '用户地区分布',
                left: 'center'
            },
            tooltip: {
                trigger: 'item' 
            },
            visualMap: {
                min: 83,
                max: 81167,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'],
                calculable: true,
                inRange: {
                    color: ['#9fe6b8', '#D32F2F']
                }
            },
            series: [
                {
                    name:'地区',
                    type: 'map',
                    mapType: 'china',
                    roam: false,  
                    label: {
                        normal: {
                            show: true, 
                            formatter: '{b}\n{c}'   
                        },
                        emphasis: {
                            show: true  
                        }
                    },

                    data: [
                        { name: '广东', value: 81167 },
                        { name: '湖北', value: 23050 },
                        { name: '河南', value: 12805 },
                        { name: '贵州', value: 12166 },
                        { name: '山东', value: 10444 },
                        { name: '河北', value: 10169 },
                        { name: '广西', value: 9632 },
                        { name: '浙江', value: 9613 },
                        { name: '湖南', value: 9261 },
                        { name: '四川', value: 8704 },
                        { name: '重庆', value: 8704 },
                        { name: '陕西', value: 8512 },
                        { name: '江苏', value: 8212 },
                        { name: '安徽', value: 7315 },
                        { name: '山西', value: 6192 },
                        { name: '福建', value: 4541 },
                        { name: '江西', value: 4352 },
                        { name: '北京', value: 4004 },
                        { name: '上海', value: 3942 },
                        { name: '甘肃', value: 2848 },
                        { name: '云南', value: 2726 },
                        { name: '黑龙江', value: 2566 },
                        { name: '辽宁', value: 2067 },
                        { name: '吉林', value: 1760 },
                        { name: '内蒙古', value: 1375 },
                        { name: '天津', value: 1372 },
                        { name: '海南', value: 1345 },
                        { name: '宁夏', value: 1043 },
                        { name: '新疆', value: 923 },
                        { name: '青海', value: 331 },
                        { name: '香港', value: 285 },
                        { name: '澳门', value: 117 },
                        { name: '台湾', value: 92 },
                        { name: '西藏', value: 83 },
                    ]
                }
            ]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

})

