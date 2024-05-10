// Definición de las URL base y de usuario para la API de GitHub
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

// Selección de elementos HTML con las clases '.name' y '.blog'
const $n = document.querySelector('.name'); // Elemento para mostrar el nombre del usuario
const $b = document.querySelector('.blog'); // Elemento para mostrar el blog del usuario

// Función asincrónica para mostrar información de usuario
async function displayUser(username) {
  // Antes de obtener la información, establece el texto del elemento de nombre como 'Cargando...'
  $n.textContent = 'Cargando...';

  try {
    // Hace una solicitud a la API de GitHub para obtener información del usuario con el nombre de usuario proporcionado
    const response = await fetch(`${usersEndpoint}/${username}`);
    // Convierte la respuesta a formato JSON
    const data = await response.json();
    // Imprime los datos del usuario en la consola para depuración
    console.log(data);
    // Actualiza el contenido del elemento de nombre con el nombre del usuario
    $n.textContent = `${data.name}`;
    // Actualiza el contenido del elemento del blog con el blog del usuario
    $b.textContent = `${data.blog}`;
  } catch (err) {
    // Si ocurre algún error durante la solicitud, llama a la función handleError para manejarlo
    handleError(err);
  }
}

// Función para manejar errores durante la solicitud de información del usuario
function handleError(err) {
  // Imprime un mensaje de error en la consola
  console.log('OH NO!');
  console.log(err);
  // Actualiza el contenido del elemento de nombre con un mensaje de error
  $n.textContent = `Algo salió mal: ${err}`;
}

// Llama a la función displayUser con el nombre de usuario 'stolinski' y maneja cualquier error que ocurra durante la solicitud
displayUser('stolinski').catch(handleError);
