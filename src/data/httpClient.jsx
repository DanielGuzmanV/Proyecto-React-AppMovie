
const API = "https://api.themoviedb.org/3";

async function get(path) {
  try {
    const response = await fetch(API + path, {
      headers: {
        Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTk2NzQ2NTY3YjkyMjQ5MDNmMDYzNDA5MDYwNDA1MyIsIm5iZiI6MTcyODY1MzA3OC42Nywic3ViIjoiNjcwOTI3MTY2YWRmNjYyMDIxMzAzN2JiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.6XIqXySr_9D-3e7iN-DQL5nJz0wX9hmhI2VnJx7qkj0",
        "Content-Type": "application/json;charset=utf-8",
      },
    });

    if(!response.ok) {
      throw new Error('Error en la peticion');
    }
    const data = await response.json();
    return data;
    
  } catch (error) {
    console.error("Error al obtener datos:", error)
  }
}

export default get




