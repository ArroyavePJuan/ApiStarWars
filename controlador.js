import { getPlanetas } from "./services/servicioStarWars.js";
import { getNaves } from "./services/servicioStarWars.js";

let fila = document.querySelector("#fila")


getPlanetas()
.then((data)=> {
    data.results.forEach((result)=>{
        fila.innerHTML += result.name
        

    })

})



getNaves()
.then((data)=> {
    data.results.forEach((result)=>{
        fila.innerHTML += 

        `
        <section>
        <img src="" alt="">
        <h1>${result.name}</h1>
        <p>${result.model}</p>
    </section>
        
        `
    })

})