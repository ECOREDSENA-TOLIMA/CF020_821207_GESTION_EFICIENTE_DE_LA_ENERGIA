<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.py-0
      .col-12(data-aos="fade-up")
        p.mb-5 El procesamiento de la información recopilada y plasmarla en documentos que sirvan para divulgar los resultados obtenidos en los proyectos de gestión, debe ser ordenada y comprensible, posibilitando que todos los interesados entiendan un mismo lenguaje.  A continuación, se invita a revisar la intencionalidad de este componente formativo.
      .col-12.mt-2(data-aos="fade-up")
        figure.mt-0
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/P-6kUMouZTI" title="Documentación y presentación de resultados" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      
  
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
