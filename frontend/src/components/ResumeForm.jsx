import React, { useState } from "react";
import axios from "axios";

function ResumeForm() {
  const [formData, setFormData] = useState({
    // ... (fields for name, contact info, experience, etc.)
  });

  const handleChange = (event) => {
    // ... (update formData based on user input)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/resume", formData);
      console.log(response.data); // Handle the API response (e.g., success message)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ... (input fields for name, contact info, etc.) */}
      <button type="submit">Generate Resume</button>
    </form>
  );
}

export default ResumeForm;
