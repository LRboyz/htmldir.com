import { ThemeSwitch } from "@/components/theme-switch";
import VisitorCount from "@/components/visitor";
import { FaTwitter, FaEnvelope } from "react-icons/fa";
import { getClient } from "@umami/api-client";

const client = getClient();

export default async function Home() {
  const UMAMI_API_KEY = process.env.UMAMI_API_KEY;

  const { ok, data } = await client.getWebsitePageviews(UMAMI_API_KEY!, {
    startAt: new Date().setHours(0, 0, 0, 0),
    endAt: new Date().setHours(23, 59, 59, 999),
    unit: "day",
    timezone: "America/New_York",
  });

  console.log(ok, data);

  return (
    <section className="flex flex-col items-center justify-center h-screen dark:bg-black p-4 overflow-hidden">
      <div className="absolute top-4 left-4">
        <VisitorCount />
      </div>

      <div className="absolute top-4 right-4">
        <ThemeSwitch />
      </div>

      <div className="max-w-lg w-full bg-white dark:bg-neutral-800 overflow-hidden">
        <div className="p-4 sm:p-8">
          {/* Domain Name - Now More Prominent */}
          <div className="mb-8">
            <p className="text-2xl sm:text-3xl text-center text-blue-600 dark:text-blue-500 font-medium tracking-wide">
              htmldir.com
            </p>
          </div>

          {/* Header */}
          <div className="space-y-2 sm:space-y-3 mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-center text-neutral-900 dark:text-white">
              Premium Domain For Sale
            </h1>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          </div>

          {/* Body */}
          <div className="mb-8">
            <p className="text-sm sm:text-base text-center text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Secure this distinctive domain name for your next project.
              Available for immediate purchase at{" "}
              <span className="font-semibold text-primary">$500 USD</span>.
            </p>
          </div>

          {/* Footer - Contact Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a
              href="lr603552916@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              <FaEnvelope className="text-lg" />
              <span>Contact Me</span>
            </a>
            <a
              href="https://twitter.com/lrboyzz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-neutral-700 transition-colors duration-200 font-medium"
            >
              <FaTwitter className="text-lg" />
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
