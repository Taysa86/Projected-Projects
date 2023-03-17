// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let timeDisplay = $("#time-display");
let container = $(".container");

let hours = [
  {
    hour: "8",
    task: "",
  },
  {
    hour: "9",
    task: "",
  },
  {
    hour: "10",
    task: "",
  },
  {
    hour: "11",
    task: "",
  },
  {
    hour: "12",
    task: "",
  },
  {
    hour: "13",
    task: "",
  },
  {
    hour: "14",
    task: "",
  },
  {
    hour: "15",
    task: "",
  },
  {
    hour: "16",
    task: "",
  },
  {
    hour: "17",
    task: "",
  },
];

function addListener() {
  const save = document.getElementsByClassName("saveBtn");
  for (let i = 0; i < saveButtons.length; i++) {
    save[i].addEventListener("click", function (event) {
      event.preventDefault();
      saveTask(event.target.previousSibling.value, i);
    });
  }
}
function currentTime() {
  var present = dayjs().format("MMM DD [at] hh:mm:ss a");
  timeDisplayEl.text(present);
} 
  

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
