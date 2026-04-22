import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Coral Springs Smiles | Meet Our Experienced Dental Team",
  description: "Get to know Coral Springs Smiles - A leading dental care provider in Coral Springs, FL. Our experienced team offers personalized care for all your dental needs.",
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}