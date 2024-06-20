interface FetchProps {
    apiVersion: string
    apiKey: string
    path: string
    id?: string
    params?: {} | false
}

export async function fetchKinopoiskAPI({
    apiVersion,
    apiKey,
    path,
    id,
    params,
}: FetchProps): Promise<any> {
    let url = `https://api.kinopoisk.dev/${apiVersion}${path}`
    if (id) {
        url = url.concat(`/${id}`)
    }

    const parameters = params && new URLSearchParams(params).toString()
    if (parameters) {
        url = url.concat(`?${parameters}`)
    }

    const headers = new Headers()
    headers.set('X-API-KEY', apiKey)
    headers.set('accept', 'application/json')
    headers.set('Accept', '*')

    try {
        const response = await fetch(url, {
            headers,
        })

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`)
        }

        return await response.json()
    } catch (error) {
        console.log(error)
    }
}
