<!DOCTYPE html>
<html lang="en">


<!-- Mirrored from reactheme.com/products/html/elevate/onepage-seven.html by HTTrack Website Copier/3.x [XR&CO'2014], Sun, 07 May 2023 03:59:51 GMT -->
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="assets/images/_others/logo/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="assets/images/_others/logo/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/images/_others/logo/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <title><?php echo $title ?> | GPS CHEMOIL LLC FZC TERMINAL-2</title>

    <!-- fontawesome css -->
    <link rel="stylesheet" href="assets/css/plugins/fontawesome-5.css">
    <!-- fontawesome css -->
    <link rel="stylesheet" href="assets/css/plugins/swiper.css">
    <link rel="stylesheet" href="assets/css/plugins/aos.css">
    <link rel="stylesheet" href="assets/css/plugins/unicons.css">
    <link rel="stylesheet" href="assets/css/plugins/metismenu.css">
    <link rel="stylesheet" href="assets/css/plugins/hover-revel.css">
    <link rel="stylesheet" href="assets/css/plugins/timepickers.min.css">
    <!-- bootstrap css -->
    <link rel="stylesheet" href="assets/css/vendor/bootstrap.min.css">
    <!-- main css -->
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">

</head>

<body class="home-one seven onepage">

    <!-- header style two -->



    <!-- header area start -->
    <header class="heder-two header-six header--sticky">
        <div class="header-two-container">
            <div class="row">
                <div class="col-12">
                    <div class="header-main-wrapper">
                        <div class="logo-area">
                            <a href="index.html" class="logo">
                                <img src="assets/images/_others/logo/logo.svg" alt="image-logo">
                            </a>
                        </div>
                        <!-- header right start -->
                        <div class="rts-header-right">
                            <div class="menu-area" id="menu-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                    <rect width="18" height="2" fill="#0C0A0A" />
                                    <rect y="7" width="18" height="2" fill="#0C0A0A" />
                                    <rect y="14" width="18" height="2" fill="#0C0A0A" />
                                </svg>
                            </div>
                            <!-- top header -->
                            <div class="top">
                                <div class="start-top">
                                    <div class="icon"><i class="fa-sharp fa-solid fa-bolt"></i></div>
                                    <p>Elevating Excellence in Storage Solutions</p>
                                </div>
                                <div class="end-top">
                                    <div class="single-info">
                                        <div class="icon"><i class="fa-thin fa-location-dot"></i> </div>
                                        <p>Korfakhan road - Fujairah - United Arab Emirates</p>
                                    </div>
                                    <div class="single-info">
                                        <div class="icon"><i class="fa-regular fa-envelope"></i></div>
                                        <a href="mailto:info@gpschemo2.com">info@gpschemo2.com</a>
                                    </div>
                                </div>
                            </div>
                            <!-- top header end -->
                            <!-- bottom header start -->
                            <div class="bottom">
                                <!-- header style two -->
                                <!-- nav area start -->
                                <div class="main-nav-desk nav-area">
                                    <nav>
                                        <ul id="nav">
                                            <li class="menu-item  <?php if ($page == 'home') { echo 'current'; } ?>">
                                                 <a  class="nav-item" href="index.php">Home</a>
                                            </li>
                                            <li class="menu-item <?php if ($page == 'about') { echo 'current'; } ?>">
                                                 <a  class="nav-item" href="about.php">About</a>
                                            </li>
                                            <!-- <li class="menu-item">
                                                <a class="nav-item" href="#service">Services</a>
                                            </li> -->
                                            <li class="has-droupdown pages <?php if ($page == 'shipping' || $page == 'rail') { echo 'current'; } ?>">
                                                <a class="nav-link" href="#">Services</a>
                                                <ul class="submenu inner-page">
                                                    
                                                    <li class=" <?php if ($page == 'storage') { echo 'current'; } ?>"><a class="nav-item" href="storage.php">Storage</a></li>
                                                    <li class=" <?php if ($page == 'other-services') { echo 'current'; } ?>"><a class="nav-item" href="other-services.php">Other Services</a></li>
                                                </ul>
                                            </li>
                                            <li class="has-droupdown pages <?php if ($page == 'sustainability' || $page == 'health-safety' || $page == 'security' || $page == 'environment') { echo 'current'; } ?>">
                                                <a class="nav-link" href="health-safety-security-environment.php">HSSE</a>
                                                <ul class="submenu inner-page">
                                                    <li class=" <?php if ($page == 'sustainability') { echo 'current'; } ?>"><a class="nav-item" href="HSSE-sustainability.php">Sustainability</a></li>
                                                    <li class=" <?php if ($page == 'health-safety') { echo 'current'; } ?>"><a class="nav-item" href="HSSE-health-and-safety.php">Health and Safety</a></li>
                                                    <li class=" <?php if ($page == 'security') { echo 'current'; } ?>"><a class="nav-item" href="HSSE-security.php">Security</a></li>
                                                    <li class=" <?php if ($page == 'environment') { echo 'current'; } ?>"><a class="nav-item" href="HSSE-environment.php">Environment</a></li>
                                                </ul>
                                            </li>
                                            <!-- <li class="menu-item <?php if ($page == 'seq') { echo 'current'; } ?>">
                                                <a class="nav-item" href="health-safety-security-environment.php">HSSE</a>
                                            </li> -->
                                            <li class="menu-item <?php if ($page == 'contact') { echo 'current'; } ?>">
                                                <a class="nav-item" href="contact.php">Contact</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <!-- nav-area end -->
                                <!-- header style two End -->
                                <div class="right-area">
                                    <!-- <div class="icon-area">
                                        <div class="search" id="search">
                                            <i class="fa-regular fa-magnifying-glass"></i>
                                        </div>
                                        <div class="cart cart-icon">
                                            <i class="fa-regular fa-cart-shopping"></i>
                                        </div>
                                    </div> -->
                                    <!-- <a href="contact.html" class="rts-btn btn-seconday btn-transparent">Get a Quote <i class="fa-solid fa-arrow-up-right"></i></a> -->
                                </div>
                            </div>
                            <!-- bottom header end -->
                        </div>
                        <!-- header right end -->
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- header area end -->

    <!-- side bar for desktop -->
    <div id="side-bar" class="side-bar header-two ">
      
    <button class="close-icon-menu"><i class="far fa-times"></i></button>
        <!-- inner menu area desktop start -->
        <div class="inner-main-wrapper-desk ">
            <!-- <div class="thumbnail">
                <img src="assets/images/banner/04.jpg" alt="elevate">
            </div>
            <div class="inner-content">
                <h4 class="title">We Build Building and Great Constructive Homes.</h4>
                <p class="disc">
                    We successfully cope with tasks of varying complexity, provide long-term guarantees and regularly master new technologies.
                </p>
                <div class="footer">
                    <h4 class="title">Got a project in mind?</h4>
                    <a href="contact.html" class="rts-btn btn-seconday">Let's talk</a>
                </div>
            </div> -->
          <!-- <form id="contact" action="#" class="appoinment-form mt--40"> -->
         
          <?php

$msg = "";
$msgClass = "";
//check for submission
if(filter_has_var(INPUT_POST,'submit')){
    //get from data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    // $phone = htmlspecialchars($_POST['phone']);
    // $subject = htmlspecialchars($_POST['subject']);

    //check if these fields are  NOT empty
  if(!empty($name) && !empty($email) && !empty($message)){//passed
          //chek for valid email
          if(filter_var($email,FILTER_VALIDATE_EMAIL)===false){//failed
                          $msg = 'Please, use a valid email';
                          $msgClass = "alert-danger";
          }else{//fpassed
                //main stuff
            $toEmail = "info@cambioscheepvaart.nl";
            $subject = "Contact Request From ".$name;

            // $body = "<h2>Contact Request</h2>
            //          <h4>Name: ".$name." </h4>
            //          <h4>Email: ".$email." </h4>
            //          <h4>Message: ".$message." </h4>";

          $body = "<div style='background:rgb(240,241,243); padding:0px'>
                      <h2 style='background:teal; padding:20px;color:white'>Contact Message From  ".$name."</h2>
                      <div style='padding:0px 40px 50px 30px'>
                        <h4 style='color:teal; font-weight:500;'><span style='color:darkblue; font-weight:bold'>Name:</span> ".$name." </h4>
                        <h4 style='color:teal; font-weight:500'><span style='color:darkblue; font-weight:bold'>Email:</span> ".$email." </h4>                      
                        <h4 style='color:teal; font-weight:500'><span style='color:darkblue; font-weight:bold'>Message:</span> ".$message." </h4>
                      </div>
                  </div>";
            $headers = "MIME-Version: 1.0"."\r\n";
            $headers .= "Content-Type:text/html;charset=UTF-8"."\r\n";
            $headers .= "From: ".$name."<".$email.">"."\r\n";//additional header

            if(mail($toEmail,$subject,$body,$headers)){//passed
                            $msg = 'Your Message has been received, '.$name.'. We will get back to you shortly';
                            // $msgClass = "alert-success";
                             $msgClass = "alert-custom-success";
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

?>
         
         
          <?php if($msg != ""):?>
                            <div id="notification" class="notification">
                                    <?php  echo $msg; ?>
                                </div>
                    <?php endif; ?> 


                        <div class="title-mid-wrapper-home-two" data-sal="slide-up" data-sal-delay="150" data-sal-duration="800">
                            <span class="pre">Get In Touch</span>
                            <h2 class="title">Let’s Get in Touch</h2>
                        </div>

            <form   id="contact"  action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST" class="appoinment-form mt--40"
                        novalidate="novalidate" onsubmit="showNotification();">
                <div class="input-half-wrapper">
                    <div class="single-input">
                        <!-- <input type="text" placeholder="Your Name" required> -->
                        <input type="text" placeholder="Your name" id="name" name="name"   value="<?php echo isset($_POST['name']) ? $name: '';?>">
                    </div>
                    <div class="single-input">
                        <!-- <input type="email" placeholder="Email Address" required> -->
                        <input type="email" placeholder="Email address" name="email" required  value="<?php echo isset($_POST['email']) ? $email: '';?>">
                    </div>
                </div>

                <textarea class="form-control mb--30 mt--25" id="message" name="message" placeholder="Write a message"><?php echo isset($_POST['message']) ? $message: '';?></textarea>
                <!-- <button type="submit" class="rts-btn btn-primary">SUBMIT MESSAGE</button> -->
                <input type="submit" class="rts-btn btn-primary" value="Send a Message" name="submit" >
            </form>
        </div>
        <!-- mobile menu area start -->
        <div class="mobile-menu">
        <!-- <div class="mobile-menu d-block d-xl-none"> -->
            <nav class="nav-main mainmenu-nav mt--30">
                <ul class="mainmenu" id="mobile-menu-active">
                    <li class="<?php if ($page == 'home') { echo 'current'; } ?>">
                            <a  class="main" href="index.php">Home</a>
                    </li>
                    <li class="<?php if ($page == 'about') { echo 'current'; } ?>">
                            <a  class="main" href="about.php">About</a>
                    </li>
                    <li class="<?php if ($page == 'storage') { echo 'current'; } ?>">
                            <a class="main" href="storage.php">Storage</a>
                    </li>
                    <li class="<?php if ($page == 'other-services') { echo 'current'; } ?>">
                         <a class="main" href="other-services.php">Other Services</a>
                    </li>
                    <li class="<?php if ($page == 'seq') { echo 'current'; } ?>">
                        <a class="main" href="health-safety-security-environment.php">HSSE</a>
                    </li>
                    <li class="<?php if ($page == 'contact') { echo 'current'; } ?>">
                        <a class="main" href="contact.php">Contact</a>
                    </li>
                </ul>
            </nav>

        </div>
        <!-- mobile menu area end -->
    </div>
    <!-- header style two End -->

