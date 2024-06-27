<!-- this is the main page where the user is taken after signup/login-->
<template>
    <head>

    <!--Essentials-->
    <meta charset="UTF-8">
    <meta http-equiv="'X-UA-Compatible" content="IE-edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">

     <!-- Boostrap icons, custom bootstrap, and bootstrap css library-->
     
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="CSS/style.css">
    <title> Smart Recycling System</title>
    </head>


    <body> 
      
        <!--"about" section-->
        <section id="aboutapp">
          <div class="card ms-5 me-5 mt-2 mb-2">
            <div class="row g-0">
              <div class="col-lg-7">
                <div class="card-body">
                  <h5 class="h1" style="font-size:50px;">Smart Recycling System</h5>
                  <p class="card-text h5 my-3" style="font-size: 25px;">Our app uses image recognition to tell the user if an item is recyclable, and how to recycle it.
                     It also provides feedback, aiming at educating the user on recycling practices</p>
                 
                  <a class="btn btn-primary btn-lg mt-2" href="moreInfo.html">More info</a>
                </div>
              </div>
              <div class="col-lg-5">
                <img src="pictures/leaf-logo.png" class="img-fluid mx-auto d-block" alt="..." style="height: 350px; width: auto; margin-top: -20px;">
              </div>
              
            </div>
          </div>
          </section>


<hr style="color: #A4E3B1;">


<!--Earth now-->
<section id="earthNow">
  <div class="card m-5">
  <div class="row ">
    <div class="col-lg-12 col-md-12">
      <div class="card-body">
        <h5 class="h1 " style="font-size:50px;">Earth Now</h5>
        <p class="card-text h5 my-3" style="font-size: 25px;">Some major consequences of not recycling</p>
      </div>
    </div>
  


  <div class="col-lg-4 col-md-12 ">
    <div class="card mb-3 earth ms-3">
      <div class="card-body  pollutionConsequence">
        <h5 class="card-title" >Resource Depletion</h5>
        <p class="card-text">Harmed ecosystems, endangered wildlife and humanity</p>
        <a href="earthNowDetailed.html" class="btn btn-primary">Learn More!</a>
      </div>
    </div>
  </div>

  <div class="col-lg-4 col-md-12 ">
    <div class="card  mb-3 earth  ms-3" >
      <div class="card-body  pollutionConsequence">
        <h5 class="card-title">Environmental Pollution</h5>
        <p class="card-text">Scarcity, increased environmental damage, high costs</p>
        <a href="earthNowDetailed.html" class="btn btn-primary">Learn More!</a>
      </div>
    </div>
  </div>

  <div class="col-lg-4 col-md-12 ">
    <div class="card  mb-3 earth ms-3">
      <div class="card-body  pollutionConsequence">
        <h5 class="card-title" >Waste Management</h5>
        <p class="card-text">illegal dumping, exporting waste to other regions</p>
        <a href="earthNowDetailed.html" class="btn btn-primary">Learn More!</a>
      </div>
    </div>
  </div>
 </div>
</div>

</section>
<hr style="color: #004643;">

<section id="solution">
  <div class="card m-5">
    <div class="row ">
      <div class="col-lg-12 col-md-12">
        <div class="card-body">
          <h5 class="h1 " style="font-size:50px;">Our Solution</h5>
          <p class="card-text h5 my-3" style="font-size: 25px;">Recycling the old-fashioned way can be tough and unclear, especially if you haven't learned how to do it properly. This can result in recyclable items being thrown away incorrectly, adding to environmental pollution and garbage. Additionally, not knowing about the various types of recyclable materials and how to deal with them can make recycling feel overwhelming and tedious.
          </p>
          <p class="card-text h5 my-3" style="font-size: 25px;">Our app, <strong>Smart Recycling</strong>, is a game-changer in the world of recycling. By harnessing cutting-edge image recognition technology, all you need to do is snap a photo and our app can instantly determine the material of the item you want to recycle. Whether it's a plastic bottle, a sheet of paper, or a glass container, Smart Recycling will provide clear instructions on how to properly recycle it. Say goodbye to the uncertainty and frustration that can come with recycling - our app streamlines the process, making it simple and stress-free for everyone.
          </p>
          <p class="card-text h5 my-3" style="font-size: 25px;">We've added a special <strong>Point System</strong> to make recycling more fun and rewarding. When you recycle, you earn points depending on the material. These points are a concrete way to reward your commitment to recycling and helping the environment.
          The point system we have in place not only rewards you for consistently recycling, but also adds an element of excitement and friendly competition. You can challenge yourself to surpass your previous high score or even compete with your friends and family. This fun approach to recycling motivates people to recycle more often and makes the whole process more enjoyable. Check the <strong>Dashboard</strong> for more info!
          </p>
          <p class="card-text h5 my-3" style="font-size: 25px;">Smart Recycling solves the typical issues linked with traditional recycling methods by offering a user-friendly, educational, and gratifying platform. Our goal is to transform recycling into a straightforward, fun, and regular activity for everyone, ultimately resulting in a cleaner and healthier planet.</p>
          <div class="flex">
          <!-- Google Play Button -->
          <a class="btn btn-google" title="Google Play">Google Play</a>  
<!-- Apple Store Logo -->
<button type="button" style="background: none; border: none; padding: 0; cursor: pointer;">
  <img src="pictures/app-store.png" alt="Apple Store Button" width="50" height="50" style="margin-left: 20px;">
</button>
 
        </div>
      </div>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/QoPFJPRXN_0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


        </div>
        </div>
</section>


<hr style="color: #004643;">

<section id="team">
  <div class="card m-5">
    <div class="row ">
      <div class="col-lg-12 col-md-12">
        <div class="card-body">
          <h5 class="h1 " style="font-size:50px;">The team</h5>
          <p class="card-text h5 my-3" style="font-size: 25px;">Our team is composed of 5 wonderful hard-working students</p>
        </div>
      </div>
</div>
<div class="row mb-3 justify-content-center"> 
          <div class="card col-lg-4 m-2" style="width: 19rem;">
            <img src="pictures/christa.jpg" class="card-img-top teamPictures">
            <div class="card-body">
              <p class="card-text text-center" style="font-weight: bold; margin-bottom: 0px;">Christa Abou Arraje</p>
              <p class="card-text text-center" style="margin-bottom: 0px;"> Program: Software Engineering</p>
              <p class="card-text text-center"> Role: Web Developer</p>
            </div>
          </div>

          <div class="card col-lg-4 m-2" style="width: 19rem;">
            <img src="pictures/Nour.jpg" class="card-img-top teamPictures">
            <div class="card-body">
              <p class="card-text text-center" style="font-weight: bold; margin-bottom: 0px;">Nour Hadie Hassoun</p>
              <p class="card-text text-center" style="margin-bottom: 0px;"> Program: Software Engineering</p>
              <p class="card-text text-center"> Role: Project Manager</p>
            </div>
          </div>
          <div class="card col-lg-4 m-2" style="width: 19rem;">
            <img src="pictures/Mark.webp" class="card-img-top teamPictures">
            <div class="card-body">
              <p class="card-text text-center" style="font-weight: bold; margin-bottom: 0px;">Mark Tadros</p>
              <p class="card-text text-center" style="margin-bottom: 0px;"> Program: Software Engineering</p>
              <p class="card-text text-center"> Role: UI/UX Designer</p>
            </div>
          </div>
          </div>
          <div class="row mt-3 justify-content-center">
          <div class="card col-lg-6 m-2" style="width: 19rem;">
            <img src="pictures/ibrahim.jpg" class="card-img-top teamPictures">
            <div class="card-body">
              <p class="card-text text-center" style="font-weight: bold; margin-bottom: 0px;">Ibrahim Elyyan</p>
              <p class="card-text text-center" style="margin-bottom: 0px;"> Program: Computer Science</p>
              <p class="card-text text-center"> Role: Web Developer</p>
            </div>
          </div>
          <div class="card col-lg-6 m-2" style="width: 19rem;">
            <img src="pictures/jose.jpg" class="card-img-top teamPictures">
            <div class="card-body">
              <p class="card-text text-center" style="font-weight: bold; margin-bottom: 0px;">Jose Semaan</p>
              <p class="card-text text-center" style="margin-bottom: 0px;"> Program: Software Engineering</p>
              <p class="card-text text-center"> Role: UI/UX Designer</p>
            </div>
          </div>
        </div>
        </div>
     

</section>



<footer style="background-color: #004643; color:white;" class="pt-5 pb-4">
  <h6 class="card-text text-center">Copyright <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-c-circle" viewBox="0 0 16 16">
    <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512"/>
  </svg> 2024 All Rights Reserved by <Strong style="color:#A4E3B1;"> Smart Recycling</Strong></h6>
  
  </footer>


    </body>
</template>

<script>
  export default {
  mounted() {
    if(localStorage.getItem('loggedIn') !== 'true') {
      this.$router.push('signIn.vue');
    }
    if (localStorage.getItem('dark-mode') === 'true') {
      document.body.classList.add("dark-mode");
    }
  },
  methods: {
    logout() {
      localStorage.setItem('loggedIn', 'false');
      this.$router.push('signIn.vue'); //change 
    }
  }
}
    
  </script>