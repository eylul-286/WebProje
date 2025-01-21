import React, { useState } from "react";
import '../styles/Guest.css'; 

const Guest = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    {
      question: "What will happen when I’ve sent my application?",
      answer: "",
    },
    {
      question: "Can I get a free trial before I purchase?",
      answer:
        "Ipsum is the result of synergy between our teams and our customers. Our company culture is focused on excellent productivity, customer satisfaction, respect for team and individual achievements.",
    },
    {
      question: "What should I include in my personal statement?",
      answer: "",
    },
    {
      question: "Will membership plans be charged automatically?",
      answer: "",
    },
    {
        question: "What will happen when I’ve sent my application?",
        answer: "",
      },
      {
        question: "Can I get a free trial before I purchase??",
        answer: "",
      },
  ];

  return (
    <div className="faq-container">
      <div className="faq-header">
        <span className="faq-tag">FAQ</span>
        <h1 className="faq-title">Customer Questions</h1>
      </div>
      <div className="faq-list">
        {questions.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <p>{item.question}</p>
              <span className="faq-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guest;
