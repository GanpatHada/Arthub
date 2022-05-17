import { useContext, useState } from 'react';
import ProductContext from '../../context/Productcontex';
import Button from '@mui/material/Button';
const Wishlistitems = (props) => {
    const context = useContext(ProductContext);
    const { handleDetails } = context;
    const handlePayment = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/user/order/${props.value._id}`, {
                method: 'GET',
                headers: {
                    'Content-type': "application/json",
                    'auth-token': localStorage.getItem('token')
                },

            });

            const json = await response.json();
            if (json.success) {
                const { id, amount } = json.order;
                const options = {
                    "key": "rzp_test_iezewoK1EFazfr", // Enter the Key ID generated from the Dashboard
                    "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                    "currency": "INR",
                    "name": props.value.title,
                    "description": props.value.category,
                    "image": props.value.image,
                    "order_id": id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                    "handler": function (response) {
                        alert("payment successfull")
                        alert("payment id : " + response.razorpay_payment_id);
                        alert("order id : " + response.razorpay_order_id);
                        alert("signature : " + response.razorpay_signature);
                    },
                    "prefill": {
                        "name": localStorage.getItem('name'),
                        "email": "gaurav.kumar@example.com",
                        "contact": "9999999999"
                    },
                    "notes": {
                        "address": "Razorpay Corporate Office"
                    },
                    "theme": {
                        "color": "black"
                    }
                };
                var rzp1 = new window.Razorpay(options);
                rzp1.open();
                rzp1.on('payment.failed', function (response) {
                    alert(response.error.code);
                    alert(response.error.description);
                    alert(response.error.source);
                    alert(response.error.step);
                    alert(response.error.reason);
                    alert(response.error.metadata.order_id);
                    alert(response.error.metadata.payment_id);
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
                <div className="part1  p-2 " style={{ width: "30%", border: "0.1px solid #D3D3D3" }}>
                    <img src={props.value.image} alt="" />
                </div>
                <div className="part2  p-2 d-flex-column my-auto align-items-center " style={{ width: "300px", overflow: "hidden" }}>
                    <h6 className="mb-2 text-start"><strong>Title : </strong>{props.value.title}</h6>

                    <p className="mb-2 text-start"><strong>Category : </strong>{props.value.category}</p>
                    <p className="mb-2 text-start" ><strong>Base price : </strong>{props.value.price}</p>
                    <p className="mb-2 text-start"><strong>Bid : </strong>{props.value.bid}</p>
                    <p className="mb-2 text-start py-1 text-center" style={{ border: "1px solid rgba(0,0,0,.323)" }}><strong>status : </strong><span>{(props.value.purchasedby === localStorage.getItem('id')) ? <span style={{ color: "green" }}>Request send</span> : <span style={{ color: "red" }}>bid increased</span>}</span></p>
                    <Button type="button" variant="contained" onClick={handlePayment} style={{ width: "100%", backgroundColor: "#0eafed" }}>Make Payment</Button>
                    <div className='d-flex justify-content-between mt-2'>
                        <p onClick={() => { handleDetails(props.value._id) }}><strong style={{ color: "#0eafed", cursor: "pointer" }}>Product Details</strong></p>
                        <p style={{ color: "#0eafed", cursor: "pointer" }}><strong>Bid History</strong></p>
                    </div>
                </div>
            </div>
            <hr />


        </div>
    )
}

export default Wishlistitems