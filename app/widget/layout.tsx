import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customise Car Colour",
  description: "Preview a new paint finish on your car before you commit.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function WidgetLayout({ children }: { children: React.ReactNode }) {
  return children;
}
