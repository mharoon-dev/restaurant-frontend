import "./Faqs.css";
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";
export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqs = [
    { question: "Question 1?", answer: "This is the answer to question 1.This is the answer to question 1.This is the answer to question 1.This is the answer to question 1.This is the answer to question 1.This is the answer to question 1.This is the answer to question 1.This is the answer to question 1.This is the answer to question 1.This is the answer to question 1.This is the answer to question 1.This is the answer to question 1.This is the answer to question 1.This is the answer to question 1.This is the answer to question 1." },
    { question: "Question 2?", answer: "This is the answer to question 2." },
    { question: "Question 3?", answer: "This is the answer to question 3." },
  ];
  return (
    <>
      <Navbar />
      <Banner
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-KRSXasVXyXWjjB-rxwD7NdRbxXsM1iiQnQ&s"
        text="FAQS"
      />

      <div className="container">
        <div className="row gap-4">
          <div className="col-12">
            <h1 className="text-center privacyH1">FAQS</h1>
          </div>
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={index}>
                <div className="question" onClick={() => toggleAnswer(index)}>
                  <span>{faq.question}</span>
                  <button className="plus-btn">
                    {activeIndex === index ? "-" : "+"}
                  </button>
                </div>
                {activeIndex === index && (
                  <div className="answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}
