<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p La documentación y presentación de resultados abarca una serie de aspectos fundamentales para la elaboración de documentos y presentaciones de manera efectiva y conforme a normativas establecidas. En primer lugar, los procesadores de texto son herramientas informáticas que permiten crear, editar y dar formato a documentos de texto. Estas aplicaciones, como #[em Microsoft Word] o #[em Google Docs], facilitan la escritura, el formato, la corrección y la organización del contenido de manera eficiente. El contenido documental según normativa vigente o referenciada se refiere a la creación y estructuración de documentos de acuerdo con las regulaciones, normas o pautas establecidas. Esto implica seguir directrices específicas en cuanto a la estructura, el formato, el estilo, la citación y las referencias utilizadas en los documentos, asegurando así la precisión, coherencia y validez de la información presentada.
    p.mb-5 En cuanto a la creación de presentaciones según normativa vigente o referenciada, implica el desarrollo de diapositivas visualmente efectivas y coherentes siguiendo pautas establecidas por instituciones, organizaciones o estándares reconocidos. Esto implica considerar el diseño, la organización del contenido, el uso de gráficos y multimedia, el estilo visual y las técnicas de presentación, con el propósito de comunicar la información de manera efectiva y mantener la coherencia con los estándares establecidos.

    .row.justify-content-center
      .col-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
