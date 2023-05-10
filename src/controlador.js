import { getPlanetas, getNaves } from "../services/servicioStarWars.js";

let fila = document.querySelector("#fila")

getPlanetas()
.then((data)=> {
    data.results.forEach((result)=>{
        fila.innerHTML += 
        `
        <section class="planeta" >
        <h1>${result.name}</h1>
        <h4>${result.gravity}</h4>
        </section>
        
        `
    })
    console.log(data)

})

getNaves()
.then((data)=> {
    data.results.forEach((result)=>{
        fila.innerHTML += 
        `
        <section class="nave" >
        <h1>${result.name}</h1>
        <h4>${result.model}</h4>
        </section>
        
        `
    })
    console.log(data);
})
