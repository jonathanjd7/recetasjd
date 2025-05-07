const recipes = [
    // PRIMEROS
    {
        id: 1,
        name: "Pasta Carbonara",
        description: "Un clásico italiano con huevo, queso y panceta",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500",
        category: "primeros",
        cookingTime: "30 minutos",
        difficulty: "Media",
        ingredients: [
            "400g de pasta",
            "200g de panceta",
            "4 huevos",
            "100g de queso parmesano",
            "Pimienta negra",
            "Sal"
        ],
        instructions: [
            "Cocer la pasta en agua con sal",
            "Freír la panceta hasta que esté crujiente",
            "Batir los huevos con el queso rallado",
            "Mezclar la pasta caliente con la panceta",
            "Añadir la mezcla de huevo y queso",
            "Servir inmediatamente con pimienta negra"
        ],
        tips: "Asegúrate de que la pasta esté muy caliente al mezclar con el huevo para que se cocine correctamente."
    },
    {
        id: 8,
        name: "Sopa de Marisco",
        description: "Sopa cremosa con gambas, langostinos y mejillones",
        image: "https://imag.bonviveur.com/sopa-de-marisco.webp",
        category: "primeros",
        cookingTime: "45 minutos",
        difficulty: "Media",
        ingredients: [
            "500g de marisco variado",
            "1 cebolla",
            "2 dientes de ajo",
            "200ml de nata",
            "1 copa de vino blanco",
            "Perejil",
            "Sal y pimienta"
        ],
        instructions: [
            "Sofreír la cebolla y el ajo",
            "Añadir el marisco y el vino",
            "Cocer durante 15 minutos",
            "Triturar y añadir la nata",
            "Servir con perejil picado"
        ],
        tips: "Usa las cabezas de los langostinos para dar más sabor a la sopa."
    },
    {
        id: 9,
        name: "Ensalada César",
        description: "Ensalada clásica con pollo, crutones y aderezo especial",
        image: "https://imgs.search.brave.com/vsbldOyHvU6fWn1kMk1EqmIs7a79-HOIFjuWtqnSOCk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cGFsYWNpb3MuZXMv/cGFsYWNpb3MvdXN1/YXJpb3NGdHAvY29u/ZXhpb24vaW1hZ2Vu/ZXMyMjVhLmpwZw",
        category: "primeros",
        cookingTime: "20 minutos",
        difficulty: "Fácil",
        ingredients: [
            "1 lechuga romana",
            "200g de pollo a la plancha",
            "100g de queso parmesano",
            "Crutones",
            "Aderezo César",
            "Anchoas (opcional)"
        ],
        instructions: [
            "Cortar la lechuga en trozos",
            "Añadir el pollo cortado",
            "Incorporar los crutones y el queso",
            "Aliñar con el aderezo César",
            "Servir inmediatamente"
        ],
        tips: "Prepara los crutones en casa tostando pan con ajo y aceite de oliva."
    },

    // SEGUNDOS
    {
        id: 2,
        name: "Solomillo a la Pimienta",
        description: "Carne jugosa con salsa de pimienta",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500",
        category: "segundos",
        cookingTime: "25 minutos",
        difficulty: "Media",
        ingredients: [
            "4 solomillos de ternera",
            "2 cucharadas de pimienta negra",
            "200ml de nata",
            "50ml de brandy",
            "Sal",
            "Aceite de oliva"
        ],
        instructions: [
            "Sellar los solomillos en una sartén caliente",
            "Añadir la pimienta y el brandy",
            "Flamear el alcohol",
            "Incorporar la nata",
            "Reducir la salsa",
            "Servir con guarnición"
        ],
        tips: "Deja reposar la carne 5 minutos antes de cortarla para que quede más jugosa."
    },
    {
        id: 10,
        name: "Bacalao al Pil Pil",
        description: "Bacalao con salsa emulsionada de aceite y ajo",
        image: "https://imgs.search.brave.com/H3AaO61w1GwFWGTv1dJbSzroQiOdt7xJ6fSUKExaBLI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMi5w/cGxsc3RhdGljcy5j/b20vaG95L3d3dy9t/dWx0aW1lZGlhLzIw/MjUvMDQvMTAvYmFj/YWxhbyUyMGFsJTIw/cGlsJTIwcGlsLWsx/S0MtVTIzMDE0MjU2/NTczNzlUaS03NTh4/NTMxQEhveS5qcGc?w=500",
        category: "segundos",
        cookingTime: "40 minutos",
        difficulty: "Media",
        ingredients: [
            "4 lomos de bacalao",
            "4 dientes de ajo",
            "Aceite de oliva",
            "Guindilla",
            "Perejil",
            "Sal"
        ],
        instructions: [
            "Desalar el bacalao",
            "Freír los ajos en aceite",
            "Cocer el bacalao en el aceite",
            "Emulsionar moviendo la cazuela",
            "Servir con perejil picado"
        ],
        tips: "La temperatura del aceite es crucial para conseguir la emulsión."
    },
    {
        id: 11,
        name: "Pollo al Horno",
        description: "Pollo asado con patatas y verduras",
        image: "https://imgs.search.brave.com/Ty8RcCibO4kUOrpe5cXNeChbzGWTwfnxh3cT5OoTI6g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aG9sYS5jb20vaG9y/aXpvbi9sYW5kc2Nh/cGUvOTM4YjYxNDkx/MmUxLWFkb2Jlc3Rv/Y2s0MzQ0MTQ3NjMu/anBnP2ltPVJlc2l6/ZT0oNjQwKSx0eXBl/PWRvd25zaXpl?w=500",
        category: "segundos",
        cookingTime: "1 hora",
        difficulty: "Fácil",
        ingredients: [
            "1 pollo entero",
            "4 patatas",
            "2 cebollas",
            "2 zanahorias",
            "Romero y tomillo",
            "Aceite de oliva",
            "Sal y pimienta"
        ],
        instructions: [
            "Sazonar el pollo",
            "Cortar las verduras",
            "Colocar en la bandeja",
            "Asar a 180°C",
            "Servir caliente"
        ],
        tips: "Unta el pollo con mantequilla para que quede más crujiente."
    },

    // POSTRES
    {
        id: 3,
        name: "Tiramisú",
        description: "Postre italiano con café y mascarpone",
        image: "https://imgs.search.brave.com/rkszT54k8gI3u29aggV5hPkIH8xzsm8K0NASWk8oBMo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQy/MjE2MzI2NS9waG90/by90aXJhbWlzdS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/YzV1eGhoNUJhOGdG/cmFXSTFlMDlFMGhX/LUxZYnNQX0RaYUlx/REw5VGhEST0?w=500",
        category: "postres",
        cookingTime: "45 minutos",
        difficulty: "Media",
        ingredients: [
            "500g de mascarpone",
            "4 huevos",
            "100g de azúcar",
            "200g de bizcochos",
            "Café fuerte",
            "Cacao en polvo"
        ],
        instructions: [
            "Separar las claras de las yemas",
            "Batir las yemas con el azúcar",
            "Mezclar con el mascarpone",
            "Montar las claras a punto de nieve",
            "Alternar capas de bizcocho mojado en café y crema",
            "Espolvorear cacao por encima"
        ],
        tips: "Deja reposar el tiramisú en la nevera al menos 4 horas antes de servir."
    },
    {
        id: 12,
        name: "Flan Casero",
        description: "Postre tradicional con caramelo líquido",
        image: "https://imgs.search.brave.com/I9ENVwj-uZs_yy3pINf3nXhq5p6zqAJ4KkJUy6iKqK4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2xhcmluLmNvbS9p/bWcvMjAyMi8xMC8y/Ny95djBycjI2RWpf/MzQweDM0MF9fMS5q/cGc",
        category: "postres",
        cookingTime: "1 hora",
        difficulty: "Fácil",
        ingredients: [
            "6 huevos",
            "500ml de leche",
            "150g de azúcar",
            "1 vaina de vainilla",
            "Caramelo líquido"
        ],
        instructions: [
            "Preparar el caramelo",
            "Batir los huevos con el azúcar",
            "Añadir la leche caliente",
            "Cocer al baño maría",
            "Enfriar en la nevera"
        ],
        tips: "El caramelo debe estar bien dorado pero no quemado."
    },
    {
        id: 13,
        name: "Tarta de Manzana",
        description: "Tarta clásica con manzanas y canela",
        image: "https://imgs.search.brave.com/P77lGgInhwQGzBd5gDUcxIvb53JZbOBdI9q8AAtLAyQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wYXpv/ZGV2aWxhbmUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzEwL3RhcnRhLWRl/LW1hbnphbmEtcG9y/dC01NTB4NDIwLmpw/Zw",
        category: "postres",
        cookingTime: "1 hora",
        difficulty: "Media",
        ingredients: [
            "6 manzanas",
            "200g de harina",
            "100g de mantequilla",
            "100g de azúcar",
            "Canela",
            "1 huevo"
        ],
        instructions: [
            "Preparar la masa",
            "Cortar las manzanas",
            "Montar la tarta",
            "Hornear a 180°C",
            "Servir templada"
        ],
        tips: "Usa manzanas ácidas para mejor contraste de sabores."
    },

    // BEBIDAS
    {
        id: 4,
        name: "Sangría",
        description: "Bebida refrescante con vino y frutas",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500",
        category: "bebidas",
        cookingTime: "15 minutos",
        difficulty: "Fácil",
        ingredients: [
            "1 botella de vino tinto",
            "2 naranjas",
            "2 manzanas",
            "2 melocotones",
            "100g de azúcar",
            "Hielo"
        ],
        instructions: [
            "Cortar la fruta en trozos",
            "Mezclar el vino con el azúcar",
            "Añadir la fruta",
            "Refrigerar durante 2 horas",
            "Servir con hielo"
        ],
        tips: "Cuanto más tiempo repose, mejor sabor tendrá la sangría."
    },
    {
        id: 14,
        name: "Tinto de Verano",
        description: "Refrescante combinación de vino tinto y gaseosa",
        image: "https://imgs.search.brave.com/80EpHVYvZYbhtFqKslQyRm4KCmetGasQpKrQtqeOBK0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJp/YW5vbWFkcnVlbm8u/ZXMvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDYvdGludG8t/ZGUtdmVyYW5vLTEu/cG5n",
        category: "bebidas",
        cookingTime: "5 minutos",
        difficulty: "Fácil",
        ingredients: [
            "Vino tinto",
            "Gaseosa",
            "Hielo",
            "Limón"
        ],
        instructions: [
            "Mezclar vino y gaseosa",
            "Añadir hielo",
            "Decorar con limón"
        ],
        tips: "La proporción ideal es 1:1 de vino y gaseosa."
    },
    {
        id: 15,
        name: "Cerveza con Limón",
        description: "Refrescante bebida con cerveza y limón",
       
        image: "https://imgs.search.brave.com/LjpqFl9Ka5vEdmPl04GIhN7KRWTILTkNy4HEbU0dMfk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9iaWdj/cmFmdGVycy5jb20v/X25leHQvaW1hZ2U_/dXJsPWh0dHBzOi8v/Z2NwcHJvZC1tZWRp/YS5iaWdjcmFmdGVy/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjUvMDIvMDcx/MzU4MDUvY2FyYXR1/bGEtdmlkZW8taHVl/Ym94LnBuZyZ3PTM4/NDAmcT03NQ.jpeg",
        category: "bebidas",
        cookingTime: "3 minutos",
        difficulty: "Fácil",
        ingredients: [
            "Cerveza",
            "Zumo de limon",
            "Hielo"
        ],
        instructions: [
            "Mezclar todos los ingredientes",
            "Servir muy frío",
            "Decorar con limón"
        ],
        tips: "Usa limones frescos para el mejor sabor."
    },

    // MENÚS
    {
        id: 16,
        name: "Menú Mediterráneo",
        description: "Combinación de platos mediterráneos",
        image: "https://imgs.search.brave.com/4obtx8_uZ0I9jmVHCGhtZlBTG5XfnJ7J_PI59ZN87CQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJlLzIz/L2E3LzJlMjNhNzE5/OGRjNzU1ZmU2OGM3/MTg0OGU0YWMwYjli/LmpwZw",
        category: "menu",
        cookingTime: "2 horas",
        difficulty: "Media",
        ingredients: [
            "Ensalada César",
            "Bacalao al Pil Pil",
            "Flan Casero",
            "Tinto de Verano"
        ],
        instructions: [
            "Preparar la ensalada César",
            "Cocinar el bacalao al pil pil",
            "Preparar el flan casero",
            "Servir con tinto de verano"
        ],
        tips: "Sirve los platos en el orden indicado para mejor experiencia."
    },
    {
        id: 17,
        name: "Menú Italiano",
        description: "Selección de platos italianos",
        image: "https://imgs.search.brave.com/UIhDPbgibYKv3mDo6xQkC972zvs7AnSe7mHew22Yid0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9m/L2Y2L0VhdGFseV9M/YXNfVmVnYXNfLV9G/ZWJfMjAxOV8tX1Nh/cmFoX1N0aWVyY2hf/MTIuanBn",
        category: "menu",
        cookingTime: "2 horas",
        difficulty: "Media",
        ingredients: [
            "Pasta Carbonara",
            "Pollo al Horno",
            "Tiramisú",
            "Sangría"
        ],
        instructions: [
            "Preparar la pasta carbonara",
            "Asar el pollo",
            "Preparar el tiramisú",
            "Servir con sangría"
        ],
        tips: "El tiramisú debe prepararse con anticipación."
    },
    {
        id: 18,
        name: "Menú Tradicional",
        description: "Combinación de platos tradicionales españoles",
        image: "https://imgs.search.brave.com/zlHlOc82vnkxaPS7reyuhgGHDtCihFaXeMeJuXfVLj0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saXZl/LnN0YXRpY2ZsaWNr/ci5jb20vNjU1MzUv/NDk1NjA1OTc1Mzdf/ZTY4NmE5MGQxOF9i/LmpwZw",
        category: "menu",
        cookingTime: "2 horas",
        difficulty: "Media",
        ingredients: [
            "Sopa de Marisco",
            "Solomillo a la Pimienta",
            "Tarta de Manzana",
            "Agua de Valencia"
        ],
        instructions: [
            "Preparar la sopa de marisco",
            "Cocinar el solomillo",
            "Hornear la tarta",
            "Servir con agua de Valencia"
        ],
        tips: "Adecua los tiempos de cocción para servir todo caliente."
    },

    // PLATOS A LA CARTA
    {
        id: 5,
        name: "Cocido Madrileño",
        description: "Plato tradicional madrileño con garbanzos, verduras y carnes",
        image: "https://imgs.search.brave.com/wT1pbOHnM-9Td1y4XtfN9Nso0rUbxKUWYgyzU4x_wCQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZWNl/dGFzZGVjb2NpbmEu/ZWxtdW5kby5lcy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8x/MC9jb2NpZG8tbWFk/cmlsZW5vLXJlY2V0/YS0xMDI0eDY4My5q/cGc",
        category: "carta",
        cookingTime: "3 horas",
        difficulty: "Media",
        ingredients: [
            "500g de garbanzos",
            "1 hueso de caña",
            "1 morcillo",
            "1 gallina",
            "2 chorizos",
            "2 morcillas",
            "1 repollo",
            "4 patatas",
            "2 zanahorias",
            "1 cebolla",
            "2 dientes de ajo",
            "Sal y pimienta"
        ],
        instructions: [
            "Poner los garbanzos en remojo la noche anterior",
            "En una olla grande, poner agua fría con el hueso de caña y la gallina",
            "Cuando empiece a hervir, añadir los garbanzos y las verduras",
            "Cocinar a fuego lento durante 2 horas",
            "Añadir las carnes y cocinar 1 hora más",
            "Servir en tres vuelcos: primero la sopa, luego los garbanzos con verduras y finalmente las carnes"
        ],
        tips: "El secreto está en la cocción lenta y en el orden de añadir los ingredientes."
    },
    {
        id: 6,
        name: "Paella Valenciana",
        description: "Arroz con pollo, conejo y verduras de temporada",
        image: "https://imgs.search.brave.com/wyjsIuUezp1t1etXCSo8XqNFR3CUIy_94RMG2dOTMlw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/LmJvbnZpdmV1ci5j/b20vcGFlbGxhLXZh/bGVuY2lhbmEtdHJh/ZGljaW9uYWwuanBn",
        category: "carta",
        cookingTime: "1 hora",
        difficulty: "Media",
        ingredients: [
            "400g de arroz bomba",
            "1 pollo troceado",
            "1 conejo troceado",
            "200g de judías verdes",
            "200g de garrofón",
            "2 tomates rallados",
            "1 cucharada de pimentón",
            "Azafrán",
            "Aceite de oliva",
            "Sal"
        ],
        instructions: [
            "Freír el pollo y el conejo en la paellera",
            "Añadir las verduras y sofreír",
            "Incorporar el tomate y el pimentón",
            "Añadir el agua caliente y el azafrán",
            "Cuando hierva, añadir el arroz",
            "Cocinar a fuego medio durante 20 minutos"
        ],
        tips: "No remover el arroz una vez añadido para conseguir el socarrat."
    },
    {
        id: 7,
        name: "Chuletillas de Cordero",
        description: "Chuletillas asadas a la parrilla con hierbas aromáticas",
        image: "https://imgs.search.brave.com/BbidcPVzrqTRlY1PfOdvkIHPYKjjBNXjpr6MX_2CxTY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aWVu/ZGEuY292YXAuZXMv/YXNzZXRzL2ltZy9j/b25zdW1vL2Nhcm5l/cy9jb3JkZXJvX19j/aHVsZXRhcy1jb3Jk/ZXJvLXJlY2V0YS5q/cGc",
        category: "carta",
        cookingTime: "30 minutos",
        difficulty: "Fácil",
        ingredients: [
            "8 chuletillas de cordero",
            "4 dientes de ajo",
            "Romero fresco",
            "Tomillo fresco",
            "Aceite de oliva",
            "Sal y pimienta"
        ],
        instructions: [
            "Sazonar las chuletillas con sal y pimienta",
            "Preparar una mezcla de aceite, ajo picado y hierbas",
            "Untar las chuletillas con la mezcla",
            "Asar a la parrilla 4-5 minutos por cada lado",
            "Dejar reposar 5 minutos antes de servir"
        ],
        tips: "Las chuletillas deben estar a temperatura ambiente antes de asarlas."
    }
]; 