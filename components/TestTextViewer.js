import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useCallback, useState, useEffect } from "react";
import getTextEditorData1 from "./TestTextEditorData";
import "../styles/TestTextEditor.module.css"; //testCss from
import "quill/dist/quill.snow.css";
import { Container, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  blogContainer: {
    display: "flex",
    //flexFlow: "column",
    justifyContent: "center",
    minHeight: "6in",
    paddingTop: "4%",
  },
}));

const TestTextViewer = () => {
  const styles = useStyles();
  const [quill, setQuill] = useState();
  const docData = getTextEditorData1();
  useEffect(() => {
    if (quill == null || docData == null) return;

    quill.setContents(docData);
  }, [quill, docData]);

  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;
    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    const q = new Quill(editor, {
      theme: "snow",
      modules: { toolbar: false },
    });
    q.disable();
    setQuill(q);
    return () => {
      wrapperRef.innerHTML = "";
    };
  }, []);
  return (
    <Paper variant="outlined" square className={styles.blogContainer}>
      {/* <div className="externalContainer" ref={wrapperRef}></div> */}
      <div ref={wrapperRef}></div>
    </Paper>
  );
};

export default TestTextViewer;
