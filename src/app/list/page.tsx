import styles from "./styles.module.scss";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <p className={styles.title}>買い物リスト</p>
      <div className="flex justify-between mt-3 py-3 [border-bottom:1px_solid_lightgray]">
        <p className="text-[18px]">じぶんメモ</p>
        <p className="cursor-pointer">＋</p>
      </div>
      <div>
        <div className="flex py-2 [border-bottom:1px_solid_lightgray]">
          <button className="p-1">●</button>
          <p className="w-[85%] p-1">キャベツ</p>
          <p className="p-1 cursor-pointer text-[red] hover:[text-decoration-line:underline]">
            削除
          </p>
        </div>
        <div className="flex py-2 [border-bottom:1px_solid_lightgray]">
          <button className="p-1">◯</button>
          <p className="w-[85%] p-1">キャベツ</p>
          <p className="p-1 cursor-pointer text-[red] hover:[text-decoration-line:underline]">
            削除
          </p>
        </div>
        <div className="flex py-2 [border-bottom:1px_solid_lightgray]">
          <button className="p-1">●</button>
          <p className="w-[85%] p-1">キャベツ</p>
          <p className="p-1 cursor-pointer text-[red] hover:[text-decoration-line:underline]">
            削除
          </p>
        </div>
        <div className="flex py-2 [border-bottom:1px_solid_lightgray]">
          <button className="p-1">●</button>
          <p className="w-[85%] p-1">キャベツ</p>
          <p className="p-1 cursor-pointer text-[red] hover:[text-decoration-line:underline]">
            削除
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-3 py-3 [border-bottom:1px_solid_lightgray]">
        <p className="text-[18px]">グラタン</p>
        <p className="cursor-pointer">︙</p>
      </div>
      <div>
        <div className="flex py-2 [border-bottom:1px_solid_lightgray]">
          <button className="p-1">●</button>
          <p className="w-[85%] p-1">キャベツ</p>
          <p className="p-1 cursor-pointer text-[red] hover:[text-decoration-line:underline]">
            削除
          </p>
        </div>
        <div className="flex py-2 [border-bottom:1px_solid_lightgray]">
          <button className="p-1">◯</button>
          <p className="w-[85%] p-1">キャベツ</p>
          <p className="p-1 cursor-pointer text-[red] hover:[text-decoration-line:underline]">
            削除
          </p>
        </div>
        <div className="flex py-2 [border-bottom:1px_solid_lightgray]">
          <button className="p-1">●</button>
          <p className="w-[85%] p-1">キャベツ</p>
          <p className="p-1 cursor-pointer text-[red] hover:[text-decoration-line:underline]">
            削除
          </p>
        </div>
        <div className="flex py-2 [border-bottom:1px_solid_lightgray]">
          <button className="p-1">●</button>
          <p className="w-[85%] p-1">キャベツ</p>
          <p className="p-1 cursor-pointer text-[red] hover:[text-decoration-line:underline]">
            削除
          </p>
        </div>
      </div>
    </>
  );
}
