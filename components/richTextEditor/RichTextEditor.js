import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// Material-UI components.
import InputLabel from "@material-ui/core/InputLabel";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  nominalVerticalMargin: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const editorConfigurations = {};

const RichTextEditorComponent = (props) => {
  const style = useStyles();
  const { editorFieldName, formSyncFunc, editorDefaultData } = props;

  return (
    <React.Fragment>
      <div className={style.nominalVerticalMargin}>
        <InputLabel>{editorFieldName}</InputLabel>
      </div>
      <CKEditor
        editor={ClassicEditor}
        onReady={(editor) => {
          console.info("Editor is ready");
        }}
        onChange={(event, editor) => {
          const editorData = editor.getData();
          formSyncFunc(editorData);
        }}
        data={editorDefaultData}
      />
    </React.Fragment>
  );
};

export default RichTextEditorComponent;
