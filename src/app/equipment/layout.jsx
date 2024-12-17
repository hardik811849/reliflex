import { Metadata } from "next";

export const metadata = {
  title: "Equipments | Reliflex Machinery & Equipment ",
  description: "The Equipment page of reliflex.",
  metadataBase: new URL("https://www.reliflexmachinery.in/equipment"),
};
export default function Layout({ children }) {
  return <div>{children}</div>;
}
