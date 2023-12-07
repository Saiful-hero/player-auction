import React from "react";
import './Expenditures.css';

const Expenditures = (props) => {
    const cart = props.cart;
    const totalBudget = cart.reduce((sum,user)=>sum+user.base_price,0)
    return(
        <>
        <div className="">
            <h1>Expenditures</h1>
            <h4>Player Sold: {cart.length}</h4>
            <h4>Total Spend: {totalBudget}</h4>
        </div>
        </>
    );
};
export default Expenditures;