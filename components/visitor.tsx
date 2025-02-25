"use client";

import { useEffect, useState } from "react";
import { FaUserFriends } from "react-icons/fa";

interface VisitorCountProps {
  className?: string;
}

const VisitorCount: React.FC<VisitorCountProps> = ({ className = "" }) => {
  const [visitorCount, setVisitorCount] = useState<number>(0);

  useEffect(() => {
    const generateVisitorCount = () => {
      // Get today's date as a random seed
      const today = new Date();
      const dateString = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;

      // Generate a pseudo-random number using the date string
      const seed = dateString.split("").reduce((acc, char) => {
        return acc + char.charCodeAt(0);
      }, 0);

      // Use the seed to generate today's visitor count (between 500-800)
      const random = Math.sin(seed) * 10000;
      const count = Math.floor(Math.abs(random) % 301) + 500; // Range: 500 to 800

      setVisitorCount(count);
    };

    generateVisitorCount();

    // Update data every hour
    const interval = setInterval(generateVisitorCount, 3600000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`flex items-center gap-2 text-neutral-700 dark:text-gray-400 ${className}`}
    >
      <FaUserFriends className="w-5 h-5" />
      <span className="text-sm">
        Today&apos;s Visitors: {visitorCount.toLocaleString()}
      </span>
    </div>
  );
};

export default VisitorCount;
