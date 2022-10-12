import { Box, Modal, Typography } from "@mui/material";
import { ISwapiFilm } from "../store/api/interfaces/swapi.interface";
import {FormEvent} from "react";

const style = {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: 5,
    borderColor: "whitesmoke"
};

export interface IFilmModalProps {
    film: ISwapiFilm
    modal: boolean,
     // eslint-disable-next-line
    closeModal: (input: boolean) => void
}

export function FilmModal({ modal, film, closeModal }: IFilmModalProps) {

    const handleClose = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        closeModal(false);
    };

    return (
        <Modal
            open={modal}
            onClose={(e: FormEvent<HTMLInputElement>) => handleClose(e)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Title: {film.title}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {film.opening_crawl}
                </Typography>
            </Box>
        </Modal>
    );
}

