const parent = document.getElementById("parent");
console.log(parent);
const root = ReactDOM.createRoot(parent);
const h2 = React.createElement(
  "h2",
  { style: { color: "green", backgroundColor: "red" } },
  "Hello World from React"
);
root.render(h2);

const pic = <img></img>;
const myname = <h2>Suryank</h2>;
const RollNo = <h2>2300320120257</h2>;
const branch = <h2>CS</h2>;
const section = <h2>B</h2>;
const College = <h2>ABES ENGINEERING COLLEGE</h2>;

const container = (
  <div>
    {pic}
    {myname}
    {RollNo}
    {branch}
    {section}
    {College}
  </div>
);

root.render(container);
