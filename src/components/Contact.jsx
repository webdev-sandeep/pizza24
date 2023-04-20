import React, { useState } from "react";

const Contact = () => {
  const initialState = {
    name: "",
    person: "",
    date: new Date().toISOString().slice(0, -8),
    message: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleFormData = ({ field, value }) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="bg-gray-500 pt-20 pb-8 text-white px-4" id="contact">
      <div className="max-w-[61rem] mx-auto">
        <h2 className="text-6xl text-center">Contact</h2>
        <p className="text-2xl mt-20">
          Find us at some address at some place or call us at 05050515-122330
        </p>
        <p className="text-2xl my-8">
          <span className="bg-black text-white px-2">FYI!</span> We offer
          full-service catering for any event, large or small. We understand
          your needs and we will cater the food to satisfy the biggerst criteria
          of them all, both look and taste.
        </p>
        <p className="text-4xl mb-6">
          <span className="font-bold">Reserve</span> a table, ask for today's
          special or just send us a message:
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="text-black text-2xl placeholder:text-2xl mb-8"
        >
          <input
            type="text"
            className="py-4 px-2 my-4 w-full"
            placeholder="Name"
            value={formData.name}
            onChange={(e) =>
              handleFormData({ field: "name", value: e.target.value })
            }
          />
          <input
            type="text"
            className="py-4 px-2 my-4 w-full"
            placeholder="How many people"
            value={formData.people}
            onChange={(e) =>
              handleFormData({ field: "people", value: e.target.value })
            }
          />
          <input
            type="datetime-local"
            className="py-4 px-2 my-4 w-full"
            value={formData.date}
            onChange={(e) =>
              handleFormData({ field: "date", value: e.target.value })
            }
          />
          <input
            type="text"
            className="py-4 px-2 my-4 w-full"
            placeholder="Message \ Special Request"
            value={formData.message}
            onChange={(e) =>
              handleFormData({ field: "message", value: e.target.value })
            }
          />
          <input
            type="button"
            value="Send Message"
            className="text-center bg-white w-full text-black py-4 my-4 text-2xl cursor-pointer"
            onClick={() => setFormData(initialState)}
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
