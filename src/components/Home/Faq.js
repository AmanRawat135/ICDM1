import React, { useState } from "react";
import "./FAQ.css"
import Question from "../questions/question";
import questions from "./data"
export default function FAQs() {
    return <section id="FAQs">
        <div className="container pt-5 pb-3">
            <header>
                <div className="faqsHeading">Freqeuently asked<b> Questions </b></div>
            </header>
        </div>
        <main>
            <div className="container1">
                {/* <h3>Frequently Asked Questions</h3> */}
                <section className="info1">
                    {questions.map((item, index) => {
                        return <Question key={index} {...item} />
                    })}
                </section>
            </div>
        </main>
    </section>
}
