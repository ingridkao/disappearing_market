<template>
    <div id="mapCtn" class="mainBlock">
        <div class="boxCtn yearBox">
            <button v-for="(item, index) in yearList" :key="index" :class="currentYear(yearActived, item)" @click="selectYear(item)">{{ item }}</button>
        </div>
        <div class="boxCtn typeBox">
            <button v-for="(item, index) in typeList" :key="index" :class="[index, (typeActivedArray.includes(index))? 'typeActived': '', (typeActivedArray.length == 0)? 'allDisplay': '']" @click="selectType(index)">
                <img :alt="item.name" :src="item.img">
            </button>
        </div>
        <transition name="fade" mode="out-in">
            <div class="boxCtn infoBtnBox" v-show="!explanationDisplay">
                <button type="button" @click="toggleExplanationDisplay">...</button>
            </div>
        </transition>
        <transition name="fade" mode="out-in" enter-active-class="down" leave-active-class="down">
            <div class="boxCtn explanationBox" v-show="explanationDisplay">
                <h6>「北京切除」一年後：</h6>
                <h6>除了「低端人口」，家門口的花市、菜市場也被「切除」了</h6>
                <p>近幾年，超過400個花市、菜市場和批發市場等被從北京地圖上擦除。端傳媒通過梳理公開資料，向你展示其中一些消失的市場和它們的故事。</p>
            </div>
        </transition>
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
            //Dark
            //url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
            //attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
            //Black & white
            url: 'http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png',
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            minZoom: 11,
            maxZoom: 16,
            zoom: 11,
            center: [39.89, 116.50],
            bounds: L.latLngBounds([[39.49, 116.10], [40.29, 116.90]]),
            maxBounds: L.latLngBounds([[39.49, 116.10], [40.29, 116.90]]),
            circleRadius: 160,
            fillOpacity: 0.8,
            coordtransform: coordtransform,
            explanationDisplay: true,
            explanationTimeout: true,
            concatObj:{},
            yearList:[2014, 2015, 2016, 2017, 2018],
            yearActived: null,
            typeActivedArray: [],
            '2013': {
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
            '2014': {
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
            '2015': {
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
            '2016': {
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
            '2017': {
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
    created() {
        this.disappearBlock();
    },
    computed: {
        currentData(){
            let yearActived = (this.yearActived == null)? '2013': this.yearActived; 
            let resultObj = [];
            if(yearActived < 2018){
                // 1. Get data about active year
                let concatObj = _.cloneDeep(this['2017']);
                if(yearActived < 2017){
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

                //2. Translate data for display market
                for (let index = 1; index <= Object.keys(this.typeList).length; index++) {
                    //3. Filter not active type
                    if(this.typeActivedArray.length == 0 || this.typeActivedArray.includes('type' + index)){
                        concatObj['type' + index].map( item => {
                            let latlon = this.coordtransform.gcj02towgs84(item.pos[0], item.pos[1]);
                            let obj = {
                                type : 'type' + index,
                                color : this.typeList['type' + index].color,
                                pos: latlon.reverse(),
                                text: item.text
                            };
                            resultObj.push(obj);
                        });
                    }
                }
            }
            return resultObj;
        }
    },
    methods: {
        selectYear(year) {
            this.yearActived = year;
        },
        selectType(type) {
            if(this.typeActivedArray.includes(type)){
                this.typeActivedArray = _.remove(this.typeActivedArray, function(n) {
                    return n != type;
                });
            }else{
                this.typeActivedArray.push(type);
            }
        },
        currentYear(active, year){
            if(active == year) return 'yearActived';
        },
        currentType(active, type){
            return ((type != null)?type.name: '') + ((active == type)? ' typeActived': '');
        },
        translateClass(item){
            return '<span class="point '+ item.type + '">●</span>' + item.text;
        },
        toggleExplanationDisplay(){
            this.explanationDisplay = !this.explanationDisplay;
            if(this.explanationDisplay){
                this.disappearBlock();
            }
        },
        disappearBlock(){
            let timer = setTimeout(() => {
                this.explanationDisplay = false;
            }, 	6000);     
        }

    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    $defaultPadding : 10px;
    #mapCtn {
        z-index: 0;
        background: radial-gradient(circle,white,#89766a);
        .vue2leaflet-map{
            opacity: 0.8;
        }
        .yearBox{
            bottom: $defaultPadding*5;
            right: $defaultPadding;
            width: 100%;
            height: 3em;
            z-index: 3;
            button{
                width: auto;
                height: auto;
                margin-left: .5em;
                padding: .2em .5em;
                border-radius: 2px;
                border: 1.5px solid #333;
                color: #333;
                font-size: 1em;
                font-weight: bold;
                &:hover{
                    background-color: rgba(white, 0.2);
                    box-shadow: 0 0 3px 3px rgba(#999, 0.3);
                }
                &.yearActived{
                    background-color: #e7e3df;
                    border-color: #000;
                    color: #000;
                }
            }
            @media screen and (max-width: 600px){
                button{
                    // display: block;
                    // margin-bottom: .5em;
                }
            }
        }
        .typeBox{
            right: 5px;
            top: 0;
            padding: 0 0 0.3em 0.6em;
            width: 7em;
            z-index: 2;
            text-align: left;
            button{
                display: block;
                position: relative;
                margin: 0;
                height: 3.25em;
                overflow: hidden;
                img{
                    width: 100%;
                }
                &:after{
                    content: '';
                    display: none;
                    position: absolute;
                    bottom: 0;
                    right: 1em;
                    width: 0;
                    height: 0;
                    border-style: solid;
                    border-width: 2px 3.5em 2px 0;
                    border-radius: 2px;
                    opacity: 0.6;
                }
                &:hover:after, &.typeActived:after{
                    opacity: 1;
                    border-right-width :5em;
                }
                &.allDisplay:after, &.typeActived:after{
                    display: block;
                }
            }
        }
    }
</style>
