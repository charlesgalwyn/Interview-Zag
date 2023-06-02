import React from "react";
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,Text,Box,Image,Button,Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";

const ModalComponent=({
  isOpen,
  onClose,
  onOpen,
  existing_title,
  id,
  existing_amount,
  handleChange,
})=> {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState(false);
  const[newamount,setnewAmount]= useState("");
  useEffect(() => {
    setTitle(existing_title);
    setnewAmount(existing_amount)
  }, []);


  const handleEdit = (id) => {
    setLoad(true);
    fetch(`http://localhost:8080/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: title,amount:newamount }),
    }).then((res) => {
      onClose();
      setLoad(false);
    });

    handleChange(title,newamount);
  };

  
  return (
    <>
      <Box
        border={"1px solid re"}
        onClick={onOpen}
        display={"flex"}
        justifyContent={"center"}
      >
        <Image src="edit_icon.png" />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <Text>Name</Text>
              <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Text>Amount</Text>
              <Input 
              type="number"
              value={newamount}
              onChange={(e) => setnewAmount(e.target.value)}
              />
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              isLoading={load}
              colorScheme="blue"
              mr={3}
              onClick={() => handleEdit(id)}
            >
              Edit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalComponent;
