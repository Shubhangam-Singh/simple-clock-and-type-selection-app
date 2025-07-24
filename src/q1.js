function validateForm() {
  const errors = [];
  const userid = document.getElementById("userid").value.trim();
  const password = document.getElementById("password").value.trim();
  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const country = document.getElementById("country").value;
  const zip = document.getElementById("zip").value.trim();
  const email = document.getElementById("email").value.trim();
  const sex = document.querySelector('input[name="sex"]:checked');
  const languages = document.querySelectorAll('input[name="language"]:checked');
  const about = document.getElementById("about").value.trim();
  if (userid.length < 5 || userid.length > 12)
    errors.push("User Id must be 5-12 characters.");
  if (password.length < 7 || password.length > 12)
    errors.push("Password must be 7-12 characters.");
  if (!/^[A-Za-z]+$/.test(name))
    errors.push("Name must contain alphabets only.");
  if (!country) errors.push("Select a country.");
  if (!/^[0-9]+$/.test(zip)) errors.push("ZIP Code must be numeric.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.push("Invalid email format.");
  if (!sex) errors.push("Select your sex.");
  if (languages.length === 0) errors.push("Select at least one language.");
  const errorDiv = document.getElementById("errorMessages");
  if (errors.length > 0) {
    errorDiv.innerHTML = errors.join("<br>");
    return false;
  } else {
    errorDiv.innerHTML = "";
    const tableBody = document.getElementById("resultTableBody");
    const newRow = document.createElement("tr");
    function addCell(text) {
      const td = document.createElement("td");
      td.textContent = text;
      newRow.appendChild(td);
    }
    let langArr = [];
    languages.forEach((el) => langArr.push(el.value));
    addCell(userid);
    addCell(password);
    addCell(name);
    addCell(address);
    addCell(country);
    addCell(zip);
    addCell(email);
    addCell(sex.value);
    addCell(langArr.join(", "));
    addCell(about);
    tableBody.appendChild(newRow);
    document.getElementById("resultTable").style.display = "table";
    document.getElementById("regForm").reset();
    return false;
  }
}
