"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { NextPage } from "next";
import Image from "next/image";

import { clientComponentSupabase } from "@/lib/clientComponentSupabase";
import { Chef } from "@/types/tableType";

const Page: NextPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [chef, setChef] = useState<Chef[]>([]);

  useEffect(() => {
    const fetchChef = async () => {
      const data = await fetch("http://localhost:3000/api/chef");
      const chef = await data.json();

      if (!chef) return;

      setChef(chef);
    };

    fetchChef();
  }, []);
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.[0]) return;
    setFile(event.target.files?.[0]);
  };

  const uploadImage = async () => {
    if (file) {
      const filePath = `public/${file.name}`;
      let { error: uploadError } = await clientComponentSupabase.storage.from("chefs").upload(filePath, file);

      if (uploadError) {
        console.error("Error uploading image:", uploadError);
        return;
      }

      let imageUrl = clientComponentSupabase.storage.from("chefs").getPublicUrl(filePath);
      console.log(imageUrl);

      let { error: insertError } = await clientComponentSupabase.from("chef").insert({
        name: "Chef",
        description: "Test",
        image_url: imageUrl.data.publicUrl,
      });

      if (insertError) {
        console.error("Error saving image URL:", insertError);
      }
    }
  };
  console.log(chef);

  return (
    <div className="App">
      <Image src={chef[0]?.image_url} alt="test" width={30} height={30} />
      <input type="file" onChange={(event) => handleFileChange(event)} />
      <button onClick={uploadImage}>Upload</button>
    </div>
  );
};

export default Page;
