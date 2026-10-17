export const WHATSAPP_URL =
  'https://wa.me/526311322616?text=Hola%2C%20quiero%20cotizar%20un%20trabajo%20en%20Taller%20de%20Carrocer%C3%ADa%20y%20Pintura.'
export const WHATSAPP_DISPLAY = '631 132 2616'
export const PHONE_URL = 'tel:+526311322616'
export const PHONE_DISPLAY = '631 132 2616'
export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Jose%20Zazueta%2016%2C%20Col.%20Los%20Encinos%2C%20Nogales%2C%20Sonora%2C%20M%C3%A9xico%2084064'
export const MAPS_EMBED_URL =
  'https://www.google.com/maps?q=Jose%20Zazueta%2016%2C%20Col.%20Los%20Encinos%2C%20Nogales%2C%20Sonora%2C%20M%C3%A9xico%2084064&output=embed'

export const BUSINESS = {
  name: 'Taller de Carrocería y Pintura',
  shortName: 'Carrocería y pintura',
  headline: 'Reparación, pintura y detallado automotriz en Nogales, Sonora',
  tagline: 'Restauramos la apariencia de tu vehículo con calidad profesional y atención personalizada.',
}

export const ADDRESS = {
  street: 'José Zazueta #16, Col. Los Encinos',
  city: 'Nogales, Sonora, México 84064',
  hours: 'Lunes a sábado, de 8:00 AM a 6:00 PM',
  calle: 'José Zazueta #16, Col. Los Encinos',
  ciudad: 'Nogales, Sonora, México 84064',
  horario: 'Lunes a sábado, de 8:00 AM a 6:00 PM',
}

export const SOCIAL = {
  instagram: 'https://www.instagram.com/carroceria_pintura_genecis',
  facebook: 'https://www.facebook.com/AutoDetalladoGenesis',
  x: 'https://x.com/Carroceria_Nog',
}

export const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio', etiqueta: 'Inicio' },
  { href: '#ubicacion', label: 'Ubicación', etiqueta: 'Ubicación' },
  { href: '#servicios', label: 'Servicios', etiqueta: 'Servicios' },
  { href: '#trabajos', label: 'Trabajos', etiqueta: 'Trabajos' },
  { href: '#contacto', label: 'Contacto', etiqueta: 'Contacto' },
]

export type Photo = { src: string; alt: string }
export type Foto = Photo

export type Service = {
  title: string
  título?: string
  description: string
  descripción?: string
  photos: Photo[]
  fotos?: Photo[]
}
export type Servicio = Service

export const SERVICES: Service[] = [
  {
    title: 'Carrocería',
    título: 'Carrocería',
    description:
      'Reparación de golpes, daños y detalles de carrocería para recuperar la apariencia de tu vehículo.',
    descripción:
      'Reparación de golpes, daños y detalles de carrocería para recuperar la apariencia de tu vehículo.',
    photos: [
      { src: '/images/camaro-gris-1.jpg', alt: 'Camaro gris con daño en la defensa, antes de la reparación' },
      { src: '/images/camaro-gris-2.jpg', alt: 'Defensa del Camaro gris en preparación y enmascarada' },
      { src: '/images/camaro-gris-3.jpg', alt: 'Camaro gris con el frente enmascarado durante la reparación' },
      { src: '/images/camaro-gris-4.jpg', alt: 'Camaro gris terminado después de la reparación de carrocería' },
    ],
    get fotos() {
      return this.photos
    },
  },
  {
    title: 'Pintura automotriz',
    título: 'Pintura automotriz',
    description:
      'Trabajos de pintura e igualación de color para reparar zonas dañadas y mejorar el acabado de tu vehículo.',
    descripción:
      'Trabajos de pintura e igualación de color para reparar zonas dañadas y mejorar el acabado de tu vehículo.',
    photos: [
      { src: '/images/camaro-blanco-1.jpg', alt: 'Camaro blanco en preparación de pintura, con el toldo enmascarado' },
      { src: '/images/camaro-blanco-2.jpg', alt: 'Defensa del Camaro blanco durante el trabajo de pintura' },
      { src: '/images/camaro-blanco-3.jpg', alt: 'Camaro blanco terminado, vista de frente' },
      { src: '/images/camaro-blanco-4.jpg', alt: 'Camaro blanco terminado, vista de atrás' },
    ],
    get fotos() {
      return this.photos
    },
  },
  {
    title: 'Pulido de carros',
    título: 'Pulido de carros',
    description:
      'Pulido y corrección de pintura para recuperar brillo y mejorar la apariencia exterior de tu vehículo.',
    descripción:
      'Pulido y corrección de pintura para recuperar brillo y mejorar la apariencia exterior de tu vehículo.',
    photos: [
      { src: '/images/pulido-hellcat.jpg', alt: 'Dodge Challenger negro en pulido, dentro del taller' },
      { src: '/images/pulido-lobo.jpg', alt: 'Ford Lobo negro en pulido, con la pulidora al lado' },
      { src: '/images/pulido-bmw.jpg', alt: 'BMW negro en pulido, con la pulidora y el equipo en el piso' },
      { src: '/images/work-pulido.jpg', alt: 'Técnico puliendo el cofre de una Explorer negra' },
    ],
    get fotos() {
      return this.photos
    },
  },
  {
    title: 'Cerámica',
    título: 'Cerámica',
    description: 'Recubrimiento cerámico para proteger la pintura y conservar el brillo.',
    descripción: 'Recubrimiento cerámico para proteger la pintura y conservar el brillo.',
    photos: [
      { src: '/images/ceramica-sierra.jpg', alt: 'GMC Sierra negra con acabado de espejo frente al taller' },
      { src: '/images/work-malibu.jpg', alt: 'Chevrolet Malibu azul oscuro con acabado de espejo' },
    ],
    get fotos() {
      return this.photos
    },
  },
  {
    title: 'Restauración de faros',
    título: 'Restauración de faros',
    description: 'Restauración de faros para mejorar su apariencia y recuperar su acabado.',
    descripción: 'Restauración de faros para mejorar su apariencia y recuperar su acabado.',
    photos: [{ src: '/images/work-tahoe.jpg', alt: 'Chevrolet Tahoe negra con faros encendidos' }],
    get fotos() {
      return this.photos
    },
  },
  {
    title: 'Detallado automotriz',
    título: 'Detallado automotriz',
    description: 'Limpieza y cuidado para dejar tu vehículo con una mejor presentación.',
    descripción: 'Limpieza y cuidado para dejar tu vehículo con una mejor presentación.',
    photos: [
      { src: '/images/interior-honda.jpg', alt: 'Interior de un Honda con la alfombra recién colocada' },
      { src: '/images/interior-honda-vidrio.jpg', alt: 'Interior de un Honda durante la limpieza de la alfombra' },
      { src: '/images/interior-toyota-piso.jpg', alt: 'Piso de una Toyota con la alfombra retirada para el trabajo interior' },
      { src: '/images/interior-toyota-alfombra.jpg', alt: 'Interior de una Toyota con la alfombra en instalación' },
    ],
    get fotos() {
      return this.photos
    },
  },
]
export const SERVICIOS = SERVICES

export const FUSION_STEPS: (Photo & { label: string; etiqueta: string })[] = [
  { label: 'Antes', etiqueta: 'Antes', src: '/images/work-fusion-antes.jpg', alt: 'Ford Fusion con golpe en la defensa, antes de la reparación' },
  { label: 'Proceso', etiqueta: 'Proceso', src: '/images/work-fusion-proceso.jpg', alt: 'Ford Fusion azul con la defensa enmascarada durante la reparación' },
  { label: 'Resultado', etiqueta: 'Resultado', src: '/images/work-fusion.jpg', alt: 'Ford Fusion azul con el cofre terminado' },
]

export const VIDEOS = [
  { src: '/media/bronco-pulido.mp4', poster: '/images/poster-bronco.jpg', label: 'Bronco en pulido', etiqueta: 'Bronco en pulido' },
  { src: '/media/bronco-atras.mp4', poster: '/images/poster-bronco-atras.jpg', label: 'Bronco listo', etiqueta: 'Bronco listo' },
  { src: '/media/ram.mp4', poster: '/images/poster-ram.jpg', label: 'Ram en la calle', etiqueta: 'Ram en la calle' },
  { src: '/media/tesla-rojo.mp4', poster: '/images/work-tesla.jpg', label: 'Tesla rojo', etiqueta: 'Tesla rojo' },
]

export const GALLERY: (Photo & { label: string; etiqueta: string })[] = [
  { label: 'Kia · golpe', etiqueta: 'Kia · golpe', src: '/images/work-kia-golpe.jpg', alt: 'Kia Sorento blanca con golpe en la defensa, lista para carrocería' },
  { label: 'Kia en el taller', etiqueta: 'Kia en el taller', src: '/images/work-kia.jpg', alt: 'Kia Sorento blanca bajo la lona roja del taller' },
  { label: 'Accord gris', etiqueta: 'Accord gris', src: '/images/work-accord-llegada.jpg', alt: 'Honda Accord gris estacionado frente a la lona de Detallado de Carros Génesis' },
  { label: 'Desde la calle', etiqueta: 'Desde la calle', src: '/images/work-calle.jpg', alt: 'Fachada del taller desde la calle, con las lonas rojas de Génesis' },
  { label: 'GMC Sierra', etiqueta: 'GMC Sierra', src: '/images/work-gmc.jpg', alt: 'GMC Sierra negra pulida frente a la lona de Detallado de Carros Génesis' },
  { label: 'Camaro blanco', etiqueta: 'Camaro blanco', src: '/images/work-camaro-blanco.jpg', alt: 'Chevrolet Camaro blanco con pintura recién terminada' },
  { label: 'Colorado', etiqueta: 'Colorado', src: '/images/work-colorado.jpg', alt: 'Chevrolet Colorado amarilla terminada en Nogales' },
  { label: 'Malibu', etiqueta: 'Malibu', src: '/images/work-malibu.jpg', alt: 'Chevrolet Malibu azul oscuro con acabado de espejo' },
  { label: 'Tesla', etiqueta: 'Tesla', src: '/images/work-tesla.jpg', alt: 'Tesla rojo con el cofre reflejando el cielo después del detallado' },
  { label: 'Yukón', etiqueta: 'Yukón', src: '/images/work-yukon.jpg', alt: 'GMC Yukon blanca estacionada en la entrada del taller' },
  { label: 'Tahoe', etiqueta: 'Tahoe', src: '/images/work-tahoe.jpg', alt: 'Chevrolet Tahoe negra con faros encendidos frente a la lona del taller' },
  { label: 'BYD', etiqueta: 'BYD', src: '/images/work-byd.jpg', alt: 'SUV BYD gris perla detallada frente a la lona de Génesis' },
  { label: 'Camaro gris', etiqueta: 'Camaro gris', src: '/images/work-camaro-gris.jpg', alt: 'Chevrolet Camaro gris oscuro estacionado en la calle' },
  { label: 'Silverado', etiqueta: 'Silverado', src: '/images/work-silverado.jpg', alt: 'Chevrolet Silverado roja en la calle del taller' },
  { label: 'Accord', etiqueta: 'Accord', src: '/images/work-honda.jpg', alt: 'Honda Accord negro con el cofre de espejo junto a la lona del taller' },
  { label: 'En pulido', etiqueta: 'En pulido', src: '/images/work-pulido.jpg', alt: 'Técnico puliendo el cofre de una Explorer negra' },
  { label: 'En pintura', etiqueta: 'En pintura', src: '/images/work-pintura.jpg', alt: 'Sedán rojo en primarios, con el cofre abierto y las luces enmascaradas' },
  { label: 'Carrocería', etiqueta: 'Carrocería', src: '/images/work-defensa.jpg', alt: 'Defensa en primer y enmascarada, lista para pintura' },
  { label: 'Pickup', etiqueta: 'Pickup', src: '/images/work-pickup-proceso.jpg', alt: 'Pickup amarilla con el cofre enmascarado durante la reparación' },
  { label: 'La entrada', etiqueta: 'La entrada', src: '/images/work-fachada.jpg', alt: 'Entrada del taller, con las lonas rojas y la sombra' },
  { label: 'El taller', etiqueta: 'El taller', src: '/images/work-taller.jpg', alt: 'Autos en proceso bajo la lona roja del taller' },
  { label: 'El equipo', etiqueta: 'El equipo', src: '/images/work-equipo.webp', alt: 'Pulidora, pads y productos de detallado en el taller' },
]
export const GALERÍA = GALLERY

export const FAQS = [
  {
    q: '¿Hacen cotizaciones por WhatsApp?',
    a: 'Sí. Puedes enviarnos fotografías de tu vehículo y una descripción del trabajo que necesitas.',
  },
  { q: '¿Realizan trabajos de carrocería?', a: 'Sí, contamos con servicio de reparación de carrocería.' },
  { q: '¿Realizan trabajos de pintura?', a: 'Sí, realizamos trabajos de pintura automotriz e igualación de color.' },
  { q: '¿Hacen pulido de carros?', a: 'Sí, contamos con servicio de pulido y corrección de pintura.' },
  { q: '¿Dónde están ubicados?', a: 'Estamos en José Zazueta #16, Col. Los Encinos, Nogales, Sonora.' },
  {
    q: '¿Cómo puedo solicitar información?',
    a: 'Puedes comunicarte con nosotros por WhatsApp o teléfono para consultar sobre tu vehículo y el trabajo que necesitas.',
  },
]
