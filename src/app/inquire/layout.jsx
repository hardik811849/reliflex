import { Metadata } from "next";

export const metadata = {
  title: "Reliflex Machinery & Equipment | Inquiry",
  description: "The official Website of Reliflex.",
  metadataBase: new URL("https://www.reliflexmachinery.in/inquire"),
};
export default function Layout({ children }) {
  return <div>{children}</div>;
}
