import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "This is About Page for Noctisgroup ",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Know all about us here.

Noctis is where ideas take flight. We’re not just building platforms – we’re creating ecosystems that connect people, spark collaboration, and turn imagination into reality.

From uniting colleges and creative minds to gamifying social interactions, Noctis thrives on innovation, curiosity, and community.

At its core, Noctis is about connection: people, ideas, and futures. We’re shaping a digital frontier where collaboration feels natural and play meets purpose.

This is just the beginning.

Join us. Build with us. Become part of Noctis."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
