import React from "react";
import { InputGroup, InputLeftElement, Input, Th } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

const SearchTag=()=> {
  return (
    <Th>
      <InputGroup bg={"#fff"} borderRadius={"30px"} w={"85%"} ml={"-5px"}>
        <InputLeftElement pointerEvents="none">
          <FiSearch />
        </InputLeftElement>
        <Input
          variant="filled"
          type="text"
          bg={"#f7f7fa"}
          borderRadius={"30px"}
          placeholder="Search"
          border={"none"}
        />
      </InputGroup>
    </Th>
  );
}

export default SearchTag;
