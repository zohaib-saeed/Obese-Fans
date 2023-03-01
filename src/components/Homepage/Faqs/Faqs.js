import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Fade } from "react-awesome-reveal";

import Container from "@/components/Commons/Container/Container";
import ResponsiveHeading from "@/components/Commons/ResponsiveHeading/ResponsiveHeading";
import { faqs } from "@/data/faqs";

const Faqs = () => {
  return (
    <Container>
      <div className="w-full flex flex-col items-center justify-start gap-10 md:gap-12 lg:gap-16 py-10 md:py-12 lg:py-16">
        <ResponsiveHeading text="Faq" />
        {/* List => Faqs  */}
        <div className="w-full flex items-center justify-start flex-col gap-2">
          <Fade direction="up" cascade={0.1} className="w-full" triggerOnce>
            {faqs.map((item, index) => (
              <Accordion
                key={index}
                className="w-full border-main border-solid border-2 "
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        fontSize: "30px ",
                        fontWeight: 500,
                        color: "#00A6CB",
                      }}
                    />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className="text-white font-medium text-lg  text-left w-full">
                    {item.summary}
                  </div>
                </AccordionSummary>
                <AccordionDetails className="!bg-none">
                  <p className="text-white font-medium text-lg  left w-full">
                    {item.detail}
                  </p>
                </AccordionDetails>
              </Accordion>
            ))}
          </Fade>
        </div>
      </div>
    </Container>
  );
};

export default Faqs;
