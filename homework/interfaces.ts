// Create an interfaces for the following object examples

interface species{
    average_height: number,
    average_lifespan: number,
    classification: string,
    created: Date,
    designation: string,
    edited: Date,
    eye_colors: Eye_colors ,
    hair_colors: Hair_colors,
    homeworld: string,
    language: string,
    name: string,
    people: string[],
    films: string[],
    skin_colors: string,
    url: string    
}

export enum Eye_colors{
    blue = "blue",
    green = "green",
    yellow = "yellow", 
    brown = "brown", 
    golden = "golden", 
    red = "red"
}

enum Hair_colors{
    black = "black",
    brown = "brown"
}


interface planet {
    name: string,
    rotation_period: number,
    orbital_period: number,
    diameter: number,
    climate: Climate,
    gravity: string,
    terrain: Terrain,
    surface_water: number,
    population: number,
    residents: string[],
    films: string[],
    created: Date,
    edited: Date,
    url: string
}
enum Climate{
    black = "black", 
    brown = "brown"
}

enum Terrain{
    jungle = "jungle", 
    rainforest = "rainforests"
}

interface Article {
    author: Author,
    title: string,
    topic: string,
    creationDate:  Date,
    tag: string[],
    category: string
};

class Author{
    firstname:string
    lastname: string
    birthdate: Date
    getAge(birthDate){ new Date().getFullYear() - birthDate.getFullYear()}
}