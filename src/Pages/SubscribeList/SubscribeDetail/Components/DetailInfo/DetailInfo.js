import React, { Component } from "react";
import "./DetailInfo.scss";

class DetailInfo extends Component {
  render() {
    const { itemComment, productTitle, price } = this.props;
    return (
      <div className="detail-title">
        <span className="sub-title">{itemComment}</span>
        <h2 className="title strong">{productTitle}</h2>
        <h2 className="title price">{Number(price).toLocaleString()}</h2>
      </div>
    );
  }
}

export default DetailInfo;
