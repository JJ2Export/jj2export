const BRANDS = [
  {
    id: 'graos-uniao',
    logo: 'assets/logos/graos-uniao-logo.jpg',
    image: 'assets/images/graos-uniao/cover.jpg',
    catalog: 'assets/catalogs/graos-uniao.pdf',
    certifications: ['MAPA', 'Optical Sort'],
    name: { en: 'Grãos União', pt: 'Grãos União', es: 'Grãos União' },
    tagline: {
      en: 'Brazilian agribusiness strength with optical color-sorting standards.',
      pt: 'Força do agronegócio brasileiro com padrão de classificação óptica.',
      es: 'Fuerza del agronegocio brasileño con estándar de clasificación óptica.'
    },
    products: {
      en: ['Black Beans', 'Popcorn Corn', 'Sesame Seeds', 'Chickpeas'],
      pt: ['Feijão Preto', 'Milho de Pipoca', 'Gergelim', 'Grão-de-bico'],
      es: ['Frijol Negro', 'Maíz Pisingallo', 'Sésamo', 'Garbanzo']
    }
  },
  {
    id: 'waiss',
    logo: 'assets/logos/waiss.jpg',
    image: 'assets/images/waiss/cover.jpg',
    catalog: 'assets/catalogs/waiss.pdf',
    certifications: ['HACCP', 'Gift Pack'],
    name: { en: 'Waiss Chocolates & Panettones', pt: 'Waiss Chocolates & Panettones', es: 'Waiss Chocolates & Panettones' },
    tagline: {
      en: 'Authentic festive flavors and fine Brazilian cacao confectionery.',
      pt: 'Sabores festivos autênticos e confeitaria fina de cacau brasileiro.',
      es: 'Sabores festivos auténticos y confitería fina de cacao brasileño.'
    },
    products: {
      en: ['Stuffed Panettones', 'Fine Chocolates', 'Pralines', 'Seasonal Gift Boxes'],
      pt: ['Panettones Recheados', 'Chocolates Finos', 'Pralinés', 'Caixas de Presente Sazonais'],
      es: ['Panettones Rellenos', 'Chocolates Finos', 'Pralinés', 'Cajas de Regalo de Temporada']
    }
  },
  {
    id: 'qualicoco',
    logo: 'assets/logos/qualicoco.jpg',
    image: 'assets/images/qualicoco/cover.jpg',
    catalog: 'assets/catalogs/qualicoco.pdf',
    certifications: ['HACCP', 'ISO', 'Vegan'],
    name: { en: 'Qualicoco', pt: 'Qualicoco', es: 'Qualicoco' },
    tagline: {
      en: 'Purity and excellence in coconut derivatives & healthy foods.',
      pt: 'Pureza e excelência em derivados de coco e alimentos saudáveis.',
      es: 'Pureza y excelencia en derivados de coco y alimentos saludables.'
    },
    products: {
      en: ['Virgin Coconut Oil', 'Coconut Milk', 'Coconut Water', 'Desiccated Coconut'],
      pt: ['Óleo de Coco Virgem', 'Leite de Coco', 'Água de Coco', 'Coco Ralado Desidratado'],
      es: ['Aceite de Coco Virgen', 'Leche de Coco', 'Agua de Coco', 'Coco Rallado Deshidratado']
    }
  },
  {
    id: 'crioulo',
    logo: 'assets/logos/crioulo.jpg',
    image: 'assets/images/crioulo/cover.jpg',
    catalog: 'assets/catalogs/crioulo.pdf',
    certifications: ['SIF Export', 'Reefer'],
    name: { en: 'Queijos Crioulo', pt: 'Queijos Crioulo', es: 'Queijos Crioulo' },
    tagline: {
      en: 'Brazilian dairy heritage, exceptional flavor & cold-chain control.',
      pt: 'Herança láctea brasileira, sabor excepcional e controle de cadeia fria.',
      es: 'Herencia láctea brasileña, sabor excepcional y control de cadena de frío.'
    },
    products: {
      en: ['Aged Provolone', 'Parmesan', 'Queijo Coalho', 'Gouda'],
      pt: ['Provolone Maturado', 'Parmesão', 'Queijo Coalho', 'Gouda'],
      es: ['Provolone Madurado', 'Parmesano', 'Queijo Coalho', 'Gouda']
    }
  },
  {
    id: 'alteroza',
    logo: 'assets/logos/alteroza.jpg',
    image: 'assets/images/alteroza/cover.jpg',
    catalog: 'assets/catalogs/alteroza.pdf',
    certifications: ['Halal', 'Kosher', 'Eco-Farm'],
    name: { en: 'Alteroza Palmitos & Açaí', pt: 'Alteroza Palmitos & Açaí', es: 'Alteroza Palmitos & Açaí' },
    tagline: {
      en: "Brazil's finest biodiversity and sustainable agro-industry.",
      pt: 'O melhor da biodiversidade brasileira e agroindústria sustentável.',
      es: 'Lo mejor de la biodiversidad brasileña y agroindustria sostenible.'
    },
    products: {
      en: ['Hearts of Palm Jars', 'Pure Frozen Açaí', 'Açaí Drums 200kg', 'Guaraná Mix'],
      pt: ['Palmito em Vidro', 'Açaí Puro Congelado', 'Tambores de Açaí 200kg', 'Mix de Guaraná'],
      es: ['Palmito en Frasco', 'Açaí Puro Congelado', 'Tambores de Açaí 200kg', 'Mix de Guaraná']
    }
  },
  {
    id: 'pomar-do-brasil',
    logo: 'assets/logos/pomar-do-brasil.jpg',
    image: 'assets/images/pomar-do-brasil/cover.jpg',
    catalog: 'assets/catalogs/pomar-do-brasil.pdf',
    certifications: ['100% Fruit', 'EU Labeling', 'Cold Chain'],
    name: { en: 'Pomar do Brasil', pt: 'Pomar do Brasil', es: 'Pomar do Brasil' },
    tagline: {
      en: '100% pure frozen fruit pulps and authentic tropical flavors from Brazil.',
      pt: 'Polpas de frutas 100% puras congeladas e sabores tropicais autênticos do Brasil.',
      es: 'Pulpas de frutas 100% puras congeladas y sabores tropicales auténticos de Brasil.'
    },
    products: {
      en: ['Passion Fruit Pulp 100g', 'Strawberry Pulp 100g', 'Pineapple & Mango Pulps', '1kg Food Service Packs'],
      pt: ['Polpa de Maracujá 100g', 'Polpa de Morango 100g', 'Polpas de Abacaxi e Manga', 'Embalagens 1kg Food Service'],
      es: ['Pulpa de Maracuyá 100g', 'Pulpa de Fresa 100g', 'Pulpas de Piña y Mango', 'Empaques 1kg Food Service']
    }
  },
  {
    id: 'mippo',
    logo: 'assets/logos/mippo.jpg',
    image: 'assets/images/mippo/cover.jpg',
    catalog: 'assets/catalogs/mippo.pdf',
    certifications: ['Zero Sugar Line', 'Gourmet Grade', 'HACCP'],
    name: { en: 'Mippo Alimentos', pt: 'Mippo Alimentos', es: 'Mippo Alimentos' },
    tagline: {
      en: 'Artisanal gourmet jams, zero-sugar line, and haute cuisine chutneys.',
      pt: 'Geleias artesanais gourmet, linha zero açúcar e chutneys de alta gastronomia.',
      es: 'Mermeladas artesanales gourmet, línea cero azúcar y chutneys de alta gastronomía.'
    },
    products: {
      en: ['Strawberry Pepper Jam 390g', 'Zero Sugar Mixed Berries Jam', 'Pineapple Chutney', 'Tomato Basil Chutney'],
      pt: ['Geleia Morango c/ Pimenta 390g', 'Geleia Frutas Vermelhas Zero Açúcar', 'Chutney de Abacaxi', 'Chutney Tomate c/ Manjericão'],
      es: ['Mermelada Fresa c/ Pimienta 390g', 'Mermelada Frutos Rojos Cero Azúcar', 'Chutney de Piña', 'Chutney Tomate c/ Albahaca']
    }
  }
];


