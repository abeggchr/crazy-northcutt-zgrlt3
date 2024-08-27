import { useTracking } from "react-tracking";

export function Child() {
    var {trackEvent} = useTracking<any>({child: "child"});
    
    return (
        <button type='button' onClick={() => trackEvent({event: 'click in Child'})}>Child</button>
    )
}