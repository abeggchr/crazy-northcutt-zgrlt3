import { useTracking } from "react-tracking";
import "./App.css";
import { Outlet } from "react-router-dom";

export function Shell() {
    var {trackEvent} = useTracking<any>({shell: "shell"});

    return (
        <>
            <button type='button' onClick={() => trackEvent({event: 'click in Shell'})}>Shell</button>
            <br />
            <br />
            <Outlet />
        </>);
}