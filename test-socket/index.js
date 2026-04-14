import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
app.use(cors());

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*", // In production, specify your website URL
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('message', (data) => {
    console.log('Message received from session:', data.sessionId, 'content:', data.text);

    // Echo the message back or send a custom response
    setTimeout(() => {
      socket.emit('message', {
        id: Date.now(),
        text: `Echo from Sporada Server: I received your message "${data.text}". A specialist will respond shortly to session ${data.sessionId}.`,
        sender: 'agent',
        timestamp: new Date()
      });
    }, 1500);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

const PORT = 4000;
httpServer.listen(PORT, () => {
  console.log(`WhatsApp Test Socket Server running on http://localhost:${PORT}`);
});

