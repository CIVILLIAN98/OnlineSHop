import React, { useContext } from "react";
import { Container, Wrapper, Logo, Kart } from "./style";
import { Drawer } from "antd";
import { useState } from "react";
import { Context } from "../../context/context";

const Navbar = () => {
  const [state, dispatch] = useContext(Context);

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Wrapper>
        <Logo>Simple-ecart</Logo>
        <p>HELLO WORLD</p>
        <Kart>
          <p onClick={showDrawer}>cart ({state.cart.length})</p>
        </Kart>
        <Drawer
          title="Selected items"
          placement="right"
          closable={false}
          onClose={onClose}
          open={open}
          getContainer={false}
        >
          {state?.cart?.map((product, index) => {
            return (
              <Container.basket key={index}>
                <Container.drawerimg src={product.img} />
                <Kart.title>
                  {product.name}-{product?.price * product.count}$
                  <button
                    onClick={() =>
                      dispatch({ type: "more", payload: product.id })
                    }
                  >
                    +
                  </button>
                  {product?.count}
                  <button
                    onClick={() =>
                      dispatch({ type: "less", payload: product.id })
                    }
                  >
                    -
                  </button>
                </Kart.title>
                <button
                  style={{ fontSize: "18px" }}
                  onClick={() =>
                    dispatch({ type: "sideDelete", payload: product.id })
                  }
                >
                  Delete
                </button>
              </Container.basket>
            );
          })}{" "}
        </Drawer>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
