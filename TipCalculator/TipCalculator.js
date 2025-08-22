function calculateTip() {
    let bill = parseFloat(document.getElementById("bill").value);
    let per = parseFloat(document.getElementById("per").value);
    
    if (isNaN(bill) || isNaN(per)) {
        document.getElementById("result").innerText = "Please enter valid numbers";
        return;
    }

    let total = bill + (bill * per / 100);
    document.getElementById("result").innerText = "Total Amount: "+ "₹"+ total ;
}