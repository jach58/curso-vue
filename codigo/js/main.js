Vue.component('articulos',{
    template: `
    <div class="componente-articuloss">
        <h1>Componente {{titulo}}</h1>
        <h1>Lista de Posts por ajax</h1>
            <ol v-if="posts">
                <li v-for="post of posts">
                    {{post.title}}
                </li>
            </ol>
        <span v-else>Cargando...</span>
    </div>
    `,
    mounted(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(respuesta=>this.posts =respuesta.data);
    },
    data(){
        return{
            titulo: 'Articulos',
            posts: null,
        }
    }
});

Vue.component('frutas',{
    props:['objeto'],
    mounted(){
        console.log(this.objeto);
    }
});

Vue.component('padre',{
    template:`
        <div>
            <h1>Componente Padre</h1>
            <div>
                <hijo></hijo>
            </div>
        </div>
    `,
});

Vue.component('hijo',{
    template:`
        <p style="background:yellow">Soy un parrafo  en el componente hijo</p>
    `,
});


Vue.filter('mayusculas',value => value.toUpperCase());

new Vue({
    el: 'main',
    mounted(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(respuesta=>this.posts =respuesta.data);
    },
    data:{
        elegido: 'padre',
        posts: null,
        texto: 'Hola Mundo desde Vue 2',
        nombre: 'Square',
        apellido:'Castillo',
        nota: 5,
        peliculas: ['Batman vs Superman','La verdad duele','Los mercenarios',
        'spiderman','Barbie'],
        frutas: [
            {nombre:'Manzana',temporada:'Invierno',precio:'Bajo'},
            {nombre:'Naranja',temporada:'Otoño',precio:'Medio'},
            {nombre:'Cereza',temporada:'Primavera',precio:'Alto'},
            {nombre:'Sandia',temporada:'Verano',precio:'Medio'}
        ],
        superFruta: {nombre:'Mandarina',temporada:'Verano',precio:'Medio'},
        peliculaNueva:null,
        busqueda:'',
        confirmado:null
    },
    methods:{
        crearPelicula(){
            this.peliculas.push(this.peliculaNueva);
            this.peliculaNueva = null;
        },
        borrarPelicula(index){
            this.peliculas.splice(index,1);
        },
        marcar(index){
            this.confirmado = index;
        }
    },
    computed:{
        nombreYapellidos(){
            let date = new Date();
            let year = date.getFullYear();
            return `${this.nombre} ${this.apellido} - Nota: ${this.nota} - ${year}`;
        },
        peliculasOrdenadas(){
            return this.peliculas.sort();
        },
        buscarFruta(){
            return this.frutas.filter(fruta=>{
                return fruta.nombre.includes(this.busqueda);
            });
        }

    }
});

const vue2 = new Vue({
    el: '#app',
    data: {
        texto: 'Segunda instancia Vue'
    }
});

const vue3 = new Vue({
    el: '#tercera',
    data: {
        texto: 'Tercera instancia Vue'
    }
});