import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page",
  description: "This is Blog Page for Noctisgroup ",
  // other metadata
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Box of thoughts."
        description="All the gaming changing ideas we have."
      />

      <section className="pt-[120px] pb-[120px] dark:bg-gradient-to-br dark:from-[#0d0d0d] dark:via-[#1a0033] dark:to-[#000000]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          
        </div>
      </section>
    </>
  );
};

export default Blog;
