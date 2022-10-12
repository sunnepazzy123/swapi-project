import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { Footer } from "./Footer";
import Header from "./Header";



export interface ILayoutProps {
    children: JSX.Element | JSX.Element[],
}

export function Layout(props: ILayoutProps) {
    return (
        <div className='Layout'>
            <Header />
            <Grid container marginTop={2} >
                <Container>
                    {props.children}
                </Container>
            </Grid>
            <Footer />
        </div>
    );
}
