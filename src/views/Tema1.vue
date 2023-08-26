<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1 Procesadores de texto

    p(data-aos="zoom-in") Los procesadores de texto son herramientas de #[em software], que se usan para la generación de una gran variedad de documentos, y se centra principalmente en contenido textual (cartas, informes, etc.), tal como podrá conocerlos en el siguiente contenido. 
    //- p(data-aos="zoom-in") #[b A continuación, se puede conocer cada uno de ellos].
  
    Separador
    #t_1_1.titulo-segundo.color-acento-botones(data-aos="fade-left")
      h2 1.1 Definición y herramientas #[em software] más comunes

    p(data-aos="zoom-in") Se denomina procesadores de texto al conjunto de aplicaciones informáticas cuya finalidad es la creación y/o edición de documentos de texto con formato como por ejemplo tipo y tamaño de letra, espaciado interlineal, etc. 
    p.mb-4(data-aos="zoom-in") Actualmente existen dos formas básicas de uso:
    
    .row.mb-5
      .col-12.col-lg-8
        TabsA.color-secundario.mb-5
          .tarjeta.color-acento-botones--borde.p-4(titulo="Instaladas localmente en el computador")
            h4 Instaladas localmente en el computador
            p Requiere instalación compatible con el sistema operativo del computador, siendo las opciones más comunes #[em Word] 2019 de #[em Microsoft] para entornos en #[em Windows], #[em Pages de Apple] para entornos en #[em MacOS] y #[em Writer] de #[em Apache Software Foundations] para entornos en #[em Linux, Windows] o #[em MacOS].
          .tarjeta.color-acento-botones--borde.p-4(titulo='Instaladas remotamente en la "nube"')
            h4 Instaladas remotamente en la "nube"
            p Se realiza a través del navegador de #[em internet], siendo las opciones más comunes #[em Word] 365 de #[em Microsoft, Page] para #[em iCloud] de #[em Apple] y Documentos de #[em Google].
      .col-12.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img1.png' alt='')

    p(data-aos="zoom-in") Las aplicaciones de #[em Microsoft] y #[em Apple] requieren pago de licencias, la de #[em Google] requiere pago de licencia para empresas y es gratuita para personas naturales y la de Apache es totalmente gratuita. 
    p(data-aos="zoom-in") Cada aplicación tiene su propio formato de archivo, el de #[em Word] por ejemplo es abc.docx, el de #[em Writer] es abc.odt, el de Pages es abc.pages y el de Documentos es abc.gdoc
    p(data-aos="zoom-in") Existen unas aplicaciones denominadas editores de texto como #[em notepad] o #[em wordpad] que viene con #[em Windows] que sirven para crear y/o editar documentos planos (sin formato) y son del tipo abc.txt 

    Separador
    #t_1_2.titulo-segundo.color-acento-botones(data-aos="fade-left")
      h2 1.2 El entorno del procesador de texto

    p(data-aos="zoom-in") El procesador de texto es un conjunto de herramientas y funciones proporcionadas por un #[em software] de procesamiento de texto, bien sea #[em Microsoft Word], #[em Google Docs] o #[em LibreOffice Writer]. Los cuales proporcionan una interfaz gráfica que permite a los usuarios crear, editar, dar formato y gestionar documentos de texto de manera eficiente. 
    p(data-aos="zoom-in") El entorno del procesador de texto generalmente consta de los siguientes elementos: 

    .row.mb-5
      .col-12
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 1. </b> <i>Entorno del procesador de texto</i>
        figure
          img(src='@/assets/curso/temas/tema1/img2.svg' alt='')

    .row.justify-content-center
      .col-10.order-2.order-lg-1(data-aos="fade-left")
        TabsA.color-acento-botones.mb-5
          .tarjeta.tarjeta--gris.p-4(titulo="Inicio")
            h4 Inicio
            p La pantalla de inicio del programa muestra en la parte superior la llamada cinta de opciones, como se muestra en la figura 1 para la pestaña de inicio.  

          .tarjeta.tarjeta--gris.p-4(titulo="Acciones de comando")
            h4 Acciones de comando
            p  Para saber la acción de cada comando basta con colocar el #[em mouse] sobre el ícono de interés y se despliega un cuadro de ayuda contextual con la información correspondiente como se muestra en la figura 1 para el comando alineación central. 

          .tarjeta.tarjeta--gris.p-4(titulo="Archivo")
            h4 Archivo
            p La pestaña de archivo es diferente a las demás, despliegan varios grupos de opciones llamada vista #[em Backstage], donde se accede a los archivos recientemente abiertos, a comandos para abrir, guardar e imprimir archivos y a las opciones de configuración del programa entre otros. 

          .tarjeta.tarjeta--gris.p-4(titulo="Área de trabajo o lienzo")
            h4 Área de trabajo o lienzo
            p En el centro se encuentra el espacio de trabajo con la vista preliminar de la hoja actual en donde se visualiza el texto tal y como se va escribiendo, como se muestra en la figura 1.

    p(data-aos="zoom-in") Para usar el entorno del procesador de texto, simplemente siga estos pasos básicos:

    .row.justify-content-center 
      .col-10
          
        PasosA.color-primario.mb-5(tipo="n")
          .row
            .col.mb-4.mb-md-0
              p  Abra el #[em software] de procesamiento de textos, como #[em Microsoft Word].

          .row
            .col.mb-4.mb-md-0
              p Cree un nuevo documento en blanco o abra un documento existente.

          .row
            .col.mb-4.mb-md-0
              p Utilice las herramientas y opciones disponibles para escribir y editar el contenido de su documento. Puede aplicar formatos, como estilos de fuente, tamaño, colores, alineación, viñetas, numeración, etc.

          .row
            .col.mb-4.mb-md-0
              p Aproveche las funciones adicionales, como la revisión ortográfica y gramatical, el corrector automático, el buscador e impresión de texto, las plantillas predefinidas, la inserción de imágenes, tablas y gráficos, entre otros.
          
          .row
            .col.mb-4.mb-md-0
              p Guarde su documento regularmente para evitar la pérdida de datos.
              p Hacer listado ordenado color.
                
    p(data-aos="zoom-in") El entorno del procesador de texto es útil en diversas situaciones, como la redacción de documentos formales e informales, la creación de #[i currículums], informes, cartas, ensayos, artículos, entre otros. Además, facilita la colaboración en tiempo real, el formato coherente y la organización eficiente de la información.
    p(data-aos="zoom-in") Recuerde que el entorno puede variar ligeramente según el #[em software] de procesamiento de textos que utilice, pero los conceptos básicos siguen siendo similares.

    Separador
    #t_1_3.titulo-segundo.color-acento-botones(data-aos="fade-left")
      h2 1.3 Ortografía y gramática

    p(data-aos="zoom-in") #[em Word] tiene integrada una herramienta para revisión de ortografía y gramática la cual puede configurarse para ejecutarse en forma manual o automática marcando o desmarcando las casillas correspondientes en la vista de #[em Backstage] (pestaña Archivo), grupo Opciones y luego el menú Revisión, es muy fácil de usar, simplemente asegúrese de seguir estas detalladas instrucciones:


    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="PASO 1:")
        .row
          .col-md-6.col-12
            p #[b Abrir #[i Microsoft Word]] 
            p Haga doble clic en el icono de #[i Microsoft Word] en su escritorio o búsquelo en el menú de inicio y de clic para abrirlo.
          .col-md-6.col-10
            figure
              img(src='@/assets/curso/temas/tema1/img-14.png', alt='')

      .tarjeta.color-acento-botones--borde.p-4(titulo="PASO 2:")
        .row
          .col-md-5.col-12
            p #[b Crear o abrir un documento ] 
            p Puede crear un nuevo documento en blanco seleccionando "Nuevo documento en blanco" o abrir un documento existente seleccionando "Abrir" y eligiendo el archivo correspondiente. 
          .col-md-7.col-11
            figure
              img(src='@/assets/curso/temas/tema1/img-15.png', alt='')

      .tarjeta.color-acento-botones--borde.p-4(titulo="PASO 3:")
        .row
          .col-md-5.col-12
            p #[b Navegar al menú "Revisar" ] 
            p En la parte superior de la ventana de #[i Word], busque la pestaña "Revisar" y haga clic en ella. Esto lo llevará a la pestaña de revisión donde encontrará la herramienta de ortografía y gramática.  
          .col-md-7.col-11
            figure
              img(src='@/assets/curso/temas/tema1/img-16.png', alt='')

      .tarjeta.color-acento-botones--borde.p-4(titulo="PASO 4:")
        .row
          .col-md-5.col-12
            p #[b Iniciar la revisión de ortografía y gramática ] 
            p Una vez en la pestaña "Revisar", busca el grupo de herramientas denominado "Revisión". En este grupo, verá un icono que se llama "Ortografía y gramática". De clic en este icono para iniciar la revisión. 
          .col-md-7.col-11
            figure
              img(src='@/assets/curso/temas/tema1/img-17.png', alt='')

      .tarjeta.color-acento-botones--borde.p-4(titulo="PASO 5:")
        .row
          .col-md-6.col-12
            p #[b Corrección de errores ortográficos y gramaticales ] 
            p Aparecerá una ventana emergente con el primer error ortográfico o gramatical encontrado en el documento. #[i Word] resaltará la palabra o frase problemática y sugerirá una o varias correcciones. 
            p • Para corregir el error, seleccionar una sugerencia de la lista o escribir manualmente la corrección. 
            p • Si cree que no es un error, seleccione "Ignorar" y continúe sin realizar cambios. 
            p • Si la palabra es correcta pero marca como error, seleccionar "Agregar al diccionario" para que se reconozca en el futuro. 
          .col-md-6.col-11
            figure
              img(src='@/assets/curso/temas/tema1/img-18.png', alt='')

      .tarjeta.color-acento-botones--borde.p-4(titulo="PASO 6:")
        .row
          .col-md-5.col-12
            p #[b Continuar la revisión ] 
            p Después de realizar una corrección o tomar una acción sobre el error actual, #[i Word] le llevará automáticamente al siguiente error o problema ortográfico o gramatical en el documento. 
            p Repita el proceso descrito en el Paso 5, hasta que haya revisado todo el documento. 
          .col-md-7.col-11
            figure
              img(src='@/assets/curso/temas/tema1/img-19.png', alt='')

      .tarjeta.color-acento-botones--borde.p-4(titulo="PASO 7:")
        .row
          .col-md-5.col-12
            p #[b Cerrar la herramienta de ortografía y gramática ] 
            p Una vez que haya revisado todo el documento y no haya más errores ortográficos o gramaticales, aparecerá un mensaje indicando que la revisión está completa. 
            p Haz clic en "Cerrar" para cerrar la ventana de la herramienta de ortografía y gramática 
          .col-md-7.col-11
            figure
              img(src='@/assets/curso/temas/tema1/img-20.png', alt='')

    //- .row.justify-content-center 
    //-   .col-8
    //-     TabsC.color-primario.mt-5
    //-       .py-3.py-md-4(titulo="Corrector ortográfico")
    //-         .row
    //-           .col-md-6.col-12.mb-4.mb-md-0
    //-             p Para iniciar manualmente el corrector ortográfico y gramatical se presiona la tecla F7. 
    //-             p Independientemente de la configuración de la corrección, las palabras con errores ortográficos se subrayan con una línea ondulada roja y los gramaticales con doble línea recta azul. 
    //-           .col-12.col-md-6.mb-4.mb-md-0
    //-             figure
    //-               img(src='@/assets/curso/temas/tema1/img3.png', alt='')

    //-       .py-3.py-md-4(titulo="Señalados")
    //-         .row
    //-           .col-md-6.col-12.mb-4.mb-md-0
    //-             p Una vez señalados los posibles errores, #[em Word] muestra opciones de corrección mediante menú contextual haciendo clic derecho sobre cada error marcado.
    //-           .col-12.col-md-6.mb-4.mb-md-0
    //-             figure
    //-               img(src='@/assets/curso/temas/tema1/img4.png', alt='')

    Separador
    #t_1_4.titulo-segundo.color-acento-botones(data-aos="fade-left")
      h2 1.4 Formato del documento, estilos, diseño de página e impresión

    
    .titulo-sexto.color-acento-contenido
      p.titulo.pb-0.mb-0 <b>Figura 2. </b> <i>Diseño de página e impresión en Word.</i>
    .row.justify-content-center.align-items-center(data-aos="fade-left") 
      .col-md-7.col-12
        figure
          img(src='@/assets/curso/temas/tema1/img5.jpg', alt='')
      .col-md-5.col-12
        p La configuración del tamaño de la página a usar, los márgenes, la orientación de la página y el número de columnas por página se realiza en la pestaña Disposición de la cinta de opciones. En esta cinta de opciones, en la pestaña de inicio encontrará un grupo denominado Estilos.
        p Un estilo es un conjunto de configuraciones específicas de las opciones de formato que se pueden aplicar a cualquier texto simultáneamente. Esto se puede hacer manualmente con cada una de las opciones una por una, pero hacerlo con la aplicación del estilo, se hace más rápido y con menos posibilidades de error, obteniendo un resultado más homogéneo. Los estilos para aplicar se pueden seleccionar de los que vienen predeterminados o se pueden crear nuevos modificando los existentes o arrancando de cero.
        p Otra ventaja de usar los estilos en los títulos es que facilitan la automatización en la creación de índices y tablas de contenido como veremos más adelante.

    p.mt-5(data-aos="zoom-in") En la vista de #[em Backstage] (pestaña archivo) encontramos el grupo Imprimir. Desde este grupo podemos configurar algunas opciones que como ya vimos, también se encuentran en la pestaña disposición grupo Configurar página y otras opciones adicionales como el número de copias, la selección de la impresora, el rango de páginas a imprimir. Si se imprime por una sola cara de la hoja o en ambas y cuántas páginas por hoja.
    p(data-aos="zoom-in") Es importante resaltar que en este grupo es en donde se puede convertir el documento a formato PDF (#[em portable document format]) seleccionando como impresora la opción #[em Microsoft Print to PDF].
    p(data-aos="zoom-in") Más adelante, podrá consultar diferentes tutoriales que le llevaran paso a paso a la aplicación de cada una de estas herramientas. 

    Separador
    #t_1_5.titulo-segundo.color-acento-botones(data-aos="fade-left")
      h2 1.5   Tablas, imágenes y gráficos, organigramas y diagramas

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img6.png')})`}"
      )
      .bloque-texto-g__texto.p-3
        p.mb-0 #[em Word] es un #[em software] que tiene varias herramientas que permiten integrar en un documento, tablas, imágenes, gráficos, organigramas y diagramas, así como para la creación y manejo de tablas, imágenes y gráficos. Todas estas opciones se encuentran en la pestaña Insertar. Para crear tablas directamente en #[em Word] o importar tablas desde #[em Excel] (hoja de cálculo de #[em Microsoft]) se usa el grupo tablas de la pestaña Insertar.
          br
          br
          | Existen predeterminadas un número de filas y columnas, si ninguno de estos formatos le sirve para el tipo de tabla deseada, se debe configurar cada una de las opciones de formato disponible en una pestaña flotante especial denominada Herramientas de tabla con dos grupos, diseño de tabla y disposición, que solo se despliega cuando se hace clic sobre cualquier parte de una tabla existente.

    p(data-aos="zoom-in") Desde los dos grupos de esta pestaña es posible configurar opciones como estilos de tabla, sombreado de celdas, bordes de celdas, alineación de tabla en página. Alineación de texto en celdas, márgenes de celdas, autoajuste de tamaño de tabla y celdas y opciones de edición como insertar y borrar filas y/o columnas y unir y/o dividir celdas.
    p(data-aos="zoom-in") Más adelante, podrá consultar diferentes tutoriales que le llevaran paso a paso al uso e inserción de imágenes y gráficas en #[em Word]. 

    Separador
    #t_1_6.titulo-segundo.color-acento-botones(data-aos="fade-left")
      h2 1.6  Plantillas, combinar correspondencia, esquemas y documentos maestros
    
    p(data-aos="zoom-in") Continuando con el recorrido, a continuación, se verá cómo ubicar la herramienta para crear plantillas, combinar correspondencia, esquemas y documentos maestros.

    .row.justify-content-center.align-items-center(data-aos="fade-left") 
      .col-md-5.col-12
        p Las plantillas son una herramienta de #[em Word] que permite cargar documentos de uso común como hojas de vida, boletines, invitaciones, calendarios, cartas de presentación, certificaciones, etc., con contenidos y formatos preestablecidos de aspectos interesantes, atractivos y profesionales donde solo se diligencia la información específica del tipo de documento.
        p El tipo de archivo de las plantillas es .dotx y se pueden seleccionar en la vista de #[em Backstage] (pestaña archivo) en el grupo Nuevo como se muestra en la figura 3.
        p Se pueden cargar plantillas que vienen incluidas con la instalación del programa o plantillas provenientes de internet, a las cuales se accede por medio del cuadro de búsqueda desplegado en el grupo.
      .col-md-7.col-12
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 3. </b> <i>Vista backstage plantillas Word.</i>
        figure
          img(src='@/assets/curso/temas/tema1/img7.jpg', alt='')
      .col-12
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 4. </b> <i>Combinación de correspondencia</i>
    .row.justify-content-center.align-items-center
      .col-md-7.col-12
        figure
          img(src='@/assets/curso/temas/tema1/img8.jpg', alt='')
      .col-md-5.col-12
        p Combinar correspondencia es una herramienta de #[i Word]  que permite diligenciar de forma masiva un mismo documento con la información correspondiente a varios casos particulares, por ejemplo, cartas, sobres, correos electrónicos, etiquetas y directorios. Se accede a esta herramienta haciendo clic en el menú Iniciar combinación de correspondencia, en el grupo del mismo nombre, en la pestaña Correspondencia.
        p La forma más fácil de usar esta herramienta es mediante el asistente para combinar correspondencia, que consiste en un paso a paso de seis niveles empezando por seleccionar el tipo de documento, elaboración del cuerpo del documento, selección de campos de combinación, selección de origen de destinatarios, ejecución de la combinación y finalización e impresión de resultados.
        p Es necesario realizar prácticas que le permitan entender y aplicar cada una de estas herramientas, al final de la Unidad encontrará diferentes enlaces de videos tutoriales que le guiarán en su uso.
      
    Separador
    #t_1_7.titulo-segundo.color-acento-botones(data-aos="fade-left")
      h2 1.7  Tablas de contenidos, de ilustraciones e índices, pie de página y encabezado

    .row.justify-content-center 
      .col-10
        p(data-aos="zoom-in") Las tablas de contenido, de ilustraciones e índices son un listado organizado por número de página de aparición de los contenidos (capítulos, secciones y títulos), tablas y gráficas del documento elaborado. #[em Word] provee una herramienta, que genera y actualiza automáticamente cada tipo de listado, en la pestaña Referencia. En el desarrollo tecnológico de #[em Word], se crearon múltiples herramientas que permiten generar documentos bien elaborados. 
        p(data-aos="zoom-in") Para que la generación y actualización de los listados se realice de forma automática se deben “marcar” los elementos que se desean incluir en cada listado y en este caso para la marcación consiste en aplicar un mismo estilo de título de la galería a dichos elementos. Obviamente para cada tipo de listado se debe usar un estilo diferente.

      
    .row.justify-content-center.align-items-center
      .col-md-5
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 5. </b> <i>Encabezado y Pie de página Word.</i>
        img(src='@/assets/curso/temas/tema1/img9.jpg')

      .col-5
       p Algunas veces se requiere que todas las páginas del documento repitan algún tipo de información como fecha, número de página, nombre del documento, logos, sellos, etc. Cuando dicha información se inserta en la parte superior se denomina encabezado y cuando se hace en la parte inferior se denomina pie de página. #[em Word] permite la inserción de las dos clases de ubicación de la información mediante los comandos del grupo Encabezado y pie de página de la ficha Insertar.

    Separador
    #t_1_8.titulo-segundo.color-acento-botones(data-aos="fade-left")
      h2 1.8 Marcadores, referencias cruzadas y notas al pie
    
    p.mb-4(data-aos="fade-down") Las referencias cruzadas son vínculos a partes específicas del documento a donde se desea llegar con un clic. Para esto se requiere la referencia, que es el lugar donde se hace clic y la ubicación del elemento a donde se desea llegar cuando se hace el clic.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-10.col-12(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 6. </b> <i>Referencias Word.</i>
      .col-md-5.col-12(data-aos="fade-down-right")
        figure
          img(src="@/assets/curso/temas/tema1/img-12.png").img65
      .col-md-5.col-12(data-aos="fade-down-left")
        figure  
          img(src="@/assets/curso/temas/tema1/img-13.png").img65

    p(data-aos="zoom-in").mt-5 El elemento puede ser un número de página, un título, una tabla o gráfica, una ecuación o un elemento especial llamado marcador. Los marcadores se insertan en cualquier lugar mediante el menú marcador, del grupo Vínculo.
    p(data-aos="zoom-in") La referencia cruzada se inserta mediante el menú Referencia cruzada, del grupo Vínculos, de la pestaña Insertar.
    
    .row.justify-content-center.mb-5
      .col-10
        .tarjeta.color-primario.p-3.mt-5
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema1/img10.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Procesadores de texto
                  p.text-small.mb-0 Con el fin de ampliar la información sobre los procesadores de texto y las diferentes herramientas que dispone #[em Word], se hace extensiva la invitación para que consulte la página de #[em Microsoft], en donde podrá revisar tutoriales respecto a éste tema, así como acceder a cursos gratis y mediante pago, que le orientarán al respecto. 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.microsoft.com/es-co/microsoft-365/word?activetab=tabs:faqheaderregion3" target="_blank")
                    span Ir al sitio web
                    i.fas.fa-link

    .cajon-b.color-primario.p-2.mb-5
      p.mb-3(data-aos="zoom-in") Otros tutoriales que puede consultar sobre los procesadores de texto son:

    .row.justify-content-center.mb-3
      .col-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema1/img11.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Curso de #[em Word] básico. Tutorial completo 2022
                  p.text-small.mb-0 Empieza desde cero Termina en un nivel Avanzado. 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=S5wffL3L2K8" target="_blank")
                    span Abrir
                    i.fas.fa-link

    .row.justify-content-center.mb-3 
      .col-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema1/img11.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Tutorial #[em Office Online] Gratis
                  p.text-small.mb-0 Qué es y Cómo Usarlo - 2021. 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=PZefqL7bWa0" target="_blank")
                    span Abrir
                    i.fas.fa-link


    .row.justify-content-center.mb-3 
      .col-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema1/img11.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Curso de #[em Word] desde 0
                  p.text-small.mb-0 Clase 1 Primeros pasos - 2023.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=vhsQPu0Vs3A" target="_blank")
                    span Abrir
                    i.fas.fa-link

    .row.justify-content-center.mb-3 
      .col-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema1/img10.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Curso de #[em Word] en el Sena
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.senasofiapluseduco.com/curso-virtual-de-microsoft-word/" target="_blank")
                    span Ir al sitio web
                    i.fas.fa-link

    .row.justify-content-center.mb-3 
      .col-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema1/img10.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Sena Virtual Cursos Gratis de Informática
                  //- p.text-small.mb-0 #[em Microsoft® Word e internet]
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.sena-virtual.co/sena-virtual-cursos-gratis-de-informatica/" target="_blank")
                    span Ir al sitio web
                    i.fas.fa-link


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
