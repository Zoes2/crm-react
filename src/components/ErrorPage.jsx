import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError()

    return(
        <h1>Error</h1>
    )
}