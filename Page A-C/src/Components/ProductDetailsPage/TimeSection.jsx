import { Box } from "@chakra-ui/react";
import React from "react";
import BatteryPercent from "./BatteryPercent";
import Time from "./Time";

const TimeSection=({ minutes, hours, battery })=> {
  return (
    <Box w={"100%"} top={5} position={"absolute"} border={"1px solid re"}>
      <Time hours={hours} minutes={minutes} />
      <BatteryPercent battery={battery} />
    </Box>
  );
}

export default TimeSection;
