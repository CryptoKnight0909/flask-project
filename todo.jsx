import { useState } from "react";

export default function TodoPage() {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Item submitted:", { itemName, itemDescription });
    // Later you can connect this to backend
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">To-Do Page</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Item Name:</label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block">Item Description:</label>
          <textarea
            value={itemDescription}
            onChange={(e) => setItemDescription(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div>
	  <label className="block">Item UUID:</label>
	  <input
	    type="text"
	    value={itemUUID}
	    onChange={(e) => setItemUUID(e.target.value)}
	    className="border p-2 w-full"
	  />
	</div>
        <div>
  	   <label className="block">Item ID:</label>
  	   <input
	    type="text"
	    value={itemId}
	    onChange={(e) => setItemId(e.target.value)}
	    className="border p-2 w-full"
  	    />
	</div>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
