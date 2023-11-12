alert("Bienvenidos a CMS Clean, aqui podras encontrar productos de limpieza de mayor o menor cantidad. ")

function calculadora(num1, num2, operacion) {
  switch (operacion) {
    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    case "*":
      return num1 * num2;

    case "/":
      return num1 / num2;

    default:
      return "Operación no identificada";
  }
}

function calcularPrecios(){
let productoUno = Number(prompt("Ingrese el valor del producto"));
let productoDos = Number(prompt("Ingrese el valor del segundo producto"));
let operacion = prompt("Ingrese la operación");
let resultado = calculadora(productoUno, productoDos, operacion);
alert(`${productoUno} ${operacion} ${productoDos} = ${resultado}`);
}

function verMenu() {
    const menu = menuPrincipal.map((opcion, index) => `${index + 1}. ${opcion}`).join("\n");
    alert("Productos de Higiente:\n" + menu);
 }


  function verProductos(categoria) {
      const listaProductos = bidones[categoria]
          .map((producto, index) => `${index + 1}. ${producto} - $${precios[producto]}`)
          .join("\n");
      alert(`Productos disponibles en ${categoria}:\n${listaProductos}`);
  }


    function CMS() {
        while (true) {
            verMenu();
            const opcion = parseInt(prompt("Selecciona una opción del menú:"));
      
            switch (opcion) {
                case 1:
                    verProductos("5 Litros");
                    break;
                case 2:
                    verProductos("1 Litro");
                    break;
                case 3:
                    verProductos("500Ml");
                    break;
                case 4:
                     calcularPrecios();
                    break;
                case 5:
                    verProductos("Salir");
                    break;
            }
          }
        }

const menuPrincipal = [
  "5 Litros",
  "1 Litro",
  "500Ml",
  "Calcular precios",
  "Salir"
];


const bidones = {
  "5 Litros": ["Lavandina", "Detergente", "Cloro", "Jabon Liquido"],
  "1 Litro": ["Alcohol", "Sanitizante"],
  "500Ml": ["Alcohol en gel"],
 
};


const precios = {
    "Lavandina": 1150,
    "Detergente": 950,
    "Cloro": 1500,
    "Jabon Liquido": 1800,
    "Alcohol": 750,
    "Sanitizante": 650,
    "Alcohol en gel": 300
 };

CMS();