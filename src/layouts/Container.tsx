import { ReactNode } from "react";
import AppHeader from "../components/Header";

interface ContainerLayoutProps {
  children: ReactNode;
}
const ContainerLayout = ({ children }: ContainerLayoutProps) => {
  return (
    <div className="">
      <AppHeader />

      <hr className="border-neutral-800" />

      {children}
    </div>
  );
};

export default ContainerLayout;
