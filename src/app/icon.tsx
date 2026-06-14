import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#111820",
          color: "#ef5b2a",
          fontSize: 28,
          fontWeight: 800,
          borderRadius: 8,
        }}
      >
        A
      </div>
    ),
    size,
  );
}
