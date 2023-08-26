<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 3
      h1 Creación de presentaciones según normativa vigente o referenciada

    .row.justify-content-center 
      .col-10
        img(src='@/assets/curso/temas/tema3/img1.svg')

    Separador
    #t_3_1.titulo-segundo.color-acento-botones(data-aos="fade-left")
      h2 3.1 Entorno y primeros pasos

    p(data-aos="zoom-in") De todos los programas mencionados, se va a particularizar el entorno y funciones de #[i PowerPoint] por ser este el de mayor uso tanto en usuarios empresariales como en personales. ¡A continuación su entorno!
    p(data-aos="zoom-in") La pantalla de inicio del programa muestra en la parte superior la llamada cinta de opciones, como se muestra en la figura 7 para la pestaña de Inicio.

    .row.justify-content-center.align-items-center
      .col-12(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 7. </b> <i>Cinta de opciones PowerPoint.</i>
        img(src='@/assets/curso/temas/tema3/img2.svg').mb-3

    p(data-aos="zoom-in") Para saber la acción de cada comando basta con colocar el #[em mouse] o ratón sobre el ícono de interés y se despliega un cuadro de ayuda contextual con la información correspondiente como se muestra en la figura 8 para el comando alineación central.

    .row.justify-content-center.align-items-center
      .col-12(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 8. </b> <i>Párrafos PowerPoint.</i>
        img(src='@/assets/curso/temas/tema3/img3.svg')

    p(data-aos="zoom-in") La pestaña de archivo es diferente a las demás, despliegan varios grupos de opciones llamada vista #[em Backstage], donde se accede a los archivos recientemente abiertos, a comandos para abrir, guardar e imprimir archivos y a las opciones de configuración del programa entre otros.
    p(data-aos="zoom-in") En el centro se encuentra el espacio de trabajo con la vista preliminar de la diapositiva actual en donde se visualiza el contenido tal y como se va insertando.

    Separador
    #t_3_2.titulo-segundo.color-acento-botones(data-aos="fade-left")
      h2 3.2 Las vistas

    p(data-aos="zoom-in") PowerPoint permite ver las diapositivas de varias formas, denominadas vistas, cada una de ellas con características propias para diferentes tareas.
    p(data-aos="zoom-in") La elección de vista se puede realizar en la pestaña Vista de la cinta de opciones, en el grupo Vistas de presentación. A continuación, se describe el uso de las vistas:

    .row.justify-content-center 
      .col-12.col-lg-10.col-md-11
        .tarjeta.color-acento-contenido--borde.py-4.px-3
          .row
            .col-12.col-md-6
              p.mt-3 La vista <b><em>normal</em></b> es la opción que se muestra cuando se inicia el programa y es la usada para diseñar y editar las diapositivas. 
              p Se observan tres áreas bien definidas, el Panel de miniaturas a la izquierda en donde aparecen en escala reducida las diapositivas una tras otra en el orden de visualización, el panel de diapositivas a la derecha donde se muestra a plena escala la diapositiva seleccionada en el panel de miniaturas y el panel de notas en la parte inferior donde se visualiza información sobre la presentación disponible solo para el orador, como se muestra en la figura 9.
            .col-12.col-md-6
              .titulo-sexto.color-acento-contenido
                p.titulo.pb-0.mb-0 <b>Figura 9. </b> <i>Panel de diapositivas PowerPoint.</i>
              img(src='@/assets/curso/temas/tema3/img4.svg')
        .tarjeta.color-acento-contenido--borde.py-4.px-3
          .row
            .col-12.col-md-6
              p.mt-3 La vista de <b><em>Esquema</em></b> es muy parecida visualmente a la normal con el área del panel de miniaturas más grande porque ahora además de las miniaturas, que aparecen más pequeñas, se visualiza a la derecha de cada una los títulos, el texto principal con sangría respecto al título y los objetos gráficos como notas. 
              p Esta disposición es útil para hacer ediciones globales, obtener información general sobre la presentación o hacer cambios globales de formato, es decir que afecten todas las diapositivas. Un esquema de estructura para Presentaciones recomendado por #[em Microsoft] se muestra en la figura 10.
            .col-12.col-md-6
              .titulo-sexto.color-acento-contenido
                p.titulo.pb-0.mb-0 <b>Figura 10. </b> <i> Vista de Esquema PowerPoint.</i>
              img(src='@/assets/curso/temas/tema3/img5.jpg')
        .tarjeta.color-acento-contenido--borde.py-4.px-3
          .row
            .col-12.col-md-6
              p.mt-3 La vista <b><em>clasificador</em></b> muestra las diapositivas en una sola área de trabajo con un tamaño intermedio entre el del panel de miniaturas y el del panel de diapositiva. De esta manera podemos localizar rápidamente cualquier diapositiva reconociéndola por su contenido.
              p Podemos cambiar el orden, mover, copiar o eliminar diapositivas fácilmente, como se muestra en la figura 11.
            .col-12.col-md-6
              .titulo-sexto.color-acento-contenido
                p.titulo.pb-0.mb-0 <b>Figura 11. </b> <i>Clasificador de diapositivas PowerPoint.</i>
              img(src='@/assets/curso/temas/tema3/img6.jpg')
      
    p(data-aos="zoom-in").mt-5 Al final de la unidad podrá consultar diferentes enlaces sobre cursos de #[em Microsoft] para el uso y aplicación del #[em PowerPoint].

    Separador
    #t_3_3.titulo-segundo.color-acento-botones(data-aos="fade-left")
      h2 3.3 Trabajar con diapositivas

    .row(data-aos="fade-left") 
      .col-12.col-md-7
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 12. </b> <i>Panel de Diapositivas PowerPoint.</i>
        figure
          img(src='@/assets/curso/temas/tema3/img7.svg', alt='')

      .col-12.col-md-5
        p Para crear y modificar contenidos en diapositivas, así como el orden de presentación de las mismas, la vista más apropiada es la Normal. En el panel de miniaturas podemos seleccionar la diapositiva a visualizar en el panel de diapositivas, modificar el orden de presentación de las diapositivas arrastrando las miniaturas al lugar deseado y copiar, insertar o eliminar diapositivas.
        p En el panel de diapositivas se visualiza en gran tamaño la diapositiva seleccionada en el panel de miniaturas para crear o modificar el contenido de la misma. Entre otros se pueden incluir todo tipo de recursos audiovisuales y texto, este último solo puede ser incluido mediante cuadros de texto. Al hacer parte de la #[em suite] de programas de #[i office] de #[em Microsoft], comparte muchas similitudes con los otros programas de la #[em suite], en particular todo lo relativo al formato de texto como fuentes, tamaño, color, subrayado, etc. ya visto en el capítulo de #[em Word]. Para facilitar la alineación de los objetos en la diapositiva, #[em PowerPoint] muestra un conjunto de líneas punteadas denominadas guías inteligentes que facilitan observar las asimetrías existentes entre el centro o bordes del elemento a ubicar y los centros y bordes de los demás elementos de la diapositiva como se muestra en la figura 12.

    Separador
    #t_3_4.titulo-segundo.color-acento-botones(data-aos="fade-left")
      h2 3.4 Manejar objetos

    .row.justify-content-center 
      .col-10
        img(src='@/assets/curso/temas/tema3/img8.svg')

    p(data-aos="zoom-in").mt-5 Existen grupos y menús de herramientas para el manejo de cada tipo de objeto como se verá más adelante.

    Separador
    #t_3_5.titulo-segundo.color-acento-botones(data-aos="fade-left")
      h2 3.5 Diseño y buenas prácticas para presentaciones

    p(data-aos="zoom-in") De los variados modelos existentes para crear presentaciones exitosas, se comparte el modelo de 12 pasos para diseñar y desarrollar proyectos multimedia de #[em Agnew, Kellerman & Meyer (1996)]:

    ImagenInfografica.color-secundario
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema3/img9.svg', alt='')

      .tarjeta.color-secundario.p-3(x="7%" y="33%" numero="1")
        p Entender el alcance del proyecto.

      .tarjeta.color-secundario.p-3(x="30.8%" y="33%" numero="2")
        p Lluvia de ideas e investigación.

      .tarjeta.color-secundario.p-3(x="54.6%" y="31.5%" numero="3")
        p Seleccionar los elementos a incluir en el proyecto.

      .tarjeta.color-secundario.p-3(x="77.8%" y="33%" numero="4")
        p Considerar varios esquemas de organización general del proyecto.

      .tarjeta.color-secundario.p-3(x="7%" y="56%" numero="5")
        p Seleccionar una organización.

      .tarjeta.color-secundario.p-3(x="30.8%" y="56%" numero="6")
        p Decida el texto que acompañará cada elemento incluido.

      .tarjeta.color-secundario.p-3(x="54.6%" y="54.5%" numero="7")
        p Decida las imágenes que representan cada elemento incluido.

      .tarjeta.color-secundario.p-3(x="77.8%" y="56%" numero="8")
        p Prepare el guion y argumento que une las piezas.

      .tarjeta.color-secundario.p-3(x="7%" y="80.3%" numero="9")
        p Coloque los textos e imágenes seleccionados en el lugar que les corresponde en el esquema seleccionado.

      .tarjeta.color-secundario.p-3(x="30.8%" y="80.3%" numero="10")
        p Inserte las animaciones para cada elemento.

      .tarjeta.color-secundario.p-3(x="54.6%" y="78.8%" numero="11")
        p Pruebe el resultado obtenido con personas de perfil similar a la audiencia esperada.

      .tarjeta.color-secundario.p-3(x="77.8%" y="80.3%" numero="12")
        p Revise el proyecto con la retroalimentación recibida.

    Separador
    #t_3_6.titulo-segundo.color-acento-botones(data-aos="fade-left")
      h2 3.6 Trabajar con textos, notas del orador e impresión

    p(data-aos="zoom-in") Tanto en #[em Word] como en #[em PowerPoint], se encuentra herramientas para crear textos; en la web podrá encontrar una gran variedad de tutoriales respecto a éste tema, consulte el siguiente enlace:

    .row.justify-content-center 
      .col-10
        .tarjeta.color-primario.p-3.mt-5
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema1/img10.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Creación de presentaciones según normativa vigente o referenciada. 
                  p.text-small.mb-0 Con el fin de ampliar la información respecto al trabajo con textos, notas del orador e impresión, se hace extensiva la invitación para que consulte la página siguiente web de #[em Microsoft], en donde podrá revisar tutoriales respecto a éste tema.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://support.microsoft.com/es-es/office/agregar-notas-del-orador-a-las-diapositivas-26985155-35f5-45ba-812b-e1bd3c48928e" target="_blank")
                    span Ir al sitio web
                    i.fas.fa-link

    Separador
    #t_3_7.titulo-segundo.color-acento-botones(data-aos="fade-left")
      h2 3.7 Trabajar con imágenes, tablas, gráficos y diagramas

    p(data-aos="zoom-in") Las herramientas para trabajar con imágenes, tablas, gráficos y diagramas en #[em PowerPoint] son las mismas que se revisaron anteriormente para #[em Word].
    p(data-aos="zoom-in") La apariencia de la pestaña Insertar y los grupos de herramientas se muestra en la siguiente figura. 

    .row.mt-5(data-aos="fade-left") 
      .col-12
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 13. </b> <i>Creación de tablas PowerPoint.</i>
        figure
          img(src="@/assets/curso/temas/tema3/img10.svg")

    Separador
    #t_3_8.titulo-segundo.color-acento-botones(data-aos="fade-left")
      h2 3.8 Herramientas de dibujo

    p(data-aos="zoom-in") #[em PowerPoint], como procesador de texto, contiene además unas herramientas que permiten dibujar e insertar elementos para hacer más interactiva la presentación.
    p(data-aos="zoom-in") En la pestaña Insertar encontramos el grupo formas que permite insertar una variedad de formas, En esta pestaña tenemos herramientas para modificar rellenos y contornos (colores y tipos de línea) de las formas, tamaño de las formas y un grupo llamado Organizar, donde podemos ordenar de abajo hacia arriba (atrás al frente) las formas que se sobreponen y girarlas. Adicionalmente podemos agrupar varias formas para moverlas y formatearlas como un solo objeto.

    .row.justify-content-center 
      .col-10
        .tarjeta.color-primario.p-3.mt-5
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema1/img10.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small.mb-1 #[b #[em Microsoft]] ofrece una gran variedad de cursos gratis y mediante pago, que enseñan el manejo del #[em PowerPoint], le invitamos a consultar el siguiente enlace:
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.microsoft.com/es-co/microsoft-365/powerpoint" target="_blank")
                    span Ir al sitio web
                    i.fas.fa-link
    
    Separador
    #t_3_9.titulo-segundo.color-acento-botones(data-aos="fade-left")
      h2 3.9 Elementos multimedia, animaciones y transiciones

    p(data-aos="zoom-in") Es importante conocer que, dentro de la aplicación de #[em PowerPoint], se cuenta con herramientas que harán más dinámicas e interactivas las presentaciones que se desarrollen, teniendo en cuenta las siguientes condiciones:

    .row.justify-content-center.mt-5
      .col-10
          
        PasosA.color-primario.mb-5(tipo="n")
          .row
            .col.mb-4.mb-md-0
              p  #[em PowerPoint] tiene una pestaña que no comparte con los otros programas de la #[em suite] y es la denominada Animaciones.

          .row
            .col.mb-4.mb-md-0
              p Las herramientas de esta pestaña permiten insertar efectos de animación en diapositivas, cuadros de texto, tablas, imágenes y dibujos. A las animaciones durante los cambios de diapositivas se le denomina transición, que consiste en insertar un efecto de salida a la diapositiva que se está terminando de exponer y uno de entrada a la siguiente. 

          .row
            .col.mb-4.mb-md-0
              p Se denomina animación propiamente dicha a los efectos de entrada y salida aplicada a los elementos de una misma diapositiva en el orden en que van a ser tratados durante la exposición y de esta manera controlar el flujo de la información hacia el auditorio y poder hacer sesiones interactivas con ellos. Si toda la información de la diapositiva apareciera simultáneamente, esta interacción no sería posible.

          .row
            .col.mb-4.mb-md-0
              p Hay un grupo a la derecha de la pestaña de animaciones llamado Animación avanzada.
              
          .row
            .col.mb-4.mb-md-0
              p Con estas herramientas se pueden hacer animaciones más elaboradas como dar énfasis, modificar tiempos de entrada y salida, incluir trayectorias de entrada y salida, etc. Para facilitar su uso dispone de un área especial al lado derecho de la diapositiva denominado panel de animación.
          

    Separador
    #t_3_10.titulo-segundo.color-acento-botones(data-aos="fade-left")
      h2 3.10 Publicación, compartir documentos y documentos en la nube

    img(src="@/assets/curso/temas/tema3/img11.svg").mt-5

    img(src="@/assets/curso/temas/tema3/img12.svg").mt-5

    p(data-aos="zoom-in").mt-5 Para trabajo colaborativo es necesario abrir los archivos en línea, con el #[em software] remoto ofrecido por el propietario de la plataforma. En estas condiciones todos los cambios que se hagan son inmediatos y los usuarios pueden trabajar en forma simultánea y el guardado es automático.
</template>

<script>
export default {
  name: 'Tema3',
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
