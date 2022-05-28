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
    const [paymentdetails, setpaymentdetails] = useState({})
    const [paymentfaileddetails, setpaymentfaileddetails] = useState({})
    const [invoicedetails, setinvoicedetails] = useState({})

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
        console.table(json);
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
    const approveproduct = async (product_id) => {
        try{
        setloading(true)
        const response = await fetch(`http://localhost:8000/api/seller/updateapprove/${product_id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': "application/json",
                'auth-token': localStorage.getItem('token')
            },

        });
        const json = await response.json();
        setloading(false)
        if (json.success);
        else
            console.log(json.message);
    }catch(error)
    {
        console.log(error);
        navigate("servererror");
    }
}
    

    //----------------------------------------------buyer functions----------------------------------------//

    const fetch_user_Wishlist = async () => {
        try{
        setloading(true)
        const response = await fetch("http://localhost:8000/api/user/wishlist2", {
            method: 'GET',
            headers: {
                'Content-type': "application/json",
                'auth-token': localStorage.getItem('token')
            },


        });

        const json = await response.json();
        setloading(false)
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
            const response=await fetch(`http://localhost:8000/api/product/bidhistory/${productid}`,{
                method:"GET"
            });
            const json=await response.json();
            setbidhistory(json.reverse());
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
    const handlepaymentdetails=async()=>{
        try {
            setloading(true)
            const response = await fetch(`http://localhost:8000/api/payment/makepayment/${paymentdetails.productid}/${paymentdetails.orderid}/${paymentdetails.paymentid}`, {
                method: 'GET',
                headers: {
                    'Content-type': "application/json",

                },
                
            });

            const json = await response.json();
            setloading(false)
            if(json.success)
                {setinvoicedetails(json.payment);
                navigate("/invoice");}
            else
            {
                console.log(json.message)
                navigate("/servererrror");
            }    
        } catch (error) {
            console.log(error)
            navigate("/servererror")
        }
        
    }
    const handlepaymentfaileddetails=()=>{
        console.table(paymentfaileddetails)
        navigate('/paymentfailed')
    }
    const fetch_productlist = async () => {
        try {
            setloading(true)
            const response = await fetch("http://localhost:8000/api/product/fetchallproducts", {
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Origin':'*',
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
        const response = await fetch(`http://localhost:8000/api/user/bid/${productid}/${bid}`, {
            method: 'PUT',
            headers: {
                'Content-type': "application/json",
                'auth-token': localStorage.getItem('token')

            },


        });

        const json = await response.json();
        if (!json.success)
            return alert(" Warning : Bid should be more than privious bid ")
        let updatedproduct=JSON.parse(JSON.stringify(productlist))
        for(let index=0;index<updatedproduct.length;index++)
        {
            const element=updatedproduct[index];
            if(element._id===productid)
            {
                updatedproduct[index].bid=bid;
                break;
            }
            
        }
        setproductlist(updatedproduct);
    }catch(error)
    {
        console.log(error);
        navigate('/servererror');
    }
    }


    return (
        <ProductContext.Provider value={{
            unsoldproduct, wishlist, mystore, loading,
            fetch_seller_unsoldproduct, approveproduct, soldproduct, fetch_seller_soldproduct, fetch_user_Wishlist, fetch_user_myStore,
            productlist, fetch_productlist, createBid,details,handleDetails,bidhistory,showBidHistory,paymentdetails,setpaymentdetails,
            handlepaymentdetails,invoicedetails,setpaymentfaileddetails,handlepaymentfaileddetails,paymentfaileddetails
        }}>
            {props.children}
        </ProductContext.Provider>
    )

}
export default ProductState;