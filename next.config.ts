import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Put title/description in <head> for Lighthouse and other tools that do not
  // wait for Next.js streaming metadata (see nextjs.org/docs/app/api-reference/config/next-config-js/htmlLimitedBots).
  htmlLimitedBots: /.*/,
};

export default nextConfig;
