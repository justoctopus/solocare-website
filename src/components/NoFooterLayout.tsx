import { ReactNode } from "react";
import Header from "./Header";

interface Props {
  children: ReactNode;
}

export default function NoFooterLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
}
