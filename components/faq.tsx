"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordian";

const faqs = [
  {
    section: "General",
    qa: [
      {
        question: "What is NovaFlow?",
        answer: (
          <span>
            NovaFlow is a modern Cloud Solutions library that provides a
            collection of components and utilities to help you build beautiful
            and accessible dashboards.
          </span>
        ),
      },
      {
        question: "How can I get started with NovaFlow",
        answer: (
          <span>
            To get started with Novaflow, simply sign up for an account and
            start building your first project. Our documentation provides
            detailed instructions on how to get started.
          </span>
        ),
      },
    ],
  },
  {
    section: "Support",
    qa: [
      {
        question: "Does NovaFlow offer technical support?",
        answer: (
          <span>
            Yes! When you sign up for a paid account, you will have one of our
            trusted advisors assigned to you to help you with any technical
            issues you may have.
          </span>
        ),
      },
    ],
  },
  {
    section: "Customization",
    qa: [
      {
        question: "Can I customize NovaFlow components?",
        answer: (
          <span>
            Absolutely! NovaFlow components are fully customizable. You can use
            our utility classes to change the appearance of the components to
            match your brand.
          </span>
        ),
      },
    ],
  },
  {
    section: "Integration",
    qa: [
      {
        question: "How do I integrate Magic UI with my existing project?",
        answer: (
          <span>
            Magic UI can be integrated into any React project. Simply install
            the library, import the components you need, and start using them in
            your project. Our documentation provides detailed instructions for
            integration.
          </span>
        ),
      },
    ],
  },
];

export function FAQ() {
  return (
    <section id="faq">
      <div className="py-14">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h4 className="text-xl font-bold tracking-tight text-gray-400 dark:text-white">
              FAQs
            </h4>
            <h2 className="text-4xl font-bold tracking-tight text-[#e0e1dd] dark:text-white sm:text-6xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 text-xl leading-8 text-gray-400/80 dark:text-white">
              Need help with something? Here are some of the most common
              questions we get.
            </p>
          </div>
          <div className="container mx-auto my-12 max-w-[600px] space-y-12">
            {faqs.map((faq, idx) => (
              <section key={idx} id={"faq-" + faq.section}>
                <h2 className="mb-4 text-left text-base font-semibold tracking-tight text-gray-400/80">
                  {faq.section}
                </h2>
                <Accordion
                  type="single"
                  collapsible
                  className="flex w-full flex-col items-center justify-center"
                >
                  {faq.qa.map((faq, idx) => (
                    <AccordionItem
                      key={idx}
                      value={faq.question}
                      className="w-full max-w-[600px] text-gray-300"
                    >
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            ))}
          </div>
          <h4 className="mb-12 text-center text-sm text-gray-400/80 font-medium tracking-tight ">
            Still have questions? Email us at{" "}
            <a href="mailto:support@example.com" className="underline">
              support@novaflow.com
            </a>
          </h4>
        </div>
      </div>
    </section>
  );
}
