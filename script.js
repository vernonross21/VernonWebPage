function dropDownMenu()
{
    var x = document.getElementById("dropDownClick");
    if(x.className === "topnav")
    {
        x.className = x.classList+ " responsive";
    }
    /* change topnav to topnav.responsive*/

    else
    {
        x.className = "topnav";
    }
}

function emailMessage()
{
    Email.send({
        Host: "smtp.gmail.com",
        Username: "sender@email_address.com",
        Password: "Enter your password",
        To: 'receiver@email_address.com',
        From: "sender@email_address.com",
        Subject: "Sending Email using javascript",
        Body: "Well that was easy!!",
    })
        .then(function (message) {
            alert("mail sent successfully")
        });
}