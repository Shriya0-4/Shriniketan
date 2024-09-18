import React from 'react'

function Contacts() {
  return (
    <div className="bg-white w-96 rounded-lg shadow-md mt-16 mx-auto p-6 border">
        <div className="text-2xl font-bold mb-6 text-center">Contacts</div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center py-2 border-b border-gray-300">
            <div className="text-lg font-medium text-gray-800">user1</div>
            <div className="text-lg text-gray-600">123-456-7890</div>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-300">
            <div className="text-lg font-medium text-gray-800">user2</div>
            <div className="text-lg text-gray-600">987-654-3210</div>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-300">
            <div className="text-lg font-medium text-gray-800">user3</div>
            <div className="text-lg text-gray-600">555-123-4567</div>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-300">
            <div className="text-lg font-medium text-gray-800">user4</div>
            <div className="text-lg text-gray-600">444-555-6666</div>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-300">
            <div className="text-lg font-medium text-gray-800">user5</div>
            <div className="text-lg text-gray-600">333-222-1111</div>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-300">
            <div className="text-lg font-medium text-gray-800">user6</div>
            <div className="text-lg text-gray-600">111-222-3333</div>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-300">
            <div className="text-lg font-medium text-gray-800">user7</div>
            <div className="text-lg text-gray-600">666-777-8888</div>
          </div>
          <div className="flex justify-between items-center py-2">
            <div className="text-lg font-medium text-gray-800">user8</div>
            <div className="text-lg text-gray-600">999-000-1111</div>
          </div>
        </div>
      </div>
  )
}

export default Contacts