import React from "react";
import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadDropzone } from "react-uploader";

const uploader = Uploader({
  apiKey: "free", // Get production API keys from Upload.io
});

const options = { multi: false };

function Restorer() {
  return (
    <div className="max-w-6xl mx-auto py-3 flex justify-center">
      <UploadDropzone
        uploader={uploader}
        options={options}
        onUpdate={(files) => alert(files.map((x) => x.fileUrl).join("\n"))}
        width="600px"
        height="375px"
      />
    </div>
  );
}

export default Restorer;
