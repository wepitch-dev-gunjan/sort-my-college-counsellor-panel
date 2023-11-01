import React, { useState } from 'react';

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    followers_count: 0,
    experience_in_years: 5,
    total_sessions_attended: 0,
    how_will_i_help: [],
    qualifications: ["Sample Qualification 1", "Sample Qualification 2"],
    languages_spoken: ["English", "Hindi"],
    location: {
      pin_code: 123456,
      city: 'Sample City',
      state: 'Sample State',
      country: 'Sample Country',
    },
    gender: 'Male',
    age: null,
    client_testimonials: [],
    group_session_price: null,
    personal_session_price: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Followers Count:</label>
        <input
          type="number"
          name="followers_count"
          value={formData.followers_count}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Experience (in years):</label>
        <input
          type="number"
          name="experience_in_years"
          value={formData.experience_in_years}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Total Sessions Attended:</label>
        <input
          type="number"
          name="total_sessions_attended"
          value={formData.total_sessions_attended}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Qualifications:</label>
        <input
          type="text"
          name="qualifications"
          value={formData.qualifications.join(', ')}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Languages Spoken:</label>
        <input
          type="text"
          name="languages_spoken"
          value={formData.languages_spoken.join(', ')}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Pin Code:</label>
        <input
          type="number"
          name="location.pin_code"
          value={formData.location.pin_code}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>City:</label>
        <input
          type="text"
          name="location.city"
          value={formData.location.city}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>State:</label>
        <input
          type="text"
          name="location.state"
          value={formData.location.state}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Country:</label>
        <input
          type="text"
          name="location.country"
          value={formData.location.country}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Gender:</label>
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Group Session Price:</label>
        <input
          type="number"
          name="group_session_price"
          value={formData.group_session_price}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Personal Session Price:</label>
        <input
          type="number"
          name="personal_session_price"
          value={formData.personal_session_price}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ProfileForm;
