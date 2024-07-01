"use client";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { Add as AddIcon, Minimize } from "@mui/icons-material";
import { useState } from "react";

const FAQPageContent = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const AccordionItem = ({ panel, summary, details }) => {
    return (
      <Accordion
        expanded={expanded === panel}
        onChange={handleChange(panel)}
        sx={{ boxShadow: "none" }}
      >
        <AccordionSummary
          expandIcon={expanded === panel ? <Minimize /> : <AddIcon />}
          aria-controls={`${panel}bh-content`}
          id={`${panel}bh-header`}
          sx={{ py: { lg: 2, md: 0.5 } }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xl: "25px", lg: "18px" },
              color: "#182022",
            }}
          >
            {summary}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{details}</Typography>
        </AccordionDetails>
      </Accordion>
    );
  };
  return (
    <Box sx={{ mt: { lg: 2, xl: 0 } }}>
      <AccordionItem
        panel="panel1"
        summary="Corem ipsum dolor sit amet ?"
        details=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit."
      />
      <AccordionItem
        panel="panel2"
        summary="Corem ipsum dolor sit amet Corem ipsum
        dolor sit amet ?"
        details=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit."
      />
      <AccordionItem
        panel="panel3"
        summary="Corem ipsum dolor sit amet Corem ipsum
        dolor sit amet ?"
        details=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit."
      />
      <AccordionItem
        panel="panel4"
        summary="Corem ipsum dolor sit amet ?"
        details=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit."
      />
      <AccordionItem
        panel="panel5"
        summary="Corem ipsum dolor sit amet Corem ipsum
        dolor sit amet ?"
        details=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit."
      />
      <AccordionItem
        panel="panel6"
        summary="Corem ipsum dolor sit amet ?"
        details=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit."
      />
      <AccordionItem
        panel="panel7"
        summary="Corem ipsum amet ?"
        details=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit."
      />
    </Box>
  );
};

export default FAQPageContent;
