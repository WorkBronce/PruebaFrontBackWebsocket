<template>
    <div class="creadores">
        <h1>Lista de Creadores</h1>
        <ul>
            <li v-for="creador in creadores" :key="creador">
                <router-link :to="'/creadores/' + creador">{{ creador }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            creadores: [] // La lista de creadores obtenidos de la API
        }
    },
    created() {
        this.fetchCreadores(); // Llama a la función para obtener los creadores al crear el componente
    },
    methods: {
        async fetchCreadores() {
            try {
                const response = await fetch('http://localhost:3000/videojuegos/creadores');
                const data = await response.json();
                this.creadores = data;
            } catch (error) {
                console.error('Error al obtener los creadores:', error);
            }
        }
    }
}
</script>

<style scoped>
/* Estilos específicos para este componente */
.creadores {
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