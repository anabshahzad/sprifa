import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#061223",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
          <path
            d="M8 34C8 18 20 6 36 6H50V30C50 33.3 47.3 36 44 36H24C24 47 33 56 44 56H50V94H36C20 94 8 82 8 66V34Z"
            fill="#72D85A"
          />
          <circle cx="78" cy="24" r="18" fill="#00D8D0" />
          <path
            d="M56 44H86C88.2 44 90 45.8 90 48V70C90 83.3 79.3 94 66 94H56V44Z"
            fill="#007F7A"
          />
          <rect x="8" y="60" width="34" height="34" rx="12" fill="#00A6A0" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
