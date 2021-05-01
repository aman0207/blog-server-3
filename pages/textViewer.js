import dynamic from "next/dynamic";

const TestTextViewer = dynamic(() => import("../components/TestTextViewer"), {
  ssr: false,
});

const textViewer = () => {
  return <TestTextViewer />;
};

export default textViewer;
