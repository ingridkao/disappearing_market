<template>
    <div id="mapCtn">
        <LMap :zoom="zoom" :center="center">
            <LTileLayer :url="url" :attribution="attribution"></LTileLayer>
            <LMarker :lat-lng="marker">
                <l-popup :content="text"></l-popup>
            </LMarker>
        </LMap>
    </div>
</template>

<script>
import {
    LMap, LTileLayer, LMarker, LPopup,
} from 'vue2-leaflet';

export default {
    name: 'MainMap',
    props: {},
    components: {
        LMap, LTileLayer, LMarker, LPopup,
    },
    data() {
        return {
            // url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            // attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg',
            attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            zoom: 12,
            center: [39.9, 116.36],
            marker: [39.9, 116.36],
            text: 'this is a marker',
        };
    },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    #mapCtn {
        // height: calc(100vh - 6em);
        position: fixed;
        top: 0;
        width: 100%;
        height: 100vh;
        z-index: -1;
        overflow: hidden;
        outline: none;
    }
</style>
