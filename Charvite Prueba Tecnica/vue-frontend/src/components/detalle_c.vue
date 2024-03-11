<template>
    <div>
        <h1>Detalles del Videojuego</h1>
        <div class="detalle">
            <h2>{{ juego.nombre }}</h2>
            <p><strong>Creador:</strong> {{ juego.creador }}</p>
            <p><strong>Genero:</strong> {{ juego.genero }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            juego: {} // El juego obtenido del backend
        }
    },
    created() {
        this.fetchJuego(); // Llama a la función para obtener el juego al crear el componente
    },
    methods: {
        async fetchJuego() {
            try {
                const response = await fetch('http://localhost:3000/videojuegos/' + this.$route.params.id);
                const data = await response.json();
                this.juego = data;
            } catch (error) {
                console.error('Error al obtener el juego:', error);
            }
        }
    }
}
</script>

<style scoped>
.detalle {
    background-color: #f2f2f2;
    padding: 20px;
    border-radius: 5px;
    margin-top: 20px;
}

.detalle h2 {
    color: #333;
    font-size: 24px;
    margin-bottom: 10px;
}

.detalle p {
    color: #666;
    font-size: 16px;
    margin-bottom: 5px;
}


</style>