import React, { useImperativeHandle } from "react";

export const Sound = React.forwardRef(({ id, src }, ref) => {
  const audioRef = React.useRef();

  useImperativeHandle(ref, () => ({
    play: () => {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    },
  }));

  return <audio id={id} className="clip" src={src} ref={audioRef} />;
});
