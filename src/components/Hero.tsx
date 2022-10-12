import { Container } from "@mui/material";

type maxWidthType = "sm" | "md" | "lg" | "xl" | "xs"

export interface IHeroProps {
    children: JSX.Element | JSX.Element[],
    maxWidth: maxWidthType,
}

export function Hero(props: IHeroProps) {
    return (
        <div>
            <Container maxWidth={props.maxWidth}>
                {props.children}
            </Container>
        </div>
    );
}
