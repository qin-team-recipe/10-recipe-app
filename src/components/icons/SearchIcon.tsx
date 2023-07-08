"use client";

import { usePathname } from "next/navigation";

/**
 * @package
 */
export type IconProps = { activeStrokeColor?: string };

export const SearchIcon: React.FC<IconProps> = ({ activeStrokeColor }) => {
  const router = usePathname();
  const pathname = router === "/root" ? "/" : router;
  const activeColor = pathname === "/" ? "tomato" : "black";
  return (
    <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.25 11.3333C3.25 12.3292 3.44615 13.3153 3.82725 14.2353C4.20834 15.1554 4.76693 15.9914 5.47111 16.6956C6.17528 17.3997 7.01126 17.9583 7.93132 18.3394C8.85137 18.7205 9.83747 18.9167 10.8333 18.9167C11.8292 18.9167 12.8153 18.7205 13.7353 18.3394C14.6554 17.9583 15.4914 17.3997 16.1956 16.6956C16.8997 15.9914 17.4583 15.1554 17.8394 14.2353C18.2205 13.3153 18.4167 12.3292 18.4167 11.3333C18.4167 10.3375 18.2205 9.35137 17.8394 8.43132C17.4583 7.51126 16.8997 6.67528 16.1956 5.97111C15.4914 5.26693 14.6554 4.70834 13.7353 4.32725C12.8153 3.94615 11.8292 3.75 10.8333 3.75C9.83747 3.75 8.85137 3.94615 7.93132 4.32725C7.01126 4.70834 6.17528 5.26693 5.47111 5.97111C4.76693 6.67528 4.20834 7.51126 3.82725 8.43132C3.44615 9.35137 3.25 10.3375 3.25 11.3333Z"
        stroke={activeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.75 23.25L16.25 16.75"
        stroke={activeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
