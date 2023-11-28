export default {
  global: {
    componenteFormativo:
      'Estructuración del acompañamiento psicosocial familiar',
    descripcionCurso:
      'El éxito de un acompañamiento familiar se da principalmente por el notable ejercicio del profesional de acompañamiento familiar (PAF), quien comprende los aspectos de atención y reflexión, la correcta caracterización que realice a través de los instrumentos dispuestos para ello y el buen uso y adaptación de las cartillas metodológicas según el escenario a trabajar.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/temas/tema3/a1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/temas/tema3/a2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a3.png'),
      },
    ],
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
        titulo: 'Rol del profesional de acompañamiento familiar',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              '¿Qué aspectos son relevantes en la comprensión de las familias por parte del PAF, desde los enfoques que considera Mi Familia?',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Aspectos de reflexión y atención constante para el PAF en sus interacciones con las familias.',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Proceso de caracterización y diagnóstico del programa Mi Familia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              '¿Cuál es el sentido del proceso de caracterización y diagnóstico del programa Mi Familia?',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Ficha de caracterización sociofamiliar',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Genograma',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Mapa de pertenencia',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Perfil de Vulneratividad y Generatividad',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Cartillas metodológicas para el acompañamiento familiar',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: '¿Cómo es la estructura de las cartillas metodológicas?',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              '¿Existen escenarios para flexibilizar la propuesta metodológica que contemplan las cartillas?',
            hash: 't_3_2',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF02_33130213_DU.zip',
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
      tema:
        '1.1. ¿Qué aspectos son relevantes en la comprensión de las familias por parte del PAF, desde los enfoques que considera Mi Familia?',
      referencia:
        'ICBF. (2021). <em>Guía para la convergencia de oferta y gestión de redes.</em>',
      tipo: 'Guía',
      link:
        'https://www.icbf.gov.co/system/files/procesos/g7.mo18.pp_guia_convergencia_de_oferta_y_redes_mi_familia_v1.pdf',
    },
    {
      tema: '2.2. Ficha de caracterización sociofamiliar',
      referencia:
        'ICBF. (2020). <em>Guía para el diligenciamiento de la Ficha Socio Familiar modalidad Mi Familia.</em> ',
      tipo: 'Guía',
      link:
        'https://www.icbf.gov.co/system/files/procesos/g4.mo18.pp_guia_para_diligenciamiento_ficha_caracterizacion_socio_familiar_v2.pdf',
    },
    {
      tema: '2.3. Genograma',
      referencia:
        'ICBF. (s.f.). <em>Mi Familia. Ficha técnica Genograma.</em> ',
      tipo: 'Ficha técnica',
      link:
        'https://www.icbf.gov.co/system/files/procesos/pu4.g1.mo18.pp_ficha_tecnica_-_genograma_v1.pdf',
    },
    {
      tema: '3. Cartillas metodológicas para el acompañamiento familiar',
      referencia:
        'ICBF (2022). <em>Guía de orientaciones metodológicas para el desarrollo de la iniciativa comunitaria en el marco de los encuentros comunitarios.</em> ',
      tipo: 'Guía',
      link:
        'https://www.icbf.gov.co/system/files/procesos/g8.mo18.pp_guia_de_orientaciones_metodologicas_para_el_desarrollo_iniciativas_comunitarias_v2_1.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Autoeficacia',
      significado:
        'Es la percepción que una persona tiene de su propia capacidad para ejecutar determinadas tareas con un buen rendimiento. La autoeficacia no es una característica global en una persona, sino que responde a aspectos y tareas concretas en momentos determinados; por ejemplo, alguien puede tener alto sentido de autoeficacia en el trabajo o en su vida social, y tener un bajo nivel de autoeficacia como padre o madre.',
    },
    {
      termino: 'Cartilla metodológica',
      significado:
        'Instrumentos de apoyo para orientar el desarrollo del Plan Familiar con cada familia beneficiaria.',
    },
    {
      termino: 'FCSF',
      significado:
        'Ficha de Caracterización Sociofamiliar. Permite el registro de todas las personas que pertenecen al grupo familiar beneficiario de Mi Familia',
    },
    {
      termino: 'Genograma',
      significado:
        'Instrumento gráfico que permite conocer, recoger, registrar y exponer algunos datos de la familia, información de sus integrantes y las relaciones a lo largo de diferentes generaciones (Fernandez, Escalante, & Palmero, 2011).',
    },
    {
      termino: 'Mi Familia',
      significado:
        'Fortalecer las capacidades individuales y colectivas con familias en situación de vulnerabilidad, para promover el desarrollo familiar y el fortalecimiento del tejido social para la protección integral de los niños, niñas y adolescentes, y contribuir a la prevención de violencias, negligencias y/o abusos en su contra.',
    },
    {
      termino: 'PAF',
      significado: 'Abreviatura de Profesional de Acompañamiento Familiar',
    },
    {
      termino: 'PVG',
      significado:
        'Perfil de Vulnerabilidad/Generatividad.  Posibilita ampliar la comprensión de la familia a partir de una mirada compleja a través de 7 parámetros: Topológico, Filiación, Sociocultural, Socioeconómico, Histórico – Evolutivo, Jurídico y Dinámico relacional. Sirve de referente para el diseño de una estrategia de acción que comprenda los factores que reducen la vulnerabilidad y aumentan la generatividad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ardila, G. (2006). <em>Cultura y desarrollo territorial. Diplomado Gestión de Procesos Culturales y Construcción de lo Público (pág. 25).</em> Bogotá: Instituto Distrital de Cultura y Turismo, Sistema Distrital de Cultura.',
      link: '',
    },
    {
      referencia:
        'Ceulemans & Kuppens. (2018). <em>Parenting Styles: A closer look at a well-known concept.</em>',
      link: '',
    },
    {
      referencia:
        'Cibanal, L. (15 de febrero de 2020). <em>Genograma Familiar</em>. Apuntes: Introducción a la sistémica y terapia familiar. ',
      link: 'http://www.aniorte-nic.net/apunt_terap_famil_8.htm',
    },
    {
      referencia:
        'Clemente, M. A. (2003). Redes sociales de apoyo en relación al proceso de envejecimiento humano. Revisión bibliográfica. (C. I. Afines, Ed.). Interdisciplinaria. Revista de psicología y ciencias afines, 20(1), 31-60.',
      link: '',
    },
    {
      referencia:
        'Compañ, V., Feixas, G., Muñoz, D. & Montesano, A. (2012). <em> El genograma en terapia familiar sistémica.</em> Universidad de Barcelona, Departament de Personalitat, Avaluació i Tractament Psicològics. Barcelona: Facultad de Psicología.',
      link: '',
    },
    {
      referencia:
        'ForstDennis, T. (2006). <em>Emotional self-regulation in preschoolers: The interplay of child approach reactivity, parenting, and control capacities.</em>',
      link: '',
    },
    {
      referencia:
        'Farkas-Klein, C. (2008). Escala de evaluación parental (EEP): desarrollo, propiedades psicométricas y aplicaciones. <em>UNIVERSITAS PSYCHOLOGICA,</em> 457-467.',
      link: '',
    },
    {
      referencia:
        'Forst, J., Worthman, S. & Reifel, S. (2008). Play and child development.',
      link: '',
    },
    {
      referencia:
        'Gómez Pérez, O., & Calleja Bello, N. (2016). Regulación emocional: definición, red nomológica y medición. Revista Mexicana de Investigación en Psicología, 96-117.',
      link: '',
    },
    {
      referencia:
        'Gómez, E. A. & Klotiarenco, M. A. (2010). Resiliencia Familiar: Un enfoque de investigación e intervención con familias multiproblemáticas. Revista de Psicología de la Universidad de Chile, 19(2), 103-132. DOI: 10.5354/0719-0581.2010.17112',
      link: '',
    },
    {
      referencia:
        'Hernández-Guzmán, González, Bermúdez-Ornelas, & Alcázar-Olán. (2012). Parental practices scale for children.',
      link: '',
    },
    {
      referencia:
        'ICBF. (2009). Lineamientos Técnicos para la Inclusión y Atención de Familias. Bogotá, D.C.',
      link: '',
    },
    {
      referencia: 'ICBF. (2020). Lineamiento Técnico Modalidad Mi Familia. ',
      link:
        'https://www.icbf.gov.co/system/files/procesos/lm10.pp_lineamiento_tecnico_administrativo_modalidad_mi_familia_v2.pdf',
    },
    {
      referencia: 'ICBF. (2020). Manual Operativo Modalidad Mi Familia. ',
      link:
        'https://www.icbf.gov.co/system/files/procesos/mo18.pp_manual_operativo_modalidad_mi_familia_v4.pdf',
    },
    {
      referencia:
        'ICBF. (2021). Lineamiento técnico modalidad Mi Familia. Bogotá, D.C.: ICBF.',
      link: '',
    },
    {
      referencia:
        'ICBF, MEN. (2009). Promoción de la resiliencia familiar. Tejiendo vínculos. Manual de agentes educativos. Bogotá, D.C.: Organización Internacional para las Migraciones (OIM).',
      link: '',
    },
    {
      referencia:
        'Oltra‐Benavent, P., Cano‐Climent, A., Oliver‐Roig, A., Cabrero‐García, J. & Richart‐Martínez, M. (2020). Spanish version of the Parenting Sense of Competence scale: Evidence of reliability and validity. Child & Family Social Work, 373-383.',
      link: '',
    },
    {
      referencia:
        'Orpinas, P., Rico, A. & Martínez-Cox, L. (2012). Latino Families and Youth: A Compendium of Assessment Tools. University of Georgia.',
      link: '',
    },
    {
      referencia:
        'Pérez, T. (2017). El enfoque apreciativo, valiosa herramienta para construir cultura de paz. Revista de la Universidad de La Salle (72), 137-158. ',
      link: '',
    },
    {
      referencia:
        'Pérez-Abarca, R., Lucchini-Raies, C. & Márquez-Doren, F. (2020). Paternidades, vinculación afectiva y promoción de la salud mental infantil: Percepciones de madres y padres de lactantes mayores de un año. Revista Chilena de Enfermería - RchE. ',
      link: '',
    },
    {
      referencia:
        'Salovey, P. & otros. (1985). Emotional Attention, Clarity., and Repair: Exploring Emotional Intelligence Using the Trait Meta-Mood Scale. En J. Pannabaker, Emotion, Disclosure & Health.',
      link: '',
    },
    {
      referencia:
        'Taylor, Z. E., Larsen-Rife, D., Conger, R. D. & Widaman, K. F. (2012). Familism, interparental conflict, and parenting in Mexican-origin families: A cultural–contextual framework. Journal of Marriage and Family, 312-327.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sonia Milena Moreno Paez',
          cargo: 'Experta',
          centro: 'ICBF',
        },
        {
          nombre: 'Mayra Alexandra Pacheco Montealegre',
          cargo: 'Experta',
          centro: 'ICBF',
        },
        {
          nombre: 'Diego Fernando Ramírez Bermúdez',
          cargo: 'Experto',
          centro: 'ICBF',
        },
        {
          nombre: 'Miroslava González Hernández',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andres Bolaño',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carmen Alicia Martínez Torres ',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'María Carolina Tamayo López ',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andres Bolaño',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
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
