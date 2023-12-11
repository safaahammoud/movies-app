export type MovieAPI = {
    Poster: string;
    Type: string;
    Title: string;
    imdbID: string;
};

export type MovieComponentProps = {
    id: string;
    movie: MovieAPI;
}