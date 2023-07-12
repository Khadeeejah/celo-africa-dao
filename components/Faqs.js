import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Flex,
  Heading
} from "@chakra-ui/react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const faqsData = [
  {
    id: 1,
    question: "What controls the DAO?",
    answer:
      "do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 2,
    question: "How does the DAO work?",
    answer:
      "do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 3,
    question: " How can i be part of the DAO?",
    answer:
      "do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 4,
    question: "When was the DAO created?",
    answer:
      "do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat."
  }
];

const Faqs = () => {
  return (
    <>
      <Flex
        as="faq"
        bg="fbf6f1"
        py="20px"
        px={{ base: "20px", sm: "60px", md: "100px" }}
        flexDirection="column"
      >
        <Heading as="h2" size="md" textAlign="center" mb="40px">
          General FAQs
        </Heading>
        {faqsData.map((item) => (
          <div key={item.id}>
          <Accordion allowMultiple>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" w="100%">
                        {item.question}
                      </Box>
                      {isExpanded ? (
                        <AiOutlineMinusCircle fontSize="12px" />
                      ) : (
                        <AiOutlinePlusCircle fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} width="600px">
                    {item.answer}
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
          </div>

        ))}
      </Flex>
    </>
  );
};
export default Faqs;
