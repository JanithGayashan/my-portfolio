import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = "Janith Gayashan — AI Engineer portfolio";
export const size = { width: 1200, height: 630 };
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
          justifyContent: "center",
          background: "#0B0914",
          padding: "80px",
          color: "white",
          borderLeft: "16px solid #8B5CF6",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#c4b5fd",
            marginBottom: 28,
          }}
        >
          {profile.role}
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700 }}>
          {profile.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#d1d5db",
            marginTop: 32,
          }}
        >
          Machine learning · AI workflows · Backend development
        </div>
      </div>
    ),
    size,
  );
}
