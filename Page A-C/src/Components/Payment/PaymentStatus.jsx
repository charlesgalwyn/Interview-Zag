import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Button,
  Box,
  Text,
  Image,
} from "@chakra-ui/react";
function PaymentStatus({ isOpen, onOpen, onClose, handleSubmit, load }) {
  return (
    <Box>
      <Button
        size={"xs"}
        mt={"12px"}
        p={"15px"}
        gap={"5px"}
        bg={"#bf477f"}
        color={"#fff"}
        w={"100%"}
        onClick={handleSubmit}
      >
        {/* <AiTwotoneLock/> */}
        Pay Now
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"xs"}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Box
              w={"80%"}
              m={"auto"}
              h={"300px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {load ? (
                <Box textAlign={"center"}>
                  <Text fontWeight={700}>Payment is processing...</Text>
                  <Text fontSize={"xs"}>
                    Please wait, do not close the screen
                  </Text>
                </Box>
              ) : (
                <Box textAlign={"center"}>
                  <Box w={"40px"} height={"40px"} m={"auto"}>
                    <Image src="order_done.png" />
                  </Box>
                  <Text fontWeight={700}>Payment received!</Text>
                  <Text fontSize={"xs"}>
                    Your order is now in the way, Please check your email for
                    the receipt
                  </Text>
                </Box>
              )}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default PaymentStatus;
