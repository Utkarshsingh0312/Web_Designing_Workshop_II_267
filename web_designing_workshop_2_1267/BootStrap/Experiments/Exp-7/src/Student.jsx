function Student(props) {
  return (
    <div
      style={{
        width: "300px",
        backgroundColor: "white",
        margin: "20px auto",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
        textAlign: "center"
      }}
    >
      <h2
        style={{
          color: "#1f3b5b"
        }}
      >
        {props.name}
      </h2>

      <p>
        <strong>Course:</strong> {props.course}
      </p>

      <p>
        <strong>Marks:</strong> {props.marks}
      </p>
    </div>
  );
}

export default Student;
