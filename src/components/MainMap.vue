<template>
    <div id="mapCtn" class="mainBlock">
        <div class="boxCtn yearBox">
            <button v-for="(item, index) in yearList" :key="index" :class="currentYear(yearActived, item)" @click="selectYear(item)">{{ item }}</button>
        </div>
        <div class="boxCtn typeBox">
            <p v-for="(item, index) in typeList" :key="index">
                <span class="point" :class="index">●</span>
                <img :alt="item.name" :src="item.img">
            </p>
        </div>
        <LMap :min-zoom="minZoom" :maxZoom="maxZoom" :zoom="zoom" :center="center" :bounds="bounds" :max-bounds="maxBounds">
            <LTileLayer :url="url" :attribution="attribution"></LTileLayer> 
            <LCircle v-for="(item, index) in currentData" :key="index"
                :lat-lng="item.pos"
                :radius="circleRadius"
                :fillOpacity = fillOpacity
                :color="item.color"
                :fillColor="item.color"
            >
                <l-popup :content="translateClass(item)"></l-popup>
            </LCircle>
        </LMap>
    </div>
</template>

<script>
import {
    LMap, LTileLayer, LMarker, LPopup, LCircle
} from 'vue2-leaflet';

export default {
    name: 'MainMap',
    props: ['typeList'],
    components: {
        LMap, LTileLayer, LMarker, LPopup, LCircle
    },
    data() {
        const coordtransform = require('coordtransform');
        return {
            //url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg',
            //attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            url: 'http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png',
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            minZoom: 11,
            maxZoom: 16,
            zoom: 11,
            center: [39.89, 116.445],
            bounds: L.latLngBounds([[39.38, 116.11], [40.4, 116.77]]),
            maxBounds: L.latLngBounds([[39.38, 116.11], [40.4, 116.77]]),
            circleRadius: 150,
            fillOpacity: 0.8,
            concatObj:{},
            coordtransform: coordtransform,
            yearList:[2014, 2015, 2016, 2017, 2018],
            yearActived: null,
            '2014': {
                type1 : [
                    {
                        pos: [116.368418, 39.880793],
                        text: '天陶市場',
                    },
                    {
                        pos: [116.463318, 39.974051],
                        text: '太陽宮農貿市場',
                    },
                    {
                        pos: [116.366712, 39.888939],
                        text: '通恆萬龍農副產品市場',
                    },
                    {
                        pos: [116.388139, 39.961727],
                        text: '潤德立市場（居民們俗稱四環市場)',
                    } 
                ],
                type2 : [
                    {
                        pos: [116.307435, 40.003446],
                        text: '西苑早市',
                    },
                    {
                        pos: [116.418464, 39.942347],
                        text: '北剪子巷早市',
                    } 
                ],
                type3 : [],
                type4 : [],
                type5 : [],
                type6 : [],
                type7 : []
            },
            '2015': {
                type1 : [
                    {
                        pos: [116.368987, 39.931083],
                        text: '白塔寺宮門口菜市場'
                    },
                    {
                        pos: [116.325114, 39.96076],
                        text: '魏公村欣欣菜市場'
                    },
                    {
                        pos: [116.391102, 39.906631],
                        text: '前門菜市場'
                    } 
                ],
                type2 : [],
                type3 : [],
                type4 : [],
                type5 : [],
                type6 : [],
                type7 : []
            },
            '2016': {
                type1 : [],
                type2 : [
                    {
                        pos: [116.41907, 39.931954],
                        text: '隆福寺早市',
                    }
                ],
                type3 : [
                    {
                        pos: [116.352458, 39.971101],
                        text: '金五星建材市場',
                    },
                    {
                        pos: [116.349561, 40.044245],
                        text: '小營建材市場',
                    },
                    {
                        pos: [116.410336, 39.814598],
                        text: '三營門建材',
                    },
                    {
                        pos: [116.409618, 39.820805],
                        text: '和義五金市場',
                    },
                    {
                        pos: [116.454174, 39.767584],
                        text: '宏達百聯建材',
                    },
                    {
                        pos: [116.269837, 40.143484],
                        text: '萬家燈火家居裝飾市場',
                    }
                ],
                type4 : [
                    {
                        pos: [116.42735, 39.891904],
                        text: '天樂玩具市場',
                    }
                ],
                type5 : [
                    {
                        pos: [116.330809, 39.858455],
                        text: '天蘭天市場',
                    },
                    {
                        pos: [116.36407, 39.844305],
                        text: '東羅園村市場',
                    }
                ],
                type6 : [
                    {
                        pos: [116.342604, 39.839492],
                        text: '花鄉亞聯汽配',
                    },
                    {
                        pos: [116.349215, 39.837193],
                        text: '四合汽配市場',
                    }
                ],
                type7 : []
            },
            '2017': {
                type1 : [
                    {
                        pos: [116.369634, 39.934956],
                        text: '富國里菜市場'
                    }
                ],
                type2 : [],
                type3 : [
                    {
                        pos: [116.454174, 39.767584],
                        text: '光輝偉業建材市場'
                    },
                    {
                        pos: [116.338224, 39.736861],
                        text: '吉星德億家居廣場'
                    },
                    {
                        pos: [116.33457, 39.784343],
                        text: '五環中廉建材市場'
                    },
                    {
                        pos: [116.348928, 39.845032],
                        text: '南城京開五金市場'
                    },
                    {
                        pos: [116.626807, 39.967413],
                        text: '好美特家居建材城'
                    },
                    {
                        pos: [116.370114, 40.101113],
                        text: '回龍觀聚龍城建材市場'
                    },
                    {
                        pos: [116.456999, 39.765763],
                        text: '北京蘭海瀛天南宏建材市場'
                    },
                    {
                        pos: [116.47169, 39.867596],
                        text: '大洋路板材市場'
                    },
                    {
                        pos: [116.206781, 39.945275],
                        text: '龍澤建材市場'
                    },
                    {
                        pos: [116.700101, 40.308604],
                        text: '金隅塗料'
                    },
                    {
                        pos: [116.700101, 40.308604],
                        text: '天壇傢俱廠'
                    },
                    {
                        pos: [116.374118, 39.814138],
                        text: '新宮村盛泰朝龍建材市場'
                    },
                    {
                        pos: [116.408827, 39.82981],
                        text: '和義五金機電城'
                    },
                    {
                        pos: [116.351371, 39.847248],
                        text: '京開五金建材批發市場'
                    },
                    {
                        pos: [116.27692, 39.900509],
                        text: '北京億客隆西四環五金水暖建材批發市場'
                    },
                    {
                        pos: [116.428899, 40.044134],
                        text: '億客隆建材市場'
                    },
                    {
                        pos: [116.500571, 39.989843],
                        text: '陶瓷一條街'
                    }
                ],
                type4 : [],
                type5 : [
                    {
                        pos: [116.344338, 39.944443],
                        text: '北京動物園服裝批發市場（最大的服裝批發市場）'
                    },
                    {
                        pos: [116.408458, 39.835131],
                        text: '正天興皮草研發中心'
                    },
                    {
                        pos: [116.419104, 39.837955],
                        text: '鑫海展示中心'
                    },
                    {
                        pos: [116.403809, 39.83524],
                        text: '方仕窗帘布藝城'
                    },
                    {
                        pos: [116.469391, 39.845718],
                        text: '家和家美酒店用品市場'
                    },
                    {
                        pos: [116.64542, 39.919784],
                        text: '八里橋市場的五個交易大廳（京東最大的綜合批發市場）'
                    }
                ],
                type6 : [],
                type7 : []
            },
            '2018': {
                type1 : [
                    {
                        pos: [116.673878, 39.895764],
                        text: '梨園楊窪農副產品市場有限責任公司'
                    },
                    {
                        pos: [116.666405, 39.888844],
                        text: '雲景里農貿市場有限公司'
                    },
                    {
                        pos: [116.629394, 39.900746],
                        text: '楊庄鑫園農貿市場有限公司'
                    },
                    {
                        pos: [116.642241, 39.933868],
                        text: '鄧家窯農貿市場有限公司'
                    },
                    {
                        pos: [116.656625,39.900165],
                        text: '果園環島農副產品市場中心'
                    },
                    {
                        pos: [116.732484,39.84387],
                        text: '合美漁都農產品批發中心'
                    },
                    {
                        pos: [116.677987,39.942117],
                        text: '東潞苑佳園農貿市場有限公司'
                    },
                    {
                        pos: [116.674094, 39.895487],
                        text: '梨園東里農貿市場中心'
                    },
                    {
                        pos: [116.648272,39.922466],
                        text: '八里橋農產品中心批發市場有限公司'
                    },
                    {
                        pos: [116.546593,39.763156],
                        text: '新海小區農貿市場有限公司'
                    },
                    {
                        pos: [116.653547,40.020941],
                        text: '葛渠農產品市場中心'
                    },
                    {
                        pos: [116.752484,39.932931],
                        text: '聚眾興盛農產品市場中心'
                    }
                ],
                type2 : [],
                type3 : [
                    {
                        pos: [116.278861, 39.949589],
                        text: '愛家家居四環店'
                    },
                    {
                        pos: [116.349359, 39.85069],
                        text: '北京社科玉泉營建材市場'
                    },
                    {
                        pos: [116.688945, 39.799918],
                        text: '東方三龍建材市場有限公司'
                    },
                    {
                        pos: [116.632268, 39.933013],
                        text: '盛恆通達投資管理有限公司（鄧家窯家裝市場）'
                    },
                    {
                        pos: [116.704277, 39.896096],
                        text: '京東運喬建材城有限公司'
                    }
                ],
                type4 : [],
                type5 : [
                    {
                        pos: [116.713099, 39.922059],
                        text: '海洋興盛貿易有限公司（三元村新市場）'
                    },
                    {
                        pos: [116.648323, 39.943355],
                        text: '新建家園商貿有限公司（新建村便民服務站）'
                    },
                    {
                        pos: [116.668725, 39.943758],
                        text: '范莊村供暖服務中心（范莊村村便民服務中心）'
                    },
                    {
                        pos: [116.634569, 39.932511],
                        text: '盛恆通達投資管理有限公司（鄧家窯家裝市場）'
                    },
                    {
                        pos: [116.674205, 39.890044],
                        text: '大通昂德服裝市場有限公司'
                    },
                    {
                        pos: [116.767163, 39.892814],
                        text: '海林惠豐商場有限公司（七級市場）'
                    },
                    {
                        pos: [116.57207, 39.804942],
                        text: '亦東新城服裝市場有限公司'
                    },
                    {
                        pos: [116.725947, 39.954397],
                        text: '五色土藝術品市場有限公司'
                    },
                    {
                        pos: [116.626529, 39.840438],
                        text: '首都圖書批發市場中心'
                    }
                ],
                type6 : [],
                type7 : [
                    {
                        pos: [116.336531, 39.842324],
                        text: '四環花海花卉市場'
                    },
                    {
                        pos: [116.339523, 39.838835],
                        text: '北京花香源花卉市場'
                    },
                    {
                        pos: [116.335882, 39.83737],
                        text: '神天龍花卉市場'
                    },
                    {
                        pos: [116.659545, 40.215287],
                        text: '九州花卉市場'
                    },
                    {
                        pos: [116.318312, 39.793655],
                        text: '盛芳國際花卉總部'
                    },
                    {
                        pos: [116.688406, 39.799793],
                        text: '華源發苗木花卉交易市場'
                    }
                ]
            }
        };
    },
    computed: {
        currentData(){
            let yearActived = (this.yearActived == null)? '2014': this.yearActived; 
            // 1. Get data about active year
            let concatObj = {};
            concatObj = _.cloneDeep(this['2018']);
            if(yearActived < 2018){
                for (let index = yearActived; index < 2018; index++) {
                    for (const key in this[index]['type1']) {
                        concatObj['type1'].push(this[index]['type1'][key]);
                    }   
                    for (const key in this[index]['type2']) {
                        concatObj['type2'].push(this[index]['type2'][key]);
                    }   
                    for (const key in this[index]['type3']) {
                        concatObj['type3'].push(this[index]['type3'][key]);
                    }   
                    for (const key in this[index]['type4']) {
                        concatObj['type4'].push(this[index]['type4'][key]);
                    }   
                    for (const key in this[index]['type5']) {
                        concatObj['type5'].push(this[index]['type5'][key]);
                    }   
                    for (const key in this[index]['type6']) {
                        concatObj['type6'].push(this[index]['type6'][key]);
                    }   
                    for (const key in this[index]['type7']) {
                        concatObj['type7'].push(this[index]['type7'][key]);
                    }   
                }
            }
            this.concatObj = concatObj;
            //2. Translate data for market type
            let typeList = this.typeList;
            let resultObj = [];
            for (let index = 1; index <= Object.keys(typeList).length; index++) {
                concatObj['type' + index].map( item => {
                    let latlon = this.coordtransform.gcj02towgs84(item.pos[0], item.pos[1]);
                    let obj = {
                        type : 'type' + index,
                        color : typeList['type' + index].color,
                        pos: latlon.reverse(),
                        text: item.text
                    };
                    resultObj.push(obj);
                });
            }
            return resultObj;
        }
    },
    methods: {
        selectYear(year) {
            this.yearActived = year;
        },
        currentYear(active, year){
            if((active == null && year ==2014) || (active == year)) return 'yearActived';
        },
        translateClass(item){
            return '<span class="point '+ item.type + '">●</span>' + item.text;
        }
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    #mapCtn {
        z-index: 0;
        background: radial-gradient(circle,white,#7c4900);
        .vue2leaflet-map{
            opacity: 0.8;
        }
    }
</style>
