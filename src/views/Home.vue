<template>
    <div class="home">
        <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
        <MainMap/>
    </div>
</template>

<script>
// @ is an alias to /src
import MainMap from '@/components/MainMap.vue';

export default {
    name: 'home',
    components: {
        MainMap,
    },
};
</script>
