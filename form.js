//the form body style

let bodyForm = document.getElementById("cover");
bodyForm.style.display = "flex";
bodyForm.style.justifyContent ="center";
bodyForm.style.alignContent = "center";
bodyForm.style.height ="100vh";
bodyForm.style.background ="#f5f6fa";
bodyForm.style.fontFamily = "Arial, sans-serif"

//the form style

let signForm = document.getElementById("container");
signForm.style.background = "#ffffff";
signForm.style.color ="#333"
signForm.style.width = "100%";
signForm.style.padding = "30px 30px";
signForm.style.boxShadow ="0px 8px 20px rgba(0, 0, 0, 0.15)";
signForm.style.borderRadius = "1rem";
signForm.style.maxWidth = "400px";
signForm.style.marginTop ="70px";
signForm.style.marginBottom ="200px";


//for text

let signIn = document.getElementById("in");
signIn.style.marginBottom = "30px";
signIn.style.textAlign="center";
signIn.style.fontSize="40px";
signIn.style.fontWeight="800";
signIn.style.textTransform ="uppercase";
signIn.style.color="#357ABD";


//each form div
let textForm = document.getElementById("word");
textForm.style.marginBottom="20px";

let text1Form = document.getElementById("word1");
text1Form.style.marginBottom="20px";

let text2Form = document.getElementById("word2");
text2Form.style.marginBottom="20px";

//for box
let fullnameBox = document.getElementById("FullName");
fullnameBox.style.width ="100%";
fullnameBox.style.padding="5px 5px";

let emailBox = document.getElementById("Email");
emailBox.style.width="100%";
emailBox.style.padding="5px 5px";

let passwordBox = document.getElementById("Password");
passwordBox.style.width="100%";
passwordBox.style.padding="5px 5px";


// for here
let hereShift = document.getElementById("here");
hereShift.style.marginLeft="0px";

//for button
let signButton = document.getElementById("btn");
signButton.style.border = "none";
signButton.style.color = "#ffffff";
signButton.style.padding =" 10px 10px";
signButton.style.borderRadius="10px";
signButton.style.background="#4a90e2";
signButton.style.minWidth="50%";
signButton.style.fontSize="1rem";
signButton.style.marginLeft="23%";

signButton.onmouseover = () => {
    signButton.style.background="#357ABD";
}

signButton.onmouseout = () => {
    signButton.style.background="#4a90e2";
}
