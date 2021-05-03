import dynamic from "next/dynamic";

const TestTextEditor = dynamic(() => import("../components/TestTextEditor"), {
  ssr: false,
});

const textEditor = () => {
  return <TestTextEditor />;
};

export default textEditor;
