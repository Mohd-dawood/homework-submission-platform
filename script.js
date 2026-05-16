function submitHomework(){

  let studentName = document.getElementById("studentName").value;
  let subject = document.getElementById("subject").value;
  let file = document.getElementById("fileUpload").files[0];

  if(studentName === "" || subject === "" || !file){

    alert("Please fill all fields!");

    return;
  }

  document.getElementById("result").innerHTML = `

    <h3 style="color:green;">
      Homework Submitted Successfully ✅
    </h3>

    <br>

    <p><strong>Student Name:</strong> ${studentName}</p>

    <p><strong>Subject:</strong> ${subject}</p>

    <p><strong>Uploaded File:</strong> ${file.name}</p>

    <p><strong>Status:</strong> Submitted</p>

  `;
}