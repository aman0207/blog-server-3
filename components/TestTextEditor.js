import { Container } from "@material-ui/core";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useCallback, useState, useEffect } from "react";
import testStyles from "../styles/TestTextEditor.module.css";

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { backbround: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  ["image", "blockquote", "code-block"],
  ["clean"],
];

const TestTextEditor = () => {
  const [quill, setQuill] = useState();
  const [data, setData] = useState("");

  const handleData = (value, dataTesting) => {
    console.log("delta value : " + JSON.stringify(value.ops[0]));

    //console.log("needed value : " + value[value.length - 1]);
    console.log("needed value : " + JSON.stringify(dataTesting));
    var td = dataTesting.ops[0].insert;
    console.log("needed value : " + td);
    console.log("TYPEOF td : " + typeof td);
    if (td.includes("\n")) {
      console.log("TRUE");
      var tdd = td.replaceAll("\n", "<br />");
      console.log("TDD : " + tdd);
    }

    //setData(data.concat(dataTesting.ops[0].insert));
    setData(tdd);
  };
  useEffect(() => {
    if (quill == null) return;
    const handler = (delta, oldDelta, source) => {
      if (source !== "user") return;
      handleData(delta, quill.getContents());
    };
    quill.on("text-change", handler);
    return () => {
      quill.off("text-change", handler);
    };
  }, [quill, data]);

  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;
    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    const q = new Quill(editor, {
      theme: "snow",
      modules: { toolbar: TOOLBAR_OPTIONS },
      //modules: { toolbar: null },
    });
    setQuill(q);
    return () => {
      wrapperRef.innerHTML = "";
    };
  }, []);

  return (
    <Container>
      <div id="container" ref={wrapperRef}></div>
      <div>Typed : {data}</div>
      <td dangerouslySetInnerHTML={{ __html: data }} />
    </Container>
  );
};
export default TestTextEditor;
