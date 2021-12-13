import { ReactNode } from "react";
import AppFooter from "../components/Footer";
import AppHeader from "../components/Header";

interface ContainerLayoutProps {
  children: ReactNode;
}
const ContainerLayout = ({ children }: ContainerLayoutProps) => {
  return (
    <div className="">
      <AppHeader />

      <hr className="border-neutral-800" />

      <div className="min-h-screen">{children}</div>

      <hr className="border-neutral-800" />

      <AppFooter />
    </div>
  );
};

export default ContainerLayout;
