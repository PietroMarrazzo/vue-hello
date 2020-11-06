// Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
// BONUS aggiungere un'immagine presa anch'essa da un data (url dell'immagine)


const app = new Vue ({

    el: '.app-container',
    data: {
        title: 'Hello there, my names is Pietro. Nice to meet you',
        imageUrl: './img/linkedin.jpg',
        helloCLass: 'hidden',
    },

    methods: {
        pikaboo: function() {

            this.helloCLass = (this.helloClass !== 'hidden') ? 'show' : 'hidden';
            
            // if (this.helloClass === 'hidden') {
            //     this.helloClass = 'show';
            // } else {
            //     this.helloClass = 'hidden';
            // }
        }
    },
});