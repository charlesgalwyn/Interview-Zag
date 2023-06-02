import { Box, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Arrow_Cart from "./Arrow";
import TimeSection from "./TimeSection";
import WishList from "./WishList";



const ProductImage=(image) =>{
  const currentTime = new Date();
  const hrs = currentTime.getHours();
  const mins = currentTime.getMinutes();
  const secs = currentTime.getSeconds();
  const [hours, setHours] = useState(hrs);
  const [minutes, setMinutes] = useState(mins);
  const [seocnds, setSeconds] = useState(secs);
  const [battery, setBattery] = useState(100);

  useEffect(
    () => {
      setInterval(() => {
        const currentTime = new Date();
        let hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const seconds = currentTime.getSeconds();

        navigator.getBattery().then(function (battery) {
          const batteryPercentage = Math.round(battery.level * 100);
          setBattery(batteryPercentage);
          return batteryPercentage;
        });

        if (hours > 12) {
          hours -= 12;
        }
        setHours(hours);
        setMinutes(minutes);
      }, 1000);
    },
    [ minutes ]
  );
  return (
    <Box w={"100%"} border={"1px solid re"}>
      <Image
        position={"relative"}
        w={"100%"}
        src="nike_tshirt.png"
        mt={"-15px"}
      />
      <TimeSection minutes={minutes} hours={hours} battery={battery} />
      <Arrow_Cart />
      <WishList/>
    </Box>
  );
}

export default ProductImage;