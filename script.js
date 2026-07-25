const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx6JbgNEKxq1g6SqgunHs37Fffv2vyNRUWuhFV5H5Nx9dKtavRUkhyRXrRdXd7k3XEQ/exec";

const form = document.getElementById("admissionForm");
const submitBtn = document.getElementById("submitBtn");

if (form && submitBtn) {
    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        submitBtn.disabled = true;
        submitBtn.textContent = "Submitting...";

        const data = {
            studentName: document.getElementById("studentName").value,
            dateOfBirth: document.getElementById("dateOfBirth").value,
            gender: document.getElementById("gender").value,
            classApplying: document.getElementById("classApplying").value,
            parentName: document.getElementById("parentName").value,
            phone: document.getElementById("phone").value,
            email: document.getElementById("email").value,
            address: document.getElementById("address").value
        };

        try {
            const response = await fetch(SCRIPT_URL, {
                method: "POST",
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert("✅ Application submitted successfully!");
                form.reset();
            } else {
                alert("❌ Submission failed. Please try again.");
            }
        } catch (error) {
            console.error(error);
            alert("❌ Unable to connect to the server.");
        }

        submitBtn.disabled = false;
        submitBtn.textContent = "Submit Enrollment Application";
    });
}