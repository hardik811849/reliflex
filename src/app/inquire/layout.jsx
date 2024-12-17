import { Metadata } from "next";

export const metadata = {
  title: "Inquire Now | Reliflex Machinery & Equipment ",
  description: "The official Website of Reliflex.",
  metadataBase: new URL("https://www.reliflexmachinery.in/inquire"),
};
export default function Layout({ children }) {
  return <div>{children}</div>;
}
