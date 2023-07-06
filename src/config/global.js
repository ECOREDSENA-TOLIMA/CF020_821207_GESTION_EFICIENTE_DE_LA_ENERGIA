export default {
  global: {
    componenteFormativo: 'Documentación y presentación de resultados',
    descripcionCurso:
      'Para que los resultados de un proyecto estén disponibles para consulta deben ser documentados. Esta tarea se facilita con el uso de un software de procesamiento de palabras, pero si lo que se quiere es divulgar directamente el proyecto a los interesados, se deben elaborar diapositivas para proyectarlas, tarea facilitada por un software de presentaciones. En ambos casos, documentos y presentaciones, es recomendable estandarizar el formato para que sea homogéneo tanto en su estructura como en la tipografía. Esto se logra adoptando una norma para la elaboración de documentos de proyectos. ',
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
            titulo: 'Definición y herramientas software más comunes',
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
      tema: '',
      referencia: '',
      tipo: '',
      link: 'https://www.google.com/',
    },
    {
      tema: '',
      referencia: '',
      tipo: '',
      descarga: '/downloads/prueba.pdf',
    },
  ],
  glosario: [
    {
      termino: '',
      significado: '',
    },
    {
      termino: '<em></em>',
      significado: '',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
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
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador web',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
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
