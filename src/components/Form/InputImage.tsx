"use client";

import { useState } from "react";

import { UseFormRegister } from "react-hook-form";
import { z } from "zod";

import { Icon } from "@/components/Icon/Icon";
import { ImageComponent } from "@/components/Image";

type InputImageProps = {
  label: string;
  name: string;
  defaultValue?: string;
  addClassNames?: string;
  addClassNamesImage?: string;
  errorText?: string;
  register: UseFormRegister<any>;
};

// 5MB以下のファイルサイズで、jpegかpng形式の画像ファイルのみを許容するまたはundefined
const PERMIT_IMAGE_TYPES = ["image/jpeg", "image/png"];
const MAX_IMAGE_SIZE = 5242880;
const ImageSchema = z
  .custom<FileList | undefined>()
  .transform((file) => (file ? file[0] : undefined))
  .refine((file) => (file ? file.size < MAX_IMAGE_SIZE : true), { message: "画像サイズは5MB以下にしてください" })
  .refine((file) => (file ? PERMIT_IMAGE_TYPES.includes(file.type) : true), {
    message: "画像はjpegかpng形式でアップロードしてください",
  })
  .nullable();

export const InputImage: React.FC<InputImageProps> = (props) => {
  const [imagePath, setImagePath] = useState(props.defaultValue);
  const [errorMessage, setErrorMessage] = useState<string>();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    // バリデーション
    try {
      ImageSchema.parse(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        if (typeof e.target?.result === "string") {
          setImagePath(e.target.result);
        }
      };
    } catch (e) {
      if (e instanceof z.ZodError) {
        setErrorMessage(e.errors[0].message);
      }
    }
  };

  return (
    <div className={props.addClassNames}>
      <p className="mb-1 block pl-4 font-bold">{props.label}</p>
      <label className="inline-block cursor-pointer">
        {imagePath ? (
          <ImageComponent
            src={imagePath}
            alt="ユーザーの画像"
            width="small"
            ratio="1/1"
            isRounded
            isShadow
            addClassNames={props.addClassNamesImage}
          />
        ) : (
          <div className="ml-4 flex h-24 w-24 cursor-pointer flex-col items-center justify-center rounded-2xl border border-lightGray bg-inputGray">
            <span className="mb-1 text-small text-gray">画像を設定</span>
            <Icon type="Plus" size="small" color="gray" />
          </div>
        )}
        <input type="file" className="hidden" {...props.register(props.name, { onChange: handleChange })} />
      </label>
      {(errorMessage || props.errorText) && (
        <p className="mt-1 pl-4 text-small text-red">{errorMessage || props.errorText}</p>
      )}
    </div>
  );
};
