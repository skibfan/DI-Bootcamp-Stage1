import { useRouteError } from "react-router-dom";

export const ErrorBoundary = (props) => {
    const error = useRouteError()
    
    
    return (<>
    <div>
        <h1>wow error</h1>
        <p>sorry nothing to see here</p>
    </div>
    </>)
}