<!DOCTYPE html>
<html>
    <head>
        <title>TODO supply a title</title>
        <meta charset="utf-8">
	<meta name="viewport"
		content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="css/style.css" rel="stylesheet">
	<link rel="stylesheet" href="{% static 'todo/style.css' %}" >
	<link href="css/footer.css" rel="stylesheet">
	<script src="js/modernizr-2.8.3.min.js"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.js"></script>
    </head>
    <body id="home">
 <nav class="navbar-default" role="navigation">
		<div class="container">
			<div class="navbar-header">
				
				<a class="navbar-brand" href="#home">framingham</a>
			</div>

			<div class="collapse navbar-collapse navbar-right navbar-ex1-collapse">
				<ul class="nav navbar-nav">
					
					<li class="menuItem"><a href="what_is.html">What is?</a></li>
					<li class="menuItem"><a href="#useit">Use It</a></li>
					
				
					<li class="menuItem"><a href="#contact">table</a></li>
				</ul>
			</div>
		   
		</div>
	</nav> 
<br>
<br>

<div class="col-md-6 col-md-offset-3 text-center wrap_title">
				<h1>gráfica de valores</h1>

				<p class="lead" style="margin-top:0">valores de riesgo</p>
			</div>
<br>
<br>
<br><br><br><br><br><br><br><br>
<center>
<h3>colesterol<h3/>
</center>

<div style="height:30vh; width:90vw; margin-left:50px;"> 
<center>
<canvas id="speedChart" height = "100"></canvas>
</center>
</div>        
<br>
<br>
<br>
<br>
<br><br><br><br><br><br>
<center>
<h3>colesterol hdl <h3/>
</center>

<div style="height:30vh; width:90vw; margin-left:50px"> 
<canvas id="Chart"  height = "100"></canvas>

<div>

<br>
<br>
<center>
<h3>triglicéridos<h3/>
</center>
<div style="height:30vh; width:90vw; margin-left:20px"> 
<canvas id="trigli" height="100"></canvas>
</div>
<br>
<br>
<br><br><br><br><br><br><br>
<center>

<h3>tencion arterial<h3/>
</center>
<div style="height:30vh; width:90vw; margin-left:20px"> 
<canvas id="tencion" height="100" </canvas>
</div>
<br>
<br>
<br><br><br><br><br><br><br><br><br><br>
<h3>indice de masa corporal<h3/>

<div style="height:30vh; width:90vw; margin-left:20px"> 
<canvas id="imc"  height="100" ></canvas>
</div>
</div>
<br><br><br><br><br><br><br><br><br><br>


<?php
$nom = $_GET['Nombre'];
$edad = $_GET['edad'];
$sexo = $_GET['sexo'];
$coles = $_GET['colesterol'];
$HDL = $_GET['HDL'];
$tri = $_GET['tri'];
$pas = $_GET['pas'];
$pad = $_GET['pad'];
$imc = $_GET['imc'];
$diabetes = $_GET['diabetes'];
$tabaco = $_GET['tabaco'];
$ante = $_GET['ante'];

?>

<script type="text/javascript"> 

var nombre = "<?php echo $nom; ?>";
var eda = "<?php echo $edad; ?>";
var edad = parseFloat(eda)

var sexo = "<?php echo $sexo; ?>";
 
var cole = "<?php echo $coles; ?>";
var coles = parseFloat(cole)

var hd = "<?php echo $HDL; ?>";
var hdl = parseFloat(hd)

var tri = "<?php echo $tri; ?>";
var pa = "<?php echo $pas; ?>";
var pas = parseFloat(pa)

var p = "<?php echo $pad; ?>";
var pad = parseFloat(p)

var im = "<?php echo $imc; ?>";
var imc = parseFloat(im)

var diabetes = "<?php echo $diabetes; ?>";

var tabaco = "<?php echo $tabaco; ?>";

var ante = "<?php echo $ante; ?>";

</script>
<br>
<br>
<br>
<br>
<center>
<h2>resultados de predicción</h2>
</center>

<br>
<br>

<p id="mostrar"><p/>


	<table class="table table-striped table-dark">

<thead> 

<tr> 
<th>prediccion</th> 
<th>puntaje</th>
<th>diagnósticos</th>

</tr>

</thead>			
			
<tbody id="tbody"> 
</tbody> 
</table> 
	


    </body>
    <script src="/Modelo/BackEnd/js/graficas.js"></script>
<script src="js/tabla.js"></script>
<br>

<br>

<div>
<footer class="text-center text-lg-start bg-light text-muted">
  <br>
  <br>

  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
  
    <div class="me-5 d-none d-lg-block">
      <h4 class="font-weight-bold"style="color: #778899">corporacion universitaria Rafael Nuñez</h4>
    </div>
    
  </section>
  <section class="">
    <div class="container text-center text-md-start mt-5">
      
      <div class="row mt-3">
    
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          

        
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
          <h4 class="text-uppercase fw-bold mb-4" style="color: #778899">Contact</h4>
          <p><i class="fas fa-home me-3" style="color: #778899"></i> cartagena- Colombia</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
          crodrigueza21@curnvirtual.edu.co 
          </p>
          <p><i class="fas fa-phone me-3"></i>+57 3205576270</p>
          <p><i class="fas fa-print me-3"></i>+57 300 3638437</p>
        </div>

      </div>

    </div>
  </section>

  <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
    © 2021 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">Curn.edu.co</a>
  </div>
  
</footer>



</body>

/js/main.js
<script src="/Modelo/BackEnd/js/prediccion.js"></script>
<script src="/Modelo/BackEnd/js/main.js"></script> 

</html>
