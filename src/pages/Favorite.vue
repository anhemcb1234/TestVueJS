<template>
<div>

    <div v-for="(items, index) in favorites" :key="index">
        <h1>{{items.title}}</h1>
        <div>
            <i @click="handlerDelFavorite(index)" style="width:100px;color:red" class="fa-solid fa-heart"></i>
        </div>
        <p>{{items.content}}</p>
        <img style="width:400px" :src="items.urlToImage" :alt="items.title">
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            favorites: []
        }
    },
    methods: {
        handlerDelFavorite(index) {
            this.favorites.splice(index, 1)
            localStorage.setItem('favorites', JSON.stringify(this.favorites))
            alert("Xóa yêu thích thành công")
        }
    },
    mounted() {
        this.favorites = JSON.parse(localStorage.getItem('favorites'))
    },
}
</script>

<style>

</style>
