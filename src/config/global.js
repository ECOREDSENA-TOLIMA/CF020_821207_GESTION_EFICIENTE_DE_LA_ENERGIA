export default {
  global: {
    componenteFormativo: 'Documentación y presentación de resultados',
    descripcionCurso:
      'Para que los resultados de un proyecto estén disponibles para consulta deben ser documentados. Esta tarea se facilita con el uso de un <i>software</i> de procesamiento de palabras, pero si lo que se quiere es divulgar directamente el proyecto a los interesados, se deben elaborar diapositivas para proyectarlas, tarea facilitada por un <i>software</i> de presentaciones. En ambos casos, documentos y presentaciones, es recomendable estandarizar el formato para que sea homogéneo tanto en su estructura como en la tipografía. Esto se logra adoptando una norma para la elaboración de documentos de proyectos. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    // imagenesDecorativasBanner: [
    //   {
    //     clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
    //     imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
    //   },
    //   {
    //     clases: ['banner-principal-decorativo-2'],
    //     imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
    //   },
    //],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Procesadores de texto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición y herramientas <i>software</i> más comunes',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'El entorno del procesador de texto',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Ortografía y gramática',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Formato del documento, estilos, diseño de página e impresión',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Tablas, imágenes y gráficos, organigramas y diagramas',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo:
              'Plantillas, combinar correspondencia, esquemas y documentos maestros',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo:
              'Tablas de contenidos, de ilustraciones e índices, pie de página y encabezado',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Marcadores, referencias cruzadas y notas al pie',
            hash: 't_1_8',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Contenido documental según normativa vigente o referenciada',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Creación de presentaciones según normativa vigente o referenciada',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Entorno y primeros pasos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Las vistas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Trabajar con diapositivas',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Manejar objetos',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Diseño y buenas prácticas para presentaciones',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Trabajar con textos, notas del orador e impresión',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Trabajar con imágenes, tablas, gráficos y diagramas',
            hash: 't_3_7',
          },
          {
            numero: '3.8',
            titulo: 'Herramientas de dibujo',
            hash: 't_3_8',
          },
          {
            numero: '3.9',
            titulo: 'Elementos multimedia, animaciones y transiciones',
            hash: 't_3_9',
          },
          {
            numero: '3.10',
            titulo: 'Publicación, compartir documentos y documentos en la nube',
            hash: 't_3_10',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_020_821207.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Procesadores de texto',
      referencia:
        'Aprendemania. (2020, 10 de octubre). Procesadores de texto ¿Qué son y tipos de procesadores? [Archivo de video]. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=cR6mwPVJrtg',
    },
    {
      tema: 'Contenido documental según normativa vigente o referenciada',
      referencia: 'Guía Normas APA 7ª edición',
      tipo: 'Enlace web',
      link:
        'https://normas-apa.org/wp-content/uploads/Guia-Normas-APA-7ma-edicion.pdf ',
    },
  ],
  glosario: [
    {
      termino: 'Nube informática',
      significado:
        'Espacio de almacenamiento aportado por servidores virtuales conectados a <em>internet.</em>',
    },
    {
      termino: 'Parafrasear',
      significado: 'Expresar con palabras propias las ideas de otro.',
    },
    {
      termino: 'Presentaciones',
      significado:
        'Aplicación informática para la creación y/o edición de diapositivas.',
    },
    {
      termino: 'Procesador de palabras',
      significado:
        'Aplicación informática para la creación y/o edición de documentos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Microsoft Corporation (s,f). <em>Soporte Técnico de Office.</em> ',
      link: 'https://support.microsoft.com/es-es',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Javier González Cuevas',
          cargo: 'Experto Técnico',
          centro:
            'Distrito Capital - Centro Electricidad Electrónica y Telecomunicaciones',
        },
        {
          nombre: 'Leidy Carolina Arias Aguirre',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de diseño y metrología',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor Pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Yobani Penagos Mora',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Davison Gaitán Escobar',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco Javier Vásquez Suarez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
