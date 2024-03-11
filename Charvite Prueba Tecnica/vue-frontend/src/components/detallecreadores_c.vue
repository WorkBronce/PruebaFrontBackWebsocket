<template>
    <div class="juegos-creador">
        <h1>Juegos de {{ creador }}</h1>
        <ul>
            <li v-for="juego in juegosCreador" :key="juego.id">
                <router-link :to="'/detalle/' + juego.id">{{ juego.nombre }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            creador: '',
            juegosCreador: []
        }
    },
    created() {
        this.creador = this.$route.params.nombre; // Asignación de creador después de que la ruta esté disponible
        this.fetchJuegos(); // Llama a la función para obtener los juegos al crear el componente
    },
    methods: {
        async fetchJuegos() {
            try {
                const response = await fetch(`http://localhost:3000/videojuegos/creadores/${this.creador}`);
                const data = await response.json();
                this.juegosCreador = data;
            } catch (error) {
                console.error('Error al obtener los juegos:', error);
            }
        }
    }
}
</script>

<style scoped>
/* Estilos específicos para este componente */
.juegos-creador {
  margin: 20px;
}

h1 {
  font-size: 24px;
  color: #333;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

router-link {
  color: blue;
  text-decoration: underline;
}
</style>