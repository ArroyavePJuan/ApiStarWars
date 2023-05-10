export const getPlanetas =async  () => {
    const url  = "https://swapi.dev/api/planets/"
    const req = await fetch(url)
    const data = await req.json()

    return data

}

export const getNaves = async  () => {
    const url  = "https://swapi.dev/api/vehicles/"
    const req = await fetch(url)
    const data = await req.json()

    return data

}

