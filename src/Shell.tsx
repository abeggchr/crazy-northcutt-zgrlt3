import { useTracking } from "react-tracking";
import "./App.css";
import { Outlet } from "react-router-dom";

export function Shell() {
    var {Track, trackEvent} = useTracking<any>({shell: "shell"});

    return (
        <>
            <Track>
                <button type='button' onClick={() => trackEvent({event: 'click in Shell'})}>Shell</button>
                <br />
                <br />
                <Outlet />
            </Track>
        </>);
}