import { useState, useEffect } from "react";

const ConnectWithSearch = (WrappedComponent, dataSource, field) => {
  const SuperChargedComponent = () => {
    const [data, setData] = useState([]);

    const [loading, setLoading] = useState([]);
    const [value, setValue] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
      async function _fetchData() {
        setLoading(true);
        const _data = await dataSource();

        setLoading(false);
        setFilteredData(_data);
        setData(_data);
      }

      _fetchData();
    }, []);

    const handleChange = (e) => {
      setValue(e.target.value);

      if (e.target.value.length === 0) {
        const newArray = [...data];
        setFilteredData(newArray);
      } else {
        const newArray = data.filter((d) => {
          let str = `${d[field]}`.toLowerCase();
          let v = value.toLowerCase();
          return str.indexOf(v) >= 0;
        });
        setFilteredData(newArray);
      }
    };

    return (
      <>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          value={value}
          placeholder="Search..."
        />
        <WrappedComponent data={filteredData} loading={loading} />
      </>
    );
  };

  SuperChargedComponent.displayName = `WithSearch(${getDisplayName(
    WrappedComponent
  )})`;
  return SuperChargedComponent;
};

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
};

export default ConnectWithSearch;
