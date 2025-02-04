function applyDiscount() {
        let code = document.getElementById("discountCode").value.trim();
        let validCode = "GFX10"; // Set the correct discount code

        if (code === validCode) {
            let discount3 = 250000 * 0.90;
            let discount6 = 450000 * 0.90;
            let discount12 = 800000 * 0.90;

            document.getElementById("price3").innerHTML = `<span class="discounted-price">₦250,000</span> <span class="discount">₦${discount3.toLocaleString()}</span>`;
            document.getElementById("price6").innerHTML = `<span class="discounted-price">₦450,000</span> <span class="discount">₦${discount6.toLocaleString()}</span>`;
            document.getElementById("price12").innerHTML = `<span class="discounted-price">₦800,000</span> <span class="discount">₦${discount12.toLocaleString()}</span>`;

            document.getElementById("btn3").setAttribute('onclick', `subscribe(${discount3}, 2)`);
            document.getElementById("btn6").setAttribute('onclick', `subscribe(${discount6}, 3)`);
            document.getElementById("btn12").setAttribute('onclick', `subscribe(${discount12}, 4)`);
            
            alert("Discount applied successfully!");
        } else {
            alert("Invalid discount code.");
        }
    }

    function subscribe(amount, plan) {
        window.location.href = `payment.html?amount=${amount}&plan=${plan}`;
    }
