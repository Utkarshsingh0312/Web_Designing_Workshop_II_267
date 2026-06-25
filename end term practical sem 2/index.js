function calculateAge() {

    let dob = document.getElementById("dob").value;
    let result = document.getElementById("result");

    if (!dob) {
        result.innerHTML = "Please select your date of birth.";
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    if (birthDate > today) {
        result.innerHTML = "Date of birth cannot be in the future.";
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        let lastMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();
        days += lastMonth;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerHTML = `
        🎉 You are <br><br>
        <span style="color:#667eea">${years}</span> Years
        <span style="color:#667eea">${months}</span> Months
        <span style="color:#667eea">${days}</span> Days Old
    `;
}