function obtenerDatos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ nombre: "Ruben Aray Santos", edad: 44 });
    }, 1000);
  });
}

async function mostrarDatos() {
  try {
    const datos = await obtenerDatos();
    console.log("Datos recibidos con async/await:", datos);
  } catch (error) {
    console.error("Error:", error);
  }
}

mostrarDatos();
