import { Container, makeStyles, Paper } from "@material-ui/core";
import { Height, SignalWifi1BarLockSharp } from "@material-ui/icons";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useCallback, useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  blogContainer: {
    display: "flex",
    flexFlow: "column",
    //justifyContent: "center",
    minHeight: "6in",
    paddingTop: "4%",
    //color: theme.palette.type === "dark" ? "white" : "black",
    alignItems: "center",
  },
  whiteBGColor: {
    backgroundColor: "#f9f9f9",
    //minHeight: "4in",
    //marginLeft: "5%",
    //marginRight: "5%",
    display: "flex",
    flexFlow: "column",
    maxWidth: "70%",
  },
}));

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

const TestTextEditor = ({ handleInputData }) => {
  const styles = useStyles();
  const [quill, setQuill] = useState();
  const [data, setData] = useState("");

  const editorDivClick = () => {
    console.log("EDITOR DIV CLICKED");
    if (quill != null) {
      quill.focus();
    }
  };

  const handleData = (value, dataTesting) => {
    console.log("delta value : " + JSON.stringify(value.ops[0]));

    //console.log("needed value : " + value[value.length - 1]);
    console.log("needed value : " + JSON.stringify(dataTesting));
    var td = dataTesting.ops[0].insert;
    console.log("needed value TD: " + td);
    console.log("TYPEOF td : " + typeof td);
    if (typeof td === "string" && td.includes("\n")) {
      console.log("TRUE");
      var tdd = td.replaceAll("\n", "<br />");
      console.log("TDD : " + tdd);
    }

    //setData(data.concat(dataTesting.ops[0].insert));
    //setData(tdd);
    handleInputData(dataTesting);
  };
  useEffect(() => {
    if (quill == null) return;
    const handler = (delta, oldDelta, source) => {
      if (source !== "user") return;
      handleData(delta, quill.getContents());
      console.log("QUILL ROOT  : ", quill?.root.innerHTML);
      setData(quill?.root.innerHTML);
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
    <Paper className={styles.blogContainer}>
      <div
        ref={wrapperRef}
        className={styles.whiteBGColor}
        onClick={editorDivClick}
      ></div>
      <div>Typed : {data}</div>
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </Paper>
  );
};
export default TestTextEditor;
