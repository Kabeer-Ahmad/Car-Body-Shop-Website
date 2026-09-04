import type { NextConfig } from "next";
import { REDIRECTED_BLOG_SLUGS } from "./lib/site-routes";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
  },
  async redirects() {
    return REDIRECTED_BLOG_SLUGS.map((slug) => ({
      source: `/blog/${slug}`,
      destination: `/services/${slug}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
