import { useEffect, useState } from "react";

const Sports = () => {
  const [sports, setSports] = useState([]);
  const getSports = async () => {
    try {
      const res = await fetch(
        "https://blog-api-kiprono.onrender.com/blogs"
      );
      const data = await res.json();
      setSports(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSports();
  }, []);
  return (
    <div>
      {sports.map((sport) => {
        return (
          <div key={sport.id}>
            <h3>{sport.title}</h3>
            <img src={sport.image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Sports;
