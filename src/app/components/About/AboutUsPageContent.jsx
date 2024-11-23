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
          Reliflex Machinery & Equipment Company is growing fast in the company
          with over five years of experience designing, manufacturing, and
          supplying customers with a wide range of high quality machinery and
          equipment. Established in 2011 and mainly importing imported machinery
          from global leaders countries such as Germany, Japan, China, Turkey,
          USA, and Vietnam. Over time, Reliflex has slowly built up its
          capabilities by manufacturing and assembling many of its products in
          India, thus providing both international standards and local
          expertise.
        </Typography>
        <br />
        <Typography sx={styles.paraFont}>
          Reliflex has its headquarters located in Bangalore, India. Here again,
          the company has expanded successfully in the major Indian cities by
          opening warehouses as well as showrooms. Apart from that, the company
          also boasts of having more than 800 dealers across India along with a
          rapidly growing outlet in international markets like Tanzania, Kenya,
          Dubai, Russia, and China.
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
              Reliflex Machinery & Equipment products have been designed to
              offer high-grade performances throughout the lifetime of our
              products. Being highly familiar with the intricacies of the
              product range, all of our equipment is designed to reflect the
              finest quality and dependability. The safety of the user is taken
              as a top priority since user safety directly has an impact on
              long-term security of real estate property facilities. Our
              specialized-built machinery streamlines construction processes,
              making it faster, more efficient, and accurate. Reliflex equips
              builders with the tools to build safer, stronger, and more durable
              structures.
            </Typography>
          </Box>
          <Box sx={{ mx: { md: 10, sm: 4, xs: 2 }, mt: 2 }}>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: { xxl: "30px", xl: "24px" },
                color: theme.palette.text.subHead,
              }}
            >
              Providing High-Quality Machinery and Equipment to Meet Client
              Excellence
            </Typography>
            <br />
            <Typography sx={styles.paraFont}>
              Reliflex has built an excellent reputation as a global leader in
              the machinery and equipment industry. Over 60 countries have
              accepted our products because of their quality and reliability.
              With ISO9001 certification by the European CE and US EPA, we are
              meeting all the required standards of international trade. As an
              India-based company, we use our cost-effective labor advantage to
              provide premium-quality products at competitive prices while
              ensuring integrity in every step.
            </Typography>
            <br />
            <Typography sx={styles.paraFont}>
              Quality is a non-negotiable at Reliflex, especially within the
              construction world, as the machinery and equipment are put under
              intense demand. Construction tools must have high pressure
              exposure to challenging environmental conditions such as heat,
              rain, and usage. Our utmost concern must be made sure that our
              equipment is not only strong but also durable and reliable in such
              scenarios.
            </Typography>
            <br />
            <Typography sx={styles.paraFont}>
              We design and manufacture equipment that not only doesn&apos;t
              break but also with extreme pressure does not lose its structure.
              We follow the global standard of manufacturing and, thereby, make
              machinery that meets international benchmarks for strength and
              durability.
            </Typography>
            <br />
            <Typography sx={styles.paraFont}>
              As a provider of high quality products, we employ the best
              recommended materials used in our manufacturing processes.
              Materials are tested rigorously for their capacity to stand in
              extreme conditions. Similarly, equipment used is put through
              stringent performance tests as a means to verify its reliability
              and effectiveness.
            </Typography>
            <br />
            <Typography sx={styles.paraFont}>
              By combining advanced manufacturing techniques, high-quality
              materials, and great attention to quality control, Reliflex always
              provides its clients with machinery and equipment that are far
              beyond their expectations. With our commitment to quality and the
              competitiveness of prices, we are a trusted partner within the
              global construction industry.
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
              sx={{
                fontWeight: 500,
                fontSize: { xxl: "30px", xl: "24px" },
                color: theme.palette.text.subHead,
              }}
            >
              Comprehensive Solutions for All Construction Industry Needs
            </Typography>
            <br />
            <Typography sx={styles.paraFont}>
              Reliflex Machinery & Equipment takes immense pride in providing an
              exhaustive series of products that have catered to the diversified
              needs of the construction industry. From road construction to
              railway projects and building development, our high-tech machinery
              is better than that of most others around the world. We simplify
              the buying and sourcing process for our clients, making their
              projects smoother and more efficient.
            </Typography>
            <br />
            <Typography sx={styles.paraFont}>
              India&apos;s march toward self-sufficiency has been unprecedented,
              and the construction equipment industry is no exception. What used
              to be second-rate material and machines from India is today sought
              after worldwide for its quality. Reliflex is part of this success
              story by providing solutions to the highest possible international
              standards.
            </Typography>
            <br />
            <Typography sx={styles.paraFont}>
              Our R&D team is right at the vanguard of the prevailing current
              technologies in the manufacturing globe of construction
              equipment.Understanding uniquely the demands of the Indian
              construction sector, we make machinery to suit diverse
              applications.
            </Typography>
            <br />
            <Typography sx={styles.paraFont}>
              All products we manufacture express the commitment we have to
              quality. Our professional engineers ensure that equipment from
              Reliflex not only complies with reliability standards but also
              excels in performance, which is why construction professionals
              prefer it.
            </Typography>
            <br />
            <Typography sx={styles.paraFont}>
              Trust, after all, is the backbone of any relationship with
              clients. Virtually all of our customers are repeat customers,
              clear testimonials on the quality and reliability of our products
              and services. It explains why we strive to exceed expectations for
              maintaining a reliable position.
            </Typography>
            <br />
            <Typography sx={styles.paraFont}>
              At Reliflex, we don&apos;t just sell equipment alone, but provide
              comprehensive solutions to support our clients in achieving their
              construction goals with self-confidence and without hindrance.
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
              sx={{
                fontWeight: 500,
                fontSize: { xxl: "30px", xl: "24px" },
                color: theme.palette.text.subHead,
              }}
            >
              Tailored Solutions to Meet Customer Requirements
            </Typography>
            <br />
            <Typography sx={styles.paraFont}>
              Construction is undoubtedly one of the most vibrant industries,
              and machinery requirements are often quite varied with every
              project. This field seldom finds one-size-fits-all solutions.
              These needs are understood and indeed catered to by Reliflex
              Machinery & Equipment as requiring custom-fit solutions that will
              best meet each client&apos;s unique needs. One does not have to
              look beyond local shores for custom equipment manufacturing with
              us.
            </Typography>
            <br />
            <Typography sx={styles.paraFont}>
              Our great depth of technical knowledge and understanding of the
              construction industry enables us to deliver precisely what is
              needed by our clients. From basic tooling to advanced,
              high-performance machinery, our team is well-equipped to tackle
              diverse and complex needs. Clients trust Reliflex because they can
              rely on our ability to translate their specifications into
              reliable, high-quality solutions.
            </Typography>
            <br />
            <Typography sx={styles.paraFont}>
              We are about customization. What our clients bring in is something
              unique, and the equipment we develop for them needs to be tailored
              to meet their demands. Whether small projects or very large,
              infrastructure-heavy initiatives, Reliflex ensures every piece of
              machinery aligns perfectly with the project&apos;s requirements.
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
              sx={{
                fontWeight: 500,
                fontSize: { xxl: "30px", xl: "24px" },
                color: theme.palette.text.subHead,
              }}
            >
              OUR MISSION
            </Typography>
            <br />
            <ul style={{ width: screenSizeSm && !screenSizeMd && "120%" }}>
              <li>
                <Typography sx={styles.paraFont}>
                  We want to stand as a market leader by excelling in our core
                  segments and setting benchmarks for quality and service.
                </Typography>
                <br />
              </li>
              <li>
                <Typography sx={styles.paraFont}>
                  We source raw materials from the reputed manufacturers, so our
                  products retain the higher standards of reliability and
                  performance.
                </Typography>
                <br />
              </li>
              <li>
                <Typography sx={styles.paraFont}>
                  Commitment to quality is a core function ensuring that our
                  products fit and exceed the standards that can best assure our
                  clients' future commitments to us.
                </Typography>
                <br />
              </li>
              <li>
                <Typography sx={styles.paraFont}>
                  Our mission is prompt communication. This will ensure
                  customers know everything currently happening within the
                  market trend and dynamics.
                </Typography>
                <br />
              </li>
              <li>
                <Typography sx={styles.paraFont}>
                  We define success through collaboration and innovation, where
                  creativity will be shown through a culture of teamwork. This
                  enables us to keep improving and adapting to the rapidly
                  changing needs of the industry.
                </Typography>
                <br />
              </li>
              <li>
                <Typography sx={styles.paraFont}>
                  In that regard, we make sure clients receive unmatched value.
                  We secure our place in the construction industry to some
                  extent as a credible partner by focusing on customers'
                  success.
                </Typography>
                <br />
              </li>
              <li>
                <Typography sx={styles.paraFont}>
                  leading with excellence, building trust, and providing
                  solutions that enable our customers to achieve their goals.
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
              sx={{
                fontWeight: 500,
                fontSize: { xxl: "30px", xl: "24px" },
                color: theme.palette.text.subHead,
              }}
            >
              OUR FOCUS
            </Typography>
            <br />
            <Typography sx={styles.paraFont}>
              Reliflex Machinery & Equipments focus has always been on strong
              relationships and mutual growth with the clients. We aim to
              deliver excellent service and value at every step-from sourcing
              materials to delivering construction machinery and equipment right
              to the client's doorstep, ensuring a seamlessness in carrying out
              our operations tailored to their needs.
            </Typography>
            <br />
            <Typography
              sx={[styles.paraFont, { fontWeight: 500, color: "black" }]}
            >
              Expansion into International Markets
            </Typography>
            <br />
            <Typography sx={styles.paraFont}>
              Though we hold a pioneering position in the Indian construction
              equipment market, our vision is to take our reliable, high-quality
              machines to the world stage. Reliflex shall strive to offer the
              same reliability and quality that our domestic customers have come
              to expect from the company to global markets.
            </Typography>
            <br />
            <Typography
              sx={[styles.paraFont, { fontWeight: 500, color: "black" }]}
            >
              Customer Support
            </Typography>

            <br />
            <Typography sx={styles.paraFont}>
              We appreciate open communication with our clients. Listening to
              the needs of clients ensures achieving the best outputs from our
              part. Our friendly team is here to make sure that your experience
              with us goes smoothly and hassle free. Through our customer
              support, we are ever ready to assist you, be it questions about
              our products or in discussing your project. Our team will never be
              too far out of reach through a call or message. We are here to
              provide solutions and guide you at every step.
            </Typography>
            <br />
            <Typography sx={styles.paraFont}>
              At Reliflex, we want to be the partner you can rely upon for every
              conceivable need in construction machinery and equipment.
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
