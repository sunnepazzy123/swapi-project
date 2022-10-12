


export interface ISwapiFilmsResponse<T> {
    count: number,
    next: null | number,
    previous: null | number,
    results: Array<T>
}

export interface ISwapiFilm {
    title: string,
    episode_id: number,
    opening_crawl: string,
    producer: string,
    director: string,
    edited: string,
    release_date: string,
    characters: Array<string>,
    created: string,
    planets: Array<string>,
    species: Array<string>,
    url: string,
    vehicles: Array<string>,
    starships: Array<string>
}

