<template>
  <div>
    <div class="juegos">
      <h1>Lista de Juegos</h1>
      <ul>
        <li v-for="juego in juegos" :key="juego.id">
          <router-link :to="'/detalle/' + juego.id">{{ juego.nombre }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      juegos: [] // La lista de juegos obtenidos del backend
    }
  },
  created() {
    this.fetchJuegos(); // Llama a la función para obtener los juegos al crear el componente
  },
  mounted() {
    // Suscribirse al evento 'actualizarJuegos' del servidor usando Vue-Socket.io
    this.$socket.on('actualizarJuegos', (data) => {
      this.juegos = data.map(juego => ({ id: juego.id, nombre: juego.nombre }));
    });
  },
  methods: {
    async fetchJuegos() {
      try {
        const response = await fetch('http://localhost:3000/videojuegos');
        const data = await response.json();
        this.juegos = data.map(juego => ({ id: juego.id, nombre: juego.nombre }));
      } catch (error) {
        console.error('Error al obtener los juegos:', error);
      }
    }
  }
}
</script>

<style scoped>
/* Estilos específicos para este componente */
.juegos {
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
