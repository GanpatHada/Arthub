import React, { useState } from "react";
import ProductContext from "./Productcontex";
import { useNavigate } from "react-router-dom";
const ProductState = (props) => {

    let navigate=useNavigate();
    const [productlist, setproductlist] = useState([])
    const [unsoldproduct, setunsoldproduct] = useState([])
    const [soldproduct, setsoldproduct] = useState([])
    const [loading, setloading] = useState(true)
    const [wishlist, setwishlist] = useState([])
    const [mystore, setmystore] = useState([])
    const [details, setdetails] = useState([])
    const [bidhistory, setbidhistory] = useState([])

    //api request for fetching requeste product to sell
    const fetch_seller_unsoldproduct = async () => {
        try{
        setloading(true)
        const response = await fetch("http://localhost:8000/api/seller/fetchsellerproduct", {
            method: 'GET',
            headers: {
                'Content-type': "application/json",
                'auth-token': localStorage.getItem('token')
            },

        });
         
        const json = await response.json();
        setloading(false)
        setunsoldproduct(json);
    }
    catch(error)
    {
        console.log(error);
        navigate("/servererror");
    }
}


    //sellr sold product api
    const fetch_seller_soldproduct = async () => {
        try{
        setloading(true)
        const response = await fetch("http://localhost:8000/api/seller/fetchsellersoldproduct", {
            method: 'GET',
            headers: {
                'Content-type': "application/json",
                'auth-token': localStorage.getItem('token')
            },

        });

        const json = await response.json();
        setloading(false)
        if (!json.success)
            return alert("something went wrong")
        else {
            setsoldproduct(json.sellersoldproduct);

        }
    }catch(error)
    {
        console.log(error);
        navigate("/servererror");
    }

    }

    //seller sold product api
    const sellproduct = async (product_id) => {
        try{
        setloading(true)
        const response = await fetch(`http://localhost:8000/api/seller/updatestatus/${product_id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': "application/json",
                'auth-token': localStorage.getItem('token')
            },

        });
        const json = await response.json();
        setloading(false)
        if (json.success)
            alert("sold succssfully");
        else
            console.log(json.message);
    }catch(error)
    {
        console.log(error);
        navigate("servererror");
    }
}
    const sendAlert=async(product_id)=>{
        setloading(true)
        const response = await fetch(`http://localhost:8000/api/seller/sendAlert/${product_id}`, {
            method: 'GET',
            headers: {
                'Content-type': "application/json",
                'auth-token': localStorage.getItem('token')
            },

        });
        const json = await response.json();
        setloading(false)
        if (json.success)
        {
             //to do here
        }
        else
            console.log(json.message);
             
    }

    //----------------------------------------------buyer functions----------------------------------------//

    const fetch_user_Wishlist = async () => {
        try{
        setloading(true)
        const response = await fetch("http://localhost:8000/api/user/wishlist", {
            method: 'GET',
            headers: {
                'Content-type': "application/json",
                'auth-token': localStorage.getItem('token')
            },


        });

        const json = await response.json();
        setloading(false)
        console.log(json.wishlist)
        setwishlist(json.wishlist)
    }
    catch(error)
    {
        console.log(error);
        navigate('/servererror');
    }
}


    const fetch_user_myStore = async () => {
        try{
        setloading(true)
        const response = await fetch("http://localhost:8000/api/user/mystore", {
            method: 'GET',
            headers: {
                'Content-type': "application/json",
                'auth-token': localStorage.getItem('token')
            },


        });

        const json = await response.json();
        setloading(false)
        setmystore(json.mystore)
    }catch(error){
        console.log(error);
        navigate('/servererror');
    }
}


    //--------------------------------------------productlist--------------------------------------------------------------------//
    const showBidHistory=async(productid)=>{
        try {
            setloading(true)
            const response=await fetch(`http://localhost:8000/api/product/bidhistory/${productid}`,{
                method:"GET"
            });
            const json=await response.json();
            setloading(false);
            setbidhistory(json.reverse());
            navigate("/bidhistory");
        } catch (error) {
            console.log(error)
            navigate("/servererror")
        } 
    }
    const handleDetails=async(productid)=>{
        try {
            setloading(true)
            const response=await fetch(`http://localhost:8000/api/product/productdetails/${productid}`,{
                method:"GET"
            });
            const json=await response.json();
            setloading(false);
            setdetails(json.product);
            navigate("/productdetails")
        } catch (error) {
            console.log(error)
            navigate("/servererror")
        }
    }
    const fetch_productlist = async () => {
        try {
            setloading(true)
            const response = await fetch("http://localhost:8000/api/product/fetchallproducts", {
                method: 'GET',
                headers: {
                    'Content-type': "application/json",

                },


            });

            const json = await response.json();
            setloading(false)
            setproductlist(json);
        } catch (error) {
            console.log(error)
            navigate("/servererror")
        }
    }

    const createBid = async (productid, bid) => {
        try{
        setloading(true)
        const response = await fetch(`http://localhost:8000/api/user/bid/${productid}/${bid}`, {
            method: 'PUT',
            headers: {
                'Content-type': "application/json",
                'auth-token': localStorage.getItem('token')

            },


        });

        const json = await response.json();
        if (!json.success)
            return alert("warning :" + json.message)
        alert("success:product has been added to wishlist");
        setloading(false)
        console.log(json)
    }catch(error)
    {
        console.log(error);
        navigate('/servererror');
    }
    }


    return (
        <ProductContext.Provider value={{
            unsoldproduct, wishlist, mystore, loading,
            fetch_seller_unsoldproduct, sellproduct, soldproduct, fetch_seller_soldproduct, fetch_user_Wishlist, fetch_user_myStore,
            productlist, fetch_productlist, createBid,sendAlert,details,handleDetails,bidhistory,showBidHistory
        }}>
            {props.children}
        </ProductContext.Provider>
    )

}
export default ProductState;