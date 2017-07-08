    
     $(document).ready(function(){ 
	 // accordion expanded in books array by default
			$('.allBooks').attr('aria-expanded', 'true');
			$('.allBooks').addClass('collapse in');	 
		
     $.ajax({
        url:'http://52.41.65.211:8028/api/v1/books.json',
        dataType:'json',
        type: 'get',
        cache:false,
        success: function(data){
            var allBooks = '';
            $(data.books).each(function(index,value){
              allBooks += '<div class="col-xs-6 col-md-4 caja"> <div class="animated bounceIn">  <div class="each-item"> <img class="port-image-0" src="img/image2.jpg"/> <div class="cap1"><ul>';
                 allBooks += '<li><span class="title-box-books">ID: ' +value.id+'</span></li>';
                  if(value.author != null){
				  allBooks += '<li><i class="fa fa-globe" aria-hidden="true"><p class="small-text"> ' +value.author+'</p></i></span></li>';
				 }
				 if(value.language != null){
                    allBooks += '<li><i class="fa fa-globe" aria-hidden="true"><p class="small-text"> ' +value.language+'</p></i></li>';
				 }
                 allBooks += '</ul></div></div></div></div>';
            });
            $('.allBooks').append(allBooks);
        }
    }); 			
			
        $('.categoriesData').one('shown.bs.collapse', function () {
  // fetch all category
             $.ajax({
        url:'http://52.41.65.211:8028/api/v1/categories.json',
        dataType:'json',
        type: 'get',
        cache:false,
        success: function(data){
            var categoriesData = '';
            $(data.categories).each(function(index,value){
              categoriesData += '<div class="col-xs-6 col-md-4 caja"> <div class="animated bounceIn"> <div class="each-item"> <img class="port-image" src="" style="background-color:#'+ value.iconcolor+'"/> <div class="cap1"><ul>';
                categoriesData += '<p><span class="title-box-allcat">ID: ' +value.id+'</span></p>';
                 categoriesData += '<li><i class="fa fa-database" aria-hidden="true"><p class="small-text"> ' +value.name+'</p></i></li>';
                categoriesData += '</ul></div></div></div></div>';
            });
            $('.categoriesData').append(categoriesData);
        }
    });   
    
           
})
            

 $('.allBooks').one('shown.bs.collapse', function () {
  // fetch all books
$('.allBooks').empty();
             $.ajax({
        url:'http://52.41.65.211:8028/api/v1/books.json',
        dataType:'json',
        type: 'get',
        cache:false,
        success: function(data){
            var allBooks = '';
            $(data.books).each(function(index,value){
              allBooks += '<div class="col-xs-6 col-md-4 caja"> <div class="animated bounceIn">  <div class="each-item"> <img class="port-image-0" src="img/image2.jpg"/> <div class="cap1"><ul>';
                 allBooks += '<p><span class="title-box-books">ID: ' +value.id+'</span></p>';
                  if(value.author != null){
				  allBooks += '<li><i class="fa fa-pencil" aria-hidden="true"><p class="small-text"> ' +value.author+'</p></i></li>';
				 }
				 if(value.language != null){
                    allBooks += '<li><i class="fa fa-globe" aria-hidden="true"><p class="small-text"> ' +value.language+'</p></i></li>';
				 }
                 allBooks += '</ul></div></div></div></div>';
            });
            $('.allBooks').append(allBooks);
        }
    });   
    
           
})
    

 $('.booksinCat').one('shown.bs.collapse', function () {
  // fetch all books in categories
             $.ajax({
        url:'http://52.41.65.211:8028/api/v1/categories/105/books.json',
        dataType:'json',
        type: 'get',
        cache:false,
        success: function(data){
            var booksinCat = '';
            $(data.books).each(function(index,value){
              booksinCat += '<div class="col-xs-6 col-md-4 caja"><div class="animated bounceIn"><div class="each-item"> <img class="port-image-0" src="img/image3.jpg"/> <div class="cap1"><ul>';
               booksinCat += '<p><span class="title-box-cat">ID: ' +value.id+'</span></p>';
                 booksinCat += '<li><i class="fa fa-book" aria-hidden="true"><p class="small-text"> ' +value.title+'</p></i></li>';
				   if(value.author != null){
                  booksinCat += '<li><i class="fa fa-pencil" aria-hidden="true"><p class="small-text"> ' +value.author+'</p></i></li>';
				   }
				     if(value.language != null){
                     booksinCat += '<li><i class="fa fa-globe" aria-hidden="true"><p class="small-text"> ' +value.language+'</p></i></li>';
					 }
               booksinCat += '</ul></div></div></div></div>';
            });
            $('.booksinCat').append(booksinCat);
        }
    });   
    
           
})

            /* filter books */			 
			$("#accordion").on("click", '.books', function() {


			//alert($('.categoriesData').attr('aria-expanded'));

			if($('.categoriesData').attr('aria-expanded')== 'true'){

			$('.categoriesData').attr('aria-expanded', 'false');
			$('.categoriesData').removeClass('in');
			}

			if($('.booksinCat').attr('aria-expanded')== 'true'){

			$('.booksinCat').attr('aria-expanded', 'false');
			$('.booksinCat').removeClass('in');
			}


			});

            /* filter categories */
			$("#accordion").on("click", '.cat', function() {


			//alert($('.allBooks').attr('aria-expanded'));

			if($('.allBooks').attr('aria-expanded')== 'true'){

			$('.allBooks').attr('aria-expanded', 'false');
			$('.allBooks').removeClass('in');

			}

			if($('.booksinCat').attr('aria-expanded')== 'true'){

			$('.booksinCat').attr('aria-expanded', 'false');
			$('.booksinCat').removeClass('in');
			}



			});
             /* filter all books in categories  */
			$("#accordion").on("click", '.sinc', function() {


			//alert($('.allBooks').attr('aria-expanded'));

			if($('.allBooks').attr('aria-expanded')== 'true'){

			$('.allBooks').attr('aria-expanded', 'false');
			$('.allBooks').removeClass('in');

			}

			if($('.categoriesData').attr('aria-expanded')== 'true'){

			$('.categoriesData').attr('aria-expanded', 'false');
			$('.categoriesData').removeClass('in');
			}

			

			});
	          
       
        
              
 });                
  