import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { ISwapiFilm } from "../store/api/interfaces/swapi.interface";
import { FilmModal } from "./FilmModal";



export interface IMovieCardProps {
    films: Array<ISwapiFilm>,
}

export function MovieCard({ films }: IMovieCardProps) {
    const [modal, setModal] = useState(false);
    const [film, setFilm] = useState<ISwapiFilm | null>(null);

    const closeModal = (input: boolean) => {
        setModal(input);
    };

    const viewFilmModal = (e: any, film: ISwapiFilm) => {
        e.preventDefault();
        setFilm(film);
        setModal(!modal);
    };

    return (
        <div>
            <Container sx={{ py: 8 }} maxWidth="md">
                <Grid container spacing={4}>
                    {films && films.map((film) => (
                        <Grid item key={film.episode_id} xs={12} sm={6} md={4}>
                            <Card
                                sx={{ height: "100%", display: "flex", flexDirection: "column" }}
                            >
                                <CardMedia
                                    component="img"
                                    image="https://source.unsplash.com/random"
                                    alt="random"
                                    sx={{ height: "150px" }}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h6" component="h2">
                                        Title: <span style={{ fontSize: 15 }}>{film.title}</span>
                                    </Typography>
                                    <Typography>
                                        {film.opening_crawl.slice(0, 131)}...
                                    </Typography>
                                    <Typography sx={{ mt: 1 }}>
                                        <b>Release Date:</b> {film.release_date}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" onClick={(e: any) => viewFilmModal(e, film)}>View</Button>
                                </CardActions>
                            </Card>

                        </Grid>
                    ))}
                    {modal && film &&
                        <FilmModal modal={modal} closeModal={closeModal} film={film} />
                    }
                </Grid>
            </Container>
        </div>
    );
}
