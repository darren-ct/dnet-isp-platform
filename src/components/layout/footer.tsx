import { openMail } from "../../utils";
import { Box, Container, Link, Stack, Typography } from "@mui/material";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import dayjs from "dayjs";
import { useMemo } from "react";

export function Footer(): JSX.Element {
  const sitemapLinks = useMemo(
    () => [
      "Home",
      "FAQ",
      "Acceptable Use Policy (AUP)",
      "About Us",
      "Our Partners",
      "Career",
      "Contact Us",
    ],
    []
  );

  const otherLinks = useMemo(() => ["Blog", "Our Office"], []);

  const socialMediaIcons = useMemo(
    () => [InstagramLogoIcon, TwitterLogoIcon, LinkedInLogoIcon],
    []
  );

  return (
    <Box bgcolor="primary.dark">
      <Container sx={{ px: 4, py: 1 }}>
        <Stack direction="row" justifyContent="space-between" gap={2} py={6}>
          <Stack gap={2}>
            <Typography fontWeight={500} color="white" mb={1}>
              Sitemap
            </Typography>
            {sitemapLinks.map((item, index) => (
              <Link
                key={index}
                variant="body2"
                sx={{ color: "white", cursor: "pointer" }}
              >
                {item}
              </Link>
            ))}
          </Stack>

          <Stack gap={2}>
            <Typography fontWeight={500} color="white" mb={1}>
              Others
            </Typography>
            {otherLinks.map((item, index) => (
              <Link
                key={index}
                variant="body2"
                sx={{ color: "white", cursor: "pointer" }}
              >
                {item}
              </Link>
            ))}
          </Stack>

          <Stack gap={2} alignItems="center">
            <img src="brand.png" width={210} height={64} />
            <Typography
              variant="caption"
              color="white"
              textAlign="center"
              maxWidth={400}
            >
              Ciputra World Office Tower Lt. 30 Unit 3006, Jl. Mayjen Sungkono
              89, Surabaya. (+62 31 548-0500)
            </Typography>
            <Link
              variant="caption"
              textAlign="center"
              sx={{ color: "white", cursor: "pointer" }}
              onClick={() => openMail("info@dnetsurabaya.id")}
            >
              info@dnetsurabaya.id
            </Link>
            <Stack direction="row" alignItems="center" gap={2}>
              {socialMediaIcons.map((item, index) => {
                const CurrentIcon = item;
                return (
                  <Box
                    key={index}
                    border="1px solid white"
                    borderRadius="100vh"
                    px={1.5}
                    py={1.5}
                    pb={0.7}
                    sx={{
                      cursor: "pointer",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                      transition: "150ms ease-in",
                    }}
                  >
                    <CurrentIcon width={20} height={20} color="white" />
                  </Box>
                );
              })}
            </Stack>
          </Stack>
        </Stack>

        <Typography
          variant="body2"
          textAlign="center"
          color="white"
          fontWeight={500}
          py={6}
          borderTop="1px solid rgba(256, 256, 256, 0.75)"
        >
          Copyright {dayjs().format("YYYY")} by PT. Dutakom Wibawa Putra
        </Typography>
      </Container>
    </Box>
  );
}
