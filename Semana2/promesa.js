function obtenerDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const datos = { nombre: "Ruben Aray Santos", edad: 44 };
      resolve(datos);
    }, 1000);
  });
}

obtenerDatos()
  .then((resultado) => {
    console.log("Datos recibidos con promesa:", resultado);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
