import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/properties/lush4",
        destination: "/properties/plots-for-sale-in-kitengela",
        permanent: true,
      },
      {
        source: "/properties/konza",
        destination: "/properties/plots-for-sale-in-machakos",
        permanent: true,
      },
      {
        source: "/properties/tumaini",
        destination: "/properties/plots-for-sale-in-tumaini-nakuru",
        permanent: true,
      },
      {
        source: "/properties/bahati",
        destination: "/properties/plots-for-sale-in-bahati-nakuru",
        permanent: true,
      },
      {
        source: "/properties/kitengela",
        destination: "/properties/plots-for-sale-in-kitengela",
        permanent: true,
      },
      {
        source: "/properties/machakos",
        destination: "/properties/plots-for-sale-in-machakos",
        permanent: true,
      },
      {
        source: "/properties/malindi",
        destination: "/properties/plots-for-sale-in-malindi",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;