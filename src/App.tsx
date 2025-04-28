import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [toggleStates, setToggleStates] = useState<boolean[]>([
    true,
    false,
    false,
    false,
  ]);

  const toggleFAQ = (index: number) => {
    setToggleStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className="md:pt-[167px] pt-[142px]  md:bg-[url('/assets/images/background-pattern-desktop.svg')] bg-[url('/assets/images/background-pattern-mobile.svg')] bg-top bg-fixed md:h-[320px] h-[232px] ">
      <div className="max-w-[600px] py-4 md:pt-[40px] md:pb-[35px] shadow-sm bg-white md:mx-auto mx-6 rounded-xl px-6 md:px-[40px]">
        <div className="flex items-center gap-x-6 ">
          <img
            src="/assets/images/icon-star.svg"
            alt="star icon besides logo"
            className="w-[20.99px] h-[20.99px] cursor-pointer md:w-[34px] md:h-[34px]"
          />
          <h1 className="text-[32px] md:text-[56px] font-bold">FAQS</h1>
        </div>
        <div className="border-b border-pink mb-5 pb-6">
          <div>
            <div>
              <h2
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    toggleFAQ(0);
                  }
                }}
                className="text-[18px] mt-4 font-semibold"
              >
                <button
                  className="flex text-start cursor-pointer hover:text-hover-color transition-all text-dark-purple items-center w-full justify-between"
                  aria-expanded={toggleStates[0]}
                  aria-controls="accordion-panel-1"
                  id="accordion-button-1"
                >
                  <span>What is Frontend Mentor, and how will it help me?</span>
                  {!toggleStates[0] && (
                    <img
                      onClick={() => toggleFAQ(0)}
                      src="/assets/images/icon-plus.svg"
                      alt="plus icon besides logo"
                      className="w-[28.38px] h-[28.38px] cursor-pointer"
                    />
                  )}
                  {toggleStates[0] && (
                    <img
                      onClick={() => toggleFAQ(0)}
                      src="/assets/images/icon-minus.svg"
                      alt="minus icon besides logo"
                      className="w-[28.38px] h-[28.38px] cursor-pointer"
                    />
                  )}
                </button>
              </h2>
            </div>
            <AnimatePresence>
              {toggleStates[0] && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div
                    id="accordion-panel-1"
                    role="region"
                    aria-labelledby="accordion-button-1"
                    hidden={!toggleStates[0]}
                  >
                    <p className="text-[16px] text-text-color mt-[24px]">
                      Frontend Mentor offers realistic coding challenges to help
                      developers improve their frontend coding skills with
                      projects in HTML, CSS, and JavaScript. It's suitable for
                      all levels and ideal for portfolio building.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="border-b border-pink mb-5 pb-6">
          <div>
            <div>
              <h2
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    toggleFAQ(1);
                  }
                }}
                className="text-[18px] font-semibold"
              >
                <button
                  className="flex text-start cursor-pointer hover:text-hover-color transition-all text-dark-purple items-center w-full justify-between"
                  aria-expanded={toggleStates[1]}
                  aria-controls="accordion-panel-1"
                  id="accordion-button-1"
                >
                  Is Frontend Mentor free?
                  {!toggleStates[1] && (
                    <img
                      onClick={() => toggleFAQ(1)}
                      src="/assets/images/icon-plus.svg"
                      alt="plus icon besides logo"
                      className="w-[28.38px] h-[28.38px] cursor-pointer"
                    />
                  )}
                  {toggleStates[1] && (
                    <img
                      onClick={() => toggleFAQ(1)}
                      src="/assets/images/icon-minus.svg"
                      alt="minus icon besides logo"
                      className="w-[28.38px] h-[28.38px] cursor-pointer"
                    />
                  )}
                </button>
              </h2>
            </div>
            <AnimatePresence>
              {toggleStates[1] && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div
                    id="accordion-panel-1"
                    role="region"
                    aria-labelledby="accordion-button-1"
                    hidden={!toggleStates[1]}
                  >
                    <p className="text-[16px] text-text-color mt-[24px]">
                      Yes, Frontend Mentor offers both free and premium coding
                      challenges, with the free option providing access to a
                      range of projects suitable for all skill levels.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="border-b border-pink mb-5 pb-6">
          <div>
            <div>
              <h2
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    toggleFAQ(2);
                  }
                }}
                className="text-[18px] font-semibold"
              >
                <button
                  className="flex text-start cursor-pointer hover:text-hover-color transition-all text-dark-purple items-center w-full justify-between"
                  aria-expanded={toggleStates[2]}
                  aria-controls="accordion-panel-3"
                  id="accordion-button-3"
                >
                  Can I use Frontend Mentor projects in my portfolio?
                  {!toggleStates[2] && (
                    <img
                      onClick={() => toggleFAQ(2)}
                      src="/assets/images/icon-plus.svg"
                      alt="plus icon besides logo"
                      className="w-[28.38px] h-[28.38px] cursor-pointer"
                    />
                  )}
                  {toggleStates[2] && (
                    <img
                      onClick={() => toggleFAQ(2)}
                      src="/assets/images/icon-minus.svg"
                      alt="minus icon besides logo"
                      className="w-[28.38px] h-[28.38px] cursor-pointer"
                    />
                  )}
                </button>
              </h2>
            </div>
            <AnimatePresence>
              {toggleStates[2] && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div
                    id="accordion-panel-1"
                    role="region"
                    aria-labelledby="accordion-button-1"
                    hidden={!toggleStates[2]}
                  >
                    <p className="text-[16px] text-text-color mt-[24px]">
                      Yes, you can use projects completed on Frontend Mentor in
                      your portfolio. It's an excellent way to showcase your
                      skills to potential employers!
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div>
          <div>
            <div>
              <h2
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    toggleFAQ(3);
                  }
                }}
                className="text-[18px] font-semibold "
              >
                <button
                  className="flex text-start cursor-pointer hover:text-hover-color transition-all text-dark-purple items-center w-full justify-between"
                  aria-expanded={toggleStates[3]}
                  aria-controls="accordion-panel-4"
                  id="accordion-button-4"
                >
                  How can I get help if I'm stuck on a challenge?
                  {!toggleStates[3] && (
                    <img
                      onClick={() => toggleFAQ(3)}
                      src="/assets/images/icon-plus.svg"
                      alt="plus icon besides logo"
                      className="w-[28.38px] h-[28.38px] cursor-pointer"
                    />
                  )}
                  {toggleStates[3] && (
                    <img
                      onClick={() => toggleFAQ(3)}
                      src="/assets/images/icon-minus.svg"
                      alt="minus icon besides logo"
                      className="w-[28.38px] h-[28.38px] cursor-pointer"
                    />
                  )}
                </button>
              </h2>
            </div>
            <AnimatePresence>
              {toggleStates[3] && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div
                    id="accordion-panel-1"
                    role="region"
                    aria-labelledby="accordion-button-1"
                    hidden={!toggleStates[3]}
                  >
                    <p className="text-[16px] text-text-color mt-[24px]">
                      The best place to get help is inside Frontend Mentor's
                      Discord community. There's a help channel where you can
                      ask questions and seek support from other community
                      members.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
