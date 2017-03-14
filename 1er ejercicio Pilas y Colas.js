//Declaro una variable con un arreglo vacio en dodne se almacenaran mis nombres concatenados//
var nombreCompleto = [ ];

//Declaro mi funcion con la que creare la pila de mis datos//

function Stack( ) {
//Declaro una variable con un arreglo vacio en donde estaran mis objetos//
var personas = [ ];

//Por default declaro la estructura para crear mi pila, nombro mi funcion y declaro su propiedad//
  this.add= add;
  this.pop = pop;
  this.print = print;

  function add(elemento) {
    personas.push(elemento);
  };

  function pop(elemento) {
    return personas.pop();
  };

  function print() {
    console.log(personas.toString());
  };

}

var nombre = new Stack();

nombre.add("Sofia");
nombre.add("Alejandra");
nombre.add("Mireya");
nombre.add("Sandra");
nombre.add("Rita");

var apellido = new Stack();

apellido.add("Flores Juarez");
apellido.add("Gomez Vaes");
apellido.add("Zarate Ordoñez");
apellido.add("Trino Munguia");
apellido.add("Romero Rua");

console.log(nombre.stack.print( ));
