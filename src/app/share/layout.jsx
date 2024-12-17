import { Metadata } from "next";

export const metadata = {
  title: "Reliflex Machinery & Equipment | Share",
  description: "Link page of reliflex.",
  metadataBase: new URL("https://www.reliflexmachinery.in/share"),
};
export default function Layout({ children }) {
  return <div>{children}</div>;
}
