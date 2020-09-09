export type Dispatch = React.Dispatch<IAction> 

export interface IAction {
    type: string,
    payload:any,
}

export interface IState {
    movies: Array<IMovie>,
    series: Array<ISeries>
    currentMovie: IMovie | {}
    currentSeries: ISeries | {},
    onlineCount: number
    connIds: Array<string>
}

export interface IProps {
    movies: Array<IMovie>
    series: Array<ISeries>
    store: {state: IState, dispatch: Dispatch}
}

export interface IBase {
    id: number,
    backdropPath: string,
    genreIds: number[],
    originCountry: string[],
    genres: string,
    originalLanguage: string,
    overview: string,
    popularity: number,
    posterPath: string,
    voteAverage: number,
    voteCount: number,
    youtubeId: string,
}

export interface IMovie extends IBase {
    adult: boolean,
    originalTitle: string,
    releaseDate: string,
    title: string,
    video:boolean,
}

export interface ISeries extends IBase {
    originalName: string,
    firstAirDate: string,
    name: string
}