<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 2
      h1 Contenido documental según normativa vigente o referenciada

    p(data-aos="zoom-in") Una forma de minimizar los problemas en la comunicación escrita es la adopción de un conjunto de pautas en la elaboración y presentación de documentos que resaltan la claridad y precisión del mensaje. Aunque existen varias referencias de pautas de presentación, tal vez el de mayor difusión en el mundo escolar y académico, es el de las Normas APA (American Psychological Association) que se encuentra en su 7ma edición, especialmente creadas para la presentación de documentos académicos y de investigación. 
    p(data-aos="zoom-in") Los principales lineamientos establecidos en estas normas son:

    ImagenInfografica.color-secundario
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema2/img1.png', alt='')

      .tarjeta.color-secundario.p-3(x="41%" y="38%" numero="1")
        .h5.mb-2 Presentación
        ol.lista-ol
          li 
            | ● Tipo de fuente: Times New Roman. tamaño 12 puntos, tamaño carta. 
          li 
            | ● Márgenes de 2.5 cm en todos los bordes. 
          li 
            | ● Paginación en números arábigos consecutivos, empezando en uno desde la portada y en la parte derecha del encabezado. 
          li 
            | ● Interlineado a doble sin espacio adicional entre párrafos, alineación de texto justificado. Y sangría, 1.3 cm (5 espacios) al inicio de cada párrafo. 
          li 
            | ● Encabezado: en todas las páginas con el nombre del documento en mayúsculas (máximo 50 caracteres contando espacios), alineación izquierda. 

      .tarjeta.color-secundario.p-3(x="53%" y="53%" numero="2")
        .h5.mb-2 Estructura
        ol.lista-ol
          li 
            | ● Portada 
          li 
            | ● Resumen 
          li 
            | ● Texto 
          li 
            | ● Referencias 
          li 
            | ● Notas 
          li 
            | ● Tablas  
          li 
            | ● Figuras  
          li 
            | ● Apéndices  

      .tarjeta.color-secundario.p-3(x="25%" y="55%" numero="3")
        .h5.mb-2 Portada y contraportada
        p Se elabora en página nueva y la alineación del texto es central y deben contener en el orden mostrado la siguiente información: 
        ol.lista-ol
          li 
            | ● Título del proyecto: en negrilla, recomendable máximo 12 palabras  
          li 
            | ● Nombre y apellido de autores 
          li 
            | ● Afiliación, colegio o Universidad 
          li 
            | ● Curso 
          li 
            | ● Nombre del profesor 
          li 
            | ● Fecha 
          li 
            | ● Apéndices  

      .tarjeta.color-secundario.p-3(x="75%" y="44%" numero="4")
        .h5.mb-2 Cuerpo
        p Debe presentarse en páginas separadas cada uno de los siguientes títulos: introducción, índice, justificación, y objetivos. 
        p En relación al marco teórico, es importante tener en cuenta al nivel del título empleado. En la sección de método se debe proporcionar información sobre las técnicas usadas en la recolección y evaluación de datos del proyecto. En la sección de resultados se deben presentar los logros que contribuyan a responder las hipótesis planteadas en el inicio, respaldando cada resultado con los datos obtenidos en el proyecto.  
      
      .tarjeta.color-secundario.p-3(x="54%" y="5%" numero="5")
        .h5.mb-2 Citación y referencias
        p Citar es acreditar las ideas de otros autores usadas en el proyecto, indicada en el texto y en las referencias bibliográficas. Existen dos tipos de citas: la textual cuando se reproducen exactamente las palabras del autor y la parafraseada cuando se expresan las ideas del autor con otras palabras. 
        p Las citas en el texto se pueden presentar: 

        ol.lista-ol
          li 
            | ● Cita narrativa o basada en el autor: Apellido (año). Se incorpora antes de la cita entre comillas y al final de la página entre paréntesis. 
          li 
            | ● Cita parentética o basada en el texto: (Apellido, año, página) van al final de la cita entre comillas.

      .tarjeta.color-secundario.p-3(x="41%" y="75%" numero="6")
        .h5.mb-2 Conclusiones y resumen 
        p Las conclusiones del proyecto van incluidas en la sección Discusión en donde se evalúan e interpretan las implicaciones de los resultados respecto de las hipótesis originales enfatizando las consecuencias teóricas y prácticas del proyecto. 
        p El resumen, se elabora en página nueva ubicada después de la portada. Es un texto breve y claro (entre 150 a 250 palabras) que permita entender el contenido del artículo, que informe y no evalúe, que sea coherente, legible y redactado en voz activa, por ejemplo “consultado” en vez de “una consulta de¨. 

      .tarjeta.color-secundario.p-3(x="69%" y="86%" numero="7")
        .h5.mb-2 Anexos 
        p La Norma APA, los denomina Apéndices, es un material complementario del tema investigado, que para evitar confusión o distracción no se incluye directamente en el texto. Se cita en la Bibliografía, si son de poca extensión y de fácil impresión, se incluyen directamente como Apéndice. 
        p Van uno tras de otro en página nueva c/u, en orden de mención en el texto principal. Identificados con un título, centrado y en negrita, con la palabra Apéndice seguida de una letra mayúscula y luego el nombre del material.
  
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
