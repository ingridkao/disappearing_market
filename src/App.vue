<template>
    <div id="app" v-cloak>
        <!-- <nav id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </nav> -->
        <router-view/>
    </div>
</template>

<style lang="scss">
    @import "./assets/basic.scss";
    [v-cloak] {
        display: none;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        color: $darkColor;
        background-color: $mainBackGroundColor;
    }
</style>
