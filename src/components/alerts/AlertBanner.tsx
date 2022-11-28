import React from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useAlertBanner } from "../../providers/alerts/AlertBannerProvider";
import cn from "classnames";

type Props = {
  close: () => void;
  level: string;
  message: string;
};

const variants = {
  success: "bg-alert-success-background text-alert-success-text",
  error: "bg-alert-danger-background text-alert-danger-text",
  info: "bg-alert-info-background text-alert-info-text",
  warning: "bg-alert-warning-background text-alert-warning-text"
} as { [key: string]: any };

const Banner = ({ close, level, message }: Props) => {
  return (
    <div className={cn(["sm:rounded-md p-4", variants[level]])}>
      <div className="flex">
        <div>
          {/* <h3 className="text-sm font-medium">Attention needed</h3> */}
          <div className="text-sm">
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
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
