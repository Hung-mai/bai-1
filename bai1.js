var app = new Vue({
    el: '#app',

    data: {
        age: 20,
    },

    methods:{
        add(x){
            this.age += x;
        },
        sub(x){
            this.age -= x;
        }
    }
})