import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import json from "react-syntax-highlighter/dist/cjs/languages/hljs/json";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useSearch } from "../../../providers/search-context";

SyntaxHighlighter.registerLanguage("json", json);

const ContractShowABI = () => {
  const { data } = useSearch();

  if (!data) return <></>;

  return (
    <div className="w-11/12 mx-auto mt-8">
      <h4 className="text-xl font-extrabold text-emerald-400">ABI</h4>

      <div className="mt-4">
        <SyntaxHighlighter
          language="json"
          style={atomOneDark}
          customStyle={{
            fontSize: 12,
            height: "100vh",
            overflow: "auto",
            borderRadius: "0.25rem",
          }}
          showLineNumbers
        >
          {JSON.stringify(data.abi, undefined, 2)}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default ContractShowABI;
