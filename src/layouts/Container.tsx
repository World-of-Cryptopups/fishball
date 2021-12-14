import { ReactNode } from "react";
import AppFooter from "../components/Footer";
import AppHeader from "../components/Header";

interface ContainerLayoutProps {
  children: ReactNode;
}
const ContainerLayout = ({ children }: ContainerLayoutProps) => {
  return (
    <div className="min-h-screen">
      <AppHeader />

      <hr className="border-neutral-800" />

      <div className="pb-20 z-10">{children}</div>

      <AppFooter />
    </div>
  );
};

export default ContainerLayout;
