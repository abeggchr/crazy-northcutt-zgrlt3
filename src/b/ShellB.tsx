import { useTracking } from "react-tracking";
import "../App.css";
import { Outlet } from "react-router-dom";

export function ShellB() {
    var {trackEvent} = useTracking<any>({shell: "shell B"});

    return (
        <>
                <button type='button' onClick={() => trackEvent({event: 'click in Shell B'})}>Shell B</button>
                <br />
                <br />
                <Outlet />
        </>);
}