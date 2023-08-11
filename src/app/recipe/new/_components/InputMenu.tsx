import React, { useState } from "react";

import { Icon } from "@/components/icon/Icon";

export const InputMenu = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  return (
    <div className="relative h-6">
      <span className="cursor-pointer" onClick={() => setIsShowMenu(!isShowMenu)}>
        <Icon type="DotsVertical" color="gray" />
      </span>
      {isShowMenu && (
        <div className="absolute right-0 z-10 w-64 rounded border border-lightGray6 bg-lightGra1 text-gray shadow-sm">
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
  );
};
