import { useTracking } from "react-tracking";
import "../App.css";
import { Outlet } from "react-router-dom";

export function ShellA() {
    var {Track, trackEvent} = useTracking<any>({shell: "shell A"});

    return (
        <>
            <Track>
                <button type='button' onClick={() => trackEvent({event: 'click in Shell A'})}>Shell A</button>
                <br />
                <br />
                <Outlet />
            </Track>
        </>);
}