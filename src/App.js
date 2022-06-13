import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Hours from "./components/Hours";
import { format } from "timeago.js";
import axios from "axios";

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [myDisabled, setMyDisabled] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const [db, setDb] = useState([]);

  const verification = (date) => {
    let dateCompare = format(date);
    if (
      dateCompare.includes("day ago") ||
      dateCompare.includes("days ago") ||
      dateCompare.includes("week ago") ||
      dateCompare.includes("weeks ago") ||
      dateCompare.includes("month ago") ||
      dateCompare.includes("months ago") ||
      dateCompare.includes("year ago") ||
      dateCompare.includes("years ago")
    ) {
      setAnnouncement("You can not book an appointment in past days or edit");
      setMyDisabled(true);
    } else {
      if (date.getDay() === 0 || date.getDay() === 6) {
        setMyDisabled(true);
        setAnnouncement(
          "On weekends death does not work, you can go play whith sharks"
        );
      } else {
        setMyDisabled(false);
        setAnnouncement("");
      }
    }
  };

  const fetching = async () => {
    const resp = await axios("http://localhost:3001/api/appointment");
    console.log(resp);
    if (resp.data.length) {
      setDb(resp.data);
      console.log(db);
    } else {
      setDb([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }
  };
  console.log(db);

  useEffect(() => {
    verification(startDate);
    fetching();
  }, [startDate]);

  const onSelect = (date) => {
    verification(date);
  };

  return (
    <div className="container h-100 pt-4">
      <div className="row h-100">
        <div className="col md-4 text-center">
          <DatePicker
            selected={startDate}
            onSelect={onSelect}
            onChange={(date) => setStartDate(date)}
            inline
          />
          <div>
            <h3>{startDate.toLocaleDateString()}</h3>
            <h4>{announcement}</h4>
          </div>
        </div>
        <div className="col md-8">
          <Hours
            date={startDate}
            myDisabled={myDisabled}
            fetching={fetching}
            db={db}
            setDb={setDb}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
