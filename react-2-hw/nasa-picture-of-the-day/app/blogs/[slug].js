// pages/blogs/[slug].js
import { usePathname } from "next/navigation";

const BlogPost = () => {
  const pathname = usePathname();

  // Extract the title from the path
  const title = pathname.split("/").pop().replace(/-/g, " ");

  // Capitalize each word in the title
  const formattedTitle = title
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div>
      <h1>{formattedTitle}</h1>
      <p>This is the content for {formattedTitle}.</p>
    </div>
  );
};

export default BlogPost;
