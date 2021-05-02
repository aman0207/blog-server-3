import { Button } from "@material-ui/core";
import dynamic from "next/dynamic";
import { useCallback, useState, useEffect } from "react";

const TestTextEditor = dynamic(() => import("../components/TestTextEditor"), {
  ssr: false,
});

const textEditor = () => {
  const [data, setData] = useState("");
  const handleClick = async () => {
    console.log("DATA in PAGE : " + JSON.stringify(data));
    const reqOptions = {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({
        title: `Title11 ${new Date().getDate()}`,
        body: data,
      }),
    };
    const resp = await fetch("http://localhost:3000/api/article", reqOptions);
    const savedArticle = await resp.json();
    console.log("savedArticle : " + JSON.stringify(savedArticle));
    setData("");
  };
  return (
    <>
      <TestTextEditor inputData={data} handleInputData={setData} />
      <Button variant="contained" color="primary" onClick={() => handleClick()}>
        Submit
      </Button>
    </>
  );
};

export default textEditor;
