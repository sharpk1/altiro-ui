import React from "react";
import { Box, Card, Inset, Text, Strong } from "@radix-ui/themes";

const CustomCard = (props) => {
  const { info } = props;
  return (
    <Box className="custom-card-container">
      <Card size="2" className="custom-card">
        <Inset clip="padding-box" side="top" pb="current">
          <img src={info.img} alt="Bold typography" className="card-image" />
        </Inset>
        <Text as="p" size="3">
          <Strong>{info.name}</Strong> {info.information}
        </Text>
      </Card>
    </Box>
  );
};

export default CustomCard;
