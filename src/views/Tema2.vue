<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Proceso de caracterización y diagnóstico del programa Mi Familia
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/1.png', alt='')
      .col-lg-8(data-aos="fade-left")
        p.mb-0 El acompañamiento familiar psicosocial de Mi Familia inicia con la caracterización y diagnóstico integral de cada familia con el fin que el profesional de acompañamiento pueda identificar con las familias las condiciones iniciales, comprender las realidades y necesidades de las familias para plantear el curso de acción y metas de trabajo que se estructuran a través del plan familiar. Este proceso sucede en las primeras sesiones de acompañamiento familiar de manera progresiva (hasta la tercera sesión dependiendo de la dinámica de la familia y el PAF). La intervención y diagnóstico se desarrollan conjunta y complementariamente dentro del acompañamiento psicosocial. 
          br
          br
          |Para el desarrollo de la caracterización y diagnóstico de las familias, los profesionales de acompañamiento familiar cuentan con una batería de instrumentos que les permite abordar diferentes perspectivas de las familias, como lo muestra el siguiente esquema:
    .mn.p-5(style="background-color: #fffaeb ")
      .row.justify-content-center.mb-5
        .col-lg-6
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 1
            span Instrumentos de caracterización y diagnóstico
          img(src='@/assets/curso/temas/tema2/2.svg', alt='Los instrumentos de caracterización son: perfil de vulnerabilidad, mapa de pertenencia y genograma.')
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 ¿Cuál es el sentido del proceso de caracterización y diagnóstico del programa Mi Familia? 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/3.png', alt='')
      .col-lg-8(data-aos="fade-left")
        p.mb-0 Una de las características principales del proceso de caracterización y diagnóstico del programa Mi Familia y que guarda armonía con lo expuesto en el apartado anterior, es que este no es realizado por un actor externo especializado con total autonomía, sino que promueve la participación de las familias y sus integrantes. En este proceso, el profesional realiza la lectura de la realidad y del contexto de manera conjunta con la familia, asumiéndolo como un ejercicio de transformación y motivación al cambio. Esto es posible dado que, las preguntas que plantea el profesional, orientadas por los distintos instrumentos, implican un proceso reflexivo por parte de las familias. En el siguiente video se presenta con mayor claridad el proceso de caracterización y diagnóstico del programa.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/W6Twz9GwhGE?si=vMeGiuv-mo2WT7Li" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Caracterización y diagnóstico
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2  Ficha de caracterización sociofamiliar
    .row.justify-content-center.mb-5
      .col-lg-5.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/4.svg', alt='')
      .col-lg-7(data-aos="fade-left")
        p.mb-0 La Ficha de Caracterización Sociofamiliar (FCSF) permite el registro de todas las personas que pertenecen al grupo familiar beneficiario de Mi Familia, recogiendo información individual relacionada con nombres, apellidos, edad, sexo, nivel educativo, afiliación a salud, y principal actividad que realiza cada integrante del grupo familiar, así como el registro de información grupal. Por ejemplo, acceso a servicios públicos o tipo, condición y tenencia de la vivienda, entre otros.
          br
          br
          |Esta ficha tiene cuatro (4) apartados: 1. Información entidad contratista; 2. Información ubicación de la vivienda familiar; 3. Información del jefe de grupo familiar y 4, integrantes del grupo, tal y como lo expone la siguiente figura.
    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right").mb-lg-0.mb-3
        img(src='@/assets/curso/temas/tema2/5.svg', alt='')
        TarjetaAudio.color-acento-botones.mb-3(
          texto="Apartados de la ficha de caracterización Sociofamiliar"
          :audio="require('@/assets/curso/temas/tema2/audio1.mp3')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false")
      .col-lg-6(data-aos="fade-left")
        .tarjeta(style="background-color: #fff2d0 ").p-5
          SlyderA(tipo='b')
            .row.mx-2.justify-content-center
              .col-lg-9.mb-4.mb-md-0
                h4 Entidad del contratista
                ul.lista-ul--color
                  li
                    i.fas.fa-caret-right(style="color: #f46464 ")
                    | Nombre del contratista
                  li
                    i.fas.fa-caret-right(style="color: #f46464 ")
                    | Tipo de documento de la entidad (NIT-RUT)
                  li
                    i.fas.fa-caret-right(style="color: #f46464 ")
                    | Número de identificación
                  li
                    i.fas.fa-caret-right(style="color: #f46464 ")
                    | Número de contrato
                  li
                    i.fas.fa-caret-right(style="color: #f46464 ")
                    | Nombre y apellido del profesional de acompañamiento familiar

                  li
                    i.fas.fa-caret-right(style="color: #f46464 ")
                    | Tipo de documento de identidad del profesional

                  li
                    i.fas.fa-caret-right(style="color: #f46464 ")
                    | Número de documento de identificación del profesional

              .col-lg-3.col-6
                img(src='@/assets/curso/temas/tema2/6.svg', alt='Texto que describa la imagen')
            .row.mx-2.justify-content-center
              .col-lg-9.mb-4.mb-md-0
                h4 Ubicación de la vivienda familiar
                ul.lista-ul--color
                  li
                    i.fas.fa-caret-right(style="color: #f46464 ")
                    | Tipo de vivienda
                  li
                    i.fas.fa-caret-right(style="color: #f46464 ")
                    | País, departamento, municipio o ranchería
                  li
                    i.fas.fa-caret-right(style="color: #f46464 ")
                    | Ubicación de la vivienda
                  li
                    i.fas.fa-caret-right(style="color: #f46464 ")
                    | Tenencia de la vivienda
                  li
                    i.fas.fa-caret-right(style="color: #f46464 ")
                    | Acceso a servicios públicos
              .col-lg-3.col-6
                img(src='@/assets/curso/temas/tema2/7.svg', alt='Texto que describa la imagen')
            .row.mx-2.justify-content-center
              .col-lg-9.mb-4.mb-md-0
                h4 Nivel individual, jefe del grupo familiar
                ul.lista-ul--color
                  li
                    i.fas.fa-caret-right(style="color: #f46464 ")
                    | Información básica de identificación
                  li
                    i.fas.fa-caret-right(style="color: #f46464 ")
                    | De autorreconocimiento étnico

                  li
                    i.fas.fa-caret-right(style="color: #f46464 ")
                    | Tipo de beneficiario y educación
                  li
                    i.fas.fa-caret-right(style="color: #f46464 ")
                    | Ocupación y de acceso a salud
                  li
                    i.fas.fa-caret-right(style="color: #f46464 ")
                    | Género y diversidad sexual
                  li
                    i.fas.fa-caret-right(style="color: #f46464 ")
                    | Discapacidad
              .col-lg-3.col-6
                img(src='@/assets/curso/temas/tema2/8.svg', alt='Texto que describa la imagen')
            .row.mx-2.justify-content-center
              .col-lg-9.mb-4.mb-md-0
                h4 Nivel individual, integrantes del grupo
                ul.lista-ul--color
                  li
                    i.fas.fa-caret-right(style="color: #f46464 ")
                    | Información básica de identificación
                  li
                    i.fas.fa-caret-right(style="color: #f46464 ")
                    | De autorreconocimiento étnico
                  li
                    i.fas.fa-caret-right(style="color: #f46464 ")
                    | Tipo de beneficiario y educación
                  li
                    i.fas.fa-caret-right(style="color: #f46464 ")
                    | Ocupación y de acceso a salud
                  li
                    i.fas.fa-caret-right(style="color: #f46464 ")
                    | Género y diversidad sexual
                  li
                    i.fas.fa-caret-right(style="color: #f46464 ")
                    | Discapacidad
              .col-lg-3.col-6
                img(src='@/assets/curso/temas/tema2/9.svg', alt='Texto que describa la imagen')
    .bloque-editado.mb-5
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/10.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 En la indagación que permite diligenciar la FCSF, se recomienda tener especial cuidado con el diligenciamiento de la información sobre el nivel educativo de padres, madres y cuidadores, condiciones de la vivienda, situación laboral de los adultos del hogar, la asistencia escolar y la afiliación a salud de los niños, niñas y adolescentes; así como la información que tiene que ver con características diferenciales de las personas como género y diversidad sexual, discapacidad y pertenencia étnica. 
            br
            br
            |Esto con el objetivo de identificar necesidades esenciales por satisfacer o derechos inobservados y orientar acciones específicas, articuladas con los entes territoriales y las entidades respectivas, para promover el acceso a bienes y servicios, mejoras en las condiciones de vida de las familias y la garantía del goce efectivo de sus derechos.
    p.mb-5(data-aos='fade-right') A continuación, se presentan las preguntas y opciones de respuesta del apartado Información ubiciación de la vivienda:        
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 2. 
          span Información Ubicación de la vivienda familiar
        img(src='@/assets/curso/temas/tema2/11.png', alt='')
        figcaption NOTA. Tomado de ICBF (2021).
    .mn.px-5.py-4.mb-5(style="background-color: #fff2d0")
      .row.justify-content-center.align-items-center
        .col-lg-1.col-3.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/12.svg', alt='')
        .col-lg-11
          p.mb-0 Para este apartado, se identifican 15 preguntas con opciones de respuesta como se presenta en la figura. La persona que responde este apartado será el jefe(a) del grupo familiar, su cónyuge o cualquier otro integrante de 18 años o más. Es importante tener en cuenta que en una vivienda puede haber más de un grupo familiar, y que se debe atender y diligenciar esta información para el grupo familiar al que pertenezca el niño, niña o adolescente que generó los criterios de selección. Para el caso de Mi Familia, si está o estuvo en una modalidad priorizada de protección o de primera infancia, entre otros, de acuerdo con la Guía de focalización de la modalidad.
    .tarjeta.p-3(style="background-color: #e8e8e8").mb-5
        .row.justify-content-around.align-items-center
          .col-auto
            img(src="@/assets/curso/temas/tema2/13.svg").img65
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 Información ubicación de la vivienda
                p.mb-0 Se sugiere la consulta de este documento en el que se puede evidenciar con claridad todos los campos de este formulario de caracterización.
              .col-sm-auto
                a.boton.color-acento-botones(href="https://docs.google.com/document/d/1uZnIzJU0_WorBlLCKfkwbKVmgS8uBeTVv_Y0sG647Fs/edit?usp=sharing" target="_blank")
                  span.text-white.mb-0 Ver documento 
                  i.fas.fa-link(style="color: white")
    p.mb-5(data-aos='fade-right') La mayor parte de los campos relacionados con ubicación de la vivienda pueden ser diligenciados previamente de acuerdo con las indicaciones suministradas por la gerencia de operaciones, a partir del análisis de la base de vinculación y de los municipios o ciudades a atender. A continuación se presenta un ejemplo con el campo específico “Zona de ubicación”.
    .row.justify-content-center.mb-3
      .col-lg-8
        .tarjeta(style="background-color: #e2d9ff").p-4
          p.mb-0 A modo de ejemplo enfóquese en el campo “Zona de ubicación”, donde se debe escoger una de las opciones disponibles: Cabecera o resto. Se debe marcar Cabecera cuando la vivienda esté ubicada en la cabecera municipal o en un centro poblado, teniendo en cuenta los conceptos establecidos por el DANE. 
    .row.justify-content-center.mb-5
      .col-lg-2.col-3.mb-4: img(src='@/assets/curso/temas/tema2/14.svg', alt='')
      .col-lg-9(data-aos="fade-left")
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/15.svg', alt='Texto que describa la imagen')
          .tarjeta.bg-gris-claro.p-3(x="4.2%" y="57%" numero="a")
            .h5.mb-2 Resto
            p Se debe marcar Resto cuando la vivienda esté ubicada en el Área rural o resto municipal que, de acuerdo con el DANE, se caracteriza por la disposición dispersa de viviendas y explotaciones agropecuarias existentes en ella. No cuenta con un trazado o nomenclatura de calles, carreteras, avenidas y demás; ni tampoco dispone, por lo general, de servicios públicos y de otro tipo de facilidades propias de las áreas urbanas. 
          .tarjeta.bg-gris-claro.p-3(x="85%" y="18%" numero="b")
            .h5.mb-2 Cabecera Municipal (CM)
            p Es el área geográfica que está definida por un perímetro urbano. Corresponde al lugar en donde se ubica la sede administrativa de un municipio. 
          .tarjeta.bg-gris-claro.p-3(x="85%" y="50%" numero="c")
            .h5.mb-2 Centro Poblado (CP)
            p Es un concepto creado por el DANE para la identificación de núcleos de población. Se define como una concentración de mínimo veinte (20) viviendas contiguas, vecinas o adosadas entre sí, ubicada en el área rural de un municipio o de un corregimiento departamental. Dicha concentración presenta características urbanas, tales como la delimitación de vías vehiculares y peatonales. Dentro de los centros poblados se encuentran los caseríos, inspección de policía o los corregimientos.  
    .tarjeta.p-3.mb-5(style="background-color: #e7e7e7")
        .row.justify-content-around.align-items-center
          .col-auto
            img(src="@/assets/curso/temas/tema2/16.svg").img65
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 Guía diligenciamiento ficha de caracterización sociofamiliar de la Dirección de Familias y Comunidades.
                p.mb-0.text-small Se sugiere la consulta de este documento para la profundización de la temática. Este recurso también se encuentra como material de apoyo.
              .col-sm-auto
                a.boton.color-acento-botones(href="https://docs.google.com/document/d/1uZnIzJU0_WorBlLCKfkwbKVmgS8uBeTVv_Y0sG647Fs/edit?usp=sharing" target="_blank")
                  span.text-white.mb-0 Ver documento 
                  i.fas.fa-link(style="color: white")
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/17.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Finalmente, la información de caracterización le permite a la Dirección de Familias y Comunidades hacer análisis agregados de las familias de acuerdo con sus características socioeconómicas, y de esta manera identificar fortalezas u oportunidades de mejora para la modalidad.
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3 Genograma
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right").mb-lg-0.mb-3 
        P Para el abordaje con este instrumento es fundamental tener a disposición un mapa completo de los integrantes de la familia y sus allegados significativos, así como de las cualidades de sus relaciones y aspectos estructurales como el parentesco, los roles que desempeñan, los acuerdos y prácticas del sistema familiar, y la forma como afrontan situaciones estresantes. 
        .bloque-texto-d.color-primario.p-4.border-0
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p El genograma se usa como instrumento gráfico que permite conocer, recoger, registrar y exponer algunos datos de la familia, información de sus integrantes y las relaciones a lo largo de diferentes generaciones
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h6.mb-0 (Fernandez, Escalante, & Palmero, 2011)
      .col-lg-5.col-7: img(src='@/assets/curso/temas/tema2/18.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-10
        .contenedor-img__2.p-3
          .contenido
            p Esta herramienta permite entender cómo, cuándo y de qué manera sucede una situación y quiénes son los integrantes de la familia que participan en esta. Así, el genograma puede ayudar a los integrantes de 
            .bloque-texto-d.color-acento-contenido.p-4
              .bloque-texto-d__texto.mb-2
                i.fas.fa-quote-left(style="color: #ffd357")
                p la familia a verse como parte de un todo y a reconocer que la familia en su conjunto tiene un papel activo en el proceso que puede afectar a cada uno de sus integrantes 
                i.fas.fa-quote-right(style="color: #ffd357")
              .bloque-texto-d__autor 
                .h6.mb-0  (Fernandez, Escalante, & Palmero, 2011, pág. 19)
            
          img.position.d-xl-block.d-none(src='@/assets/curso/temas/tema2/19.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-10
        .contenedor-img__1.p-5
          .contenido
            p En una lectura ecosistémica de la familia, es útil explicitar el mapa completo de sus miembros a lo largo de al menos tres generaciones, en el cual se referencien los allegados significativos de cada integrante y las características de las relaciones entre ellos. En estos mapas también se desglosan los acuerdos y prácticas del sistema familiar, y la forma cómo dan manejo a situaciones desafiantes. 
              br
              br
              |Para construir un genograma, es necesario tener en cuenta tres fases, de acuerdo con Feixas, Muñoz & Montesano (2012).
            
          img.position.d-xl-block.d-none(src='@/assets/curso/temas/tema2/20.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.card-slyder.color-secundario.p-5.h-100
          .bg-white.rounded-pill.p-2.mb-4
            h5.text-center.mb-0.mx-4 Trazado de la estructura familiar
          p Es la descripción gráfica de los integrantes de la familia y de las uniones biológicas y legales entre las generaciones. Pueden usarse cuadrados, círculos o triángulos, dependiendo del género de la persona, y las líneas simbolizan las relaciones.
          .tarjeta.card-slyder__portada.color-primario.p-5
            img(src='@/assets/curso/temas/tema2/21.svg', alt='' style="width: 230px").mb-4
            .bg-white.rounded-pill.p-2
              h5.text-center.mb-0.mx-4 Trazado de la estructura familiar
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.card-slyder.color-secundario.p-5.h-100
          .bg-white.rounded-pill.p-2.mb-4
            h5.text-center.mb-0.mx-4 Registro de información familiar
          p Inclusión de otros datos de la familia como: fechas de nacimiento, fallecimiento, matrimonio, separación, divorcio, entre otros; además incorpora datos sobre cambios de relaciones, migraciones u otros que den cuenta de sucesos familiares significativos.  
          .tarjeta.card-slyder__portada.color-primario.p-5
            img(src='@/assets/curso/temas/tema2/22.svg', alt='' style="width: 230px").mb-4
            .bg-white.rounded-pill.p-2
              h5.text-center.mb-0.mx-4 Registro de información familiar
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.card-slyder.color-secundario.p-5.h-100
          .bg-white.rounded-pill.p-2.mb-4
            h5.text-center.mb-0.mx-4 Registro de las relaciones familiares
          p Parte de la información suministrada por la familia, así como de la observación del profesional. Es representado a partir de diferentes tipos de líneas para evidenciar el carácter de las relaciones entre los miembros de la familia. 
          .tarjeta.card-slyder__portada.color-primario.p-5
            img(src='@/assets/curso/temas/tema2/23.svg', alt='' style="width: 230px").mb-4
            .bg-white.rounded-pill.p-2
              h5.text-center.mb-0.mx-4 Registro de las relaciones familiares
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/24.png', alt='')
      .col-lg-8(data-aos="fade-left")
        p Esta herramienta brinda una vista sencilla de la familia sobre contenidos con carga emocional, como nacimientos, muertes o conflictos que pueden ser identificados por el profesional en una conversación. Es de gran ayuda en el trabajo con familias, pues se puede volver a eventos pasados que marcaron la trayectoria tanto familiar, como de cada integrante, así como conversar sobre aspectos familiares que permiten una mejor comprensión de sus procesos. Al profesional también le da un mejor entendimiento de la familia y de las posibilidades del acompañamiento.
        .bloque-texto-d.color-primario.p-4
              .bloque-texto-d__texto.mb-2
                i.fas.fa-quote-left
                p La lectura de esta herramienta tiene distintos niveles de interpretación. Una se focaliza en la composición familiar, mientras otras pueden centrarse en la repetición de pautas a través de las generaciones de la familia, así como en la manera como los sucesos de la vida están interconectados con los cambios en el funcionamiento familiar; también puede hacerse una mirada que evidencie las transiciones y pérdidas, su significado, y con relación a las formas de afrontamiento en la familia
                i.fas.fa-quote-right
              .bloque-texto-d__autor 
                .h6.mb-0  (Fernandez, Escalante, & Palmero, 2011, pág. 19)
    p.mb-5(data-aos='fade-right') Las principales convenciones para la realización y comprensión del genograma en cuanto a las personas que conforman la familia son: 
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 3. 
          span Convenciones de las personas de la familia
        img(src='@/assets/curso/temas/tema2/25.png', alt='Convenciones para la representación de los miembros de la familia en un genograma.')
        figcaption NOTA. Adaptado de Feixas, Muñoz y Montesano (2012).
    .mn.px-5.py-4(style="background-color: #eafff1 ").mb-5
      .row.justify-content-center.align-items-center
        .col-lg-1.col-3.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/26.svg', alt='')
        .col-lg-11
          p.mb-0 Por su parte, la siguiente figura presenta las convenciones correspondientes a los tipos de relaciones y vínculos que hay entre las personas de las familias, como se muestra a continuación: 
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 4. 
          span Convenciones de relaciones o vínculos al interior de la familia
        img(src='@/assets/curso/temas/tema2/27.png', alt='Convenciones para la representación de los vínculos al interior de la familia en un genograma.')
        figcaption NOTA. Adaptado de Feixas, Muñoz y Montesano (2012)
    p.mb-5(data-aos='fade-right') A manera de ejemplo, se realiza el genograma (figura 7) de una familia que actualmente está conformada por una pareja de dos hombres, uno de ellos -Camilo- tiene un hermano menor -Julián- y tras el fallecimiento de su madre -María-, Camilo queda como tutor legal de Julián y es llevado a vivir con su pareja.
    .row.justify-content-center
      .col-lg-10 
        .tarjeta.border-3(style="border: 2px solid #333F4F ")
          .row.justify-content-start.align-items-center
            .col-lg-4
              .p-4(style="background-color: #333f4f")
                ul.lista-ul.text-white
                  li
                    i.fas.fa-circle.fa-xs
                    | Integrante por el cual se ingresa a Mi Familia, Julián Hernández Álvarez de 14 años vinculado a colegio distrital. 

                  li
                    i.fas.fa-circle.fa-xs
                    | Madre: María Álvarez, fallecida por causa natural a los 59 años. 
                  li
                    i.fas.fa-circle.fa-xs
                    | Padre: Juan Carlos Hernández, fallecido por suicidio a los 62 años.
                  li
                    i.fas.fa-circle.fa-xs
                    | Hermano mayor: Camilo González Álvarez, de 42 años, empleado y actual tutor legal. 
                  li
                    i.fas.fa-circle.fa-xs
                    | Hermana mayor: Sandra González, de 38 años, hogar. 
                  li
                    i.fas.fa-circle.fa-xs
                    | Cuñado: Antonio Villanueva, de 43 años, trabajador independiente.
            .col-lg-7
              img(src='@/assets/curso/temas/tema2/28.png', alt='').m-auto
    .row.justify-content-center.mb-4
      .col-lg-6
        TarjetaAudio.color-acento-botones.mb-3(
          texto="Ejemplo de Genograma"
          :audio="require('@/assets/curso/temas/tema2/audio2.mp3')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false")
    p.mb-5(data-aos='fade-right') A continuación, se explica la conformación familiar:
    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ew81C_EJ1Hk?si=R2ZZ1AuXll4LEqti" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Ejemplo de un genograma
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.4 Mapa de pertenencia
    .row.justify-content-center.mb-5
      .col-lg-10
        .contenedor-img__3.p-5.mt-5
          .contenido
            .bloque-texto-d.color-primario.p-4
              .bloque-texto-d__texto.mb-2
                i.fas.fa-quote-left
                p Es una herramienta de apoyo para identificar el sistema de vinculación más significativo de cada familia o de cada persona
                i.fas.fa-quote-right
              .bloque-texto-d__autor 
                .h6.mb-0  (Guía de Orientaciones Metodologías Modalidad Mi Familia, 2023)
            
          img.position.d-xl-block.d-none(src='@/assets/curso/temas/tema2/29.svg', alt='')
    p.mb-5(data-aos='fade-right') Expresa la relación que cada grupo familiar tiene con el contexto primario, instituciones y actores sociales, la cual resulta útil en la comprensión de las dinámicas sociales. Busca recoger la suma total de relaciones humanas que poseen significado perdurable en la vida de las familias; para ello, es importante identificar los miembros de la red tanto institucional como profesional, familiar y social, de tal manera que se puedan diseñar posibles intervenciones en red. El siguiente gráfico expone los mapas de pertenencia que se desarrollan.
      br
      br
      |Para el desarrollo de la caracterización y diagnóstico de las familias, los profesionales de acompañamiento familiar cuentan con una batería de instrumentos que les permite abordar diferentes perspectivas de las familias, como lo muestra el siguiente esquema:
    .mn(style="background-color:#b6d8e1 ").p-5.mb-5
      img(src='@/assets/curso/temas/tema2/30.svg', alt='Descripción de un mapa de pertenencia actual y potencial.').d-lg-block.d-none
      img(src='@/assets/curso/temas/tema2/31.svg', alt='Descripción de un mapa de pertenencia actual y potencial.').d-block.d-lg-none
    p.mb-5(data-aos='fade-right') Tanto el mapa de pertenencia actual como potencial permiten identificar el grado de satisfacción de cada uno de los integrantes de la familia con cada una de las redes identificadas y los vínculos que allí se representan, de forma que la familia y el operador podrán identificar acciones posibles para ampliar y modificar los vínculos y para resolver las situaciones problemáticas con cada una de las redes. 
    .tarjeta.p-3.mb-5(style="background-color: #e7e7e7 ")
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/temas/tema2/16.svg").img65
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Mapa de pertenencia
              p.mb-0.text-small Para conocer orientaciones más detalladas de su aplicación e interpretación es importante consultar la publicación (PU) mapa de pertenecía actual y potencial publicado en el espacio web de familias y comunidades. 
                br
                br
                |El diligenciamiento del mapa de pertenecía actual y potencial, permitirán avanzar en la comprensión de las dinámicas familiares y complementarán la aplicación del perfil de vulnerabilidad-generatividad.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://docs.google.com/document/d/1uZnIzJU0_WorBlLCKfkwbKVmgS8uBeTVv_Y0sG647Fs/edit?usp=sharing" target="_blank")
                span.text-white.mb-0 Ver documento 
                i.fas.fa-link(style="color: white")
    Separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.5 Perfil de Vulneratividad – Generatividad
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        p El Perfil de Vulnerabilidad/Generatividad permite ubicar a la familia continuamente entre necesidades y recursos, en un momento particular o ante un evento determinado. La información se organiza frente a siete (7) parámetros propuestos para el abordaje familiar; Topológico, Filiación, Sociocultural, Socioeconómico, Histórico – Evolutivo, Jurídico y Dinámico relacional (ICBF, 2007), y puede servir de referente para el diseño de una estrategia de acción que comprenda los factores que reducen la vulnerabilidad y aumentan la generatividad.
          br
          |El Perfil de Vulnerabilidad y Generatividad - PVG posibilita ampliar la comprensión de la familia a partir de una mirada compleja a través de los 7 parámetros propuestos. Parte de la información que se decanta en este instrumento proviene de la Ficha de Caracterización Sociofamiliar que nos brinda información de los parámetros de Filiación y Vulnerabilidad social, y otra información proviene del Mapa de Pertenencia Actual, el cual ha profundizado sobre los parámetros de Red Vincular (Topológico), de filiación y brinda aproximaciones a los parámetros Sociocultural, Histórico Evolutivo y Dinámico Relacional. 
          br
          br
          |A continuación se amplía más acerca del PVG.
      .col-lg-5.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/31.png', alt='')
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema2/32.svg', alt='Texto que describa la imagen')
      .tarjeta.p-3(x="43%" y="50%" numero="a" style="background-color: #d4d4d4")
        .h5.mb-2 a.
        p Este ejercicio se desarrolla a través de una entrevista semiestructurada con base en el desarrollo de preguntas generativas y reflexivas que permiten la construcción de narrativas familiares. 
      .tarjeta.p-3(x="45%" y="35%" numero="b" style="background-color: #d4d4d4")
        .h5.mb-2 b.
        p Permite abordar los rituales cotidianos, los mitos y las ideas acerca de la vida que se expresan en la dinámica relacional y en el sentido y vivencia con el territorio, dando cuenta de las prioridades familiares y sus relaciones comunitarias, permitiendo establecer con estas los objetivos y escenarios de fortalecimiento familiar, comunitario y territorial. 
      .tarjeta.p-3(x="55%" y="48%" numero="c" style="background-color: #d4d4d4")
        .h5.mb-2 c.
        p Las conversaciones generadas con el perfil permiten construir con las familias la dirección de cambio para el fortalecimiento familiar y propicia la métrica y narrativas para evaluar los resultados del proceso de acompañamiento.
      .tarjeta.p-3(x="62%" y="50%" numero="d" style="background-color: #d4d4d4")
        .h5.mb-2 d.
        p Este instrumento ahonda en las situaciones y vivencias de la familia en lógica de su percepción y de lo que desean fortalecer o mejorar en su interior.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-0 Los siete parámetros, se relacionan de manera directa con la hipótesis que sustenta el acompañamiento familiar de la Modalidad Mi familia, “Las situaciones que relacionan a niños, adolescentes y familias con el SNBF surgen en la confluencia simultánea de circunstancias de orden vincular, social, político y económico, las cuales ubican a las familias en un continuo de vulnerabilidad y de generatividad, dependiendo de cómo las familias se apropian de los recursos disponibles” (Guía de Orientaciones Metodologías Modalidad Mi Familia, 2023) y los instrumentos descritos (Ficha de caracterización y mapa de pertenencia actual y potencial).
      .col-lg-4.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/33.png', alt='') 
    .mn.px-5.py-4(style="background-color: #eafff1 ")
      .row.justify-content-center.align-items-center
        .col-lg-1.col-3.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/34.svg', alt='')
        .col-lg-11
          p.mb-0 La familia se define circunscrita a una comunidad y a un territorio particular (urbano, rural o rural disperso) y el objetivo del acompañamiento depende de las narraciones y acuerdos realizados en conjunto con la familia y el profesional e identificados en el instrumento. 



























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
