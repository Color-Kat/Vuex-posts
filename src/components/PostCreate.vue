<template>
    <form @submit.prevent="createPost">
        <h2>Crate new post!</h2>
        <input type="text" placeholder="title" v-model="title">
        <input type="text" placeholder="body" v-model="body">
        <button type="submit">Create!</button>
    </form>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
    data() {
        return {
            title: '',
            body: ''
        }
    },
    methods: {
        ...mapMutations(['createNewPost']),
        createPost() {
            this.createNewPost({
                title: this.title,
                body: this.body,
                id: Date.now()
            });
            this.title = this.body = '';
        }
    }
}
</script>

<style lang="scss" scoped>
    form{
        width: 300px;
        margin-bottom: 15px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    input {
        display: block;
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 2px;
        padding: 10px;
        margin-bottom: 10px;
    }
    button {
        width: 100%;
        padding: 10px;
    }
</style>