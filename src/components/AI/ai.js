import React, { useState, useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

  .ai-lab-wrapper {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
    font-family: 'DM Mono', monospace;
    z-index: 20;
  }

  .ai-lab-card {
    position: relative;
    z-index: 20;
    width: 100%;
    max-width: 780px;
    background: rgba(10, 8, 20, 0.75);
    border: 1px solid rgba(108, 99, 255, 0.25);
    border-radius: 20px;
    backdrop-filter: blur(16px);
    box-shadow: 0 0 60px rgba(108, 99, 255, 0.1), 0 20px 60px rgba(0,0,0,0.5);
    overflow: hidden;
  }

  .ai-lab-header {
    padding: 28px 32px 20px;
    border-bottom: 1px solid rgba(108, 99, 255, 0.15);
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .ai-lab-avatar {
    width: 42px;
    height: 42px;
    border-radius: 12px;
    background: linear-gradient(135deg, #6c63ff, #a78bfa);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    flex-shrink: 0;
    box-shadow: 0 0 20px rgba(108, 99, 255, 0.4);
    color: white;
  }

  .ai-lab-title {
    font-family: 'Syne', sans-serif;
    font-size: 1.5em;
    font-weight: 800;
    color: #fff;
    margin: 0;
    letter-spacing: -0.5px;
  }

  .ai-lab-title span {
    color: #a78bfa;
  }

  .ai-lab-subtitle {
    font-size: 0.72em;
    color: rgba(255,255,255,0.4);
    margin: 2px 0 0;
    letter-spacing: 0.5px;
  }

  .ai-lab-status {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 0.7em;
    color: rgba(255,255,255,0.4);
    letter-spacing: 0.5px;
  }

  .status-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #4ade80;
    box-shadow: 0 0 8px #4ade80;
    animation: pulse-dot 2s infinite;
  }

  @keyframes pulse-dot {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  .ai-lab-messages {
    padding: 24px 32px;
    min-height: 380px;
    max-height: 420px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
    scrollbar-width: thin;
    scrollbar-color: rgba(108,99,255,0.3) transparent;
  }

  .ai-lab-messages::-webkit-scrollbar { width: 4px; }
  .ai-lab-messages::-webkit-scrollbar-track { background: transparent; }
  .ai-lab-messages::-webkit-scrollbar-thumb {
    background: rgba(108,99,255,0.3);
    border-radius: 4px;
  }

  .msg-row {
    display: flex;
    gap: 10px;
    animation: fadeSlideIn 0.3s ease forwards;
  }

  .msg-row.user { flex-direction: row-reverse; }

  @keyframes fadeSlideIn {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .msg-icon {
    width: 30px;
    height: 30px;
    border-radius: 8px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    margin-top: 2px;
    color: white;
  }

  .msg-icon.ai {
    background: linear-gradient(135deg, #6c63ff, #a78bfa);
    box-shadow: 0 0 12px rgba(108,99,255,0.3);
  }

  .msg-icon.user {
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.12);
  }

  .msg-bubble {
    max-width: 80%;
    padding: 12px 16px;
    border-radius: 14px;
    font-size: 0.82em;
    line-height: 1.65;
    letter-spacing: 0.2px;
  }

  .msg-bubble.ai {
    background: rgba(108, 99, 255, 0.1);
    border: 1px solid rgba(108, 99, 255, 0.2);
    color: rgba(255,255,255,0.88);
    border-top-left-radius: 4px;
  }

  .msg-bubble.user {
    background: linear-gradient(135deg, #6c63ff, #7c3aed);
    color: #fff;
    border-top-right-radius: 4px;
    box-shadow: 0 4px 20px rgba(108,99,255,0.25);
  }

  .typing-indicator {
    display: flex;
    gap: 4px;
    align-items: center;
    padding: 4px 0;
  }

  .typing-indicator span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(108, 99, 255, 0.7);
    animation: typing-bounce 1.2s infinite;
  }

  .typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
  .typing-indicator span:nth-child(3) { animation-delay: 0.4s; }

  @keyframes typing-bounce {
    0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
    30%            { transform: translateY(-5px); opacity: 1; }
  }

  .ai-lab-footer {
    padding: 16px 24px 24px;
    border-top: 1px solid rgba(108, 99, 255, 0.12);
  }

  .ai-lab-form {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .ai-lab-input {
    flex: 1;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(108, 99, 255, 0.2);
    border-radius: 12px;
    padding: 12px 18px;
    color: #fff;
    font-family: 'DM Mono', monospace;
    font-size: 0.82em;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    letter-spacing: 0.2px;
  }

  .ai-lab-input::placeholder { color: rgba(255,255,255,0.25); }

  .ai-lab-input:focus {
    border-color: rgba(108, 99, 255, 0.6);
    box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.1);
  }

  .ai-lab-send {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: linear-gradient(135deg, #6c63ff, #7c3aed);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: transform 0.15s, box-shadow 0.15s, opacity 0.15s;
    box-shadow: 0 4px 16px rgba(108,99,255,0.35);
  }

  .ai-lab-send:hover:not(:disabled) {
    transform: scale(1.05);
    box-shadow: 0 6px 24px rgba(108,99,255,0.5);
  }

  .ai-lab-send:active:not(:disabled) { transform: scale(0.97); }

  .ai-lab-send:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .send-icon {
    width: 18px;
    height: 18px;
    fill: none;
    stroke: white;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .ai-lab-hint {
    margin-top: 10px;
    font-size: 0.68em;
    color: rgba(255,255,255,0.2);
    text-align: center;
    letter-spacing: 0.4px;
  }

  .suggestion-chips {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 16px;
  }

  .chip {
    padding: 5px 12px;
    border-radius: 20px;
    border: 1px solid rgba(108, 99, 255, 0.25);
    background: rgba(108, 99, 255, 0.08);
    color: rgba(255,255,255,0.5);
    font-family: 'DM Mono', monospace;
    font-size: 0.72em;
    cursor: pointer;
    transition: all 0.2s;
    letter-spacing: 0.3px;
  }

  .chip:hover {
    border-color: rgba(108, 99, 255, 0.6);
    color: rgba(255,255,255,0.85);
    background: rgba(108, 99, 255, 0.15);
  }
`;

const SUGGESTIONS = [
  "What are Sebastian's skills?",
  "Tell me about his internship",
  "What research has he done?",
  "Has he worked with VR?",
];

const generateResponse = (question) => {
  const q = question.toLowerCase();

  if (
    q.includes("intern") ||
    q.includes("coaction") ||
    q.includes("work experience") ||
    q.includes("job")
  ) {
    return "Sebastian interned at Coaction Global as a Software Developer, where he built a full dashboard messaging system using Angular, .NET, and AWS. He also migrated 200+ messages to DynamoDB — saving the company around $12,000 per year!";
  }

  if (
    q.includes("research") ||
    q.includes("paddleseg") ||
    q.includes("image segmentation") ||
    q.includes("computer vision")
  ) {
    return "He works as an Undergraduate Research Assistant using Python and PaddleSeg to perform image segmentation, analyzing environmental properties and human perception through computer vision techniques.";
  }

  if (
    q.includes("skill") ||
    q.includes("tech") ||
    q.includes("language") ||
    q.includes("stack") ||
    q.includes("know")
  ) {
    return "Sebastian's toolkit includes JavaScript, TypeScript, Python, Java, Angular, .NET, AWS, and Unity. He's comfortable across the full stack and has hands-on experience in both industry and research settings.";
  }

  if (
    q.includes("vr") ||
    q.includes("unity") ||
    q.includes("virtual reality")
  ) {
    return "Yes! He built immersive VR research environments in Unity designed for experimental data collection — pretty cutting-edge stuff for an undergrad researcher.";
  }

  if (q.includes("aws") || q.includes("cloud") || q.includes("dynamo")) {
    return "Sebastian has practical AWS experience from his internship at Coaction Global — specifically working with DynamoDB for a large-scale message migration that saved the company ~$12,000 annually.";
  }

  if (
    q.includes("angular") ||
    q.includes(".net") ||
    q.includes("frontend") ||
    q.includes("backend")
  ) {
    return "He built a dashboard messaging system at Coaction Global using Angular on the frontend and .NET on the backend, with AWS infrastructure powering it all.";
  }

  if (q.includes("python")) {
    return "Python is one of Sebastian's go-to languages — he uses it extensively in his computer vision research with PaddleSeg for image segmentation tasks.";
  }

  if (
    q.includes("who") ||
    q.includes("about") ||
    q.includes("sebastian") ||
    q.includes("yourself") ||
    q.includes("introduce")
  ) {
    return "Sebastian Joseph is a Computer Science student and software developer passionate about AI-driven systems, full-stack development, and research-backed engineering. He's gained real-world experience through both a software internship and undergraduate research.";
  }

  if (
    q.includes("contact") ||
    q.includes("hire") ||
    q.includes("reach") ||
    q.includes("email")
  ) {
    return "You can reach Sebastian through the contact section of this portfolio. He's open to internship and full-time opportunities!";
  }

  if (q.includes("project") || q.includes("built") || q.includes("made")) {
    return "Sebastian has built a dashboard messaging system at Coaction Global, immersive VR environments for research in Unity, and contributed to computer vision research using Python and PaddleSeg. Check out the Projects section for more!";
  }

  return "Great question! Sebastian is a CS student focused on AI systems, full-stack dev, and research engineering. Try asking about his internship, research, skills, or VR work — I know all about those!";
};

function AI() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi! I'm Sebastian's AI assistant. Ask me anything about his experience, research, or skills.",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = (text) => {
    if (!text.trim() || isTyping) return;

    setMessages((prev) => [...prev, { sender: "user", text }]);
    setInput("");
    setIsTyping(true);

    // Simulate a short typing delay for realism
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: generateResponse(text) },
      ]);
      setIsTyping(false);
    }, 800);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <Container
      fluid
      className="home-section"
      style={{ position: "relative", minHeight: "100vh" }}>
      <style>{STYLES}</style>
      <Particle />

      <div className="ai-lab-wrapper">
        <div className="ai-lab-card">
          {/* Header */}
          <div className="ai-lab-header">
            <div className="ai-lab-avatar">✦</div>
            <div>
              <h1 className="ai-lab-title">
                AI <span>LAB</span>
              </h1>
              <p className="ai-lab-subtitle">SEBASTIAN'S ASSISTANT</p>
            </div>
            <div className="ai-lab-status">
              <div className="status-dot" />
              ONLINE
            </div>
          </div>

          {/* Messages */}
          <div className="ai-lab-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`msg-row ${msg.sender}`}>
                <div className={`msg-icon ${msg.sender}`}>
                  {msg.sender === "ai" ? "✦" : "↑"}
                </div>
                <div className={`msg-bubble ${msg.sender}`}>{msg.text}</div>
              </div>
            ))}

            {isTyping && (
              <div className="msg-row ai">
                <div className="msg-icon ai">✦</div>
                <div className="msg-bubble ai">
                  <div className="typing-indicator">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Footer */}
          <div className="ai-lab-footer">
            {messages.length <= 1 && (
              <div className="suggestion-chips">
                {SUGGESTIONS.map((s, i) => (
                  <button
                    key={i}
                    className="chip"
                    type="button"
                    onClick={() => sendMessage(s)}>
                    {s}
                  </button>
                ))}
              </div>
            )}

            <form className="ai-lab-form" onSubmit={handleSubmit}>
              <input
                id="ai-lab-chat-input"
                name="ai-lab-chat-input"
                className="ai-lab-input"
                type="text"
                placeholder="Ask about Sebastian's experience, skills..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isTyping}
                autoComplete="off"
              />
              <button
                className="ai-lab-send"
                type="submit"
                disabled={isTyping || !input.trim()}>
                <svg className="send-icon" viewBox="0 0 24 24">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>

            <p className="ai-lab-hint">
              Ask about Sebastian's work, research, or technical skills
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default AI;
