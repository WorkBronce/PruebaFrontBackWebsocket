// En el directorio `src/components`, crea un archivo llamado `juegos_c.d.ts`

// Declara el módulo para el componente juegos_c.vue
declare module '*.vue' {
    import { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }
  