$.ajax({
    url         : "phones.json",
    type        : "GET",
    dataType    : "json",
    data        : {get_param : 'value'},
    success     : function(data){

        jmlData = data.length;
        buatTabel = "";
        for(a = 0; a < jmlData; a++){
        buatTabel += "<tr>"
              + "<td class='nama'>" + data[a]["name"] + "</td>"
              + "<td class='brand'>" + data[a]["brand"] + "</td>"
              + "<td class='tahun'>" + data[a]["release_year"] + "</td>"
              + "<td class='deskripsi'>" + data[a]["description"] + "</td>"
                  + "<tr/>";
        }
        document.getElementsByTagName('table')[0].innerHTML += buatTabel;
    }
});


//search function
function myFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("searchBox");
  filter = input.value.toUpperCase();
  table = document.getElementById("katalog");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0] || tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}