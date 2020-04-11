var xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
  if(xhr.readyState === 4) {
    var employees = JSON.parse(xhr.responseText);
    
    var statusUl = '<ul class="bulleted">';
    
    for (let i = 0; i < employees.length; i++) {
      
      if (employees[i].inoffice) {
        statusUl += '<li class="in">';
      } else {
        statusUl += '<li class="out">';
      }
      
      statusUl += `${employees[i].name}</li>`;
    }
    
    statusUl += '</ul>';
  }
  
  document.getElementById('employeeList').innerHTML = statusUl;
  
};
xhr.open('GET', 'data/employees.json');
xhr.send();