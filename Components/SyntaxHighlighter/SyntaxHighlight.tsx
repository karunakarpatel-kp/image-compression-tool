import { Box } from "@mui/system";
import React from "react";
import Syntaxhighlighter from "react-syntax-highlighter";
import a11yDark from "react-syntax-highlighter/dist/cjs/styles/hljs/a11y-dark";

interface SyntaxhighlightProps {
  codeSnippet?: () => void;
  children?: any;
}

const SyntaxHighlight = (props: SyntaxhighlightProps) => {
  const codeSnippet = `${props.codeSnippet}`;
  return (
    <>
      <Syntaxhighlighter
        language="javascript"
        style={a11yDark}
        wrapLines
        wrapLongLines
        showInlineLineNumbers
        customStyle={{ overflowX: "hidden", borderRadius: "3px" }}
      >
        {props.children}
      </Syntaxhighlighter>
    </>
  );
};

export default SyntaxHighlight;
