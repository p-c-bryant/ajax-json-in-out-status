var xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.open('GET', '../data/employees.json');
xhr.send();


var confRequest = new XMLHttpRequest();
confRequest.onreadystatechange = () => {
  if(confRequest.readyState === 4 && confRequest.status === 200) {
    var rooms = JSON.parse(confRequest.responseText);
    var statusHTML = '<ul class="rooms">';
    
    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i].available) {
        statusHTML += '<li class="empty">';
      } else {
        statusHTML += '<li class="full">';
      }
      
      statusHTML += `${rooms[i].room}</li>`;
    }
    
    statusHTML += '</ul>';
    console.log(statusHTML);
    
    document.getElementById('roomList').innerHTML = statusHTML;
  }
}
confRequest.open('GET', '../data/rooms.json');
confRequest.send();

