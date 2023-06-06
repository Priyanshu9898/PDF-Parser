import { useState } from "react";
import "./Home.css";

const Home = () => {

  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [parsedText, setParsedText] = useState("");

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    event.target.files[0] && setIsFilePicked(true);
  };

  const handleSubmission = async (e) => {

    e.preventDefault();

    if (!isFilePicked) return;

    let formData = new FormData();
    
    formData.append("pdf", selectedFile);
    
    try {
      const response = await fetch("http://localhost:5000/api/parsePDF", {
        method: "POST",
        body: formData,
      });

      const result = await response.text();

      setParsedText(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
        <label for="images" class="drop-container">
            <span class="drop-title">Drop files here</span>
            or
            <input type="file" name="pdf" onChange={changeHandler} required/>
        </label>
        <div className="btnBox">
            <button className="btn" onClick={handleSubmission}>Submit</button>
        </div>
        <div className="result">
          <h1>Result</h1>
        {isFilePicked && <div className="result-Box">{parsedText}</div>}
        </div>
    </div>
  );
};

export default Home;
