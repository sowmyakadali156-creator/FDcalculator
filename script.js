document.addEventListener("DOMContentLoaded", function () {

    const amount = document.getElementById("amount");
    const roi = document.getElementById("roi");
    const time = document.getElementById("time");

    amount.addEventListener("input", function () {
        document.getElementById("amountValue").innerText =
            parseFloat(this.value).toLocaleString("en-IN");
    });

    roi.addEventListener("input", function () {
        document.getElementById("roiValue").innerText =
            parseFloat(this.value).toFixed(1);
    });

    time.addEventListener("input", function () {
        document.getElementById("timeValue").innerText = this.value;
    });

});

function calculateFD() {

    const p = parseFloat(document.getElementById("amount").value);
    const r = parseFloat(document.getElementById("roi").value);
    const t = parseFloat(document.getElementById("time").value);

    const n = 4; 

    const total = p * Math.pow((1 + (r / 100) / n), n * t);
    const interest = total - p;

    document.getElementById("invested-amount").innerText =
        " ₹" + Math.round(p).toLocaleString("en-IN");

    document.getElementById("estimated-amount").innerText =
        " ₹" + Math.round(interest).toLocaleString("en-IN");

    document.getElementById("total-value").innerText =
        " ₹" + Math.round(total).toLocaleString("en-IN");
}