"use client";

import { usePathname } from "next/navigation";

/**
 * @package
 */
export type IconProps = { activeStrokeColor?: string };

export const FavIcon: React.FC<IconProps> = ({ activeStrokeColor }) => {
  const router = usePathname();
  const pathname = router === "/root" ? "/" : router;
  const activeColor = pathname === "/fav" ? "tomato" : "black";
  return (
    <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.125 14.1197L13 22.1667L4.875 14.1197C4.33908 13.5982 3.91694 12.9714 3.63517 12.2787C3.3534 11.586 3.2181 10.8425 3.23779 10.095C3.25748 9.3475 3.43174 8.61216 3.74958 7.93529C4.06743 7.25842 4.52198 6.6547 5.08461 6.16214C5.64724 5.66957 6.30576 5.29884 7.01871 5.07328C7.73166 4.84772 8.48359 4.77222 9.22714 4.85154C9.9707 4.93086 10.6898 5.16328 11.3391 5.53416C11.9884 5.90504 12.5539 6.40634 13 7.00651C13.448 6.4107 14.0141 5.91377 14.663 5.54683C15.3119 5.17989 16.0295 4.95083 16.771 4.87399C17.5125 4.79715 18.2618 4.87418 18.9722 5.10027C19.6825 5.32635 20.3385 5.69662 20.8992 6.1879C21.4598 6.67918 21.913 7.2809 22.2305 7.95539C22.5479 8.62988 22.7226 9.36263 22.7438 10.1078C22.765 10.8529 22.6322 11.5944 22.3536 12.2859C22.0751 12.9773 21.6568 13.6038 21.125 14.1262"
        stroke={activeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
