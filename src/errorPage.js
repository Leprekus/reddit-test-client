import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error)

    return (
        <div id='error-page'>
            <h1>Something went wrong...</h1>
            <p>reminder to offer a way out of error page</p>
            <p>
                <i>{ error.statusText || error.message }</i>
            </p>
       
        </div>
    )
}