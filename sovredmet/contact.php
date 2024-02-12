<?php
	$title = 'Services';
	$page ="contact";
   include "header.php";
?>


<section class="banner contact">
	<div class="container">
		<div class="col-md-12">
			<div class="banner-content">
				<h1 class="banner-content-title">Contact Us</h1>
				<p class="banner-content-paragraph">
					Have a suggestion? Question or concern? you want to
					know more about our services? Send us a
					message and we are going to answer all your questions.
				</p>
			</div>
	   </div>
	</div>
</section>
<!-- ========================================================================================================= -->
                 <!-- HISTORY OF SOVREDMET -->
<!-- ========================================================================================================= -->
  <section class="contact-form-media" >
        <div class="container">
            <div class="contact-form-media-content">
            	<div class="row">
            		<div class="col-md-12">
            			<div class="title">
            				 <h3 class="">Get in touch</h3>
                            <p class="">   
                                Just complete the following input boxes, and we will get back to you as soon as we get your messages? 
                            </p>
            			</div>
            		</div>

            		 <div class="col-md-4">
            		 	<h3>Head office</h1>
                        <div class="contains">
                        	<div class="socials">
                    		    <i class="fa fa-map-marker" aria-hidden="true"></i><p>121609, Moscow G, Rublevskoe Sh, <br>Building 42, Case 1, room 18</p>
                    	    </div>
                    	    <div class="socials">
	                            <i class="fa fa-phone" aria-hidden="true"></i><p>+7 926 8011594</p>
	                        </div>
	                        <div class="socials">
	                                <p><span>INN</span>: 7729711887 <br><span>KPP</span>: 773101001</p> 
	                            </div>
	                        <div class="socials">
	                            <i class="fa fa-envelope" aria-hidden="true"></i><p> export@sovredmet.ru</p>
	                        </div>
                        </div>
                       
                     </div>

                      <div class="col-md-4">
            		 	  <h3>ROTTERDAM OFFICE</h1>
            		 	  	<div class="contains">
	            		 	  	<div class="socials">
	                    		  <i class="fa fa-map-marker" aria-hidden="true"></i><p>Theemsweg 22, 3197 LA <br> Botlek Rotterdam, Netherlands</p>
		                    	 </div>
		                    	 <div class="socials">
			                            <i class="fa fa-phone" aria-hidden="true"></i><p>+3 163 5250550</p>
			                     </div>
		                        <div class="socials">
		                            <i class="fa fa-envelope" aria-hidden="true"></i><p> rotterdam@sovredmet.ru</p>
		                        </div>
            		 	  	</div>
                      
                     </div>

                     <div class="col-md-4">
            		 	  <h3>HOUSTON OFFICE</h1>
            		 	  	<div class="contains">
            		 	  		  <div class="socials">
		                    		<i class="fa fa-map-marker" aria-hidden="true"></i><p>1350 N Witter St, <br>Pasadena, TX 77506, USA.</p>
		                    	 </div>
		                    	 <div class="socials">
			                            <i class="fa fa-phone" aria-hidden="true"></i><p> +1 346 2224640</p>
			                     </div>
		                        <div class="socials">
		                            <i class="fa fa-envelope" aria-hidden="true"></i><p> houston@sovredmet.ru</p>
		                        </div>
            		 	  	</div>
                         
                     </div>
                   
            	</div>
                <div class="row">
                    <div class="col-md-6 ">
                        <div class="contact-media" >
                            <div class="row">
                                <div class="col-md-12">
                                    <img src="img/contact/contact_us_savers.jpg" class="img-fluid" alt="contact support image">
                                </div>    
                            </div>
                       
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="contact-form" >
                            <form id="contacts_form" action="contact" method="POST">
                             
                                <div class="form-group field-wrapper">
                                  <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" placeholder="Name" name="name" value="" required autocomplete="name" autofocus style="width: 100%">
                                    <span class="bottom bottoms"></span>
                                    <span class="right"></span>
                                    <span class="top"></span>
                                    <span class="left"></span>
                                   
                                </div>
                                <div class="form-group" style="">
                               <input type="email" class="form-control @error('email') is-invalid @enderror" style="width: 100%" placeholder="Email"  autocomplete="email" required name="email"  value="">
                                    <span class="bottom bottoms"></span>
                                    <span class="right"></span>
                                    <span class="top"></span>
                                     <span class="left"></span>
                                    
                                </div>
                                <div class="form-group">
                                  <textarea class="form-control rounded-0" id="message" name="message" rows="10" placeholder="Message here" required autocomplete="message"></textarea>
                                    <span class="bottom bottoms"></span>
                                    <span class="right"></span>
                                    <span class="top"></span>
                                    <span class="left"></span>
                                   
                                </div>
                               <button type="submit" class="btn rounded-0 form-submit w-25 bttn-fill bttn-md bttn-primary" name="submit">Send <i class="fa fa-plane"></i></button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


<!-- ========================================================================================================= -->
                 <!-- MAP -->
<!-- ========================================================================================================= -->


<!--=========================footer =============================================-->
 <!-- ----------footer---------------------------------- -->
 <?php
	$page ="contact";
	include "footer.php";
?>
<!-- ---------------end footer ---------------------------- -->
