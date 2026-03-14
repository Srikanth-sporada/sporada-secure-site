import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, MessageCircle, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { io } from 'socket.io-client';

// Mock Session ID Generator
const getSessionId = () => {
  let sessionId = localStorage.getItem('whatsapp_chat_session');
  if (!sessionId) {
    sessionId = 'session_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('whatsapp_chat_session', sessionId);
  }
  return sessionId;
};

const SOCKET_URL = "http://localhost:4000";

export const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState('choice'); // 'choice' or 'chat'
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! How can we help you today?", sender: 'agent', timestamp: new Date() }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  
  const socketRef = useRef(null);
  const scrollRef = useRef(null);
  const sessionId = getSessionId();

  // Initialize Socket.io connection
  useEffect(() => {
    socketRef.current = io(SOCKET_URL, {
      autoConnect: false,
    });

    socketRef.current.on('connect', () => {
      console.log('Connected to WhatsApp Widget Server');
      setIsConnected(true);
    });

    socketRef.current.on('disconnect', () => {
      console.log('Disconnected from WhatsApp Widget Server');
      setIsConnected(false);
    });

    socketRef.current.on('message', (data) => {
      setIsTyping(false);
      setMessages(prev => [...prev, data]);
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, []);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setView('choice');
  };

  const initiateSocketConnection = () => {
    if (socketRef.current && !socketRef.current.connected) {
      socketRef.current.connect();
    }
    setView('chat');
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newUserMessage = {
      id: Date.now(),
      text: message,
      sender: 'user',
      timestamp: new Date(),
      sessionId: sessionId
    };

    setMessages(prev => [...prev, newUserMessage]);
    setMessage('');
    
    // Send via Socket.io
    if (socketRef.current && socketRef.current.connected) {
      socketRef.current.emit('message', newUserMessage);
      setIsTyping(true); // Show typing while waiting for server echo
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = "917399750001"; 
    const text = encodeURIComponent("Hi Sporada! I'm interested in your security solutions.");
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 pointer-events-auto"
          >
            {view === 'choice' ? (
              <Card className="w-[320px] shadow-2xl border-border/40 overflow-hidden bg-white dark:bg-zinc-900 ring-1 ring-black/5">
                <div className="bg-[#25D366] p-6 text-white relative">
                  <button
                    onClick={toggleWidget}
                    className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                  <h3 className="text-xl font-bold mb-1">Hi there 👋</h3>
                  <p className="text-white/80 text-sm">How can we help you today?</p>
                </div>
                <CardContent className="p-4 space-y-3">
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-2">Choose an option</p>

                  <button
                    onClick={initiateSocketConnection}
                    className="w-full flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all text-left group border border-transparent hover:border-border/60"
                  >
                    <div className="bg-primary/10 p-2 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Chat on Website</h4>
                      <p className="text-xs text-muted-foreground">Talk to us right here, no app needed.</p>
                    </div>
                  </button>

                  <button
                    onClick={openWhatsApp}
                    className="w-full flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all text-left group border border-transparent hover:border-border/60"
                  >
                    <div className="bg-[#25D366]/10 p-2 rounded-lg text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.123.554 4.197 1.606 6.04L0 24l6.117-1.604a11.803 11.803 0 005.923 1.585h.005c6.637 0 12.032-5.391 12.036-12.028a11.81 11.81 0 00-3.517-8.403z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Open in WhatsApp</h4>
                      <p className="text-xs text-muted-foreground">Continue in your WhatsApp app.</p>
                    </div>
                  </button>
                </CardContent>
              </Card>
            ) : (
              <Card className="w-[360px] h-[520px] shadow-2xl border-border/40 overflow-hidden bg-white dark:bg-zinc-900 flex flex-col ring-1 ring-black/5">
                {/* Chat Header */}
                <div className="bg-[#25D366] p-4 text-white flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/40">
                        <User size={20} />
                      </div>
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#25D366] rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-bold leading-none mb-1 text-sm">Sporada Support</h4>
                      <span className="text-[10px] text-white/80 font-medium">{isConnected ? 'Online' : 'Connecting...'}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setView('choice')}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                      title="Back to options"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={toggleWidget}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>

                {/* Chat Messages */}
                <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto bg-zinc-50 dark:bg-zinc-950/50 space-y-4">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[80%] p-3 rounded-2xl text-xs font-medium shadow-sm leading-relaxed ${msg.sender === 'user'
                        ? 'bg-primary text-primary-foreground rounded-tr-none'
                        : 'bg-white dark:bg-zinc-800 border border-border/50 rounded-tl-none'
                        }`}>
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-white dark:bg-zinc-800 border border-border/50 p-3 rounded-2xl rounded-tl-none flex gap-1">
                        <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-muted-foreground rounded-full" />
                        <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-muted-foreground rounded-full" />
                        <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-muted-foreground rounded-full" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Chat Input */}
                <form onSubmit={handleSendMessage} className="p-4 bg-white dark:bg-zinc-900 border-t border-border/40 flex gap-2 shrink-0">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-grow bg-zinc-100 dark:bg-zinc-800 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-primary transition-all outline-none"
                    disabled={!isConnected}
                  />
                  <Button type="submit" size="icon" className="shrink-0 rounded-xl" disabled={!message.trim() || !isConnected}>
                    <Send size={18} />
                  </Button>
                </form>
              </Card>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleWidget}
        className="pointer-events-auto w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-shadow relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.123.554 4.197 1.606 6.04L0 24l6.117-1.604a11.803 11.803 0 005.923 1.585h.005c6.637 0 12.032-5.391 12.036-12.028a11.81 11.81 0 00-3.517-8.403z" />
        </svg>
      </motion.button>
    </div>
  );
};
