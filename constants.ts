import { PageContent, PageType } from './types';

export const BOOK_PAGES: PageContent[] = [
  {
    id: 1,
    type: PageType.COVER,
    title: "La Metamorfosis de Adriana",
    subtitle: "Mila Ciudad",
    content: "Una historia escrita desde el epicentro de un terremoto personal.",
  },
  {
    id: 2,
    type: PageType.INTRO,
    title: "Nota de Bienvenida",
    content: [
      "Hola, soy Mila Ciudad.",
      "Gracias por descargar este adelanto exclusivo. Lo que estás a punto de leer es el comienzo de \"La Metamorfosis de Adriana\", una historia escrita desde el epicentro de un terremoto personal. Si alguna vez has sentido que, a pesar de creer tenerlo todo \"bajo control\", algo dentro de ti gritaba por salir... este libro es para ti."
    ],
    extraData: {
      dedication: {
        title: "A la memoria de mi padre",
        text: [
          "Jamás imaginé que el dolor, la soledad y el frío pudieran calar tan hondo en mi ser. Tu partida ha dejado un silencio inmenso, pero también un eco imborrable de amor y gratitud.",
          "Siempre me ha fascinado observar las manos de las personas; creo que narran la historia de quienes somos. Las tuyas, finas y suaves, apenas cambiaron con el tiempo. Eran las manos de un hombre bueno, siempre dispuestas a ayudar, a entregarse sin medida por su familia y amigos. Al verlas en el hospital, marcadas por las vías y los hematomas, pensaba que ni la enfermedad ni los años habían logrado arrebatarles su capacidad de amar, su manera de decirnos que seguías aquí. El Alzheimer borró tus recuerdos, te silenció la voz y nubló tus pensamientos, pero jamás pudo tocar tu esencia. Tu bondad, tu sentido del humor, esa mirada guasona y la sonrisa entrañable con la que decidiste plantarle cara a la vida, permanecieron intactas.",
          "Tu existencia no fue un camino fácil. Una tuberculosis temprana casi te arranca de este mundo, pero el destino te reservaba algo más grande: conocer a mamá, amar a tus cuatro hijos sin un solo reproche y mantenernos siempre unidos. Gracias a vuestro sacrificio y dedicación, somos quienes somos. Jamás conocimos la ausencia ni el desamparo; a donde quiera que miráramos, vuestros brazos se extendían para protegernos. Hemos sido unos privilegiados al tener vuestro ejemplo de valentía y perseverancia como guía.",
          "Tu personalidad tampoco pasó desapercibida. No conozco a un solo familiar, amigo o vecino que no te quisiera. Siempre tenías una sonrisa para regalar y una broma o una carantoña para cualquier niño, especialmente para tus nietos, a quienes adorabas.",
          "Tu respiración, marcada por la ausencia de un pulmón, es el sonido que ha acompasado mi vida. Hoy, ese eco resuena en mi mente como una prueba de tu presencia constante, y doy gracias por ello. Es como si siguieras a mi lado, papá.",
          "Has sido un faro, un ejemplo de vida. Un hombre de paciencia infinita, fiel, honesto y trabajador. Un ser valiente, íntegro y justo. Agradecido, campechano, noble, educado, respetuoso, discreto y el mejor de los amigos. Pero, por encima de todo, fuiste un hombre feliz.",
          "Los recuerdos, anestesiados para no sufrir, se agolpan ahora en mi memoria. Te veo trasteando en la cocina, arreglando relojes con esa generosidad tuya que te impedía cobrar lo que tu trabajo realmente valía. Te recuerdo haciendo \"chapuzas\" en casa o ayudándonos con las manualidades del colegio. Siempre pendiente de que la despensa estuviera llena, con aquel papelito en el bolsillo de la camisa junto a las quinielas. Yéndonos a buscar a la guardería, cantando camino al campo o en aquellos largos viajes en coche. Apasionado del fútbol y de tu Real Madrid, y fiel a la cita de las doce de la noche para escuchar en la radio tu programa favorito. Nunca sentí tu ausencia. Siempre estabas ahí, en un segundo plano, pero si te buscaba, encontraba tu inconfundible pelo ondulado y blanco, y tu mirada cómplice, siempre orgullosa de nuestros logros.",
          "El último regalo que me hiciste, al acunar mi rostro entre tus manos, lo atesoraré toda la vida. Tu cuerpo te abandonó hace tiempo, pero tu alma se mantuvo intacta y vivirá por siempre en nuestros corazones. Poseías el don de la bondad, la cualidad más elevada de un ser humano, y así es como todos te recordarán: como una buena persona.",
          "Te fuiste en paz, sin un sufrimiento prolongado, rodeado del amor de toda tu familia. Pudimos besarte, acariciar tu piel, sentir la barba incipiente de ese último día, atusar tu precioso pelo blanco, apretar tus manos queridas y llorar sobre tu frente. Te aferraste a la vida, pero Dios quiso ahorrarte el último y cruel escalón de esta enfermedad. Tu corazón dejó de latir en la mañana del 11 de febrero para comenzar a latir dentro de cada uno de nosotros. Ahora sobrellevamos tu ausencia con la misma entereza con la que tú y mamá habéis afrontado la vida.",
          "Descansa en paz, papá. El ángel que nos cuidó en la Tierra, ahora nos cuida desde el cielo."
        ]
      }
    }
  },
  {
    id: 3,
    type: PageType.INDEX,
    title: "Índice",
    content: "",
    extraData: {
      items: [
        { label: "PRÓLOGO: La Promesa de las Alas", pageId: 4 },
        { label: "ACTO I: LA DEMOLICIÓN", isSection: true },
        { label: "Capítulo 1: Reflejos del presente", pageId: 5 },
        { label: "Capítulo 2: El temblor antes del terremoto", locked: true },
        { label: "Capítulo 3: La guerra en secreto", locked: true },
        { label: "Capítulo 4: El legado de un sueño", locked: true },
        { label: "Capítulo 5: Cada metro cuadrado", locked: true },
        { label: "Capítulo 6: El alma de la amistad", locked: true },
        { label: "Capítulo 7: París como testigo", locked: true },
        { label: "ACTO II: LA RECONSTRUCCIÓN (Disponible en el libro completo)", isSection: true, locked: true },
        { label: "ACTO III: EL RENACIMIENTO (Disponible en el libro completo)", isSection: true, locked: true },
      ]
    }
  },
  {
    id: 4,
    type: PageType.CHAPTER,
    title: "PRÓLOGO",
    subtitle: "La Promesa de las Alas",
    content: [
      "Dicen que antes de alzar el vuelo, la mariposa debe aceptar su propia desintegración. Una verdad tan brutal como callada, oculta tras el fulgor de unas alas que prometen libertad.",
      "Nos fascina ese estallido de color contra el lienzo azul del cielo, el símbolo fácil del renacimiento. Pero rara vez miramos la seda del capullo, esa tumba voluntaria donde ocurre la verdadera transformación. Dentro de ese santuario oscuro, la oruga no acomete un simple ajuste. Se disuelve. Se abandona por completo a una licuefacción de su esencia, hasta convertirse en una sopa primordial de posibilidades. Es un caos absoluto, un acto de fe biológico que roza la locura.",
      "Preferimos la fábula cómoda del cambio y no la crónica visceral de la demolición. Ignoramos el desgarro, la violencia interna que exige la aniquilación de todo lo que fuimos para que algo nuevo pueda nacer.",
      "Esta es la historia de una mujer en su capullo.",
      "Una mujer que edificó su vida como una fortaleza inexpugnable, ladrillo a ladrillo, con disciplina y voluntad de hierro. Hasta que, en el cenit de su poder, su propio cuerpo la traicionó y empezó a demolerla desde dentro. Es la crónica de un encierro no construido con muros de piedra, sino con una química en rebelión. Un relato de soledad y desconcierto donde la identidad, esa imagen perfeccionada durante años, se disuelve como la oruga en su crisálida. Donde el control —esa ilusión tan vital— se escapa entre los dedos como arena fina.",
      "Aquí late la ira justa de quien pierde el único terreno que creía invulnerable. Una rabia primitiva contra la invisibilidad, contra los susurros condescendientes de quienes veneran la juventud. Es la guerra secreta librada en las noches sin luna, en el sudor no del esfuerzo, sino de la humillación.",
      "Pero esta es también una historia de redención.",
      "Toda metamorfosis lleva un propósito. En medio del caos primordial, surge una verdad distinta: la fuerza no nace de la resistencia feroz, sino de una rendición sabia. Para forjar las alas futuras, primero hay que soltar la rigidez que impide la fluidez de la vida. Para emerger renovada, hay que morir a la imagen que hemos cuidado obsesivamente. Hay que permitir que se desmoronen los imperios de perfección que hemos construido ladrillo a ladrillo.",
      "Hay que quedarse sola en la oscuridad del capullo y confiar en que, si se honra el proceso, si se abraza el dolor, si se busca a otras mujeres que luchan la misma batalla silenciosa, las alas que emergen serán incalculablemente más hermosas y potentes que cualquier cosa que el ego pudiera haber imaginado.",
      "Solo después de esa rendición absoluta, cuando el ego ya no tenga nada que demostrar, una puede empezar a empujar contra las paredes de su encierro. Para emerger. Nunca como era antes, sino como siempre debió ser: más sabia en sus cicatrices, más compasiva en su fuerza, más feroz en su calma.",
      "Y, al fin, libre para volar.",
      "Esta es su historia. La historia de Adriana Alcázar. Una arquitecta que tuvo que destruirse a sí misma para aprender a construir. Una mujer que descubrió que la verdadera metamorfosis no es un destino, sino un estado del ser. Una invitación a que cada lector reconozca en estas páginas el espejo de su propia transformación silenciosa.",
      "Porque si una mujer puede volar después de la tormenta, todas podemos."
    ]
  },
  {
    id: 5,
    type: PageType.CHAPTER,
    title: "CAPÍTULO 1",
    subtitle: "Reflejos del Presente",
    content: [
      "El calor llegó sin avisar. No el calor pegajoso de septiembre que ascendía desde el asfalto de la Castellana y se estrellaba contra los ventanales del piso 42, sino otro. Un calor insurgente, nacido en la boca del estómago, que trepaba por su tráquea como una bestia desbocada. Adriana sintió cómo la sangre se agolpaba en su cuello, tiñendo la piel de un rojo humillante que chocaba contra la seda marfil de su blusa. Una prenda carísima, sí, pero qué importaba el precio de la armadura cuando la batalla se libraba por dentro. Su perfume, una discreta estela de sándalo y pimienta rosa que era parte de su armadura profesional, ahora se mezclaba con el olor metálico del pánico. Cinco minutos. Ese fue el tiempo que tardó el infierno en transformarse en un frío helador que la hizo desear en secreto apagar el climatizador.",
      "Mientras luchaba contra su termostato interno, frente a ella, los hermanos Velasco, herederos de un imperio de azulejos y de una arrogancia de nuevo rico que el dinero no conseguía disimular, la viva imagen de la riqueza sin refinar, de la opulencia sin gusto. Examinaban los bocetos sobre la imponente mesa de roble, completamente ajenos a su batalla interior. Eran el tipo de hombres que ella había aprendido a despreciar en silencio, esos a los que el mundo les venía de serie.",
      "El menor, Andrés, un hombre de maneras nerviosas, tamborileaba con un bolígrafo sobre un render que había costado una fortuna en horas de trabajo y talento.",
      "—El concepto es... audaz, Adriana —dijo el mayor, Ricardo, mientras un destello de su ostentoso reloj de oro cortaba el aire al gesticular. El brillo de la esfera, recargada y excesiva, le pareció un insulto a la elegancia que ella defendía. La palabra 'audaz' en sus labios sonaba a sinónimo de 'inaceptable'. —Buscamos algo más... atemporal.",
      "Atemporal. La palabra del cobarde. La excusa de quienes temen al presente, a la disrupción. Adriana sintió cómo una gota de sudor frío y traicionero serpenteaba desde la raíz del pelo hasta su sien, un hilo gélido sobre su piel nuevamente ardiendo. Una sola gota. Una traición líquida que la delataba. Sonrió, una maniobra muscular que había perfeccionado durante treinta años de reuniones tensas, de disimular cada emoción.",
      "— Ricardo, lo atemporal es un mito. El Partenón fue escandalosamente moderno en su día, una declaración audaz para su época. Lo que propongo no es una moda pasajera, es algo más profundo. Es la esencia de vuestra marca destilada en su expresión más pura de forma y función.",
      "Adriana escuchó hablar a una mujer. La voz era tranquila, persuasiva. Usaba palabras como \"esencia\" y \"función\". Esa mujer eres tú, le dijo una parte de su cerebro. Sigue hablando.",
      "Pero su voz real sonaba lejana, como un eco ahogado por el zumbido metálico que se había instalado en sus oídos, creciendo en intensidad. El calor volvió de nuevo como una fragua, un incendio descontrolado que la devoraba desde dentro. La blusa de seda marfil, que antes caía con elegancia sobre su piel, ahora se le pegaba a la espalda con una intimidad desagradable, asfixiante. Abanicarse era impensable, un acto de rendición que no podía permitirse. Mostrar debilidad era mostrar la herida mortal.",
      "En su mente, una letanía frenética y desesperada: No otra vez no, por favor. Respira. Piensa en el hielo. En la tundra. En la maldita cara de Ricardo Velasco, esa misma cara helada, para congelar este infierno.",
      "— No sé, Adriana — intervino Andrés, dejando por fin de torturar el render con el golpeteo de su bolígrafo, la voz teñida de una falsa duda. — Mi padre tenía un instinto especial para... la solidez. Para las cosas que perduran. No sé si él entendería esta... fragilidad.",
      "El padre. El fantasma que aún presidía todas las juntas, una sombra omnipresente en cada decisión. Adriana se aferró a la mesa, sus dedos anclados a la madera fría, notando un dolor sordo y desconocido en los nudillos, como si sus propias articulaciones también se hubieran vuelto quebradizas. A su derecha, en la pared gris perla, uno de sus propios cuadros — un torbellino caótico de negro y oro, reflejo de su propia complejidad — parecía burlarse de ella, de su desequilibrio. Últimamente, la paciencia no era su punto fuerte; se había vuelto casi un lujo inalcanzable.",
      "— Vuestro padre construyó una empresa sólida para el siglo veinte, cimentada en la tradición y la previsibilidad. Vosotros tenéis el deber, y la oportunidad, de llevarla al veintiuno, de adaptarla a la era digital y a la fluidez del mercado actual. La fragmentación no es un defecto, es el lenguaje de nuestro tiempo, el reflejo de la diversidad y la complejidad que nos rodea. Refleja...",
      "La palabra, crucial, se le murió en la boca. ¿Qué reflejaba? Su memoria, antes una fortaleza, ahora era un colador agujereado por el que se escapaban los sustantivos más básicos, las ideas clave. Miró a los Velasco, sus rostros expectantes y ligeramente indulgentes, una mezcla irritante de ignorancia y poder. En sus ojos creyó ver el juicio, el de dos hombres que habían heredado todo y juzgaban lo que no entendían. Sintió el pánico, frío y afilado como una cuchilla, justo debajo del incendio que la consumía. Era la segunda marea de su infierno personal: primero el fuego del sofoco, luego el hielo paralizante del olvido y la vergüenza.",
      "Con una calma que le costó hasta la última gota de voluntad y que era, en realidad, una fachada desesperada, se levantó.",
      "— Disculpadme un segundo —dijo, su voz controlada, casi mecánica. — Creo que una infusión o un café nos vendrá bien para ver esto con más claridad y despejar la mente.",
      "No esperó respuesta, no podía permitírselo. Caminó hacia la esquina del despacho donde la cafetera italiana, una obra de arte cromado que solía admirar, esperaba en silencio, ajena a su tormenta. Sus tacones grises no hicieron ruido sobre la gruesa alfombra. Cada paso, firme y medido, era un pequeño triunfo sobre el vértigo que amenazaba con derribarla.",
      "Mientras sus manos, con un ligero temblor casi imperceptible que la enfureció, preparaban el café con una precisión automática, su mirada se perdió por la ventana. Madrid bullía ahí abajo, una ciudad vibrante e indiferente, completamente ajena a su combustión interna.",
      "Cincuenta años. Medio siglo para llegar a la cima y descubrir que el precipicio estaba dentro.",
      "Volvió a la mesa. El temblor de sus manos era casi imperceptible. Colocó las tazas de porcelana con un cuidado meticuloso.",
      "— Ahora —dijo, y su propia voz le sonó extraña, lejana—, volvamos a los planos. Porque si no lo veis vosotros, vuestra competencia lo hará. Y lo hará pronto.",
      "Era una amenaza. Y era, también, lo único que le quedaba: su trabajo. La evidencia de que, a pesar de las grietas, la estructura aún no se había derrumbado.",
      "Todavía."
    ]
  },
  {
    id: 6,
    type: PageType.CTA,
    title: "¿Qué pasará cuando la estructura de Adriana se derrumbe?",
    content: [
      "Acabas de leer el inicio de la demolición. Pero como bien sabes, después de caer, solo queda una opción: Renacer.",
      "En \"La Metamorfosis de Adriana\", acompañarás a una mujer que, al igual que muchas de nosotras, descubre que la crisis no es el final, sino el comienzo de su verdadera libertad.",
      "No te quedes con la duda. Descubre cómo Adriana despliega sus alas.",
      "¿Todavía no está disponible? El libro se encuentra en fase final de edición. Pronto estará disponible para todo el mundo.",
      "Si quieres ser parte del grupo selecto que lea la historia completa antes que nadie, únete a la lista de espera."
    ],
    extraData: {
      author: "Mila Ciudad",
      authorBio: "Mila Ciudad escribe sobre las batallas silenciosas y las victorias ruidosas de las mujeres. Enfermera Especialista en Familiar y Comunitaria. Experta Universitaria en Cuidados Pediátricos. Autora del libro \"Rescatando Padres\" y Coach Especializada en Menopausia.",
      authorSite: "www.milaciudad.com",
      authorSiteUrl: "https://milaciudad.com/",
      buttonText: "Avísame cuando salga"
    }
  }
];
