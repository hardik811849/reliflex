"use client";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  Box,
  AccordionSummary as MuiAccordionSummary,
  Typography,
} from "@mui/material";
import { useState } from "react";

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<KeyboardDoubleArrowRight sx={{ fontSize: "1rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));
export const AccordionEquipment = ({ panel, summary, details }) => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const styles = {
    fontStyle: {
      fontWeight: 600,
      fontSize: { md: "16px", sm: "13px" },
      textTransform: "uppercase",
    },
  };
  return (
    <Accordion
      expanded={expanded === panel}
      onChange={handleChange(panel)}
      sx={{
        boxShadow: "none",
        "&:before": {
          display: "none",
        },
      }}
    >
      <AccordionSummary
        aria-controls={`${panel}bh-content`}
        id={`${panel}bh-header`}
        sx={{ py: 0.1 }}
      >
        <Typography
          sx={[
            styles.fontStyle,
            { color: expanded ? theme.palette.primary.main : "#000" },
          ]}
        >
          {summary}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ mt: -3, mb: -5 }}>{details}</AccordionDetails>
    </Accordion>
  );
};
