$(document).ready(function(){
  $("form").on('submit', function (e){
    e.preventDefault();
    

    let formdata = $( this ).serializeArray()

    var data = {};
$(formdata).each(function(index, obj){
    data[obj.name] = obj.value;
});
	console.log(data);
    
    $.ajax ({
      type: 'POST',
      url: "/submit",
      data: data,
      success: function(data){
      	alert('Submit success')
      },
      error: function (data) {
        console.log('An error occurred.')
    }

  }); 
});
});