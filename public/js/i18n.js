const translations = {
  en: {
    // Nav
    nav_home: 'Home', nav_menu: 'Menu', nav_gallery: 'Gallery', nav_reviews: 'Reviews',
    nav_locations: 'Locations', nav_instagram: 'Instagram', nav_about: 'About', nav_contact: 'Contact',
    // Hero
    hero_badge: 'Since 1987',
    hero_subtitle: 'Colombian Bakery & Restaurant',
    hero_text: 'Fresh-baked bread, golden empanadas, and the rich flavors of Colombia — served with love in Jackson Heights since 1987.',
    hero_btn_menu: 'View Our Menu', hero_btn_location: 'Find a Location',
    // Menu
    menu_tag: 'Our Menu', menu_title: 'Authentic Colombian Flavors',
    menu_desc: 'From our famous bakery to traditional Colombian dishes, every recipe tells a story',
    tab_breakfast: 'Breakfast', tab_mains: 'Main Dishes', tab_lunch: 'Lunch Specials',
    tab_sharing: 'To Share', tab_bakery: 'Bakery', tab_beverages: 'Beverages', tab_extras: 'Desserts & Sides',
    // Breakfasts
    mi_seba1: 'Calentado, pericos eggs, arepa with fresh cheese & grilled steak, chicharr\u00f3n or chicken. Chocolate or coffee',
    mi_criollo: 'Calentado, chorizo, avocado & small arepa with fresh cheese',
    mi_paisa: 'Grilled steak or chicken breast & large arepa with fresh cheese',
    mi_antioqueno: 'Soft scrambled eggs in rice with a small arepa & fresh cheese',
    mi_omelette: 'Omelette with pericos eggs, cheese, home fries, avocado & toast',
    mi_croissant_sand: 'Croissant with scrambled eggs, bacon & American cheese',
    mi_don_david: 'Sweet corn arepa with fresh cheese & side of eggs',
    mi_waffles: 'Gluten-free pandebono waffle with eggs. Choose jam, chocolate or maple syrup',
    mi_campesino: 'Large corn cake with hogao, scrambled eggs & fresh cheese',
    mi_huevos_gusto: 'Choice of eggs, toast & home fries or calentado',
    mi_migao: 'Bu\u00f1uelo, pandequeso, bread, toast & fresh cheese soaked in chocolate',
    mi_arepa_grande: 'Large corn cake with butter and fresh cheese',
    // Main Dishes
    mi_bandeja: 'Rice, beans, sweet plantain, grilled steak, chorizo, chicharr\u00f3n, avocado, arepa & egg',
    mi_minibandeja: 'Rice, beans, sweet plantain, grilled steak, chicharr\u00f3n, egg & avocado',
    mi_bistec: 'Grilled beef steak in creole sauce with fried eggs, rice, beans & salad',
    mi_pechuga: 'Grilled chicken breast, rice, beans, sweet plantain & salad',
    mi_carne_parrilla: 'Grilled beef steak, rice, beans, sweet plantain & salad',
    mi_cazuela_frijol: 'Chicharr\u00f3n, chorizo, sweet plantain, avocado, crispy potato, rice & arepa',
    mi_picada: 'Steak, chicken, chorizo, chicharr\u00f3n, red potato, creole potato, arepa, plantain, lime & yuca',
    // Lunch Specials
    mi_ajiaco: 'Colombian chicken & potato soup with rice, salad & stewed chicken',
    mi_sancocho_gallina: 'Hen soup with stewed hen, rice & salad',
    mi_cazuela_lunch: 'Bean casserole with rice, chicharr\u00f3n, sweet plantain & arepa',
    mi_sancocho_carne: 'Beef sancocho with rice, salad & beef in goulash',
    mi_sancocho_cola: 'Oxtail Colombian soup with stewed oxtail, rice & salad',
    mi_mondongo: 'Tripe soup with rice, salad & sweet plantain',
    mi_caldo_costilla: 'Rib beef broth with rice & salad',
    mi_sancocho_pescado: 'Fish soup with rice, salad & fish fillet in garlic sauce',
    mi_sopa_pollo: 'Chicken soup with baked chicken, rice & salad',
    mi_sopa_sola: 'Soup only (any variety)',
    // To Share & Mini Bites
    mi_mafalda: 'Fried corn cake with ham, mozzarella, mayo, pineapple & grilled chicken',
    mi_slider: '2 pandebono sliders with shredded beef, guacamole & fresh cheese',
    mi_salchipapa: 'French fries, creole potato, beef sausage with pink sauce',
    mi_tostones_guac: 'Fried green plantains with a side of guacamole',
    mi_ensalada: 'Lettuce, tomato, red onion & croutons. Caesar or French dressing',
    mi_empanada_carne: 'Beef pattie',
    mi_empanada_pollo: 'Chicken pattie',
    mi_chorizo: 'Pork sausage served with small corn cake or red potato',
    mi_chicharron: 'Pork belly served with small corn cake or red potato',
    mi_papa_rellena: 'Stuffed potato',
    // Bakery
    mi_pandebono: 'Traditional Colombian cheese bread',
    mi_bunuelo: 'Golden fried cheese ball',
    mi_almojabana: 'Sweet corn and cheese bread roll',
    mi_pan_queso: 'Cheese-filled bread roll',
    mi_pandequeso_m: 'Mountain-style cheese bread',
    mi_pandequeso_p: 'Paisa-style cheese bread',
    mi_pandeyuca: 'Yuca cheese bread',
    mi_arepa_choclo: 'Sweet corn arepa',
    mi_achiras: 'Traditional cheese crackers',
    mi_croissant: 'Freshly baked butter croissant',
    mi_pastel_arequipe: 'Pastry filled with dulce de leche',
    mi_pastel_guayaba: 'Pastry filled with guava',
    mi_dedito_guayaba: 'Cheese and guava jelly finger',
    mi_dedito_queso: 'Cheese finger',
    mi_mogollas: 'Colombian bread rolls',
    mi_pan_leche: 'Milk bread',
    // Beverages
    mi_jugos: 'Fresh fruit juice: guayaba, lulo, papaya, maracuy\u00e1, guan\u00e1bana, mango or mora',
    mi_cafe_peq: 'Small Colombian coffee',
    mi_cafe_grande: 'Large coffee with milk and sugar',
    mi_cafe_helado: 'Iced coffee',
    mi_coffee_cream: 'Iced coffee with cream',
    mi_chocolate_grande: 'Large traditional hot chocolate',
    mi_milo_cal: 'Hot Milo chocolate drink',
    mi_milo_frio: 'Cold Milo chocolate drink',
    mi_champus: 'Traditional Colombian corn and fruit drink',
    mi_salpicon: 'Colombian fruit cocktail with fresh fruit',
    mi_avena: 'Colombian oat drink',
    mi_aguapanela: 'Cold sugarcane water with lime',
    mi_limonada: 'Fresh squeezed lemonade (12oz)',
    mi_malta: 'Non-alcoholic malt beverage',
    mi_sodas: 'Colombian bottled sodas',
    // Desserts & Sides
    mi_tres_leches: 'Three milk cake',
    mi_flan: 'Caramel custard',
    mi_milhoja: 'Colombian mille-feuille pastry',
    mi_mazamorra: 'Traditional corn dessert served with whole milk',
    mi_guacamole: 'Fresh guacamole',
    mi_maduros: 'Fried sweet plantains',
    mi_tostones: 'Fried green plantains',
    mi_papitas: 'French fries',
    mi_arroz: 'Rice (small $6 / large $8)',
    mi_frijoles: 'Beans (small $7 / large $10)',
    mi_aguacate: 'Sliced avocado',
    // Badges
    badge_signature: 'Signature', badge_popular: 'Popular', badge_traditional: 'Traditional', badge_fresh: 'Fresh', badge_share: 'To Share',
    // Order buttons
    btn_ubereats: 'Order Now', btn_doordash: 'Order Now',
    // Gallery
    gallery_tag: 'Gallery', gallery_title: 'Feast Your Eyes',
    gallery_desc: 'A glimpse of our dishes and the warmth of our bakery',
    // Reviews
    reviews_tag: 'Testimonials', reviews_title: 'What Our Customers Say',
    reviews_desc: 'Over 1,800 reviews and counting',
    // Locations
    locations_tag: 'Visit Us', locations_title: 'Our Locations',
    locations_desc: 'Two locations in Jackson Heights, Queens',
    btn_directions: 'Get Directions',
    loc_northern_name: 'Original Bakery', loc_37th_name: 'Coffee Shop & Restaurant',
    loc_est: 'Est. 1987',
    // Instagram
    instagram_tag: 'Follow Us', instagram_title: 'We\'re on Instagram',
    instagram_desc: 'Stay connected with our latest baked goods, daily specials, and behind-the-scenes moments',
    instagram_btn: '@sebasebabakery',
    // About
    about_tag: 'Our Story', about_title: 'A Colombian Tradition Since 1987',
    about_p1: 'Founded in 1987 by David Velasquez\'s father and uncle, Seba Seba began as a small Colombian bakery on Northern Boulevard in Jackson Heights. What started as a neighborhood panaderia quickly became a beloved community landmark, known for its fresh-baked pan de bono, golden empanadas, and the warm aroma of Colombian coffee.',
    about_p2: 'Nearly four decades later, Seba Seba has grown to two locations in Jackson Heights, but the commitment to authentic Colombian flavors remains unchanged. Every pastry is baked fresh daily, every dish is prepared with traditional recipes, and every customer is treated like family.',
    stat_years: 'Years', stat_reviews: 'Reviews', stat_locations: 'Locations',
    // Contact
    contact_tag: 'Get In Touch', contact_title: 'Contact Us',
    contact_desc: 'Have a question or want to place a large order? Reach out to any of our locations.',
    contact_quick: 'Quick Contact', contact_send: 'Send Us a Message',
    ph_name: 'Your Name', ph_email: 'Your Email', ph_location: 'Select Location', ph_message: 'Your Message',
    btn_send: 'Send Message',
    // Reviews CTA
    reviews_yelp: 'See All Reviews on Yelp', reviews_tripadvisor: 'TripAdvisor Reviews',
    // Hours
    hours_weekdays: 'Mon \u2013 Fri:', hours_everyday: 'Mon \u2013 Sun:',
    hours_northern: 'Mon\u2013Fri 5:30AM\u201310PM', hours_37th: 'Mon\u2013Sun 6AM\u201310PM',
    // Footer
    footer_desc: 'Authentic Colombian bakery and restaurant since 1987. Two locations in Jackson Heights, Queens serving traditional flavors baked fresh daily.',
    footer_links: 'Quick Links', footer_rights: 'All rights reserved.',
    footer_areas: 'Jackson Heights, Queens', footer_city: 'Queens, New York',
  },
  es: {
    // Nav
    nav_home: 'Inicio', nav_menu: 'Men\u00fa', nav_gallery: 'Galer\u00eda', nav_reviews: 'Rese\u00f1as',
    nav_locations: 'Ubicaciones', nav_instagram: 'Instagram', nav_about: 'Nosotros', nav_contact: 'Contacto',
    // Hero
    hero_badge: 'Desde 1987',
    hero_subtitle: 'Panader\u00eda y Restaurante Colombiano',
    hero_text: 'Pan reci\u00e9n horneado, empanadas doradas y los ricos sabores de Colombia \u2014 servidos con amor en Jackson Heights desde 1987.',
    hero_btn_menu: 'Ver Nuestro Men\u00fa', hero_btn_location: 'Encontrar Ubicaci\u00f3n',
    // Menu
    menu_tag: 'Nuestro Men\u00fa', menu_title: 'Sabores Colombianos Aut\u00e9nticos',
    menu_desc: 'Desde nuestra famosa panader\u00eda hasta platos tradicionales colombianos, cada receta cuenta una historia',
    tab_breakfast: 'Desayuno', tab_mains: 'Platos Principales', tab_lunch: 'Almuerzos',
    tab_sharing: 'Para Compartir', tab_bakery: 'Panader\u00eda', tab_beverages: 'Bebidas', tab_extras: 'Postres y Extras',
    // Desayunos
    mi_seba1: 'Calentado, huevos pericos, arepa con queso fresco y carne asada, chicharr\u00f3n o pechuga. Chocolate o caf\u00e9',
    mi_criollo: 'Calentado, chorizo, aguacate y arepa peque\u00f1a con queso fresco',
    mi_paisa: 'Carne asada o pechuga de pollo y arepa grande con queso fresco',
    mi_antioqueno: 'Arroz revuelto con huevos y arepa peque\u00f1a con queso fresco',
    mi_omelette: 'Tortilla de huevos pericos con queso, papa casera, aguacate y pan tostado',
    mi_croissant_sand: 'Croissant con huevo revuelto, tocineta y queso americano',
    mi_don_david: 'Arepa de choclo con queso fresco y huevos en cacerola',
    mi_waffles: 'Waffle de pandebono sin gluten con huevos. Elige mermelada, chocolate o maple',
    mi_campesino: 'Arepa grande con hogao, huevos revueltos y queso fresco',
    mi_huevos_gusto: 'Huevos al gusto, pan tostado y papa casera o calentado',
    mi_migao: 'Bu\u00f1uelo, pandequeso, pan, tostada, queso fresco, todo remojado en chocolate',
    mi_arepa_grande: 'Arepa grande con mantequilla y queso fresco',
    // Platos Principales
    mi_bandeja: 'Arroz, fr\u00edjol, maduro, carne asada, chorizo, chicharr\u00f3n, aguacate, arepa y huevo',
    mi_minibandeja: 'Arroz, fr\u00edjol, maduro, porci\u00f3n de carne asada, chicharr\u00f3n, huevo y aguacate',
    mi_bistec: 'Carne a la parrilla en salsa criolla, huevos fritos, arroz, fr\u00edjol y ensalada',
    mi_pechuga: 'Pechuga de pollo a la plancha, arroz, fr\u00edjol, maduro y ensalada',
    mi_carne_parrilla: 'Carne a la parrilla, arroz, fr\u00edjol, maduro y ensalada',
    mi_cazuela_frijol: 'Chicharr\u00f3n, chorizo, maduro, aguacate, papa crocante, arroz y arepita',
    mi_picada: 'Carne, pechuga, chorizo, chicharr\u00f3n, papa roja, papa criolla, arepa, pl\u00e1tano, lim\u00f3n y yuca',
    // Almuerzos
    mi_ajiaco: 'Ajiaco colombiano con arroz, ensalada y pollo guisado',
    mi_sancocho_gallina: 'Sancocho de gallina con gallina guisada, arroz y ensalada',
    mi_cazuela_lunch: 'Cazuela de fr\u00edjol con arroz, chicharr\u00f3n, maduro y arepa',
    mi_sancocho_carne: 'Sancocho de carne con arroz, ensalada y posta en goulash',
    mi_sancocho_cola: 'Sancocho de cola de res con cola guisada, arroz y ensalada',
    mi_mondongo: 'Mondongo con arroz, ensalada y maduro',
    mi_caldo_costilla: 'Caldo de costilla con arroz y ensalada',
    mi_sancocho_pescado: 'Sancocho de pescado con arroz, ensalada y filete al ajillo',
    mi_sopa_pollo: 'Sopa de pollo con pollo al horno, arroz y ensalada',
    mi_sopa_sola: 'Sopa sola (cualquier variedad)',
    // Para Compartir y Antojitos
    mi_mafalda: 'Arepa frita con jam\u00f3n, queso mozzarella, mayonesa, pi\u00f1a y pechuga de pollo',
    mi_slider: '2 sanduches de pandebono con carne desmechada, guacamole y queso fresco',
    mi_salchipapa: 'Papas fritas, papa criolla, salchicha con salsa rosada',
    mi_tostones_guac: 'Tostones con guacamole',
    mi_ensalada: 'Lechuga, tomate, cebolla roja y croutons. Aderezo Caesar o French',
    mi_empanada_carne: 'Empanada de carne',
    mi_empanada_pollo: 'Empanada de pollo',
    mi_chorizo: 'Chorizo con arepita o papa roja',
    mi_chicharron: 'Chicharr\u00f3n con arepita o papa roja',
    mi_papa_rellena: 'Papa rellena',
    // Panader\u00eda
    mi_pandebono: 'Pandebono colombiano tradicional',
    mi_bunuelo: 'Bu\u00f1uelo dorado de queso',
    mi_almojabana: 'Almoj\u00e1bana de ma\u00edz y queso',
    mi_pan_queso: 'Pan con queso',
    mi_pandequeso_m: 'Pandequeso monta\u00f1ero',
    mi_pandequeso_p: 'Pandequeso paisa',
    mi_pandeyuca: 'Pan de yuca con queso',
    mi_arepa_choclo: 'Arepa de choclo',
    mi_achiras: 'Achiras tradicionales',
    mi_croissant: 'Croissant de mantequilla reci\u00e9n horneado',
    mi_pastel_arequipe: 'Pastel relleno de arequipe',
    mi_pastel_guayaba: 'Pastel relleno de guayaba',
    mi_dedito_guayaba: 'Dedito de queso y guayaba',
    mi_dedito_queso: 'Dedito de queso',
    mi_mogollas: 'Mogollas colombianas',
    mi_pan_leche: 'Pan de leche',
    // Bebidas
    mi_jugos: 'Jugo natural: guayaba, lulo, papaya, maracuy\u00e1, guan\u00e1bana, mango o mora',
    mi_cafe_peq: 'Caf\u00e9 peque\u00f1o',
    mi_cafe_grande: 'Caf\u00e9 grande con leche y az\u00facar',
    mi_cafe_helado: 'Caf\u00e9 helado',
    mi_coffee_cream: 'Caf\u00e9 helado con crema',
    mi_chocolate_grande: 'Chocolate grande tradicional',
    mi_milo_cal: 'Milo caliente',
    mi_milo_frio: 'Milo fr\u00edo',
    mi_champus: 'Champ\u00fas tradicional colombiano',
    mi_salpicon: 'Salpic\u00f3n de frutas frescas',
    mi_avena: 'Avena colombiana',
    mi_aguapanela: 'Aguapanela fr\u00eda con lim\u00f3n',
    mi_limonada: 'Limonada natural (12oz)',
    mi_malta: 'Pony Malta',
    mi_sodas: 'Sodas colombianas en botella',
    // Postres y Extras
    mi_tres_leches: 'Postre de tres leches',
    mi_flan: 'Flan de caramelo',
    mi_milhoja: 'Milhoja colombiana',
    mi_mazamorra: 'Mazamorra tradicional con leche',
    mi_guacamole: 'Guacamole fresco',
    mi_maduros: 'Maduros fritos',
    mi_tostones: 'Tostones de pl\u00e1tano verde',
    mi_papitas: 'Papitas fritas',
    mi_arroz: 'Arroz (peque\u00f1o $6 / grande $8)',
    mi_frijoles: 'Fr\u00edjoles (peque\u00f1o $7 / grande $10)',
    mi_aguacate: 'Aguacate en rodajas',
    // Badges
    badge_signature: 'Especialidad', badge_popular: 'Popular', badge_traditional: 'Tradicional', badge_fresh: 'Fresco', badge_share: 'Para Compartir',
    // Order buttons
    btn_ubereats: 'Pedir Ahora', btn_doordash: 'Pedir Ahora',
    // Gallery
    gallery_tag: 'Galer\u00eda', gallery_title: 'Un Fest\u00edn Visual',
    gallery_desc: 'Una muestra de nuestros platos y la calidez de nuestra panader\u00eda',
    // Reviews
    reviews_tag: 'Testimonios', reviews_title: 'Lo Que Dicen Nuestros Clientes',
    reviews_desc: 'M\u00e1s de 1,800 rese\u00f1as y contando',
    // Locations
    locations_tag: 'Vis\u00edtanos', locations_title: 'Nuestras Ubicaciones',
    locations_desc: 'Dos ubicaciones en Jackson Heights, Queens',
    btn_directions: 'C\u00f3mo Llegar',
    loc_northern_name: 'Panader\u00eda Original', loc_37th_name: 'Caf\u00e9 y Restaurante',
    loc_est: 'Desde 1987',
    // Instagram
    instagram_tag: 'S\u00edguenos', instagram_title: 'Estamos en Instagram',
    instagram_desc: 'Mantente conectado con nuestros productos reci\u00e9n horneados, especiales del d\u00eda y momentos detr\u00e1s de escena',
    instagram_btn: '@sebasebabakery',
    // About
    about_tag: 'Nuestra Historia', about_title: 'Una Tradici\u00f3n Colombiana Desde 1987',
    about_p1: 'Fundada en 1987 por el padre y el t\u00edo de David Vel\u00e1squez, Seba Seba comenz\u00f3 como una peque\u00f1a panader\u00eda colombiana en Northern Boulevard en Jackson Heights. Lo que empez\u00f3 como una panader\u00eda de barrio r\u00e1pidamente se convirti\u00f3 en un punto de referencia comunitario, conocido por su pan de bono reci\u00e9n horneado, empanadas doradas y el c\u00e1lido aroma del caf\u00e9 colombiano.',
    about_p2: 'Casi cuatro d\u00e9cadas despu\u00e9s, Seba Seba ha crecido a dos ubicaciones en Jackson Heights, pero el compromiso con los sabores aut\u00e9nticos colombianos permanece sin cambios. Cada pasteler\u00eda se hornea fresca a diario, cada plato se prepara con recetas tradicionales, y cada cliente es tratado como familia.',
    stat_years: 'A\u00f1os', stat_reviews: 'Rese\u00f1as', stat_locations: 'Ubicaciones',
    // Contact
    contact_tag: 'Cont\u00e1ctanos', contact_title: 'Cont\u00e1ctenos',
    contact_desc: '\u00bfTiene una pregunta o desea hacer un pedido grande? Comun\u00edquese con cualquiera de nuestras ubicaciones.',
    contact_quick: 'Contacto R\u00e1pido', contact_send: 'Env\u00edenos un Mensaje',
    ph_name: 'Su Nombre', ph_email: 'Su Correo', ph_location: 'Seleccionar Ubicaci\u00f3n', ph_message: 'Su Mensaje',
    btn_send: 'Enviar Mensaje',
    // Reviews CTA
    reviews_yelp: 'Ver Todas las Rese\u00f1as en Yelp', reviews_tripadvisor: 'Rese\u00f1as en TripAdvisor',
    // Hours
    hours_weekdays: 'Lun \u2013 Vie:', hours_everyday: 'Lun \u2013 Dom:',
    hours_northern: 'Lun\u2013Vie 5:30AM\u201310PM', hours_37th: 'Lun\u2013Dom 6AM\u201310PM',
    // Footer
    footer_desc: 'Panader\u00eda y restaurante colombiano aut\u00e9ntico desde 1987. Dos ubicaciones en Jackson Heights, Queens sirviendo sabores tradicionales horneados frescos a diario.',
    footer_links: 'Enlaces R\u00e1pidos', footer_rights: 'Todos los derechos reservados.',
    footer_areas: 'Jackson Heights, Queens', footer_city: 'Queens, Nueva York',
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      if (el.tagName === 'OPTION') {
        el.textContent = t[key];
      } else {
        el.innerHTML = t[key];
      }
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) el.placeholder = t[key];
  });

  const toggle = document.getElementById('langToggle');
  toggle.classList.toggle('es', lang === 'es');

  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });

  document.documentElement.lang = lang;
}

document.getElementById('langToggle').addEventListener('click', () => {
  setLanguage(currentLang === 'en' ? 'es' : 'en');
});
