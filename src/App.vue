<template>
<div class="container mx-auto">
    <router-link :to="{name:'Home'}"><button>Home</button></router-link>

    <router-link :to="{name:'Favorite'}"><button>Favorite</button></router-link>
    <router-view></router-view>
    
</div>
</template>

<script>
export default {
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
