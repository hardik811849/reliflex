import { Metadata } from "next";

export const metadata = {
  title: "Reliflex Machinery & Equipment | About Us",
  description: "About Us page of reliflex.",
  metadataBase: new URL("https://www.reliflexmachinery.in/about-us"),
};
export default function Layout({ children }) {
  return <div>{children}</div>;
}
