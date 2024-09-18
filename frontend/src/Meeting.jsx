
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Meeting() {
  const [showForm, setShowForm] = useState(false);
  const [meetingDetails, setMeetingDetails] = useState({
    date: "2024-10-12",
    time: "11:00",
    agenda: "discuss small issues",
  });
  const [meetingOverview, setMeetingOverview] = useState({
    heading: "",
    description: "",
  });
  const [meetingItems, setMeetingItems] = useState([]);

  useEffect(() => {
    fetchMeetingOverviews();
  }, []);

  const fetchMeetingOverviews = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/meetings");
      setMeetingItems(res.data); 
    } catch (error) {
      console.error("Error fetching meeting overviews:", error);
    }
  };

  const handleDetailChange = (e) => {
    const { name, value } = e.target;
    setMeetingDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOverviewChange = (e) => {
    const { name, value } = e.target;
    setMeetingOverview((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (meetingOverview.heading && meetingOverview.description) {
      try {
        const res = await axios.post("http://localhost:4000/api/meetings", meetingOverview);
        setMeetingItems([...meetingItems, res.data]); 
        setMeetingOverview({ heading: "", description: "" });
        setShowForm(false);
      } catch (error) {
        console.error("Error adding meeting overview:", error);
      }
    }
  };

  return (
    <>
      <div className="w-4/5 meeting-card bg-white shadow-lg rounded-lg w-11/12 mx-auto mt-16 p-6 border">
        <div className="meeting-header bg-blue-500 text-white font-bold text-center py-2 rounded">
          Meeting Details
        </div>
        <div className="meeting-body p-4">
          <div className="meeting-detail flex justify-between mb-2">
            <label className="text-gray-700">Meeting Date:</label>
            <input
              type="date"
              name="date"
              className="p-2 border rounded"
              value={meetingDetails.date}
              onChange={handleDetailChange}
            />
          </div>
          <div className="meeting-detail flex justify-between mb-2">
            <label className="text-gray-700">Time:</label>
            <input
              type="time"
              name="time"
              className="p-2 border rounded"
              value={meetingDetails.time}
              onChange={handleDetailChange}
            />
          </div>
          <div className="meeting-detail flex justify-between mb-2">
            <label className="text-gray-700">Agenda:</label>
            <input
              type="text"
              name="agenda"
              className="p-2 border rounded"
              placeholder="Enter agenda"
              value={meetingDetails.agenda}
              onChange={handleDetailChange}
            />
          </div>
        </div>
      </div>

      <h1 className="text-2xl font-bold text-center mt-12 mb-6">Meeting Overviews</h1>
      <div className="flex flex-wrap justify-center">
        {meetingItems.map((item, index) => (
          <div key={index} className="card bg-white shadow-lg rounded-lg p-4 m-2 w-80 border">
            <h3 className="text-xl font-semibold">{item.heading}</h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <button
          className="w-12 h-12 bg-blue-500 text-white semibold rounded-full flex items-center justify-center"
          onClick={() => setShowForm(true)}
        >
          +
        </button>
      </div>

      {showForm && (
        <form className="mt-4 p-4 border mx-auto w-11/12 max-w-md" onSubmit={handleSubmit}>
          <input
            type="text"
            name="heading"
            className="p-2 mb-4 w-full border rounded"
            placeholder="Overview Name"
            value={meetingOverview.heading}
            onChange={handleOverviewChange}
          />
          <input
            type="text"
            name="description"
            className="p-2 mb-4 w-full border rounded"
            placeholder="Description"
            value={meetingOverview.description}
            onChange={handleOverviewChange}
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            Add Overview
          </button>
        </form>
      )}
    </>
  );
}
