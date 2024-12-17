import { Metadata } from "next";

export const metadata = {
  title: "Reliflex Machinery & Equipment | Catalog",
  description: "Catalog page of reliflex.",
  metadataBase: new URL("https://www.reliflexmachinery.in/catalog"),
};
export default function Layout({ children }) {
  return <div>{children}</div>;
}
