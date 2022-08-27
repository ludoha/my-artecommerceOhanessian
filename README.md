

Proyecto Final React Js
Ludmila Ohanessian Rau 


*Cumpliendo con todo los distintos desafíos llevados a cabo en el transcurso del curso realice este E-commerce de la tienda de mi propia marca de arte.*


*Rutas del NavBar con las siguientes categorias:*
-Ludmila Ohanessian Artista Plastica (con ruta al index)
-Sección:
-Pinturas
-Acuarelas
-Dibujos
-Sobre mí
-Contacto 
-Icons de https://icons.getbootstrap.com/ con links a redes sociales 


*Base de datos en Firebase/Firestore*
-Con Items de los productos
-Url de imagenes cargadas en Amazon SE 
-FormCompra: con datos y Order con item de la compra y total a pagar
-ContactForm de consultas o pedidos


*Pinturas, acuarelas y dibujos muestran los productos segun su categoria:*

    `<NavLink className="nav__link" to='/category/Pintura'>Pinturas</NavLink>

    <NavLink className="nav__link" to='/category/Acuarela'>Acuarelas</NavLink>

    <NavLink className="nav__link" to='/category/Dibujo'>Dibujos</NavLink>`


*Detalle del producto:*
Con titulo, imagen, descripcion, categoria, precio y más detalles (si lo requiere).
Botón para agregar al carrito y Link al carrito para terminar compra.


*Carrito con contador:*
-Muestra los productos elegidos
-Eliminarlos
-Ver el monto total a pagar
-Formulario para completar la compra con envio de order de compra a base de datos
-Numero de pedido con la ID de firebase





