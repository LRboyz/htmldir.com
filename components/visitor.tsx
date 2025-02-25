import { RiUser5Line } from "react-icons/ri";
import type { WebsitePageviews } from "@umami/api-client";
import { memo } from "react";

interface VisitorCountProps {
  className?: string;
  data:
    | WebsitePageviews
    | {
        pageviews: never[];
        sessions: never[];
      };
  onlineCount?: number;
  visitorLabel?: string;
  onlineLabel?: string;
  active?: number;
}

const VisitorCount = memo(
  ({
    className = "",
    data,
    onlineCount = 0,
    visitorLabel = "Total Visitors",
    onlineLabel = "Online Now",
    active = 0,
  }: VisitorCountProps) => {
    const visitorCount = 5000 + (data.sessions[0]?.y ?? 0);

    const formatNumber = (num: number) => {
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + "M";
      }
      if (num >= 1000) {
        return (num / 1000).toFixed(1) + "k";
      }
      return num.toLocaleString();
    };

    return (
      <div
        className={`inline-flex  items-start gap-4 rounded-lg px-4 py-2 
        text-neutral-700 dark:text-gray-300 
        hover:bg-neutral-100 dark:hover:bg-neutral-800 
        transition-colors duration-200 ${className}`}
      >
        <div className="inline-flex items-center gap-2">
          <RiUser5Line className="size-4" />
          <span className="text-sm font-medium">
            {visitorLabel}:{" "}
            <span className="font-bold">{formatNumber(visitorCount)}</span>
          </span>
        </div>
        <div className="inline-flex items-center gap-2">
          <div className="size-2 rounded-full bg-green-500"></div>
          <span className="text-sm font-medium">
            {onlineLabel}:{" "}
            <span className="font-bold">{formatNumber(active)}</span>
          </span>
        </div>
      </div>
    );
  }
);

VisitorCount.displayName = "VisitorCount";

export default VisitorCount;
