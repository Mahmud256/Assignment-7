There are 3 features in this Project

- It is an IT learning-related website.

- It is a responsive website.

- It is a dynamic website.

Let's describe down how state is managed in this project: I have used useState hook in my Assignment Project

Defining State Variables:

Inside the Courses component, I declare several state variables using the useState hook. These state variables include:

const [allCourse, setAllcourse] = useState([]);

allCourse: An array used to store course data fetched from an external source (presumably a JSON file).

setAllcourse: This is a function provided by React that is used to update the allCourse state variable. When we are call setAllcourse(newValue), it will update the allCourse state with the new value, and React will re-render the component to reflect the updated state.

const [selectedCourse, setSelectedCourse] = useState([]);

selectedCourse: An array used to store the courses that have been selected by the user.

setSelectedCourse: setSelectedCourse function is used to update the selectedCourse state variable, which is an array that keeps track of the courses that have been selected by the user. Let's delve into why setSelectedCourse is used and its significance: Tracking Selected Courses, Updating SelectedCourse

const [remaining, setRemaining] = useState(20);

remaining: A variable representing the remaining credit hours I can select.

setRemaining: setRemaining function is used to update the remaining state variable. The remaining variable represents the number of remaining credit hours that a user can select when enrolling in courses. Let's delve into why setRemaining is used and its significance: Tracking Remaining Credit Hours, Updating Remaining Credit Hours

const [totalCredit, setTotalCredit] = useState(0);

totalCredit: A variable to keep track of the total credit hours selected.

setTotalCredit: setTotalCredit  function is used to update the totalCredit state variable. The totalCredit variable is used to keep track of the total number of credit hours selected by the user when enrolling in courses.  Let's delve into why setRemaining is used and its significance: Tracking Total Credit Hours, Updating Credit Hours

const [totalPrice, setTotalPrice] = useState(0);

totalPrice: A variable to keep track of the total price of the selected courses.

setTotalPrice: setTotalPrice  function is used to update the totalPrice state variable. The totalPrice variable is used to keep track of the total price associated with all the courses that the user has selected when enrolling in courses. Let's delve into why setRemaining is used and its significance: Tracking Total Price, Updating Total Price

Note:

useState(0) = Here initial value is 0

useState([]) = Here empty array