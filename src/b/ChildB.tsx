import { useTracking } from "react-tracking";

export function ChildB() {
    var {trackEvent} = useTracking<any>({child: "child B"});
    
    return (
        <button type='button' onClick={() => trackEvent({event: 'click in Child B, missing tracking information from Shell B'})}>Child B</button>
    )
}