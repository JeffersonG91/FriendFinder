$(document).ready(() => {

  var question = [
    "Your Mind is always buzzing with unexplored ideas and plans.",
    "Generally speaking, you rely more on your experience than your imagination.",
    "You find it easy to stay relaxed and focused even when there is some pressure.",
    "You rarely do something just out of sheer curiousity",
    "People can rarely upset you",
    "It is often difficult for you to relate to other people's feelings.",
    "In a discussion, truth should be more important than people's sensitivities.",
    "You rarely get carried away by fantasies and ideas",
    "You think that everyone's views should be respected regardless of whether they are supported by facts or not.",
    "You feel more energetic after spending time with a group of people"
  ];

  var qn = 0

  var quesDiv = [];

  var personObj = {};

  var score = []

    
  question.forEach( q => {
    qn++;
    
    quesDiv.push($("<h3>").text(`Question ${qn}`));
    quesDiv.push($("<h4>").text(q));
    var btnDiv = $("<select class='chosen-select col-sm-3' id='Answer-"+ qn +"'>")
    btnDiv.append($("<option selected >Select an Option</option>"))
    btnDiv.append($("<option value='1'>1 (Strongly Disagree)</option>"))
    btnDiv.append($("<option value='2'>2</option>"))
    btnDiv.append($("<option value='3'>3</option>"))
    btnDiv.append($("<option value='4'>4</option>"))
    btnDiv.append($("<option value='5'>5 (Strongly Agree)</option>"))
    quesDiv.push(btnDiv)
  })

  $("#tableData").append(quesDiv);

  $("#submit").click(function() {
    
    var userName = $("#name").val();
    
    var userPhoto = $("#photo").val();

    for (let i=1;i<=10;i++) {
      
      score.push($("#Answer-"+ i).val())
    }
    var personObj = {
      name: userName,
      photo: userPhoto,
      score: score
    }

    console.log(personObj)
    
    $.post("/api/friends", personObj), function(data) {
      console.log(data);
      alert("adding to array");
    }
  })
})

