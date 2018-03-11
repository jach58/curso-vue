<template>
    <div id="restaurant-add">
        <h2>Crear Nuevo Restaurante</h2>
        <form v-on:submit.prevent="guardarRestaurante">
            <p>
                <label for="nombre">Nombre</label>
                <input type="text" id="nombre" v-model="restaurante.nombre">
            </p>
            <p>
                <label for="direccion">Dirección</label>
                <input type="text" id="direccion" v-model="restaurante.direccion">
            </p>
            <p>
                <label for="descripcion">Descripción</label>
                <textarea id="descripcion" v-model="restaurante.descripcion"></textarea>
            </p>
            <p>
                <label for="precio">Precio</label>
                <select id="precio" v-model="restaurante.precio">
                    <option value="">Selecciona una opción</option>
                    <option value="bajo">Bajo</option>
                    <option value="normal">Normal</option>
                    <option value="alto">Alto</option>
                </select>
            </p>
            <input type="submit" value="Guardar Restaurante">
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    name: 'restaurant-add',
    mounted(){

    },
    data(){
        return{
            restaurante:{
                nombre: '',
                direccion:'',
                descripcion:'',
                imagen:null,
                precio:'normal'
            }
        }
    },
    methods:{
        guardarRestaurante(){
            let router = this.$router
            let params = "json="+ JSON.stringify(this.restaurante);
            console.log(params)
            axios.post('http://localhost/apis/api/restaurantes-api.php/restaurantes',params)
                .then((respuesta)=>{
                    if(respuesta.data.status == 'success'){
                        //redirigir
                        router.push('/restaurantes')
                    }
                })
                .catch((error)=>{
                    console.log(error)
                })

        }
    }
}
</script>