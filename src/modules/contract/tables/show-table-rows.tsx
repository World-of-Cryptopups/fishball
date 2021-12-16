interface ContractTableModalShowTableRowsProps {
  data: Record<string, any>[];
}

function isObject(obj: any) {
  return obj !== undefined && obj !== null && obj.constructor == Object;
}

function isArray(obj: any) {
  return obj !== undefined && obj !== null && obj.constructor == Array;
}

const ContractTableModalShowTableRows = ({
  data,
}: ContractTableModalShowTableRowsProps) => {
  const keys = Object.keys(data.length > 0 ? data[0] : {});

  return (
    <div className="overflow-auto bg-neutral-900 p-4 rounded-lg">
      <table className="w-full">
        <thead className="text-neutral-500 font-extrabold">
          <tr className="border-b border-neutral-600">
            <th className="p-2">#</th>
            {keys.map((i, index) => (
              <th className="p-2" key={index}>
                {i}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="text-neutral-300">
          {data.map((d, _index) => (
            <tr className="border-b border-neutral-700">
              <td className="p-2">{_index + 1}</td>
              {keys.map((i, index) => (
                <td className="p-2" key={index}>
                  {/* if value is a dict or {} or array [], use the JSON.stringify */}
                  {isObject(d[i]) || isArray(d[i])
                    ? JSON.stringify(d[i])
                    : d[i]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContractTableModalShowTableRows;
