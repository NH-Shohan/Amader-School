"use client";

import React, { useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const eventsList = [
    {
      title: "Math",
      start: new Date(2024, 0, 12, 8, 0),
      end: new Date(2024, 0, 12, 8, 45),
    },
    {
      title: "English",
      start: new Date(2024, 0, 12, 9, 0),
      end: new Date(2024, 0, 12, 9, 45),
    },
    {
      title: "Biology",
      start: new Date(2024, 0, 12, 10, 0),
      end: new Date(2024, 0, 12, 10, 45),
    },
    {
      title: "Physics",
      start: new Date(2024, 0, 12, 11, 0),
      end: new Date(2024, 0, 12, 11, 45),
    },
    {
      title: "Chemistry",
      start: new Date(2024, 0, 12, 13, 0),
      end: new Date(2024, 0, 12, 13, 45),
    },
    {
      title: "History",
      start: new Date(2024, 0, 12, 14, 0),
      end: new Date(2024, 0, 12, 14, 45),
    },
  ];

  const [view, setView] = useState(Views.DAY);
  const [date, setDate] = useState(new Date(2024, 0, 12));

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const handleNavigate = (newDate) => {
    setDate(newDate);
  };

  const eventStyleGetter = (event) => {
    let backgroundColor = "#3174ad";
    switch (event.title) {
      case "Math":
        backgroundColor = "#e3f2fd";
        break;
      case "English":
        backgroundColor = "#fff8e1";
        break;
      case "Biology":
        backgroundColor = "#f3e5f5";
        break;
      case "Physics":
        backgroundColor = "#fce4ec";
        break;
      case "Chemistry":
        backgroundColor = "#e0f7fa";
        break;
      case "History":
        backgroundColor = "#fff3e0";
        break;
      default:
        backgroundColor = "#e8eaf6";
    }
    return {
      style: {
        backgroundColor,
        color: "#333",
        border: "none",
        borderRadius: "4px",
      },
    };
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Schedule (4A)</h1>
      <Calendar
        localizer={localizer}
        events={eventsList}
        startAccessor="start"
        endAccessor="end"
        views={["day", "work_week"]}
        view={view}
        date={date}
        onView={handleViewChange}
        onNavigate={handleNavigate}
        style={{ height: "800px" }}
        min={new Date(2024, 0, 1, 8, 0, 0)}
        max={new Date(2024, 0, 1, 17, 0, 0)}
        eventPropGetter={eventStyleGetter}
        formats={{
          dayFormat: "dddd",
          dayRangeHeaderFormat: ({ start }) => {
            return `${moment(start).format("MMMM D, YYYY")}`;
          },
        }}
      />
    </div>
  );
};

export default BigCalendar;

// "use client";

// import React, { useState } from "react";
// import { Calendar, momentLocalizer, Views } from "react-big-calendar";
// import moment from "moment";
// import "react-big-calendar/lib/css/react-big-calendar.css";

// const localizer = momentLocalizer(moment);

// const BigCalendar = () => {
//   const eventsList = [
//     {
//       title: "Math",
//       start: new Date(2024, 0, 12, 8, 0),
//       end: new Date(2024, 0, 12, 8, 45),
//     },
//     {
//       title: "English",
//       start: new Date(2024, 0, 12, 9, 0),
//       end: new Date(2024, 0, 12, 9, 45),
//     },
//     {
//       title: "Biology",
//       start: new Date(2024, 0, 12, 10, 0),
//       end: new Date(2024, 0, 12, 10, 45),
//     },
//     {
//       title: "Physics",
//       start: new Date(2024, 0, 12, 11, 0),
//       end: new Date(2024, 0, 12, 11, 45),
//     },
//     {
//       title: "Chemistry",
//       start: new Date(2024, 0, 12, 13, 0),
//       end: new Date(2024, 0, 12, 13, 45),
//     },
//     {
//       title: "History",
//       start: new Date(2024, 0, 12, 14, 0),
//       end: new Date(2024, 0, 12, 14, 45),
//     },
//   ];

//   const [view, setView] = useState(Views.DAY);
//   const [date, setDate] = useState(new Date(2024, 0, 12));

//   const handleViewChange = (newView) => {
//     setView(newView);
//   };

//   const handleNavigate = (newDate) => {
//     setDate(newDate);
//   };

//   const eventStyleGetter = (event) => {
//     let backgroundColor = "#3174ad";
//     switch (event.title) {
//       case "Math":
//         backgroundColor = "#e3f2fd";
//         break;
//       case "English":
//         backgroundColor = "#fff8e1";
//         break;
//       case "Biology":
//         backgroundColor = "#f3e5f5";
//         break;
//       case "Physics":
//         backgroundColor = "#fce4ec";
//         break;
//       case "Chemistry":
//         backgroundColor = "#e0f7fa";
//         break;
//       case "History":
//         backgroundColor = "#fff3e0";
//         break;
//       default:
//         backgroundColor = "#e8eaf6";
//     }
//     return {
//       style: {
//         backgroundColor,
//         color: "#333",
//         border: "none",
//         borderRadius: "4px",
//       },
//     };
//   };

//   return (
//     <div className="p-4">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-xl font-semibold">Schedule (4A)</h1>
//         <div className="flex items-center gap-4">
//           <span className="text-sm">August 12 - 16</span>
//           <div className="flex gap-1 bg-gray-100 p-1 rounded-md">
//             <button
//               onClick={() => handleViewChange(Views.WORK_WEEK)}
//               className={`px-3 py-1 text-sm rounded-md ${
//                 view === Views.WORK_WEEK ? "bg-violet-100" : ""
//               }`}
//             >
//               Work Week
//             </button>
//             <button
//               onClick={() => handleViewChange(Views.DAY)}
//               className={`px-3 py-1 text-sm rounded-md ${
//                 view === Views.DAY ? "bg-violet-100" : ""
//               }`}
//             >
//               Day
//             </button>
//           </div>
//         </div>
//       </div>
//       <Calendar
//         localizer={localizer}
//         events={eventsList}
//         startAccessor="start"
//         endAccessor="end"
//         views={["day", "work_week"]}
//         view={view}
//         date={date}
//         onView={handleViewChange}
//         onNavigate={handleNavigate}
//         style={{ height: "800px" }}
//         min={new Date(2024, 0, 1, 8, 0, 0)}
//         max={new Date(2024, 0, 1, 17, 0, 0)}
//         eventPropGetter={eventStyleGetter}
//         formats={{
//           dayFormat: "dddd",
//           dayRangeHeaderFormat: ({ start }) => {
//             return `${moment(start).format("MMMM D, YYYY")}`;
//           },
//         }}
//         toolbar={false}
//       />
//     </div>
//   );
// };

// export default BigCalendar;
