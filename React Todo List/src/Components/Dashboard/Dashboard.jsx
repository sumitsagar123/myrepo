import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Button,
  Center,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
export default function Dashboard() {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState("");

  const [searchQuery, setSearchQuery] = useState("");
  // TODO: Remove below const and instead import them from chakra

  const handleDelete = (id) => {
    axios
      .delete(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses/${id}`
      )
      .then(() => {
        getHouses();
      });
  };

  const getHouses = (searchQuery) => {
    const params = searchQuery ? { q: searchQuery } : {};
    axios
      .get(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses`,
        {
          params,
        }
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getHouses(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    if (order) {
      if (order === "asc") {
        const arr = [...data].sort((a, b) => a.rent - b.rent);
        setData([...arr]);
      } else if (order === "desc") {
        const arr = [...data].sort((a, b) => b.rent - a.rent);
        setData([...arr]);
      }
    }
  }, [order]);

  return (
    <div>
      <div className="sortingButtons">
        <Button onClick={() => setOrder("asc")} className="sortByRentAsc">
          {" "}
          Sort by Asc{" "}
        </Button>
        <Button onClick={() => setOrder("desc")} className="sortByRentDesc">
          {" "}
          Sort by Desc{" "}
        </Button>
      </div>

      <Center>
        <Input
          width="300px"
          value={searchQuery}
          className="searchAddress"
          placeholder="Search Data"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Center>

      <TableContainer>
        <Table className="table">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Owner's Name</Th>
              <Th>Address</Th>
              <Th>Area Code</Th>
              <Th>Rent</Th>
              <Th>Bachelor Tenants Allowed</Th>
              <Th>Married Tenants Allowed</Th>
              <Th>DELETE</Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* Map the below container against your data */}
            {data.map((item) => (
              <Tr className="houseDetails" key={item.id}>
                <Td className="name">{item.name}</Td>
                <Td className="ownersName">{item.ownerName}</Td>
                <Td className="address">{item.address}</Td>
                <Td className="areaCode">{item.areaCode}</Td>
                <Td className="rent">{item.rent}</Td>
                <Td className="isBachelorAllowed">
                  {item.isBachelorAllowed ? "Yes" : "No"}
                </Td>
                <Td className="isMarriedAllowed">
                  {item.isMarriedAllowed ? "Yes" : "No"}
                </Td>
                <Td onClick={() => handleDelete(item.id)} className="delete">
                  {" "}
                  Delete{" "}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
