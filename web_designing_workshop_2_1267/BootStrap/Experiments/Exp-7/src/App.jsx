import Student from "./Student";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Arial"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px"
        }}
      >
        Student Information
      </h1>

      <Student
        name="Rahul Sharma"
        course="Computer Science"
        marks="85"
      />

      <Student
        name="Anita Verma"
        course="Information Technology"
        marks="92"
      />

      <Student
        name="Rohan Gupta"
        course="Electronics"
        marks="78"
      />
    </div>
  );
}

export default App;
