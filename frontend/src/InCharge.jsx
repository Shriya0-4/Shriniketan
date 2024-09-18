import React from 'react'

function InCharge() {
  const user=[
    { id: "G-01", user: "user1" },
    { id: "G-02", user: "user2" },
    { id: "F-01", user: "user3" },
    { id: "F-02", user: "user4" },
    { id: "S-01", user: "user5" },
    { id: "S-02", user: "user6" },
    { id: "T-01", user: "user7" },
    { id: "T-02", user: "user8" },
  ];
  return (
    <div>
    <div className="card bg-white shadow-lg text-center w-4/5 mx-auto mt-20 border p-4">
      <div className="card-header text-xl font-bold">House in-charge</div>
      <div className="card-body">
        <h3 className="text-3xl">T-01</h3>
        <h5 className="text-xl">user7</h5>
        <p className="text-gray-600">Responsible for maintenance and managing apartment-related issues.</p>
      </div>
      <div className="card-footer text-gray-500">Year: 2024</div>
    </div>

    <h1 className="text-2xl mt-24 mb-8 ml-40">Upcoming incharge:</h1>
   {user.map((inCharge, index) => (
      <div className="card bg-white shadow-lg p-4 w-4/5 mx-auto mt-4 mb-4 relative border" key={index}>
        <div className="card-header font-bold text-lg">{inCharge.id}</div>
        <div className="card-body ">
          <blockquote className="mb-0 ">
            <h1 className="text-2xl">{inCharge.user}</h1>
          </blockquote>
        </div>
        <span className="year-badge absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded text-lg font-bold">
          {2025+index}
        </span>
      </div>
    ))}
  </div>
  )
}

export default InCharge