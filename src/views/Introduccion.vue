<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5(data-aos='fade-right') Los profesionales de acompañamiento y de los equipos técnicos que sustentan el acompañamiento psicosocial son la principal herramienta – instrumento de trabajo con las familias y sus integrantes. En el siguiente video se destaca la importancia de su rol y la postura que se espera en estos procesos, información que luego será desarrollada a lo largo del componente.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. 
    .mn.px-5.py-4(style="background-color: #fff0c4 ")
      .row.justify-content-center.align-items-center
        .col-lg-1.col-3.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/intro/1.svg', alt='')
        .col-lg-11
          p.mb-0 #[b Objetivo:] Objetivo: reconocer los procesos de cambio en las familias y aplicar las herramientas que permiten estructurar, planear y proyectar el acompañamiento psicosocial con las familias beneficiarias del programa Mi Familia.
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
