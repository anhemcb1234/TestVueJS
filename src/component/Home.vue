<template>
<div>
    <div>
        <input type="text" v-model="text">
        <button @click="onClick()">Click</button>
    </div>
    <div v-for="(items, index) in data.articles" :key="index">
        <h1>{{items.title}}</h1>
        <p>{{items.content}}</p>
        <a :href="items.url">{{items.url}}</a>
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhoangtien3010%2F&tabs=timeline&width=0&height=0&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="0" height="0" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        <button @click="handlerFavorite(index)">Favorite</button>
        <a :href="'https://www.facebook.com/sharer/sharer.php?u='+items.url"><button>FB</button></a>
        <a :href="`http://twitter.com/share?text=text&url=http://${items.url}&hashtags=hashtag1,hashtag2,hashtag3`"><button>TW</button></a>
        <div>
            <img style="width:300px" :src="items.urlToImage" :alt="items.title">
        </div>
    </div>
</div>
</template>

<script>
import {
    useService
} from '../services/useService'

export default {
    name: 'App',

    data() {
        return {
            text: '',
            data: [],
            favorites: []
        }
    },
    methods: {
        async onClick() {
            if (this.text === '') {
                alert('Please enter text')
                return
            }
            const reps = await useService.getNews(this.text)
            this.data = reps.data
            this.text = ''
        },
        handlerFavorite(index) {
            alert('Add favorite success')
            this.favorites.push(this.data.articles[index])
            let filterFavorites = new Set(this.favorites)
            localStorage.setItem('favorites', JSON.stringify([...filterFavorites]))
        }
    },

}
</script>

<style>

</style>
