import React from "react";

import { useAlertBanner } from "../../providers/alerts/AlertBannerProvider";

const Banner = ({
  close,
  level,
  message
}) => {
  console.log(close, level, message)
  return (
    <>

    </>
  );
};

const AlertBanner = () => {
  const { state, dispatch } = useAlertBanner();
  const { open, level, message, duration = 4000 } = state;

  React.useEffect(() => {
    if (open) {
      setTimeout(() => {
        dispatch({ type: "close" });
      }, duration);
    }
  }, [open, dispatch, duration]);

  if (open) {
    return (
      <Banner
        close={() => dispatch({ type: "close" })}
        level={level}
        message={message}
      />
    );
  }
  return null;
};

export default AlertBanner;
