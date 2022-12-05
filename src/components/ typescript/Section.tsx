import React from "react";
import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  title?: string;
};

const Section = ({
  children,
  title = "This is a default value",
}: SectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
};

export default Section;
