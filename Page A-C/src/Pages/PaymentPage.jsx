import {Box,Button,Input,InputGroup,InputRightElement,Text,useDisclosure,} from "@chakra-ui/react";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { RiMastercardFill } from "react-icons/ri";
import { AiFillQuestionCircle, AiTwotoneLock } from "react-icons/ai";
import PaymentStatus from "../Components/Payment/PaymentStatus";

const PaymentPage=()=> {
  const [name, setName] = useState("");
  const [card, setCard] = useState("");
  const [date, setDate] = useState("");
  const [code, setCode] = useState("");
  const toast = useToast();
  const [load, setLoad] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toastMsg=(msg, status)=> {
    toast({
      title: msg,
      position: "top",
      status: status,
      duration: 2000,
      isClosable: true,
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const containsOnlyNumbers = /^\d+$/.test(card);
    console.log(containsOnlyNumbers, "type");
    console.log(code);
    console.log(!date.length === 4, !date.includes("/"), "---");
    console.log({ card: card.length });

    if (name && card && date && code) {
      if (card.length === 16 && /^\d+$/.test(card)) {
        if (date.length === 5) {
          if (date.includes("/")) {
            let newDate = date.split("/");
            console.log(typeof +newDate[0]);
            if (
              newDate[0].length === 2 &&
              newDate[1].length === 2 &&
              /^\d+$/.test(newDate[0]) &&
              /^\d+$/.test(newDate[1])
            ) {
              if (code.length === 3 && /^\d+$/.test(code)) {
                onOpen();
                setLoad(true);
                setInterval(() => {
                  setLoad(false);
                }, 3000);
              } else {
                toastMsg("enter correct code", "warning");
              }
            } else {
              toastMsg("enter correct date", "warning");
            }
          } else {
            toastMsg("format should be mm/yy", "warning");
          }
        } else {
          toastMsg("format should be mm/yy", "warning");
        }
      } else {
        toastMsg("Please Enter Correct Card Number", "warning");
      }
    } else {
      toastMsg("Please Enter all Details", "warning");
    }
    console.log("hi");
  };
  return (
    <Box
      display={"grid"}
      placeItems={"center"}
      w={"100%"}
      h={"100vh"}
      bg={"#f5f5f5"}
    >
      
      <Box border={"1px solid re"} p={"20px"} w={"70%"} bg={"#fdf3f9"}>
        <form>
          <Text fontSize={"12px"} m="12px 0px 8px 0px">
            Card number
          </Text>
          <InputGroup>
            <InputRightElement pointerEvents="none" w={"20px"} mt={"-8px"}>
              <RiMastercardFill></RiMastercardFill>
            </InputRightElement>
            <Input
              bg={"#fff"}
              type="text"
              borderRadius={"4px"}
              pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}"
              size="xs"
              placeholder="Enter Your 16 digit number here"
              border={"1px solid black"}
              _focus={{ border: "1px solid black", boxShadow: "none" }}
              onChange={(e) => setCard(e.target.value)}
            />
          </InputGroup>
          <Text fontSize={"12px"} m="12px 0px 8px 0px">
            Name on card
          </Text>
          <Input
            bg={"#fff"}
            size="xs"
            type="text"
            placeholder="George Hatzis"
            borderRadius={"4px"}
            border={"1px solid black"}
            _focus={{ border: "1px solid black", boxShadow: "none" }}
            onChange={(e) => setName(e.target.value)}
          />
          <Box display={"flex"} gap={"15px"}>
            <Box>
              <Text fontSize={"12px"} m="12px 0px 8px 0px">
                Expiration date
              </Text>
              <Input
                bg={"#fff"}
                size="xs"
                borderRadius={"4px"}
                type="text"
                placeholder="06/24"
                border={"1px solid black"}
                _focus={{ border: "1px solid black", boxShadow: "none" }}
                onChange={(e) => setDate(e.target.value)}
              />
            </Box>
            <Box>
              <Box display={"flex"} alignItems={"center"} gap={"5px"}>
                <Text fontSize={"12px"} m="12px 0px 8px 0px">
                  Security code
                </Text>
                <AiFillQuestionCircle />
              </Box>
              <Input
                bg={"#fff"}
                size="xs"
                type="text"
                borderRadius={"4px"}
                placeholder="123"
                border={"1px solid black"}
                _focus={{ border: "1px solid black", boxShadow: "none" }}
                onChange={(e) => setCode(e.target.value)}
              />
            </Box>
          </Box>
          <PaymentStatus
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            handleSubmit={handleSubmit}
            load={load}
          />
        </form>
      </Box>
    </Box>
  );
}

export default PaymentPage;