
<?php
	//MESSAGES VRIABLES
	$msg = "";
	$msgClass = "";
//check for submission
	if(filter_has_var(INPUT_POST,'submit')){
		//get from data
	    $name = htmlspecialchars($_POST['name']);
		$email = htmlspecialchars($_POST['email']);
		$message = htmlspecialchars($_POST['message']);

		//check if these fields are  NOT empty
	  if(!empty($name) && !empty($email) && !empty($message)){//passed
	  	      //chek for valid email
			  if(filter_var($email,FILTER_VALIDATE_EMAIL)===false){//failed
							  $msg = 'Please, use a valid email';
							  $msgClass = "alert-danger";
			  }else{//fpassed
					//main stuff
			    $toEmail = "contactus@wilsco.nl";
			    $subject = "Contact Request From ".$name;
			    $body = "<h2>Contact Request</h2>
                         <h4>Name: ".$name." </h4>
                         <h4>Email: ".$email." </h4>
                         <h4>Message: ".$message." </h4>";
                $headers = "MIME-Version: 1.0"."\r\n";
				$headers .= "Content-Type:text/html;charset=UTF-8"."\r\n";
				$headers .= "From: ".$name."<".$email.">"."\r\n";//additional header

			    if(mail($toEmail,$subject,$body,$headers)){//passed
							    $msg = 'Your Message has been sent';
							    $msgClass = "alert-success";
			    }else{
							    $msg = 'Sorry, Something went wrong';
							    $msgClass = "alert-danger";
			    }//end sending if
			  }//end if for emptiness
	  }else{//failed
            $msg = 'Please, fill in all fields';
            $msgClass = "alert-danger";
	  }//end if for emptiness
	}// end parent if

//<!--============================ header =============================================-->
	$title = 'CONTACT US';
	$page ="contact";
	include "includes/header.php";
?>

    <!--============================ into image =============================================-->

    <section id="contact-intro">
        <div class="container">
           <div class="row">
             <div class="col-md-12 ">
                <div class="contents">
                    <div class="content-message">
                        <h1 class="wow fadeInRight" data-wow-duration="2s">Contact Us</h1>
                        <p class="wow fadeInUp" data-wow-delay="1s" data-wow-duration="3s">We want to hear from you</p>
                    </div>
                 </div><!-- /.contents -->
               </div><!-- /.col-md-6 -->
             </div><!-- /.row -->
        </div><!-- /.container -->
</section ><!-- /.about -->

<!-- ================================   form ===================================================-->
 <section class="contact-form-media wow fadeInUp" data-wow-duration="1s"> 
        <div class="container">
           <div class="contact-form-media-content">
               <div class="row">
                    <div class="col-md-6">
                            <div class="contact-media wow fadeIn" data-wow-delay="1s" data-wow-duration="3s">
                                <h4 class="">Head Office</h4>
                                <div class="socials">
                                     <p><span class="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></span>Theemsweg 45,<br>3197 KN Botlek<br> Rotterdam, Netherlands.</span> </p>
                                    <p><span class="icon"><i class="fa fa-phone" aria-hidden="true"></i></span> +31 9700 5034 127</p>
                                    <p><span class="icon"><i class="fa fa-envelope" aria-hidden="true"></i></span>contactus@wilsco.nl</p>
                                </div>

                                <h4 class="">Branch Office</h4>
                                <div class="socials">
                                        <p><span class="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></span>231 Mian St, Sanford, TX 79078, USA.</span> </p>
                                    <p><span class="icon"><i class="fa fa-phone" aria-hidden="true"></i></span> +1 806 329 4291</p>
                                    <!-- <p><span class="icon"><i class="fa fa-envelope" aria-hidden="true"></i></span>contactus@wilsco.nl</p> -->
                                </div>

                                <h4 class="">Contact Our Commercial Team</h4>
                                <div class="team-message">
                                    <h5>Commercial Director</h5>
                                    <p>Mr. Van Berg: van_berg@wilsco.nl</p>
                                    <h5>Commercial Manager</h5>
                                    <p>Mrs. Johanna Hannes: HJohanna@wilsco.nl</p>
                                    <h5>Account Manager</h5>
                                    <p>Mr. Jansen Bakker: Jansen_Bakker@wilsco.nl</p>
                                </div>

                                <div class="nav">
                                    <a href="#" class="nav-link" ><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                    <a href="#" class="nav-link"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                    <a href="#" class="nav-link"><i class="fa fa-youtube" aria-hidden="true"></i></a>
                                    <a href="#" class="nav-link"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                                    <a href="#" class="nav-link"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                                </div>
                            </div>
                     </div>
                     
                    <div class="col-md-6 ">
                            <div class="contact-form wow fadeIn" data-wow-delay="1s" data-wow-duration="3s">
                            <?php if($msg != ""):?>
		                            <div class="alert <?php echo $msgClass; ?> alert-dismissible fade show" role="alert">
			                            <strong><?php  echo $msg; ?></strong>
			                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
				                            <span aria-hidden="true">&times;</span>
			                            </button>
		                            </div>
	                            <?php endif; ?>
                                <h4 class="">Send Us Message</h4>
                                <form id="contacts_form" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
                                        <div class="form-group">
                                            <input type="text" class="form-control rounded-0 " id="name" name="name"  placeholder="Name" value="<?php echo isset($_POST['name']) ? $name: '';?>" >
<!--	                                        <small class="name-error">name input should not be empty</small>-->
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control rounded-0" id="email" name="email" placeholder="Email" value="<?php echo isset($_POST['email']) ? $email: '';?>">
<!--	                                        <small class="email-error">email input should not be empty</small>-->
                                        </div>
                                        <div class="form-group">
                                            <textarea class="form-control rounded-0" id="message" name="message" rows="10" style="height: 200px;" placeholder="Message" ><?php echo isset($_POST['message']) ? $message: '';?></textarea>
<!--	                                        <small class="message-error">message input should not be empty</small>-->
                                        </div>
                                        <input type="submit" class="btn  rounded-0 form-submit w-25" value="send" name="submit">
                                </form>
                            </div>

                    </div>
               </div>
            </div>
        </div>
</section> 




<section class="map">
        <div class="container wow fadeInUp" data-wow-duration="10ms">
            <div class="row">
                <div class="col-12">
                    <div class="mymap">
                         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d315210.6769855924!2d3.9569949993955795!3d51.88681644511156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c44c418ed675b5%3A0x85cb3522902b5034!2sTheemsweg+45%2C+3197+KM+Botlek+Rotterdam%2C+Netherlands!5e0!3m2!1sen!2sng!4v1554346935846!5m2!1sen!2sng" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
                    </div>
                    <!-- /.mymap -->
                </div>
                <!-- /.col-12 -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container -->
 </section>
    <!-- /.map -->


<!-- ----------footer---------------------------------- -->
<?php
	$page ="contact";
	include "includes/footer.php";
?>
<!-- ---------------end footer ---------------------------- -->


