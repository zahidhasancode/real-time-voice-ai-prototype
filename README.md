# Real-Time Voice AI Prototype (Node.js)

A real-time AI voice calling prototype built to explore **low-latency (<300ms perceived)** voice interactions using a **streaming, predictive architecture**.

This project focuses on **telephony + WebSocket audio streaming**, forming the foundation of an enterprise-grade AI voice agent platform.

---

## 🚀 Project Goal

The goal of this project is to prove that **human-like AI voice responses** are possible by:

- Streaming audio in real time (no batch processing)
- Avoiding REST APIs in the live call path
- Triggering AI responses **before the user finishes speaking**
- Supporting interruption and cancellation

This repository represents a **working prototype**, not a finished SaaS product.

---

## 🧠 Core Concepts

- One call = one dedicated async worker
- Persistent WebSocket connections
- Streaming audio (20ms frames)
- Predictive speech detection (no silence waiting)
- Cancelable AI responses
- Latency-first design

---

## 🏗️ Current Status

✅ Project scaffolding  
✅ Node.js WebSocket server  
✅ ngrok public tunnel  
✅ Twilio Media Streams integration (in progress)  
🚧 Live audio chunk verification (WIP)  
🚧 Streaming STT (planned)  
🚧 LLM + TTS pipeline (planned)

---

## 🧩 Architecture Overview

Phone Call
↓
Twilio Media Streams (WebSocket)
↓
Node.js WebSocket Server
↓
[ Streaming Audio Pipeline ]
↓
( STT → LLM → TTS ) ← planned


## 📁 Project Structure

real-time-voice-ai-prototype/
├── audio/ # audio buffering (planned)
├── intent/ # intent detection logic (planned)
├── llm/ # LLM streaming (planned)
├── stt/ # speech-to-text (planned)
├── tts/ # text-to-speech (planned)
├── vad/ # voice activity detection (planned)
├── utils/ # shared utilities
├── ws/ # websocket handlers (planned)
├── server.js # WebSocket server entry point
├── package.json
├── package-lock.json
├── .env.example
└── README.md

---

## 🛠️ Tech Stack

- Node.js
- WebSockets
- Twilio Media Streams
- ngrok (local tunneling)

**Planned integrations:**
- Deepgram (Streaming STT)
- OpenAI (Streaming LLM)
- ElevenLabs (Low-latency TTS)

---

## ⚙️ Local Setup

### Prerequisites
- Node.js (v18+ recommended)
- ngrok account
- Twilio account with a phone number

---

### Installation

```bash
git clone https://github.com/zahidhasancode/real-time-voice-ai-prototype.git
cd real-time-voice-ai-prototype
npm install
Environment Variables

Create a .env file (do NOT commit it):

PORT=3000


See .env.example for reference.

Run Server
node server.js


Expose locally using ngrok:

ngrok http 3000

⚠️ Important Notes

This project is latency-first, not accuracy-first

REST APIs are intentionally avoided in the live audio path

This is a learning and exploration prototype

Not production-ready

🧪 Why This Project Exists

Most AI voice demos hide latency using pre-recorded audio or batch processing.

This project explores:

Real streaming constraints

Telecom-grade behavior

Predictive response strategies

Why many AI voice demos fail in real phone calls

📌 Roadmap

 Confirm live audio chunk streaming

 Add streaming STT (partial transcripts)

 Add predictive intent triggering

 Add streaming LLM responses

 Add chunked TTS playback

 Handle user interruptions

 Measure end-to-end latency

📄 License

MIT (can be updated later)

👋 Author

Built by Zahid Hasan
Exploring real-time AI voice systems and low-latency architectures.


