import React, { useState } from "react";

export default function StudentPortal() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [materials, setMaterials] = useState([]);
  const [newMaterial, setNewMaterial] = useState("");

  const handleLogin = () => {
    if (username && password) {
      setUser(username);
    }
  };

  const addMaterial = () => {
    if (newMaterial) {
      setMaterials([...materials, { text: newMaterial, owner: user }]);
      setNewMaterial("");
    }
  };

  const deleteMaterial = (index) => {
    const updated = materials.filter((_, i) => i !== index);
    setMaterials(updated);
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-2xl shadow-xl w-80">
          <h2 className="text-xl font-bold mb-4 text-center">Student Login</h2>
          <input
            className="border w-full p-2 mb-3 rounded"
            placeholder="Registration Number"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="border w-full p-2 mb-3 rounded"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white w-full p-2 rounded"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user}</h1>

      <div className="bg-white p-4 rounded-xl shadow mb-6">
        <h2 className="font-semibold mb-2">Upload Study Material</h2>
        <input
          className="border p-2 w-full rounded mb-2"
          placeholder="Material Name"
          value={newMaterial}
          onChange={(e) => setNewMaterial(e.target.value)}
        />
        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
          onClick={addMaterial}
        >
          Upload
        </button>
      </div>

      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="font-semibold mb-3">Uploaded Materials</h2>
        {materials.length === 0 && <p>No materials uploaded.</p>}
        {materials.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b py-2"
          >
            <span>{item.text}</span>
            {item.owner === user && (
              <button
                className="text-red-600"
                onClick={() => deleteMaterial(index)}
              >
                Delete
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
