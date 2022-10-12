import { Link, Typography } from "@mui/material";

export function Footer() {
    return (
        <div>
            <Typography variant="body2" color="text.secondary" align="center">
                {"Copyright © "}
                <Link color="inherit">
                    StarBox Website
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
            </Typography>
        </div>
    );
}
