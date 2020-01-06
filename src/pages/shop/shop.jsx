import React, { Component } from "react";
import "./shop.scss";
import shopData from "./shopdata";
import Preview from "../../components/preview/preview";

class Shop extends Component {
  state = {
    collections: shopData
  };
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <Preview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
