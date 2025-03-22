// Algoritmo de busquedad por amplitud
function getShortesPath (conections, startRoom, endRoom) {
    //Crea un objeto vacio
    const graph = {}
  
    //Iterar sobre cada conexion y unirlas usando el metodo split
    for (const conection of conections) {
      const [roomA, roomB] = conection.split("-")
      if (!graph[roomA]) {
        graph[roomA] = [] // Para cada cuarto si no existe su valor en el grafo inicia su valor como un array vacio
      }
      if (!graph[roomB]) {
        graph[roomB] = []
      }
      //Agrega el otro cuarto a la lista como cuartos vecinos
      graph[roomA].push(roomB)
      graph[roomB].push(roomA)
    }
    console.log(`Grafo creado: ${graph}`)
  
   //Iniciar el algortimo bfs
    const tale = [startRoom]
    const visitaded = { [startRoom]: null } // cuarto predecesor
    console.log("Cola inicial:", tale);
    console.log("Visitados inicial:", visitaded);
  
    while (tale.length > 0) {
      const currentRoom = tale.shift() //El cuarto actual sera el cuarto siguiente al incial
      console.log(currentRoom)
    //Objetivo alcanzado
    if (currentRoom === endRoom) {
      console.log("¡Encontrado el objetivo! Retornando...");
      
      return getPath(visitaded, endRoom, startRoom)
    }
  
    //Explorar cuartos vecinos
      const neighboors = graph[currentRoom] || [] //para manejar cuartos sin conexiones
      console.log("Vecinos de", currentRoom, ":", neighboors);
      for(const neighboor of neighboors) {
        console.log("Analizando vecino:", neighboor);
        if(!visitaded[neighboor]) {
        console.log("Vecino NO visitado:", neighboor);
        visitaded[neighboor] = currentRoom
        tale.push(neighboor)
        console.log("Cola actualizada:", tale);
        console.log("Visitados actualizado:", visitaded);
        } else {
          console.log("Vecino YA visitado:", neighboor);
        }
      }
      console.log("Fin de la iteración para:", currentRoom, "\n");
    }
    // Si el bucle termina y no se encontró el endRoom, retorna null
    return null;
  }
  
  function getPath(visitaded, endRoom, startRoom) {
    const path = []
    console.log(`Camino actual: ${path}`)
    let current = endRoom
    let home = startRoom
    console.log(`Cuarto actual: ${current}`)
    while (current !== null) {
    path.unshift(current) //mientras el cuarto final no sea nulo lo agregamos al arreglo de camino
    console.log(`Camino actualizado: ${path}`)
    current = visitaded[current]
    console.log(`Cuarto actualizado: ${current}`)
       
      
        if (current === home) {
        break
      }
    }
    return path
  }
  const rooms = ['a-b', 'c-d', 'c-b', 'b-e', 'e-f']
  const start = 'a'
  const end = 'f'
  
  const myPath = getShortesPath(rooms, start, end)
  
  console.log(myPath)
  
  if (myPath) {
    console.log(`el camino mas corto de "${start}" a "${end}" es: ${myPath.join('->')}`)
  } else {
    console.log(`No se encontro un camino de "${start}" a "${end}"`)
  }