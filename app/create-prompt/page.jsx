"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";

const CreatePrompt = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  const CreatePrompts = async (e) => {
    e.preventDefault();
    setSubmitting(true)

    try{

    } catch(error) {
      const response = await fetch('/api/prompt/new' , {
        method: 'POST',
        body: JSON.stringify({
          prompt: post.prompt,
          useId: session.user.id
        })
      })
    }
  };
  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={CreatePrompts}
    />
  );
};
export default CreatePrompt;
