<template>
    <div id="home">
        <div class="boxCtn logoBox" :class="currentPage">
            <a href="https://theinitium.com/" target="_blank">
                <svg class="icon icon-initium " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 791 791"><g fill-rule="evenodd"><path class="character" fill-rule="nonzero" d="M403.1 87.9c0 18.6.8 32.9 0 52.8-.16 4.08-.36 6.63-2 8.2-2.4 2.33-8.82 1.96-16.05 1.96-20.4 0-30.97-.5-53.73-.5-16.67 0-35.46.5-53.7.5-7.7 0-13.22-.1-15.08-2.9-1.98-3.02-1-15.12-1-19.86V76.8c0-3.96-.4-8.13.5-9.7.6-1.03 3.33-2.16 5.03-2.42.32-.06.67.06 1 0 5.22-1 13.77-.96 16.07 2.4 1.73 2.58 1 9.16 1 14.55v30.98c0 4.86-.88 12.46.5 14.53 2.04 3.07 19.3 2.33 26.6 1.94 1.66-.1 2.67-.2 4.03-.48 1.45-.33 2.9-.38 3.5-.98 2.32-2.32 1.27-8.47 1-14.52-.58-13.53 0-18.77 0-31.96 0-5.85-.6-12 1.52-14.52 2.53-3.02 16.1-3.83 19.55-.5 4.33 4.22 1.68 22.38 1.52 30.04-.06 3.5 0 10.5 0 15.95 0 5.6-.87 12.63 1 15.02.62.8 2.24 1.13 3.5 1.47 4.78 1.2 16.6.8 23.12.48 3.46-.2 6.45-.33 7.5-1.46 1.9-2.05 1-8.12 1-15 0-12.18-.7-25.88 0-39.22.14-2.4.23-5.24.3-6.75.06-1.44 1.32-1.8 2.65-1.98 3.2-.4 6.4-.56 9.6-.47 2.53.03 4.65-.1 6.53.5 1.6.47 3.55 1.53 4.04 2.4 1.7 3.16.48 14.43.48 20.8h.02zm-219 285.13c6.93 0 11.5-1.83 13.25 3.9 1.26 4.04 1 14.08-1.47 16.52-3.7 3.7-19.92 1.96-28 1.96H108c-6.42 0-24.68 1.33-27.48-1.95-1.5-1.7-.73-11-.77-15.98 0-.7.04-1.87.76-2.73.5-.74 1.3-1.25 2.2-1.4 1.85-.44 6.27-.23 9.57-.3 3-.1 6.34.2 9.34-1 .38-.14 2.04-1.05 1.98-.97 1.18-1.67.86-10.4.98-15.1.77-32.32 0-62.78 0-96.32 0-5 .66-13.2-.98-15.08-3.05-3.5-18.48.6-22.1-2.95-1.58-1.5-1.52-4.6-1.48-8.73.02-2.6-.45-5.4.5-7.32.1-.22.35-.65.44-.84.08-.2.38-.45.54-.62 2.68-3 16.64-1.95 24.55-1.95h79.54c.33 0 .65.02 1 0 1.86-.1 7.97-.5 9.22 1.15.62.82.83 1.1 1.07 1.78 1.54 4.38 1.5 15.57-1.97 17.52-2.18 1.2-6.58.42-10.3.48-3.38.04-7.88-.5-9.82.96-3.23 2.44-1.98 16.86-1.98 26.77 0 28.72-.56 57.76.5 84.18.2 4.95-.96 13.54.98 16.07 1.74 2.28 5.73 1.96 9.82 1.96l-.01-.01zm-35.26-125.9c-2.08-2.3-15-1.17-17.43-1.1-1.22 0-2.56.18-3.04.65-.58.56-.95 1.28-1.2 2.66-.23 3.12-.17 7.84-.17 11.83v51.2c0 20.15-.08 32.1.45 50.7.23 7.45-.43 13.87 1.4 15.57 2.2 2.02 17.7 1.9 20-1 1.72-2.18 1.4-9 1.4-15.08v-83.32c0-6.63 1.62-28.86-1.4-32.12l-.01.01zm113.05 51.71c0-9.25-.98-22.94 3.76-28.48 2.5-2.9 7.73-2.02 26.94-2.1 5.82-.03 13.66.04 20.3.08 2.36 0 5.7-.12 6.88-1.06 2.2-1.74 2.77-12.37 2.02-17.95-.75-5.44-1.8-5.5-8.06-5.83-6.35-.33-15.97 0-22.13 0-10.17 0-24.5 1.76-28.18-1.48-1.83-1.58-1.68-4.84-1.5-9.2.1-2.04-.4-4.37 0-5.83.03-.15 1.94-3.06 2.5-3.4 2.43-1.56 9.07-.98 15.6-.98h98.63c5.83 0 11.08-.73 16.62-.5.6.05 3.36-.57 5.03.5 3.7 2.37 4.66 17.02.5 19.9-3 2.1-9.65.98-13.6.98-13.02 0-21.77-.4-35.72 0-6 .17-7.76.08-8.55 5.33-.68 4.4-.6 15.93 1.5 17.98 3 2.9 21.92 1.45 28.2 1.45 4.45 0 9.46.1 14.58 0 2.2-.03 5.4-.1 7.06-.1 9.06.02 8.6 4.05 8.6 15.06 0 31.65.44 63.74.44 95.25 0 6.32.1 13.84-1.1 15.28-1 1.23-3.5 1.7-6.37 1.85h-.1c-1.17.05-2.34.07-3.5.06l-.98.02c-4.6 0-5.6-.18-7.17-.85-.9-.4-1.6-.88-1.94-1.97-.38-1.16-.6-2.38-.66-3.6-.17-2.32-.24-13.4-.3-19.4-.2-23.93.15-42.2-.08-67.7-.03-3.46.16-6.7-.6-9.5-.9-3.24-4.47-3.6-7.6-3.64h-1.27c-3.4 0-6.26.2-7.6 1.53-2.13 2.15-1.47 20.86-1.47 25.78 0 14.82.4 43.38.4 58.8 0 8.37.35 16.44-.88 18.46-.84 1.37-3.06 1.45-10.6 1.42v-.03c-6.68 0-7.66.1-8.87-1.52-1.38-1.87-1.53-6.82-1.53-12.02.06-26.43.1-50.42-.1-78.14-.02-4.78.53-10.5-.55-12.15-1.34-1.98-14.35-2.55-15.9-.13-1.2 2.02-1.18 4.6-1.22 23.9-.06 23.5-.28 42.63 0 67 .06 4.54.47 8.82-1.45 11.27-1.73 2.2-5.77 1.85-10.12 1.83-5.13-.03-7.44-.15-8.94-2.35-1.5-2.16-.96-6.44-.96-12.3 0-13.03-.15-25.8-.12-38.85.03-9.56-.05-17.58-.05-26.6 0-16.45.25-21.33-1.42-24.05-1.07-1.74-3.1-1.9-11.67-1.68-3.3.08-3.92.96-3.92 3.5-.02 15.95.02 34.6.02 50.38 0 11.3-.26 27.06 0 39.63.04 2.94.1 6.68-1 9.23-1.76 4-10.74 4.8-17.23 3.1-1.15-.3-3.27-.94-4.04-1.96-1.58-2.15-1-8.94-.98-15.04.03-27.75.5-50.47.5-79.14l-.05-.04z"></path><path d="M134.89 158.78c-26.2 0-47.42-21.23-47.42-47.4 0-26.2 21.22-47.42 47.4-47.42 26.2 0 47.4 21.23 47.4 47.4 0 26.2-21.2 47.42-47.4 47.42h.02z"></path><path fill-rule="nonzero" d="M395.56 790.76c-218.161 0-395-176.853-395-395.02C.56 177.613 177.409.76 395.56.76c218.131-.01 395 176.843 395 394.98 0 218.167-176.869 395.02-395 395.02zm0-766.304c-205.064 0-371.294 166.235-371.294 371.294 0 205.069 166.23 371.314 371.294 371.314S766.844 600.809 766.844 395.74c0-205.049-166.23-371.284-371.284-371.284z"></path></g></svg>
            </a>
        </div>
        <!-- <div class="boxCtn editorBox" v-if="!mapDisplay">
            特約撰稿人<span>秦寬</span>發自北京
        </div> -->
        <div class="boxCtn titleBox" :class="currentPage">
            <img class="mainTitle png" alt="main title" :src="mainTitleImg">
            <img class="title png" alt="title" :src="titleImg">
            <div class="shareBox">
                <a href="https://www.facebook.com/sharer.php?s=100&amp;u=https://theinitium.com/article/20181212-mainland-where-to-go-one-year/" onclick="return window.open(this.href,&quot;&quot;,&quot;menubar=no,toolbar=no,resizable=yes,scrollbars=no,height=368,width=600&quot;),!1" title="分享到 facebook">
                    <img :src="require('../assets/facebook.svg')" alt="Facebook">
                </a>
                <a href="https://twitter.com/share?url=https://theinitium.com/project/20181212-mainland-where-to-go-one-year/&amp;text=北京切除·一年之後&amp;via=initiumnews" onclick="return window.open(this.href,&quot;&quot;,&quot;menubar=no,toolbar=no,resizable=yes,scrollbars=no,height=400,width=600&quot;),!1" title="分享到 twitter">
                    <img :src="require('../assets/twitter.svg')" alt="Twitter">
                </a>
                <!-- <a href='http://t.sohu.com/third/post.jsp?content=utf-8&url=https://theinitium.com/article/20181212-mainland-where-to-go-one-year&title=北京切除·一年之後' target="_blank">
                    <img :src="require('../assets/weibo.svg')" alt="Weibo">
                </a> -->
            </div>        
        </div>
        <div class="boxCtn editorBox">
            <a href="https://theinitium.com/" target="_blank">© 2018 Initium Media</a>
            <p>網頁製作：<span>Ingrid Kao</span></p>
            <p>視覺設計：<span>Tseng Lee Yu</span></p>
            <p>數據整理：<span>朱鑒瀅</span></p>
        </div>

        <!-- <div class="boxCtn moveToBtnBox">
            <button type="button" :class="(mapDisplay)? 'map': 'text'" @click="mapDisplay = !mapDisplay">{{(mapDisplay)? '▼': '▲' }}</button>
        </div> -->
        <!-- <transition name="fade" mode="out-in"> -->
            <MainMap v-show="mapDisplay" :type-list="typeList"></MainMap>
        <!-- </transition> -->
        <!-- <transition name="fade" mode="out-in">
            <MainText v-show="!mapDisplay"></MainText>
        </transition> -->

    </div>
</template>

<script>
import MainMap from '@/components/MainMap.vue';
// import MainText from '@/components/MainText.vue';

export default {
    name: 'home',
    components: {
        MainMap,
        // MainText
    },
    data() {
        return { 
            mapDisplay: true,
            // mainTitleImg: require('../assets/main_title.svg'),
            // titleImg: require('../assets/title.svg'),
            mainTitleImg: require('../assets/1.png'),
            titleImg: require('../assets/2.png'),
            typeList:{
                type1:{
                    name: '農副菜市場',
                    img: require('../assets/farm.svg'),
                    color: '#00d605'
                },
                type2:{
                    name: '早市',
                    img: require('../assets/morning.svg'),
                    color: '#4db7ff'
                },
                type3:{
                    name: '家居建材市場',
                    img: require('../assets/building.svg'),
                    color: '#fff92e'
                },
                type4:{
                    name: '玩具市場',
                    img: require('../assets/toy.svg'),
                    color: '#ff2ef1'
                },
                type5:{
                    name: '綜合、批發市場',
                    img: require('../assets/mix.svg'),
                    color: '#ff0013'
                },
                type6:{
                    name: '汽配市場',
                    img: require('../assets/car.svg'),
                    color: '#0606ff'
                },
                type7:{
                    name: '花卉市場',
                    img: require('../assets/flower.svg'),
                    color: '#10e09b'
                }
            }
        }
    },
    computed:{
        currentPage(){
            return (this.mapDisplay)? 'page0': 'page1';
        }
    },
    methods: {}
};
</script>
<style lang="scss">
    @import "../assets/basic.scss";
    #home{
        position: relative;
        height: 100%;
        .mainBlock{
            position: fixed;
            width: 100%;
            height: 100%;
            background-color: $mainBackGroundColor;
        }
        .boxCtn{
            box-sizing: border-box;
            position: absolute;
            transition: all 2s;
            &.logoBox{
                top: $defaultPadding;
                z-index: 2;
                &.page0{
                    left: 3.5em;
                }
                &.page1{
                    left: $defaultPadding;
                }
                a{
                    display: inline-block;
                    width: 3em;
                    height: 3em;
                    svg{
                        fill: darken($mainColor, 5);
                    }
                    &:hover svg{
                        fill: lighten($mainColor, 5);
                    }
                }
            }
            &.titleBox{
                width: 47vw;
                z-index: 1;
                pointer-events: none;
                text-align: left;
                &.page0{
                    top: 4em;
                    left: $defaultPadding;
                }
                //&.page1{
                //     position: relative;
                //     max-width: 16em;
                //     top: 1em;
                //     left: 3em;
                // }
                .mainTitle{
                    width: 100%;
                    margin-left: -15%;
                    &.svg{
                        margin-top: -20%;
                    }
                    &.png{
                        margin-top: -15%;
                    }
                }
                .title{
                    &.svg{
                        width: 75%;
                        margin-top: -30%;
                    }
                    &.png{
                        width: 80%;
                        // margin-top: -20%;
                        margin-top: -25%;
                        margin-left: -10%;
                    }
                }
                .shareBox{
                    position: absolute;
                    left: 5%;
                    top: 75%;
                    a{
                        display: inline-block;
                        width: 1em;
                        height: 1em;
                        margin-right: 0.5em;
                        pointer-events: auto;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
                @media screen and (max-width: 600px){
                    width: calc(100vw - 4em);
                    text-align: right;
                    &.page0{
                        top: 0;
                        right: 0;
                        left: auto;
                    }
                    .mainTitle.png{
                        margin-top: -15%;
                        margin-left: auto;
                        margin-right: -15%;
                    }
                    .title.png{
                        margin-top: -25%;
                        margin-left: auto;
                        margin-right: 20%;
                    }
                    .shareBox{
                        left: auto;
                        right: 3%;
                        top: 1em;
                        a{
                            display: block;
                            margin-right: 0;
                            margin-bottom: 0.5em;
                        }
                    }
                }
            }
            &.editorBox{
                right: $defaultPadding/2;
                bottom: $defaultPadding*1.6;
                z-index: 1;
                width: calc(100vw - 6em);
                text-align: right;
                a{
                    display: block;
                    color: $mainColor;
                    font-size: 0.8em;
                }
                p{
                    display: inline-block;
                    color: $mainColor;
                    font-size: 0.5em;
                    span{
                        margin: 0 0.1em;
                        
                    }
                }
                @media screen and (max-width: 450px){
                    p{
                        display: none;
                    }
                }
            }
            &.infoBtnBox{
                bottom: $defaultPadding;     
                z-index: 1;
                &.instructionsBtn{
                    left: $defaultPadding;
                }
                &.explanationBtn{
                    left: $defaultPadding*5;
                }
                button{
                    @extend .circleBtn;
                    font-weight: bolder;
                    line-height: 0;
                    font-size: 0.8em;
                }
            }
        }
        .instructionsBox{
            border-radius: 3px;
            h6, p{
                text-align: left; 
                font-family: "Noto Serif","PT Serif","source-han-serif-tc",Songti TC,serif;
                font-weight: bold;
                font-size: 0.8em;
            }
            h6{
                margin-bottom: 0.5em;
            }
            &.explanationBox{
                z-index: 3;
                width: 32em;
                left: calc(50vw - 16em);
                bottom: $defaultPadding*16;
                padding: 0.5em 1em;
                background-color: rgba($whiteColor, 0.8);
                a{
                    display: inline-block;
                    font-weight: bold;
                    color: $brightRed;
                    border-bottom: 3px solid $brown;
                    text-indent: 0;
                }
                button{
                    position: absolute;
                    top: 0.1em;
                    right: 0.1em;
                    width: 1.5em;
                    height: 1.5em;
                    &:before, &:after {
                        content: '';
                        position: absolute;
                        width: 100%;
                        top: 50%;
                        left: 0;
                        background: $brightRed;
                        border-radius: 5px;
                        height: 4px;
                    }
                    &:before{
                        transform: rotate(45deg);
                    }
                    &:after {
                        transform: rotate(-45deg);
                    }
                }
                p{
                    text-indent: 2em;
                }
                @media screen and (max-width: 600px){
                    width: calc(100vw - #{$defaultPadding});
                    left: $defaultPadding/2;
                    bottom: 25vh;
                    padding: 1em 1em 0.5em;
                }
            }
            &.descBox{
                z-index: 4;
                position: relative;
                padding: 0.2em 0.4em;
                background-color: rgba($whiteColor, 0.9);
                p{
                    font-size: 0.7em;
                    span{
                        display: inline-block;
                        width: 0.7em;
                        height: 0.7em;
                        border-radius: 50%;
                        margin: 0 0.3em;
                        background-color: $blue;
                    }
                }
                &:before{
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 0;
                    border-style: solid;
                    border-width: 0 5px 7px 5px;
                    border-color: transparent transparent rgba($whiteColor, 0.9) transparent;
                }
            }
        }
    }
    .typeBox button{
        &:after{
            border-color: transparent;
        }
        &.type1:after{
            border-right-color :$green;
        }
        &.type2:after{
            border-right-color :$malibu;
        }
        &.type3:after{
            border-right-color :$yellow;
        }
        &.type4:after{
            border-right-color :$pink;
        }
        &.type5:after{
            border-right-color :$red;
        }
        &.type6:after{
            border-right-color :$blue;
        }
        &.type7:after{
            border-right-color :$caribbean;
        }
    }
    .point{
        margin-right: 0.3em;
        text-shadow: 0 0 3px $darkColor;
        &.type1{
            color :$green;
        }
        &.type2{
            color :$malibu;
        }
        &.type3{
            color :$yellow;
        }
        &.type4{
            color :$pink;
        }
        &.type5{
            color :$red;
        }
        &.type6{
            color :$blue;
        }
        &.type7{
            color :$caribbean;
        }
    }
</style>


