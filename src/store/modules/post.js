export default {
    actions: {
        async fetchPosts(ctx, limit = 3) {
            let res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
            let posts = await res.json()
        
            ctx.commit('updatePosts', posts);
        }
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts;
        },
        createNewPost(state, post) {
            if (post.title.trim() && post.body.trim())
                state.posts.unshift(post);
        }
    },
    state: {
        posts: []
    },
    getters: {
        allPosts(state) {
            return state.posts;
        },
        getPostById(state, id) {
            return state.posts[id-1];
        },
        postsCount(state, getters){
            return getters.validPosts.length;
        },
        validPosts(state) {
            return state.posts.filter(t => t.title && t.body);
        }
    },
}