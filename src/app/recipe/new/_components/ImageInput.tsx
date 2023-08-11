import React, { Dispatch, SetStateAction, useRef, useState } from "react";

import { useFormContext } from "react-hook-form";

import { Icon } from "@/components/icon/Icon";

type Props = {
  imageData: string;
  setImageData: Dispatch<SetStateAction<string>>;
};

export const ImageInput: React.FC<Props> = (props) => {
  const fileInput = useRef<HTMLInputElement | null>(null);

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const deployment = (files: FileList) => {
    const file = files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      props.setImageData(fileReader.result as string);
    };
    fileReader.readAsDataURL(file);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length <= 0) return;
    deployment(files);
  };

  const { ref, ...rest } = register("imageUrl", {
    onChange,
    required: "ファイルを選択してください",
  });

  return (
    <div>
      <h3 className="mb-1 ml-4 font-bold text-black">画像（任意）</h3>
      <label className="ml-4 flex h-24 w-24 flex-col items-center justify-center gap-1 rounded-md border border-lightGray">
        {props.imageData ? (
          <div>
            <img src={props.imageData} />
          </div>
        ) : (
          <div className="text-center">
            <p className="text-small text-gray">画像を設定</p>
            <Icon type="Plus" color="lightGray" size="small" />
            <input
              className="hidden"
              type="file"
              accept="image/*"
              ref={(e) => {
                ref(e);
                fileInput.current = e;
              }}
              {...rest}
            />
          </div>
        )}
      </label>
    </div>
  );
};
