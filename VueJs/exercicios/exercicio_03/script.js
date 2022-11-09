const vm = new Vue({
    el: '#app',
    data: {
        instrumento: "",
        fruta: ""
    },

    methods: {
        mudarNome(instrumento) {
            this.instrumento = instrumento;
        },
        mudarFruta(fruta) {
            this.fruta = fruta;
        }
    }
})