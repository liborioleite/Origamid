const vm = new Vue({
    el: '#app',
    data: {
        apple: {},
        google: {},
       
        win: 'verde',
        lose: 'vermelho'
    },
    methods: {
        getApple(){
            fetch("https://api.origamid.dev/stock/aapl/quote")
            .then(response => response.json())
            .then(json => {
                this.apple = json;
                // console.log(this.apple);
            })
        },

        getGoogle(){
            fetch("https://api.origamid.dev/stock/googl/quote")
            .then(response => response.json())
            .then(json => {
                this.google = json;
            })
        },

        result(){
            this.getApple()
            this.getGoogle()
        }
    
    }
})