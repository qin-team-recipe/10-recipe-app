"use client";

import { usePathname } from "next/navigation";

/**
 * @package
 */
export type IconProps = { activeStrokeColor?: string };

export const ShoppingCartIcon: React.FC<IconProps> = ({ activeStrokeColor }) => {
  const router = usePathname();
  const pathname = router === "/root" ? "/" : router;
  const activeColor = pathname === "/list" ? "tomato" : "black";
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.33333 20.5834C4.33333 21.158 4.5616 21.7091 4.96793 22.1154C5.37426 22.5217 5.92536 22.75 6.49999 22.75C7.07463 22.75 7.62573 22.5217 8.03206 22.1154C8.43839 21.7091 8.66666 21.158 8.66666 20.5834C8.66666 20.0087 8.43839 19.4576 8.03206 19.0513C7.62573 18.645 7.07463 18.4167 6.49999 18.4167C5.92536 18.4167 5.37426 18.645 4.96793 19.0513C4.5616 19.4576 4.33333 20.0087 4.33333 20.5834Z"
        stroke={activeColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.25 20.5834C16.25 21.158 16.4783 21.7091 16.8846 22.1154C17.2909 22.5217 17.842 22.75 18.4167 22.75C18.9913 22.75 19.5424 22.5217 19.9487 22.1154C20.3551 21.7091 20.5833 21.158 20.5833 20.5834C20.5833 20.0087 20.3551 19.4576 19.9487 19.0513C19.5424 18.645 18.9913 18.4167 18.4167 18.4167C17.842 18.4167 17.2909 18.645 16.8846 19.0513C16.4783 19.4576 16.25 20.0087 16.25 20.5834Z"
        stroke={activeColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.4167 18.4167H6.49999V3.25H4.33333"
        stroke={activeColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.5 5.41669L21.6667 6.50002L20.5833 14.0834H6.5"
        stroke={activeColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
