<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Cartillas metodológicas para el acompañamiento familiar
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-editado.mb-5
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/1.jpg')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Para orientar el desarrollo de las sesiones de acompañamiento psicosocial, sean visitas domiciliarias o encuentros, la Dirección de Familias y Comunidades del ICBF, pone a disposición de los operadores y sus equipos una serie de cartillas metodológicas que son la caja de herramientas para el trabajo con familias. Estas cartillas fueron elaboradas con el apoyo técnico del Programa Recursos Humanos para la Salud en 2030 (HRH2030 por sus siglas en inglés) de la Agencia de los Estados Unidos para el Desarrollo Internacional (USAID), la Organización Internacional para las Migraciones (OIM) y el Fondo de las Naciones Unidas para la Infancia (UNICEF). 
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 ¿Cómo es la estructura de las cartillas metodológicas?
    .cajon-b.color-primario.p-3.mb-5.arriba-derecha.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-11.mb-lg-0.mb-3
          p.mb-0 Las cartillas metodológicas que orientan el desarrollo de las visitas y encuentros del programa Mi Familia tienen dos grandes partes, la primera presenta los principales conceptos asociados a la temática propuesta, los cuales debe tener presente el profesional de acompañamiento para realizar la visita o el encuentro y, en la segunda parte se detalla la metodología sugerida para el trabajo con las familias, la cual consta regularmente, de cuatro (4) momentos, tal y como se presenta a continuación.
        .col-lg-1.col-3: img(src='@/assets/curso/temas/tema3/2.svg', alt='')
    .row.justify-content-center.mb-2
      .col-lg-5.mb-lg-0.mb-3
        .tarjeta-icon(style="background-color: #e7e7e7")
          .tarjeta-icon__icon: img(src='@/assets/curso/temas/tema3/3.svg', alt='')
          .tarjerta-icon__contenido
            h4 MOMENTO 1
            p Constituye un ‘rompehielo’ que busca la activación física de los integrantes de la familia, mientras presenta el tema central con una actividad lúdica.
      .col-lg-5.mb-lg-0.mb-3
        .tarjeta-icon(style="background-color: #e7e7e7")
          .tarjeta-icon__icon: img(src='@/assets/curso/temas/tema3/4.svg', alt='')
          .tarjerta-icon__contenido
            h4 MOMENTO 2
            p Se presentan los principales conceptos o la información más relevante sobre el tema de interés. Utiliza generalmente las infografías como recurso de apoyo y se acompaña de preguntas reflexivas que permitan valorar y conversar sobre los conocimientos y experiencia que sobre el tema tiene la familia.

    .row.justify-content-center.mb-5
      .col-lg-5.mb-lg-0.mb-3
        .tarjeta-icon(style="background-color: #e7e7e7")
          .tarjeta-icon__icon: img(src='@/assets/curso/temas/tema3/5.svg', alt='')
          .tarjerta-icon__contenido
            h4 MOMENTO 3
            p Se desarrollan actividades para promover la reflexión de la familia sobre sus propias prácticas en relación con el tema de interés y la identificación de escenarios de transformación y desarrollo.
      .col-lg-5.mb-lg-0.mb-3
        .tarjeta-icon(style="background-color: #e7e7e7")
          .tarjeta-icon__icon: img(src='@/assets/curso/temas/tema3/6.svg', alt='')
          .tarjerta-icon__contenido
            h4 MOMENTO 4
            p Corresponde al cierre de la sesión y a la identificación de aprendizajes y compromisos.
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 ¿Existen escenarios para flexibilizar la propuesta metodológica que contemplan las cartillas?
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/7.png', alt='')
      .col-lg-8(data-aos="fade-left")
        p Cada cartilla metodológica propone por sesión una pregunta orientadora, unos objetivos y unos resultados esperados. Estos elementos se deben conservar y proteger, en el desarrollo metodológico de la sesión, sea que se haga siguiendo tal cual los pasos que propone la cartilla o que se realicen modificaciones. El programa Mi Familia tiene cobertura en la mayoría de los departamentos del país y en un número importante de municipios; por tanto, las familias que participan en el programa son muy diversas en cuanto a su cultura, su historia, su pertenencia étnica, su territorio, entre otras características. Por tales motivos, un primer nivel que se identifica de posibilidades de ajuste tiene que ver con la pertinencia cultural y territorial del lenguaje y las actividades que proponen las cartillas.
          br
          br
          |En este sentido, las Unidades de Asistencia Técnica cumplen un rol muy importante para proponer y liderar espacios colectivos de análisis e identificación de ajustes de las cartillas, teniendo como foco su pertinencia cultural y territorial.
    .row.justify-content-center.mb-5
      .col-lg-7
        .contenido-imagen
          .cuadro-texto.p-4(style="background-color: #ffd357")
            p Por ejemplo, en la sesión inicial "Zarpando a la Aventura" se proponen metáforas que refieren a un viaje en barco por el mar, estas se podrían ajustar a viajes por el rio o caminatas, en los casos en los cuales la referencia al mar no resulte tan cercana para las familias con las que se trabaja.
          img(src='@/assets/curso/temas/tema3/8.svg', alt='')
          .audio-editado
            TarjetaAudio.color-acento-botones.mb-3(
            texto="Flexibilizar la propuesta metodológica"
            :audio="require('@/assets/curso/temas/tema2/audio3.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false")


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
