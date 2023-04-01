import React, { useState } from "react";

const options = { multi: false };

function Restorer() {
  const [imageURL, setImageURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [restoredPhoto, setRestoredPhoto] = useState("");
  const [photoGenerated, setPhotoGenerated] = useState(false);

  const restorePhoto = async () => {
    try {
      setIsLoading(true);
      setRestoredPhoto("");
      const result = await fetch("/api/restore", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          imageUrl: imageURL,
        }),
      });
      setIsLoading(false);
      const restoredPhoto = await result.json();
      setRestoredPhoto(restoredPhoto);
      setPhotoGenerated(true);
    } catch (err) {
      setIsLoading(false);
      alert(err);
    }
  };

  return (
    <div className="py-6 flex flex-col justify-center items-center">
      <div className="flex space-x-4">
        {!photoGenerated && (
          <>
            <input
              type="text"
              className="w-96 border border-sky-500 rounded p-2"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
            />
            <button
              disabled={isLoading}
              className="rounded-md bg-[#3290EE] text-white p-3"
              onClick={() => restorePhoto()}
            >
              {isLoading ? "Restoring..." : "Restore"}
            </button>
          </>
        )}
        {photoGenerated && (
          <button
            className="rounded-md bg-[#3290EE] text-white p-3"
            onClick={() => {
              setPhotoGenerated(false);
              setImageURL("");
              setRestoredPhoto("");
            }}
          >
            Make another request
          </button>
        )}
      </div>
      <div className="mt-6 ">
        {restoredPhoto && (
          <div className="flex space-x-4">
            <img src={imageURL} className="w-56 rounded-2xl" alt="Initial Image" />
            <img src={restoredPhoto} className="w-56 rounded-2xl" alt="Restored Image" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Restorer;
