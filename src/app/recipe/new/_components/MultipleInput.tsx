"use client";

import { useState } from "react";

import { Icon } from "@/components/Icon/Icon";
import { AddButton } from "@/app/recipe/new/_components/AddButton";

type Props = {
  label: string;
  buttonTitle: string;
};

export const MultipleInput: React.FC<Props> = (props) => {
  const [value, setValue] = useState("");
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <div>
      <div className="flex items-center gap-4">
        <label className="mb-1 ml-4 font-bold text-black">{props.label}</label>
        <div className="flex gap-1.5">
          <Icon type="Minus" size="small" color="tomato" backgrondColor="lightTomato" />
          <Icon type="Plus" size="small" color="tomato" backgrondColor="lightTomato" />
        </div>
      </div>
      <div className="flex gap-4 border-y border-lightGray bg-white px-4 py-2">
        <input type="text" className="w-full border-none outline-none" onChange={(e) => setValue(e.target.value)} />
        {value && (
          <div className="relative h-6">
            <span className="cursor-pointer" onClick={() => setIsShowMenu(!isShowMenu)}>
              <Icon type="DotsVertical" color="gray" />
            </span>
            {isShowMenu && (
              <div className="absolute right-0 w-64 rounded border border-lightGray6 bg-lightGra1 text-gray shadow-sm">
                <div className="flex flex-col gap-3 border-b border-lightGray py-2 pl-3">
                  <button className="flex items-center gap-2">
                    <Icon type="ChevronUp" size="small" color="gray" />
                    <span>上に移動する</span>
                  </button>
                  <button className="flex items-center gap-2">
                    <Icon type="ChevronDown" size="small" color="gray" />
                    <span>下に移動する</span>
                  </button>
                </div>
                <div className="flex flex-col gap-3 py-2 pl-3">
                  <button className="flex items-center gap-2">
                    <Icon type="Trash" color="gray" size="small" />
                    <span>リストから削除する</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <AddButton title={props.buttonTitle} />
    </div>
  );
};
