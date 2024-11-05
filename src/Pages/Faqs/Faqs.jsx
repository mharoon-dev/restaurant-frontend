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
    {
      question:
        "How do I place an order, and what payment methods are available?",
      answer:
        "Placing an order is simple: browse our menu on our website or app, select your favorite dishes, and add them to your cart. At checkout, you can choose from various payment options, including credit/debit cards, mobile wallets, and cash on delivery for your convenience. ",
    },
    {
      question: "What should I do if my order is delayed or incorrect?",
      answer:
        "If your order is delayed or incorrect, please contact our customer support team immediately via the app or website. We are committed to resolving any issues promptly to ensure you receive the correct order as quickly as possible.",
    },
    {
      question: " Do you accommodate food allergies and dietary restrictions?",
      answer:
        "Absolutely. We take food allergies and dietary restrictions seriously. Our menu includes allergen information for each item, and if you have specific concerns, please reach out to our customer support team before placing your order to ensure your needs are fully accommodated.",
    },
  ];
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Banner
        img="https://www.shutterstock.com/image-illustration/question-mark-front-color-wall-260nw-1706677192.jpg"
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
