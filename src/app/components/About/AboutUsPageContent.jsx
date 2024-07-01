"use client";
import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import Image from "next/image";
import redMachine from "../../../../public/ourServices/redMachine.svg";
import dotsGrid from "../../../../public/dot.svg";
import contentImage1 from "../../../../public/about-us/contentImage1.svg";
import contentImage2 from "../../../../public/about-us/contentImage2.svg";
import contentImage3 from "../../../../public/about-us/contentImage3.svg";
import contentImage4 from "../../../../public/about-us/contentImage4.svg";
import contentImage5 from "../../../../public/about-us/contentImage5.svg";
import leftRedMachine from "../../../../public/featuredProducts/leftRedMachine.svg";
import leftYellowMachine from "../../../../public/industriesWeServe/leftYellowMachine.svg";
import concreteMixerMachine from "../../../../public/howDoesItWorks/concrete-mixer-machine.svg";
import concreteRoadCutter from "../../../../public/recentNews/concrete-road-cutter-machine.svg";

const AboutUsPageContent = () => {
  const theme = useTheme();
  const screenSizeXl = useMediaQuery(theme.breakpoints.up("xl"));
  const screenSizeXXl = useMediaQuery(theme.breakpoints.up("xxl"));
  const screenSizeLg = useMediaQuery(theme.breakpoints.up("lg"));
  const screenSizeMd = useMediaQuery(theme.breakpoints.up("md"));
  const screenSizeSm = useMediaQuery(theme.breakpoints.up("sm"));
  const screenSizeXs = useMediaQuery(theme.breakpoints.up("xs"));
  const styles = {
    paraFont: {
      color: theme.palette.text.subHead,
      fontWeight: 400,
      lineHeight: { xxl: "24px", xl: "16px" },
      fontSize: { xxl: "18px", xl: "14px", lg: "13px", md: "13px", sm: "14px" },
    },
  };
  return (
    <Box>
      <Box sx={{ mx: { lg: 36, md: 22, sm: 10, xs: 2 } }}>
        <Typography sx={styles.paraFont}>
          Reliflex Machinery & Equipment&apos;s is a Division of Reliflex Exim
          Services Pvt Ltd,
        </Typography>
        <br />
        <Typography sx={styles.paraFont}>
          Reliflex Machinery & Equipment&apos;s is a rapidly growing company
          involved in the design and manufacture of an extensive range of
          Machinery & Equipment&apos;s for the building and construction
          industry. We started our business by importing these machineries from
          countries like Germany, Japan, China, Turkey, USA, Vietnam to name few
          in the year 2011. Most of the machines are also manufactured or
          assembled in India.
        </Typography>
        <br />
        <Typography sx={styles.paraFont}>
          Now, Reliflex provides a diverse and comprehensive product line for
          different markets verticals and demands. Being Head Quarters at
          Bangalore India, our company has ever since expanded its operation in
          Major Cities in India being own warehouses or showrooms, and a strong
          dealer network with more than 800 dealers on board in different cities
          across India & In being Tanzania, Kenya, Dubai, Russia, China as
          Global Footprints.
        </Typography>
      </Box>
      {screenSizeMd && (
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", mt: -30, mr: 2 }}
        >
          <Image
            src={redMachine}
            alt="red machine"
            style={{
              width:
                screenSizeMd && !screenSizeLg
                  ? "150px"
                  : screenSizeLg && !screenSizeXl
                  ? "220px"
                  : "auto",
              height: "auto",
            }}
          />
        </Box>
      )}
      <Box id="content-wrapper" sx={{ mt: { lg: 0, md: 8 } }}>
        <Box
          id="first-content"
          sx={{
            display: "flex",
            flexDirection: { sm: "row", xs: "column" },
            justifyContent: "space-between",
            mx: { xl: 14, lg: 3 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: { xl: -17, lg: 1, md: 0, sm: 12 },
            }}
          >
            <Image
              src={dotsGrid}
              alt="dots grid"
              style={{
                width:
                  screenSizeXs && !screenSizeSm
                    ? "100px"
                    : screenSizeSm && !screenSizeMd
                    ? "150px"
                    : screenSizeMd && !screenSizeLg
                    ? "200px"
                    : screenSizeLg && !screenSizeXl
                    ? "320px"
                    : "423px",
                height: "auto",
              }}
            />
            <Image
              src={contentImage1}
              alt="image 1"
              style={{
                marginTop:
                  screenSizeXs && !screenSizeSm
                    ? "-30px"
                    : screenSizeSm && !screenSizeMd
                    ? "-50px"
                    : screenSizeMd && !screenSizeLg
                    ? "-50px"
                    : screenSizeLg
                    ? "-150px"
                    : "-100px",
                marginLeft:
                  screenSizeMd && !screenSizeLg
                    ? "100px"
                    : screenSizeLg
                    ? "180px"
                    : "80px",
                width:
                  screenSizeXs && !screenSizeSm
                    ? 200
                    : screenSizeSm && !screenSizeMd
                    ? 260
                    : screenSizeMd && !screenSizeLg
                    ? 300
                    : screenSizeXl && !screenSizeXXl
                    ? 500
                    : screenSizeXXl
                    ? 700
                    : 400,
                height: "auto",
              }}
            />
            <Typography
              sx={[
                styles.paraFont,
                {
                  marginLeft: { lg: "180px", md: "100px", sm: "78px" },
                  my: 2,
                  mx: { xs: 2 },
                },
              ]}
            >
              During its lifetime, equipment that you source from Reliflex
              Machinery & Equipment&apos;s will deliver a premium service,
              because we know our work in and out. Safety of the users of any
              real estate facility is of paramount importance to us. With the
              ideally suited equipment, construction becomes easier and more
              accurate to accomplish. The strength of the construction is also
              more to serve us for generations to come.
            </Typography>
          </Box>
          <Box sx={{ mx: { md: 10, sm: 4, xs: 2 }, mt: 2 }}>
            <Typography
              sx={{ fontWeight: 500, fontSize: { xxl: "30px", xl: "24px" } }}
            >
              Delivering Premium Quality Machinery And Equipment For Our
              Esteemed Clientele
            </Typography>
            <br />
            <Typography sx={styles.paraFont}>
              Today, Reliflex is registered brand name in global markets and our
              products are sold in more than 60 countries worldwide. Market
              acceptance is backed by ISO9001, European CE & US EPA and all
              standard certifications of cross border trades. As an India based
              company, we like to take our advantage of low-cost labour and
              strive to offer quality products with most competitive pricing
              with integrity.
            </Typography>
            <br />
            <Typography sx={styles.paraFont}>
              The quality of machinery and equipment used for the construction
              is strictly a matter of no-compromise, because the stakes are
              exceptionally high. Many metrics need to be met here. Firstly, the
              equipment should be exceptionally tough and should not give away
              to pressure. In the construction industry, it is likely that the
              equipment is going to come across a reasonable bit of pressure. It
              is also likely to have to put up with the elements, including sun
              and rain. Despite this, the equipment should not break, and this
              stays one of our top priorities at Reliflex Machinery &
              Equipment&apos;s.
            </Typography>
            <br />
            <Typography sx={styles.paraFont}>
              We invariably attempt to come up with tough equipment that not
              just doesn&apos;t break under pressure, but does not bend as well.
              The response to pressure is the best in the class.
            </Typography>
            <br />
            <Typography sx={styles.paraFont}>
              This is accomplished by following the globally prevalent
              guidelines for equipment and machinery manufacture for the
              construction industry. We use only the finest recommended
              materials for manufacturing the equipment. This places the
              equipment in the best position to withstand heat, as it is likely
              to encounter during the construction work. This is also subject to
              the application of the equipment.
            </Typography>
            <br />
            <Typography sx={styles.paraFont}>
              We test the materials used for manufacturing equipment thoroughly
              over a range of parameters. The equipment manufactured is also
              tested thoroughly for several performance parameters before it is
              delivered to our esteemed clientele.
            </Typography>
          </Box>
        </Box>

        <Image
          src={leftRedMachine}
          alt="left red machine"
          width={260}
          height="auto"
          style={{ marginTop: screenSizeXs && !screenSizeSm ? "0" : "-100px" }}
        />
        <Box
          id="second-content"
          sx={{
            display: "flex",
            flexDirection: { sm: "row", xs: "column" },
            justifyContent: "space-between",
            mx: { xl: 14, lg: 3 },
          }}
        >
          <Box
            sx={{
              mx: { md: 10, sm: 2, xs: 2 },
              mt: 2,
              width: { xl: "80%", lg: "100%", md: "160%" },
            }}
          >
            <Typography
              sx={{ fontWeight: 500, fontSize: { xxl: "30px", xl: "24px" } }}
            >
              Meeting End To End Requirements For The Construction Industry
            </Typography>
            <br />
            <Typography sx={styles.paraFont}>
              Whatever in quantity or quality, we have full range of products
              for Road, Railway, Building Construction, Trimix, Concrete
              Machinery comparing to other worldwide manufacturer which will
              make your Buying or sourcing easier. We keep our own R & D team
              and launch new products continuously, which will differentiate
              products from our competitors.
            </Typography>
            <br />
            <Typography sx={styles.paraFont}>
              We constantly research and develop new products in the field of
              construction area with our professional technology and economic
              strength which in turn makes the day to day working for our
              customer Flexible & Reliable.
            </Typography>
            <br />
            <Typography sx={styles.paraFont}>
              India is a developing country and our reliance over the world has
              been reducing ever since our independence. India has achieved
              self-reliance in several ways and now exports to many countries
              across the globe.
            </Typography>
            <br />
            <Typography sx={styles.paraFont}>
              Equipment and Machinery for the construction industry is also a
              field where India should be self reliant. There used to be a time
              when machinery and equipment manufactured in India used to be
              considered as sub-standard. This is no longer the case, and the
              equipment delivered by Reliflex Machinery & Equipment&apos;s is
              world-class.
            </Typography>
            <br />
            <Typography sx={styles.paraFont}>
              Our Research and Development team keeps pace with the latest in
              the world of innovation. We keep on the same page as the top
              construction equipment manufacturers from across the world, taking
              full cognition of the requirements of the construction industry in
              India.
            </Typography>
            <br />
            <Typography sx={styles.paraFont}>
              This puts us in the best position to come up with the right
              product for the right work. Our team engineers are highly
              knowledgeable and equipment manufactured by Reliflex Machinery &
              Equipment&apos;s is the hallmark of quality.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              mt: { xl: -17, lg: 0 },
              mb: { lg: 20, xl: 0, md: 18, sm: 22 },
            }}
          >
            <Image
              src={dotsGrid}
              alt="dots grid"
              style={{
                marginLeft: "auto",
                width:
                  screenSizeXs && !screenSizeSm
                    ? "100px"
                    : screenSizeSm && !screenSizeMd
                    ? "150px"
                    : screenSizeMd && !screenSizeLg
                    ? "200px"
                    : screenSizeLg && !screenSizeXl
                    ? "320px"
                    : "auto",
                height: "auto",
                marginBottom:
                  screenSizeSm && !screenSizeMd
                    ? "120px"
                    : screenSizeMd && !screenSizeLg
                    ? "100px"
                    : "",
              }}
            />
            <Image
              src={contentImage2}
              alt="image 2"
              style={{
                marginTop: screenSizeXs && !screenSizeSm ? "-40px" : "-150px",
                width:
                  screenSizeXs && !screenSizeSm
                    ? 200
                    : screenSizeSm && !screenSizeMd
                    ? 260
                    : screenSizeMd && !screenSizeLg
                    ? 300
                    : screenSizeXl && !screenSizeXXl
                    ? 500
                    : screenSizeXXl
                    ? 700
                    : 400,
                height: "auto",
                marginLeft: screenSizeXs && !screenSizeSm && "60px",
              }}
            />
            <Typography
              sx={[
                styles.paraFont,
                {
                  my: 2,
                  width: { lg: "80%", md: "70%", sm: "90%" },
                  mx: { xs: 2, sm: 0 },
                },
              ]}
            >
              Our clients perceive us as the most reliable construction
              equipment manufacturer in the industry. Repeat clients are the
              norm at Reliflex Machinery & Equipment&apos;s. Our relationship
              with our clients is based on trust, which is a factor that is of a
              paramount importance to us.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mt: { xl: 0, lg: -18, md: -12, sm: -10 },
            mr: { xl: 0, lg: 8 },
          }}
        >
          <Image
            src={leftYellowMachine}
            alt="left yellow machine"
            width={screenSizeXs && !screenSizeLg ? 150 : 260}
            height="auto"
          />
        </Box>
        <Box
          id="third-content"
          sx={{
            display: "flex",
            flexDirection: { sm: "row", xs: "column" },
            justifyContent: "space-between",
            mx: { xl: 14, lg: 3 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: { xl: -17, lg: 0, sm: 10 },
            }}
          >
            <Image
              src={dotsGrid}
              alt="dots grid"
              style={{
                width:
                  screenSizeXs && !screenSizeSm
                    ? "100px"
                    : screenSizeSm && !screenSizeMd
                    ? "150px"
                    : screenSizeMd && !screenSizeLg
                    ? "200px"
                    : screenSizeLg && !screenSizeXl
                    ? "320px"
                    : "423px",
                height: "auto",
              }}
            />
            <Image
              src={contentImage3}
              alt="image 3"
              style={{
                marginTop:
                  screenSizeXs && !screenSizeSm
                    ? "-30px"
                    : screenSizeSm && !screenSizeMd
                    ? "-50px"
                    : screenSizeMd && !screenSizeLg
                    ? "-50px"
                    : screenSizeLg
                    ? "-150px"
                    : "-100px",
                marginLeft:
                  screenSizeMd && !screenSizeLg
                    ? "100px"
                    : screenSizeLg
                    ? "180px"
                    : "80px",
                width:
                  screenSizeXs && !screenSizeSm
                    ? 200
                    : screenSizeSm && !screenSizeMd
                    ? 260
                    : screenSizeMd && !screenSizeLg
                    ? 300
                    : screenSizeXl && !screenSizeXXl
                    ? 500
                    : screenSizeXXl
                    ? 700
                    : 400,
                height: "auto",
              }}
            />
          </Box>
          <Box
            sx={{
              mx: { md: 10, sm: 4, xs: 2 },
              mt: { xl: 14, lg: 3, sm: 2, xs: 2 },
            }}
          >
            <Typography
              sx={{ fontWeight: 500, fontSize: { xxl: "30px", xl: "24px" } }}
            >
              Products Delivered As Per Customer Needs
            </Typography>
            <br />
            <Typography sx={styles.paraFont}>
              Requirement of machinery and equipment across the construction
              industry is variable and the one-size-fits-all approach does not
              apply in many cases. Reliflex Machinery & Equipment&apos;s ensures
              that our clients are not required to search for a vendor from
              abroad for the custom equipment manufacturing requirements that
              they have.
            </Typography>
            <br />
            <Typography sx={styles.paraFont}>
              We are technically sound and highly knowledgeable about the
              construction industry and its requirements. Our clients contact us
              with their custom requirements, be it basic tooling requirements
              or high-end equipment for the construction industry. We take pride
              in being able to meet up with the client requirements. Reliflex
              Machinery & Equipment&apos;s is a name synonymous with
              reliability.
            </Typography>
            <br />
            <Typography sx={styles.paraFont}>
              One of our most important ethics is the timely delivery of
              products to our esteemed clientele. This is conducted after a
              thorough testing and QA of the equipment, which lets us centre
              down upon the equipment that has quality defects.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ mt: { xl: 0, lg: -10 } }}>
          <Image
            src={concreteMixerMachine}
            alt="concrete machine"
            width={screenSizeSm && !screenSizeLg ? 160 : 260}
            height="auto"
          />
        </Box>
        <Box
          id="fourth-content"
          sx={{
            display: "flex",
            flexDirection: { sm: "row", xs: "column" },
            justifyContent: "space-between",
            mx: { xl: 14, lg: 3 },
            mb: { xxl: 0, xl: 10 },
          }}
        >
          <Box
            sx={{
              mx: { sm: 10, xs: 3 },
              mt: { xl: 10, lg: 2 },
              width: { xl: "80%", lg: "40%", md: "40%" },
            }}
          >
            <Typography
              sx={{ fontWeight: 500, fontSize: { xxl: "30px", xl: "24px" } }}
            >
              OUR MISSION
            </Typography>
            <br />
            <ul style={{ width: screenSizeSm && !screenSizeMd && "120%" }}>
              <li>
                <Typography sx={styles.paraFont}>
                  Being market leaders in defend market segments.
                </Typography>
                <br />
              </li>
              <li>
                <Typography sx={styles.paraFont}>
                  Providing quality products & reliable services and sourcing
                  raw materials from reputed manufacturers.
                </Typography>
                <br />
              </li>
              <li>
                <Typography sx={styles.paraFont}>
                  Providing quality products & reliable services and sourcing
                  raw materials from reputed manufacturers.
                </Typography>
                <br />
              </li>
              <li>
                <Typography sx={styles.paraFont}>
                  Being the preferred supplier of our customers, with our
                  products exceeding their quality requirements.
                </Typography>
                <br />
              </li>
              <li>
                <Typography sx={styles.paraFont}>
                  Giving timely information to the customers regarding trends of
                  the market dynamics.
                </Typography>
                <br />
              </li>
              <li>
                <Typography sx={styles.paraFont}>
                  Harnessing the creative energies of all our people through
                  team work, develop and a transparent work environment.
                </Typography>
                <br />
              </li>
              <li>
                <Typography sx={styles.paraFont}>
                  Making sure customer is satisfied with the products & after
                  sales services.
                </Typography>
              </li>
            </ul>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              mt: { xl: -17, lg: 0, sm: -10 },
              mb: { lg: 20, xl: 0, md: 8, sm: 20, xs: 5 },
            }}
          >
            <Image
              src={dotsGrid}
              alt="dots grid"
              style={{
                marginLeft: "auto",
                width:
                  screenSizeXs && !screenSizeSm
                    ? "100px"
                    : screenSizeSm && !screenSizeMd
                    ? "150px"
                    : screenSizeMd && !screenSizeLg
                    ? "200px"
                    : screenSizeLg && !screenSizeXl
                    ? "320px"
                    : "auto",
                height: "auto",
                marginBottom:
                  screenSizeSm && !screenSizeMd
                    ? "120px"
                    : screenSizeMd && !screenSizeLg
                    ? "100px"
                    : "",
              }}
            />
            <Image
              src={contentImage4}
              alt="image 4"
              style={{
                marginTop: screenSizeXs && !screenSizeSm ? "-40px" : "-150px",
                marginRight:
                  screenSizeSm && !screenSizeMd
                    ? "80px"
                    : screenSizeMd && !screenSizeXl
                    ? "100px"
                    : "200px",
                width:
                  screenSizeXs && !screenSizeSm
                    ? 200
                    : screenSizeSm && !screenSizeMd
                    ? 260
                    : screenSizeMd && !screenSizeLg
                    ? 300
                    : screenSizeXl && !screenSizeXXl
                    ? 500
                    : screenSizeXXl
                    ? 700
                    : 400,
                height: "auto",
                marginLeft: screenSizeXs && !screenSizeSm && "60px",
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mt: { xl: 0, lg: -20 },
          }}
        >
          <Image
            src={concreteRoadCutter}
            alt="road cutter machine"
            width={280}
            height="auto"
          />
        </Box>
        <Box
          id="fifth-content"
          sx={{
            display: "flex",
            flexDirection: { sm: "row", xs: "column" },
            justifyContent: "space-between",
            mx: { xl: 14, lg: 3 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: { xl: -17, lg: 0, md: 0, sm: 12 },
            }}
          >
            <Image
              src={dotsGrid}
              alt="dots grid"
              style={{
                width:
                  screenSizeXs && !screenSizeSm
                    ? "100px"
                    : screenSizeSm && !screenSizeMd
                    ? "150px"
                    : screenSizeMd && !screenSizeLg
                    ? "200px"
                    : screenSizeLg && !screenSizeXl
                    ? "320px"
                    : "423px",
                height: "auto",
              }}
            />
            <Image
              src={contentImage5}
              alt="image 5"
              style={{
                marginTop:
                  screenSizeXs && !screenSizeSm
                    ? "-30px"
                    : screenSizeSm && !screenSizeMd
                    ? "-50px"
                    : screenSizeMd && !screenSizeLg
                    ? "-50px"
                    : screenSizeLg
                    ? "-150px"
                    : "-100px",
                marginLeft:
                  screenSizeMd && !screenSizeLg
                    ? "100px"
                    : screenSizeLg
                    ? "180px"
                    : "80px",
                width:
                  screenSizeXs && !screenSizeSm
                    ? 200
                    : screenSizeSm && !screenSizeMd
                    ? 260
                    : screenSizeMd && !screenSizeLg
                    ? 300
                    : screenSizeXl && !screenSizeXXl
                    ? 500
                    : screenSizeXXl
                    ? 700
                    : 400,
                height: "auto",
                borderRadius: "6px",
              }}
            />
          </Box>
          <Box sx={{ mx: { md: 10, sm: 4, xs: 2 }, mt: 2 }}>
            <Typography
              sx={{ fontWeight: 500, fontSize: { xxl: "30px", xl: "24px" } }}
            >
              OUR FOCUS
            </Typography>
            <br />
            <Typography sx={styles.paraFont}>
              Reliflex focus is to foster growth and promote enduring business
              ties with its client. Customer responsiveness and commitment is
              the driving force in the quest for excellence. An effective supply
              chain manager Right from sourcing & supply of material at the door
              step of the customer in the field of Construction Machinery &
              Equipment&apos;s and customers required verticals.
            </Typography>
            <br />
            <Typography
              sx={[styles.paraFont, { fontWeight: 500, color: "black" }]}
            >
              International and Domestic Market
            </Typography>
            <br />
            <Typography sx={styles.paraFont}>
              With our expertise in manufacturing equipment and machinery for
              the construction industry, we plan to span our product offerings
              to the international markets. Reliflex Machinery &
              Equipment&apos;s is a beacon of trust in the Indian construction
              industry. We intend to benefit the global construction industry
              with our premium, reliable, and secure services.
            </Typography>
            <br />
            <Typography
              sx={[styles.paraFont, { fontWeight: 500, color: "black" }]}
            >
              Customer Support
            </Typography>

            <br />
            <Typography sx={styles.paraFont}>
              We place a lot of value over interaction with our esteemed
              clientele. This lets our clientele share their requirements with
              us. This lets them have a fair bit of idea regarding our
              capabilities and the services that we offer for them.
            </Typography>
            <br />
            <Typography sx={styles.paraFont}>
              Our customer support agents are highly trained and you can contact
              them at any time. A meeting with our consultants will let us have
              a fair bit of an idea regarding your project requirements, and we
              can consider the feasibility of the different solutions available.
            </Typography>
            <br />
            <Typography sx={styles.paraFont}>
              Our customer support agents are available for any nature of
              queries that you may have regarding our work.
            </Typography>
            <br />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default AboutUsPageContent;
