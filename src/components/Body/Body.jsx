import React, { useContext } from "react";
import {
  Container,
  Card,
  Wrapper,
  Price,
  InputWrapper,
  Description,
  Input,
} from "./syle";

import { Context } from "../../context/context";
import Mock from "../../utilities/mock";
import { useState } from "react";
import { message } from "antd";

const Body = () => {
  const [state, dispatch] = useContext(Context);
  const [messageApi, contextHolder] = message.useMessage();
  let [search, setSearch] = useState("");
  const onSearch = ({ target: { value } }) => {
    setSearch((search = value));
  };
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Successfully added to cart",
    });
  };
  return (
    <Container>
      <InputWrapper>
        <Input
          autoComplete="autocomplete"
          placeholder="search..."
          onChange={onSearch}
        />
        <select
          onChange={(e) =>
            dispatch({ type: "filter", payload: { value: e.target.value } })
          }
        >
          <option value="default">Dafault</option>
          <option value="increment"> Low to High</option>
          <option value="decrement"> High to Low</option>
        </select>
      </InputWrapper>

      <Wrapper>
        {Mock?.filter((v) =>
          v.name.toLowerCase().includes(search.toLocaleLowerCase())
        ).map((v) => {
          return (
            <Card key={v.id}>
              <img
                style={{ borderRadius: "15px" }}
                width={300}
                height={200}
                src={v.img}
                alt={v.item}
              />
              <Description>{v.name}</Description>

              <Price>Price: {v.price}$</Price>
              {contextHolder}

              <div onClick={success}>
                <button
                  onClick={() =>
                    dispatch({
                      type: "onAdd",
                      payload: {
                        value: { ...v, count: v.count + 1, id: v.id },
                        success,
                      },
                    })
                  }
                >
                  Add to cart: {v.id}
                </button>
              </div>
            </Card>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Body;
