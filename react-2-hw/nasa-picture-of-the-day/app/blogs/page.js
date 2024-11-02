"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const Blogs = () => {
  const blogPosts = [
    { title: "My First Blog", slug: "my-first-blog" },
    { title: "Learning Vanilla Js", slug: "learning-vanilla-js" },
    { title: "How To Land Your First Tech job", slug: "first-tech-job" },
  ];

  return (
    <div>
      <Navbar />

      <h1>Blog Posts</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
