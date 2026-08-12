import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Color Visualizer",
  description: "See your car in a different color before you commit.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function WidgetLayout({ children }: { children: React.ReactNode }) {
  return children;
}
