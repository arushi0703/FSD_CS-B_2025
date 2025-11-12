const parent = document.getElementById('parent');
const root = ReactDOM.createRoot(parent);

const name = <h2>Wednesday Addams</h2>
const branch = <h2>Raven</h2>
const pic = <img src="student_photo.jpg" alt="student-photo" style={{width:"200px", height:"200px", borderRadius:"50%"}} />
const college = <h2>Nevermore Academy</h2>

const studentCard = (
    <div style={{
        textAlign: "center",
        backgroundColor: "lavender",
        color: "darkviolet",
        border: "2px solid sienna",
        borderRadius: "10px",
        padding: "20px",
        width: "350px",
        margin: "50px auto"
    }}>
        {pic}
        {name}
        {branch}
        {college}
    </div>
);

root.render(studentCard);