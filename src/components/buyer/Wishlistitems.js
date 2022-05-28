import { useContext, useState } from 'react';
import ProductContext from '../../context/Productcontex';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
const Wishlistitems = (props) => {
    const context = useContext(ProductContext);
    const {setpaymentdetails,handleDetails,handlepaymentdetails,setpaymentfaileddetails,handlepaymentfaileddetails}=context;
      const handlePayment = async (productid) => {
        try {
            const response = await fetch(`http://localhost:8000/api/user/order/${props.value._id}`, {
                method: 'GET',
                headers: {
                    'Content-type': "application/json",
                    'auth-token': localStorage.getItem('token')
                },

            });
            const json = await response.json();
            const response1 = await fetch(`http://localhost:8000/api/user/userdetails`, {
                method: 'GET',
                headers: {
                    'Content-type': "application/json",
                    'auth-token': localStorage.getItem('token')
                },

            });
            const json1 = await response1.json();

            if (json.success) {
                const { id, amount } = json.order;
                const options = {
                    "key": "rzp_test_iezewoK1EFazfr", // Enter the Key ID generated from the Dashboard
                    "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                    "currency": "INR",
                    "name": props.value.title,
                    "description": props.value.category,
                    "image": props.value.image,
                    "readonly": {
                        "email": true,
                        "contact": true
                    },
                    "order_id": id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                    "handler": function (response) {
                        // alert("payment successfull")
                        // alert("payment id : " + response.razorpay_payment_id);
                        // alert("order id : " + response.razorpay_order_id);
                        // alert("signature : " + response.razorpay_signature);
                        setpaymentdetails({
                            orderid: response.razorpay_order_id,
                            paymentid: response.razorpay_payment_id,
                            productid: productid
                        })
                        handlepaymentdetails();
                    },
                    "theme": {
                        "color": "green"
                    },
                    "prefill": {
                        "name": json1.name,
                        "email": json1.email,
                        "contact": json1.phone
                    },

                };
                var rzp1 = new window.Razorpay(options);
                rzp1.open();
                rzp1.on('payment.failed', function (response) {
                    const{code,description,source,reason,metadata}=response.error;
                    setpaymentfaileddetails({code,description,source,reason,metadata});
                    handlepaymentfaileddetails();
                    
                });
            }
            else {
                console.log(json.message);
                alert("something went wrong")
            }
        }
        catch (error) {
            console.log(error);
        }

    }
    return (
        <div>
            <div className="buyitems d-flex ">
                <div className="part1 p-1" style={{ width: "400px" }}>
                    <img src={props.value.image} alt="" />
                </div>
                <div className="part2  p-2 d-flex-column my-auto align-items-center " style={{ width: "300px", overflow: "hidden" }}>
                    <p className="mb-2 text-start"><strong>Title : </strong>{props.value.title}</p>

                    {/* <p className="mb-2 text-start"><strong>Category : </strong>{props.value.category}</p> */}
                    <p className="mb-2 text-start" ><strong>Base price : </strong>{props.value.price}</p>
                    <p className="mb-2 text-start"><strong>Bid : </strong>{props.value.bid}</p>
                    <p className="mb-2 text-start py-1 text-center" style={{ border: "1px solid rgba(0,0,0,.323)" }}><strong>status : </strong><span>{props.value.approved&&props.value.purchasedby===localStorage.getItem('id')?<span style={{ color: "blue" }}>Request approved</span>:(props.value.purchasedby === localStorage.getItem('id')) ? <span style={{ color: "green" }}>Request send</span> : <span style={{ color: "red" }}>bid increased</span>}</span></p>
                    <Button type="button" id="paymentbtn" variant="contained" onClick={()=>{handlePayment(props.value._id)}} style={{display:props.value.approved&&props.value.purchasedby===localStorage.getItem('id')?"block":"none",width:"100%"}}>Make Payment</Button>
                    <div className='d-flex justify-content-start mt-2'>
                        <span id="details" onClick={() => { handleDetails(props.value._id) }}><strong>Product Details</strong></span>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Wishlistitems