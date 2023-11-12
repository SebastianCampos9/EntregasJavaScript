export const productos = [
{
id: 1,
nombre: "Lavandina 5L",
precio: 1200,
imagen:www,
categoria:"5L",
},
{
id: 2,
nombre:"Detergente 5L",
precio: 1800,
imagen:www,
categoria:"5L",
},
{
id: 3,
nombre:"Cloro 5L",
precio: 2100,
imagen:www,
categoria:"5L",
},
{
id: 4,
nombre:"Alcohol 5L",
precio: 1500,
imagen:www,
categoria:"5L",
},
{
id: 5,
nombre:"Sanitizante 5L",
precio: 1450,
imagen:www,
categoria:"5L",
},
{
id: 6,
nombre:"Alcohol 1L",
precio: 350,
imagen:www,
categoria:"1L",
},
{
id: 7,
nombre:"Sanitizante 1L",
precio: 300,
imagen:www,
categoria:"1L",
},
{
id: 8,
nombre:"Detergente 1L",
precio: 550,
imagen:www,
categoria:"1L",
},


];


JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos" , JSON.stringify(productos));