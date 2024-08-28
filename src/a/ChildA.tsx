import { useTracking } from "react-tracking";

export function ChildA() {
    var {trackEvent} = useTracking<any>({child: "child A"});
    
    return (
        <button type='button' onClick={() => trackEvent({event: 'click in Child A, with tracking information from Shell A'})}>Child A</button>
    )
}