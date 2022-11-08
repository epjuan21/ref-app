export async function getSocrataData(uuid, q) {
    const res = await fetch(`https://www.datos.gov.co/resource/${uuid}.json?$limit=100&$q=${q}`)
    const data = await res.json()
    return data
}

export async function getSocrataMetadata(uuid) {
    const res = await fetch(`https://www.datos.gov.co/api/views/metadata/v1/${uuid}.json`)
    const data = await res.json()
    return data
}