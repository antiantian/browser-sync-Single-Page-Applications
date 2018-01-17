<template>
    <div>
       <v-head></v-head>
       <transition name="move" mode="out-in"><router-view></router-view></transition>
    </div>
</template>
<script>
import vHead from './head.vue';

export default {
    components:{
        vHead
    }
}
</script>

<style>
</style>
 