function submitHomework(){

  let studentName = document.getElementById("studentName").value;
  let subject = document.getElementById("subject").value;
  let file = document.getElementById("fileUpload").files[0];

  if(studentName === "" || subject === "" || !file){

    alert("Please fill all fields!");
    return;
  }

  let submission = {
    name: studentName,
    subject: subject,
    file: file.name,
    status: "Submitted"
  };

  let submissions =
    JSON.parse(localStorage.getItem("submissions")) || [];

  submissions.push(submission);

  localStorage.setItem(
    "submissions",
    JSON.stringify(submissions)
  );

  document.getElementById("result").innerHTML = `

    <h3 style="color:green;">
      Homework Submitted Successfully ✅
    </h3>

    <p><strong>Student:</strong> ${studentName}</p>

    <p><strong>Subject:</strong> ${subject}</p>

    <p><strong>File:</strong> ${file.name}</p>

  `;

}
