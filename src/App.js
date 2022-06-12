import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Hours from "./components/Hours";
import { format } from "timeago.js";

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [myDisabled, setMyDisabled] = useState(false);
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    let dateCompare = format(startDate);
    if (
      dateCompare.includes("day ago") ||
      dateCompare.includes("days ago") ||
      dateCompare.includes("month ago") ||
      dateCompare.includes("months ago") ||
      dateCompare.includes("year ago") ||
      dateCompare.includes("years ago")
    ) {
      setAnnouncement("You can not book an appointment in past days or edit");
      setMyDisabled(true);
    } else {
      if (startDate.getUTCDay() === 0 || startDate.getUTCDay() === 6) {
        setMyDisabled(true);
        setAnnouncement(
          "On weekends death does not work, you can go play whith sharks"
        );
      } else {
        setMyDisabled(false);
        setAnnouncement("");
      }
    }
  }, [startDate]);

  const onSelect = (d) => {
    console.log(d.toLocaleDateString());
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
          <Hours date={startDate} myDisabled={myDisabled} />
        </div>
      </div>
    </div>
  );
}

export default App;
