function obtenerDatos(callback) {
  setTimeout(() => {
    const datos = { nombre: "Ruben Aray Santos", edad: 44 };
    callback(datos);
  }, 1000);
}

obtenerDatos((resultado) => {
  console.log("Datos recibidos con callback:", resultado);
});
