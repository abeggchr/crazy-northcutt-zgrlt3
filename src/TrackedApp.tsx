import { PropsWithChildren, useState } from 'react';
import { useTracking } from 'react-tracking';

export function TrackedApp({ children }: PropsWithChildren) {
  const [event, setEvent] = useState<string>('');

  const { Track } = useTracking({trackedApp: "trackedApp"}, {
    dispatch: (event) => {
      setEvent(JSON.stringify(event));
    },
  });

  return (
    <Track>
      <a href="/a">A - Shell has Track</a>| 
      <a href="/b">B - Shell has no Track</a>
      <br />
      <br />
      {children}
      <p>{event}</p>
    </Track>
  );
}
