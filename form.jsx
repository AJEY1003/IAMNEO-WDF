import { useState } from "react";
function Text() {
  const [form, setForm] = useState({
    firstname: "Ajey",
    lastname: "Kumaran",
      id:1
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // Extract the input's name and value
    setForm((prev) => ({
      ...prev,        // Keep other form fields unchanged
      [name]: value,  // Update the specific field dynamically
    }));
  };
console.log(form);
  return (
    <>
      <input
        type="text"
        name="firstname"
        placeholder="First Name"
        value={form.firstname}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastname"
        placeholder="Last Name"
        value={form.lastname}
        onChange={handleChange}
      />
            <input type="number" value={form.id} name="id"onChange={handleChange}/>
      <p>
        First Name: {form.firstname}, Last Name: {form.lastname},id:{form.id}
      </p>
    </>
  );
}

export default Text;



