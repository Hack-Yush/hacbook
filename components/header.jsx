// header component

// random data
const currencies = ["inr","dollar","aed","euro","pound","all","afn","awg","azn","Bam","bbd","bdt","bgn","bhd","bif","bmd","bnd"]

// hooks
import React from "react";

// styles
import HS from "../styles/components/header.module.css";
// logo
const logo = '/logo/bookLogo.png'

export const Header = () => {

    const [currency,setCurrency] = React.useState("")

    const currencyOptions = (value,index) => {

        return <option key={index} value={value}>{value.toUpperCase()}</option>

    }

    return(
        <div className={HS.header}>
            <div className={HS.upperHeader}>
            <img src={logo} className={HS.logo}/>
            <div className={HS.search}>
                <input/>
            </div>
            <div className = {HS.login}>
            <div>Login</div>
            <div>Signup</div>
            <div>Login</div>     
            </div>
            </div>
             <div className={HS.bottomHeader}>
                <div className = {HS.bottomHeaderNav}>
                    <div>Home</div>
                    <div>Books</div>
                    <div>New Arrivals</div>
                    <div>Pre-Order</div>
                    <div>Bestsellers</div>
                    <div>TextBooks</div>
                    <div>Award Winners</div>
                    <div>Featured Authors</div>
                </div>
           <div className={HS.currency}>
               <p>Currency</p>
               <select name="" id="" value = {currency} onChange={(event)=>{setCurrency(event.target.value)}}>
                    {currencies.map(currencyOptions)}              
               </select>
           </div>
            </div>
        </div>
    )
}