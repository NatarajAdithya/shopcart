import { Box, Grid, Heading } from "@chakra-ui/react";
import React from "react";

const BudgetBazaar = () => {
  return (
    <Box ml="1%" mr="1%" mt="30px">
      <Heading mb="15px" size={"md"}>
        Budget Bazaar
      </Heading>
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "1fr 1fr",
          md: "repeat(3, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        gap={4}
      >
        {[
          {
            image:
              "https://cdn.shopclues.com/images/banners/PricePont_akb_1Oct21_W_01.jpg",
            link: "https://example.com/link1",
            alt: "Banner 1",
          },
          {
            image:
              "https://cdn.shopclues.com/images/banners/PricePont_akb_1Oct21_W_02.jpg",
            link: "https://example.com/link2",
            alt: "Banner 2",
          },
          // Add more image/link pairs as needed
        ].map((item, index) => (
          <Box key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                src={item.image}
                alt={item.alt}
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
            </a>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default BudgetBazaar;
