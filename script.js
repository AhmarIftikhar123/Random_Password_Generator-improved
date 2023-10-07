const Generate_btn = document.getElementById("Generate_btn");

const Password_input = document.getElementById("password_opt");

let password_range = document.getElementById("password_range");

let password_num = document.getElementById("password_num");

const UpperCase_input = document.getElementById("UpperCase");

const LowerCase_input = document.getElementById("LowerCase");

const digits = document.getElementById("Digits");

const special = document.getElementById("Special");

let copy_btn = document.querySelector(".output_box img");

password_num.textContent = password_range.value;

password_range.addEventListener("input", () => {
  password_num.textContent = password_range.value;
});

let Generate_Password = () => {
  let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  let digitsChars = "0123456789";
  let specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  let genPassword = "";

  let AllChars = "";

  AllChars += UpperCase_input.checked ? uppercaseChars : "";
  AllChars += LowerCase_input.checked ? lowercaseChars : "";
  AllChars += digits.checked ? digitsChars : "";
  AllChars += special.checked ? specialChars : "";

  if (AllChars === "" || AllChars.length === 0) {
    return genPassword;
  }

  for (let i = 0; i < password_range.value; i++) {
    genPassword += AllChars[Math.floor(Math.random() * AllChars.length)];
  }
  return genPassword;
};

Generate_btn.addEventListener("click", () => {
  Password_input.value = Generate_Password();
});

copy_btn.addEventListener("click", () => {
  let success_img = "imgs/success.png";

  let copy_img = "imgs/copy.png";

  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(Password_input.value)
      .then(() => {
        console.log("Content copied successfully");

        copy_btn.setAttribute("src", success_img);

        setTimeout(() => {
          copy_btn.setAttribute("src", copy_img);
        }, 2000);
      })
      .catch((err) => {
        console.log(`Error : ${err}`);
      });
  } else {
    console.log(
      "Input is blanked || Clopboard API is not Supported in this environment"
    );
  }
});
