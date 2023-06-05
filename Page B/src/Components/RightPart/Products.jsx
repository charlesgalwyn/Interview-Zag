import React, { useEffect, useState } from "react";
import {Text,Box,AccordionItem,AccordionButton,AccordionPanel,Table,Thead,Tbody,Tr,TableContainer} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import RowComponent from "./ProducstsMapping";
import SearchTag from "./Search";
import ActiveOrderTag from "./ActiveOrders";
import AmountTag from "./Amount";
import PlacedOnTag from "./PlacedOn";
import OptionsTag from "./Options";

const Products=()=> {
  const [isLoading, setLoading] = useState(false);

  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("");
  const [amount, setAmount] = useState("");

  const getData=async(status, amount)=> {
  let baseurl = `https://zag-products.onrender.com/products`;
  if (status && amount) {
    baseurl += `?status=${status}&_sort=amount&_order=${amount}`;
  } else if (amount) {
    baseurl += `?_sort=amount&_order=${amount}`;
  } else if (status) {
    baseurl += `?status=${status}`;
  }

  const res= await fetch(baseurl);
  const data =await res.json();
  console.log(data)
  setProducts(data);
}

  useEffect(() => {
    setLoading(true);
    getData(status, amount)
  }, [status, amount]);

  return (
    <AccordionItem border={"1px solid #EFF0F6"} borderRadius={"20px"} bg={"#fff"} >
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton mt={"28px"} _hover={{ background: "#fff" }}>
              <Box as="span" flex="1" textAlign="left">
                <Text fontSize={"17px"} fontWeight={600}>
                  Confirmed{" "}
                  <span
                    style={{
                      color: "rgba(47, 47, 47, 0.4)",
                      marginLeft: "4px",
                    }}
                  >
                    {" "}
                    258
                  </span>{" "}
                </Text>
              </Box>
              {isExpanded ? (
                <MinusIcon 
                fontSize="12px" 
                _hover={{ color: "#1B59F8" }}
                />
              ) : (
                <AddIcon fontSize="12px" _hover={{ color: "#1B59F8" }}/>
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <SearchTag />
                    <ActiveOrderTag setStatus={setStatus} />
                    <AmountTag setAmount={setAmount} />
                    <PlacedOnTag />
                    <OptionsTag />
                  </Tr>
                </Thead>
                <Tbody>
                  {products?.map((item) => {
                    return <RowComponent key={item.id} item={item} />;
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
}

export default Products;