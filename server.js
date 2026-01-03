const express = require("express");
const http = require("http");
const WebSocket = require("ws");
require("dotenv").config();

const app = express();
const server = http.createServer(app);

// WebSocket server
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("🔌 Twilio WebSocket connected");

  ws.on("message", (message) => {
    try {
      const data = JSON.parse(message.toString());

      if (data.event === "start") {
        console.log("📞 Call started:", data.start.callSid);
      }

      if (data.event === "media") {
        const audioBuffer = Buffer.from(data.media.payload, "base64");
        console.log("🎧 Audio chunk size:", audioBuffer.length);
      }

      if (data.event === "stop") {
        console.log("❌ Call ended");
      }
    } catch (err) {
      console.error("Error parsing message:", err);
    }
  });

  ws.on("close", () => {
    console.log("🔌 WebSocket closed");
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
