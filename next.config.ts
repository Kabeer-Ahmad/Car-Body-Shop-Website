import type { NextConfig } from "next";

const DUPLICATE_BLOG_TO_SERVICE_SLUGS = [
  "full-car-respray-rochdale",
  "trade-motor-dealer-bodyshop-services",
  "accident-collision-repair-rochdale",
  "bumper-repair-rochdale",
  "dent-removal-rochdale",
  "car-scratch-repair-rochdale",
  "minor-accident-repair-rochdale",
  "lease-return-repairs-rochdale",
];

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
  },
  async redirects() {
    return DUPLICATE_BLOG_TO_SERVICE_SLUGS.map((slug) => ({
      source: `/blog/${slug}`,
      destination: `/services/${slug}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
