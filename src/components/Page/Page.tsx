import React, { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";
import "./Page.css";

type PageProps = {
  children: ReactNode;
};

const Page = ({ children }: PageProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Page;
