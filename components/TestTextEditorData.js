const getTextEditorData1 = () => {
  return {
    ops: [
      { insert: "hello World\n" },
      { attributes: { bold: true }, insert: "I need this Data" },
      { insert: "\n" },
      {
        attributes: { italic: true, bold: true },
        insert: "Where can I get this data ?",
      },
      { insert: "\nPractice makth a man perfect" },
      { attributes: { blockquote: true }, insert: "\n\n" },
      { insert: "\n" },
    ],
  };
};

export default getTextEditorData1;
