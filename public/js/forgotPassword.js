const resetButton = document.getElementById('resetBtn');
const user = document.getElementById('email');

//FORGOT PASSWORD LOGIC 
forgotButton.addEventListener("click", async function (e) {
    e.preventDefault();
    const userEmail = user.value;
    const userObj = {
        email: userEmail,
    }
    await axios.post(
        "/password/forgotPassword",
        userObj
    );

})
