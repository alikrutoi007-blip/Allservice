import { ImageResponse } from "next/og";

export const alt = "Бәрі Жөн — ремонт и мастера по дому в Алматы";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#102a43",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#00b8a0",
            fontSize: 34,
            fontWeight: 800,
          }}
        >
          Бәрі Жөн
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div
            style={{
              maxWidth: 880,
              fontSize: 72,
              lineHeight: 1.06,
              fontWeight: 800,
              letterSpacing: -2,
            }}
          >
            Ремонт и мастера по дому в Алматы
          </div>
          <div style={{ fontSize: 31, color: "#c6d7e7" }}>
            Стоимость согласуем до начала работ
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 29,
          }}
        >
          <span>+7 708 181 9728</span>
          <span style={{ color: "#00b8a0" }}>Выезд по Алматы</span>
        </div>
      </div>
    ),
    size,
  );
}

