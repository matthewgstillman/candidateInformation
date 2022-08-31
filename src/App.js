import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const attributes = "@attributes";
  const [responseData, setResponseData] = useState([
    {
      cid: "N00046598",
      firstlast: "Blake Moore",
      lastname: "Moore",
      party: "R",
      office: "UT01",
      gender: "M",
      first_elected: "2020",
      exit_code: "0",
      comments: "",
      phone: "202225-0453",
      fax: "202225-5857",
      website: "https://blakemoore.house.gov/",
      webform: "",
      congress_office:
        "1320 Longworth House Office Building Washington, DC 20515",
      bioguide_id: "M001213",
      votesmart_id: "",
      feccandid: "",
      twitter_id: "@RepBlakeMoore",
      youtube_url: "",
      facebook_id: "",
      birthdate: "06/22/80",
    },
  ]);

  console.log(responseData[0]["cid"]);

  useEffect(() => {
    const url = `http://www.opensecrets.org/api/?method=getLegislators&id=CA&output=json&apikey=${process.env.REACT_APP_API_KEY}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.response.legislator);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [responseData]);

  return (
    <div className="App">
      <h1>
        {responseData[0].firstlast} ({responseData[0].party})
      </h1>
      {/* <img src="https://twitter.com/repblakemoore/photo" alt="Profile Photo" /> */}
      <h3>Office: {responseData[0].office}</h3>
      <h3>Born: {responseData[0].birthdate}</h3>
      <h3>https://twitter.com/{responseData[0].twitter_id}</h3>
      <h3>{responseData[0].congress_office}</h3>
    </div>
  );
};

export default App;
