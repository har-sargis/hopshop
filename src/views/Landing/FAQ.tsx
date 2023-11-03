"use client";

import React, { useState } from "react";

function FAQBox() {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const questionsAnswers = [
    {
      question: "How does the visual search work?",
      answer:
        "We have a database of billions of images, which we update on a daily basis. When user starts looking for a specific fashion-related items, we identify the item inside the picture, our AI makes a deep analyse, understands pattens, styles, and returns the exact or similar product which are now available and shoppable.",
    },
    {
      question: "How accurate are the results?",
      answer:
        "HopShop AI conducts an in-depth analysis, understands patterns and styles, and returns the exact or similar products which are now available to purchase.",
    },
    {
      question: "How often is inventory data being updated on HopShop?",
      answer:
        "We get the refreshed data daily from our official partner stores. We keep the data updated using our automated data management system, so that HopShop shoppers don’t have to deal with such issues as out-of-stock products, unavailable sizes, etc..",
    },
    {
      question: "Can I suggest a new feature?",
      answer: "Email us and send all your product-related offers and suggestions. ",
      link: "info@hopshop.ai",
    },
  ];

  return (
    <div>
      {questionsAnswers.map((item, index) => (
        <div
          key={index}
          className={`p-10 my-4 border-2 rounded-12 border-brand-blue-light bg-gray-7 ${
            selectedQuestion === index ? "" : "border-dotted"
          }`}
          onClick={() => setSelectedQuestion(selectedQuestion === index ? null : index)}
        >
          <p className='text-2xl font-semibold text-gray-5'>{item.question}</p>
          {selectedQuestion === index && <p className='mt-3 text-gray-5 opacity-70'>{item.answer}</p>}
        </div>
      ))}
    </div>
  );
}

export default FAQBox;
