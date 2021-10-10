export interface VideoInfo { 
    id: number;
    title: string;
    description: string;
    duration: string;
    releaseDate: string;
    images: Image[]
}

export interface Image {
    url: string;
    type: string;
}