Hay varias formas de enlazar JavaScript a un archivo HTML. Aquí tienes algunas de las más comunes, junto con ejemplos:

Enlazar en linea (Inline): Puedes incluir código JavaScript directamente dentro de las etiquetas <script> en tu archivo HTML.

  <body>
    <h1>Ejemplo de JavaScript en línea</h1>
    <script>
        // Código JavaScript aquí
        alert('¡Hola, mundo!');
    </script>
</body>

Enlazar en el encabezado (Header): Puedes enlazar archivos JavaScript en la sección <head> de tu HTML.

  <head>
    <meta charset="UTF-8">
    <title>Enlazar JavaScript en el encabezado</title>
    <script src="script.js"></script>
</head>

Enlazar al final del cuerpo (End of Body): Puedes enlazar archivos JavaScript al final del cuerpo del HTML, 
justo antes de la etiqueta de cierre </body>. Esto puede mejorar el rendimiento de la página ya que permite que el HTML se cargue antes de que se procese el JavaScript.

<body>
    <h1>Ejemplo de JavaScript al final del cuerpo</h1>
    
    <!-- Contenido HTML -->

    <script src="script.js"></script>
</body>

Enlazar externamente (External): Puedes enlazar un archivo JavaScript externo utilizando la etiqueta <script> con el atributo src.

  <head>
    <meta charset="UTF-8">
    <title>Enlazar JavaScript externamente</title>
    <script src="ruta/a/tu/archivo.js"></script>
</head>

Estas son algunas de las formas más comunes de enlazar JavaScript a un archivo HTML. La elección de cuál utilizar depende de tus necesidades y preferencias, así como de las mejores prácticas de desarrollo web.

