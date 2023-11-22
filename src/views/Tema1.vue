<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Rol del profesional de acompañamiento familiar 
    .cajon-b.color-secundario.p-3.mb-5.arriba-derecha.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-11.mb-lg-0.mb-3
          p.mb-0 Los fundamentos que orientan el papel, el alcance y la postura del profesional de acompañamiento familiar, frente al relacionamiento con las familias durante el desarrollo del acompañamiento psicosocial, necesitan ser comprendidos y apropiados correctamente para el buen ejercicio de su rol. #[b El siguiente video presenta la importancia de este rol:]
        .col-lg-1.col-3.d-none.d-lg-block: img(src='@/assets/curso/temas/tema1/1.svg', alt='')
    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/W6Twz9GwhGE?si=UbcVZ-191-NDrPVv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Caracterización y diagnóstico
    p.mb-5(data-aos='fade-right') En este apartado se conocerán los elementos técnicos, conceptuales y metodológicos propuestos para el abordaje del acompañamiento psicosocial familiar a partir de los enfoques de la modalidad Mi Familia: ecosistémico, curso de vida, interseccionalidad, apreciativo, resiliencia, entre otros.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/2.png', alt='')
      .col-lg-8(data-aos="fade-left")
        p.mb-0 De acuerdo con el Lineamiento Técnico del programa Mi Familia, el Profesional de Acompañamiento Familiar (PAF) es el principal recurso del acompañamiento psicosocial (ICBF, 2020); la utilidad del acompañamiento con cada familia depende de la capacidad de este para comprender y motivar los procesos de reflexión y de apuestas de cambio en las familias.
          br
          br
          |Por ello, es esencial que se consolide la confianza entre el PAF y las familias, para así construir un ambiente propicio donde surjan momentos y posibilidades de transformación, dinamizadas a través de los recursos metodológicos que ofrece el programa, teniendo en cuenta las cartillas y demás orientaciones.
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 ¿Qué aspectos son relevantes en la comprensión de las familias por parte del PAF, desde los enfoques considerados por el programa Mi Familia?
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/3.svg', alt='')
      .col-lg-7(data-aos="fade-left"): p.mb-0 En el desarrollo del acompañamiento familiar, el PAF asume y construye una comprensión propia de las familias que incide en la forma cómo se acerca a ellas y propicia escenarios para el trabajo conjunto.
        br
        br
        |El acompañamiento psicosocial, que se ofrece a través del programa Mi Familia, tiene en cuenta los tres enfoques principales: ecosistémico, curso de vida e interseccionalidad. Asumirlos implica reconocer ciertos elementos en la comprensión de las familias que realiza el PAF a lo largo del proceso de acompañamiento.
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris ")
      .row(titulo="Enfoque ecosistémico").justify-content-center
        .col-lg-8.mb-4.mb-md-0
          p Resulta relevante reconocer que las familias no son unidades aisladas, sino que hacen parte de un contexto más amplio que incide en sus dinámicas internas. Admitir lo anterior invita a identificar las condiciones del entorno, las dinámicas y realidades de la comunidad de la cual hace parte la familia, la oferta comunitaria e institucional, y las redes sociales de apoyo, tales como la familia extensa, vecinos, amigos, grupos comunitarios, culturales o religiosos, entre otros. 
            br
            br
            |La construcción de la realidad que realiza cada familia depende de la cultura a la que pertenece, su historia, rituales, prácticas, símbolos, conversaciones y narrativas. El PAF, como actor externo a la familia, percibe la realidad de una manera distinta, por tanto, para aproximarse a la comprensión propia de la familia, es preciso escuchar los relatos que realizan sus propios integrantes y quienes los rodean, esto implica: qué se dice sobre la familia y sus integrantes, qué significado tienen las experiencias que han vivido, qué los ha marcado, cómo conversan, quiénes participan en las conversaciones cotidianas, cómo organizan su espacio, entre otros. 
        .col-lg-4.col-7
          figure
            img(src='@/assets/curso/temas/tema1/4.png', alt='Texto que describa la imagen')
      .row(titulo="Enfoque curso de vida").justify-content-center
        .col-lg-8.mb-4.mb-md-0
          p Invita a considerar en la comprensión de las familias, la relación entre sus dinámicas y rutinas de acuerdo con las necesidades del ciclo vital de las personas que las conforman. 
            br
            br
            |Las familias se van transformando en respuesta a las características y necesidades de sus integrantes, por ejemplo, cuando nace un nuevo integrante, cuando los hijos o hijas entran a la adolescencia, o cuando salen del hogar para hacer vida independiente. En desarrollo del acompañamiento psicosocial, el PAF tendrá en cuenta las características de los integrantes y las formas cómo la familia genera dinámicas, acciones y relaciones que se adecúan a los distintos momentos del desarrollo de cada miembro; para lo anterior, observará o hará preguntas sobre el cuidado de los adultos mayores, o de las niñas y niños de la primera infancia, sobre las relaciones con los adolescentes, las relaciones entre hermanos de distintas edades, las formas de colaboración de cada integrante según sus capacidades, entre otros aspectos.
        .col-lg-4.col-7
          figure
            img(src='@/assets/curso/temas/tema1/5.png', alt='Texto que describa la imagen')
      .row(titulo="Enfoque interseccionalidad").justify-content-center
        .col-lg-8.mb-4.mb-md-0
          p En el proceso de conocer y aproximarse a las familias, resulta preciso reconocer, valorar y ser sensibles a la diversidad. Lo anterior implica contemplar que cada familia es única y que algunas de ellas enfrentan dinámicas de discriminación y de exclusión social, las cuales conducen a condiciones de mayor vulnerabilidad.  
            br
            br
            |La discriminación y exclusión pueden estar motivadas por condiciones particulares de las familias, como su pertenencia étnica, la diversidad sexual o de género de alguno de sus integrantes, por situaciones de victimización por conflicto armado, por la presencia de personas con discapacidad, condiciones económicas, entre otros muchos factores.
        .col-lg-4.col-7
          figure
            img(src='@/assets/curso/temas/tema1/6.png', alt='Texto que describa la imagen')
    p.mb-5(data-aos='fade-right') Finalmente. de acuerdo con los Lineamientos Técnicos para la Inclusión y Atención de Familias. la comprensión a las familias no se da como resultado de una observación externa hecha por un experto, sino que implica una interacción constante con ellas.
    .mn.px-5.py-4(style="background-color: #fff0c4 ")
      .row.justify-content-center.align-items-center
        .col-lg-1.col-3.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/7.svg', alt='')
        .col-lg-11
          p.mb-0 La comprensión tiene un potencial transformador al involucrar a la familia en la lectura de su realidad y su contexto, ejercicio que permite la reflexión sobre sus propias dinámicas y formas de relacionamiento, así como la identificación de cambios posibles.
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Aspectos de reflexión y atención constante para el PAF en sus interacciones con las familias 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/8.png', alt='')
      .col-lg-8(data-aos="fade-left")
        p.mb-0 El ejercicio de conocer y comprender, en un sentido amplio a las familias, es continuo durante el proceso de acompañamiento. No es una etapa que finaliza para dar paso a otra, por el contrario, el conocimiento y comprensión de la familia se va consolidando y transformando a lo largo del acompañamiento psicosocial.
          br
          br
          |Este acompañamiento hace posible el surgimiento de escenarios para la reflexión por parte de las familias sobre sus dinámicas y sus relaciones, los eventos significativos de su historia, sus prácticas y sus discursos, con el propósito de promover cambios y transformaciones que apunten a potenciar el desarrollo familiar e individual de quienes conforman la familia.  
    p.mb-5(data-aos='fade-right') En el desarrollo del acompañamiento, el PAF está en interacción constante con las familias. La forma como se da esta interacción es relevante para el éxito del proceso. En la siguiente presentación interactiva se puede comprender los aspectos que el profesional siempre debe tener en cuenta en su labor.
    .titulo-edit.color-secundario.mb-4
      h3.text-white EL PAF
    p.mb-5(data-aos='fade-right') El PAF debe generar una reflexión permanente sobre las dinámicas de interacción con las familias, teniendo cuidado de no perder de vista los siguientes aspectos: autorreferenciación (sus conocimientos, representaciones y perspectivas sobre la vida familiar), el enfoque apreciativo sobre las familias, y la promoción de la resiliencia.  
    .titulo-edit.color-primario.mb-4
      h3 Autoreferenciación del PAF
    p.mb-5(data-aos='fade-right') En la implementación del programa Mi Familia, el PAF interactúa con las familias no solo haciendo uso de técnicas y herramientas, sino desde sus conocimientos, representaciones, emociones y perspectivas, que provienen de sus experiencias previas y de los procesos de formación y cualificación. Lo anterior se conoce como autorreferenciación y determina que el PAF privilegie ciertas observaciones, se detenga en ciertos detalles y pida ampliar algunas secuencias de eventos o de determinados aspectos de una situación; tal y como se detalla en cada punto.
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.card-slyder.color-secundario.p-5.h-100
          .bg-white.rounded-pill.p-2.mb-4
            h5.text-center.mb-0.mx-4 La autoreferenciación 
          p Permite al PAF reconocer que sus conocimientos no son neutros, ni objetivos, pues en ellos están inmersas sus creencias, prejuicios y formas de comprender la realidad. Entonces, sus conocimientos y sus observaciones están impregnados de significados construidos a través de su historia de vida, los cuales se constituyen en filtros para observar y definir la realidad, eligiendo los focos de mirada y los aspectos que indaga.
          .tarjeta.card-slyder__portada.color-primario.p-5
            img(src='@/assets/curso/temas/tema1/9.svg', alt='' style="width: 230px").mb-4
            .bg-white.rounded-pill.p-2
              h5.text-center.mb-0.mx-4 La autoreferenciación
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.card-slyder.color-secundario.p-5.h-100
          .bg-white.rounded-pill.p-2.mb-4
            h5.text-center.mb-0.mx-4 Los significados, creencias y prejuicios 
          p Del PAF no son una limitante en el proceso, en la medida que los reconozca y los aproveche en el establecimiento de nuevas comprensiones para hacer una lectura integral de la familia y de su contexto, para identificar los elementos que guiarán su trabajo, y para especificar la forma de movilizar a la familia y los recursos de su contexto.
          .tarjeta.card-slyder__portada.color-primario.p-5
            img(src='@/assets/curso/temas/tema1/10.svg', alt='' style="width: 230px").mb-4
            .bg-white.rounded-pill.p-2
              h5.text-center.mb-0.mx-4 Los significados, creencias y prejuicios 
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.card-slyder.color-secundario.p-5.h-100
          .bg-white.rounded-pill.p-2.mb-4
            h5.text-center.mb-0.mx-4 Estilo de relacionamiento con las familias
          p El PAF debe tener claridad sobre su estilo de relacionamiento con las familias, así como a identificar los efectos que este produce; es decir, tomar consciencia de los estados emocionales y ser sensible a los que observa en los integrantes de las familias. Todo esto contribuirá a establecer el curso que sigue el acompañamiento, los procesos personales y relacionales que se suscitan, de resistencia o avance, y facilitará la transformación de las familias.
          .tarjeta.card-slyder__portada.color-primario.p-5
            img(src='@/assets/curso/temas/tema1/11.svg', alt='' style="width: 230px").mb-4
            .bg-white.rounded-pill.p-2
              h5.text-center.mb-0.mx-4 Estilo de relacionamiento con las familias
    .titulo-edit.color-primario.mb-4
      h3 Enfoque apreciativo
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/12.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        p.mb-0 Se constituye en una perspectiva para aproximarse a las situaciones y realidades de las familias, y presupone que en cada sistema familiar algo funciona, y que por lo tanto hay que identificarlo, hacerlo evidente, analizarlo, fortalecerlo y desarrollarlo. Esta perspectiva debe estar presente permanentemente en el quehacer del PAF. 
          br
          br
          |Teniendo en cuenta a Pérez (2017), para el desarrollo del acompañamiento psicosocial que propone Mi Familia, se retoman los principios construccionista, anticipatorio y positivo, los cuales deben ser incorporados por el PAF en el trabajo con las familias. 
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        LineaTiempoD.color-acento-contenido
          p.text-small(numero="1" titulo="Principio construccionista ") Contempla que la realidad es diversa y se crea a través del lenguaje; por lo tanto, el profesional debe estar atento a la forma como construye realidades a través de sus preguntas, apreciaciones y relatos. Este principio se materializa cuando el PAF propone diálogos generativos o invita a identificar soluciones alternas a las situaciones que atraviesan las familias.
          p.text-small(numero="2" titulo="Principio anticipatorio ") Propone la construcción de una visión de futuro que promueva la movilización de las familias y puede expresarse a través de las conversaciones sobre los sueños y proyectos, lo cual permite anticipar situaciones y construir posibilidades y alternativas para enfrentarlas.
          p.text-small(numero="3" titulo="Principio positivo ") Invita a enfocarse en lo valioso, potenciando el cambio, generando esperanza y seguridad. De acuerdo con este principio, las conversaciones de esperanza son más provocativas e incentivan más el cambio, que las conversaciones de derrota.
      .col-lg-5.col-7: img(src='@/assets/curso/temas/tema1/13.svg', alt='')
    .titulo-edit.color-primario.mb-4
      h3 Promoción de la resiliencia
    p.mb-5(data-aos='fade-right') La resiliencia permite a las familias superar una situación adversa, adaptarse a nuevas circunstancias y avanzar en su senda de desarrollo. En este mismo sentido, y siguiendo con lo señalado en los Lineamientos Técnicos para la Inclusión y Atención de Familias, la resiliencia individual o familiar depende de la forma como se asume y se da significado a eventos perturbadores, así como a la capacidad para activar los recursos de afrontamiento (internos y externos) y para anticipar y prevenir situaciones de riesgo.
    .row.justify-content-center.mb-5
      .col-lg-9(data-aos="fade-right").mb-lg-0.mb-3
        p Por ello, es necesario que los programas de acompañamiento a las familias promuevan con ellas el reconocimiento y fortalecimiento de la resiliencia, esto dado que:
        .bloque-texto-d.color-primario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3.text-small Todas las familias en algún momento de su historia experimentan situaciones estresantes u otras en las cuales no cuentan con los recursos o apoyos suficientes para enfrentar los retos que se derivan de las transiciones vitales o de las crisis.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h6.mb-0 ICBF, 2020, p. 45
      .col-lg-3.d-none.d-lg-block: img(src='@/assets/curso/temas/tema1/14.svg', alt='')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/15.png', alt='')
      .col-lg-8(data-aos="fade-left")
        p.mb-0 Los programas de acompañamiento familiar como Mi Familia promueven en las familias la identificación y el fortalecimiento de factores protectores y de sus capacidades para que la dificultad o la crisis que generó la vinculación al programa no ponga en riesgo su senda de desarrollo familiar o el de los integrantes que las conforman. Sin embargo, es esencial tener presente que el acompañamiento es acotado en el tiempo y es importante que, como resultado del proceso, las familias se sientan con la confianza y los recursos para afrontar nuevas situaciones desafiantes.  
          br
          br
          |A continuación, se presentan algunas perspectivas que puede incorporar el PAF en el acompañamiento a las familias para promover en ellas la resiliencia. 
    .tarjeta.p-5.mb-4(style="background-color: #fff2d0 ")
      SlyderA(tipo='b')
        .row
          .col-lg-6.mb-4.mb-md-0
            h4 Trabajar con la idea de la potencialidad, en lugar del déficit familiar,
            p lo que implica una mirada proactiva sobre la familia, a quien se le reconoce como una unidad con recursos, experiencia, conocimientos y capacidades, que posibilitan el cambio y la resolución de retos. Esto significa que por muy difícil que sea la situación, siempre se buscan elementos positivos, recursos y fortalezas que permitan salidas.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/16.png', alt='alt')
        .row
          .col-lg-6.mb-4.mb-md-0
            h4 Promover en las conversaciones con las familias la identificación de sus logros, fortalezas y recursos
            p para afrontar situaciones adversas; esto invita a evitar el exceso de atención en los factores de riesgo y a trascender la queja, el síntoma y el problema. El sentido de esta perspectiva es que resaltar el daño, el riesgo y la sensación de vulnerabilidad puede conducir al estancamiento o deterioro progresivo de las trayectorias de vida de las familias y los individuos. (Gómez y Klotiarenco, 2010).
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/17.png', alt='alt')
        .row
          .col-lg-6.mb-4.mb-md-0
            h4 Comprender las crisis como oportunidades de reorganización y crecimiento familiar,
            p lo que invita a pensar y reconocer el problema o la situación desafiante como resultado de la dinámica familiar y a explorar alternativas constructivas y colaborativas que motiven la transformación y el cambio. Desde esta perspectiva es importante promover el reconocimiento de los conflictos o problemas como algo que siempre estará presente en la vida de las familias, quienes pueden usarlo como un contexto de transformación y crecimiento.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/18.png', alt='alt')
    .mn.px-5.py-4(style="background-color: #c7fce3")
      .row.justify-content-center.align-items-center
        .col-lg-1.col-3.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/19.svg', alt='')
        .col-lg-11
          p.mb-0 El éxito del acompañamiento del PAF, entonces, siempre estará dada por la forma en la que se lleve a cabo la interacción constante con las familias teniendo en cuenta los aspectos anteriormente descritos: la autorreferenciación, el enfoque apreciativo sobre las familias, y la promoción de la resiliencia.


















    
      
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
