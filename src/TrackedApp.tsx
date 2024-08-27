import { PropsWithChildren } from 'react';
import { useTracking } from 'react-tracking';

export function TrackedApp({ children }: PropsWithChildren) {
  const { Track } = useTracking({trackedApp: "trackedApp"}, {
    dispatch: (event) => {
      console.log(event);
    },
  });

  return (
    <Track>
      {children}
    </Track>
  );
}
