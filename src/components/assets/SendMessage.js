const sendMessage = async (productid, buyername, bid, paymentid) => {

    try {
        console.log("goes here")
        const response = await fetch('https://www.fast2sms.com/dev/bulkV2',{
            headers:{
    
            "authorization": "Vm5TRAvKDb0SXnuZ4EhW2rgL8ywNJkO6sixzeq9d7BpIfUlPCQW15JCQXbyNncUmgluHD4AePRzSrZqf",
            "Content-Type": "application/json"
        },
        body:{
                "route" : "q",
                "message" : `Dear ${buyername}, \n You have successfully purchased an NFT having id : ${productid} for ${bid} rs.\n\npayment id : ${paymentid}`,
                "language" : "english",
                "flash" : 0,
                "numbers" : "6378793806",
        }
        
    })
    let json = await response.json();
    console.log(json)
    } catch (error) {
        console.log(error);
    }
   
}
export default sendMessage;