import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "This is Contact Page for Noctisgroup",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Feel free to reach out to us!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
