
<!doctype html>
<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport"
		content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="css/style.css" rel="stylesheet">
	<link rel="stylesheet" href="{% static 'todo/style.css' %}" >
	<link href="css/footer.css" rel="stylesheet">
	<script src="js/modernizr-2.8.3.min.js"></script>

	<title>modelo de flaminghan</title>
	<link rel="shortcut icon" href="icon/android-icon-96x96.png">
</head>

<body id="home">
 
	
	<!-- NavBar-->
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

<div id="contact" class="content-section-a">
	<div class="container">
		<div class="row">

			<div class="col-md-6 col-md-offset-3 text-center wrap_title">
				<h1>modelo de framinghan</h1>

				<p class="lead" style="margin-top:0">recuerde tener a la mano sus examenes</p>
			</div>

			<form role="form" action="guardar.php" method="get">
			
				<div class="col-md-6">
					<div class="form-group">
						<label for="InputName">nombre</label>
						<div class="input-group">
							<input type="text" class="form-control" name="Nombre" id="nombre"
								placeholder="digite su nombre" required>
							<span class="input-group-addon"><i
									class="glyphicon glyphicon-ok form-control-feedback"></i></span>
						</div>
					</div>

					<div class="form-group">
						<label for="input edad">edad</label>
						<div class="input-group">
							<input type="number" class="form-control" id="edad" name="edad"
								placeholder="por favor digire su edad" required>
							<span class="input-group-addon"><i
									class="glyphicon glyphicon-ok form-control-feedback"></i></span>
						</div>
					</div>

					<div class="form-group">
						<label for="InputEmail">sexo</label>
						<div class="input-group">
							<input type="text" class="form-control" id="sexo" name="sexo"
								placeholder="hombre o mujer" required>
							<span class="input-group-addon"><i
									class="glyphicon glyphicon-ok form-control-feedback"></i></span>
						</div>
					</div>

					<div class="form-group">
						<label for="InputEmail">colesterol mg/dl</label>
						<div class="input-group">
							<input type="number" class="form-control" id="colesterol" name="colesterol"
								placeholder="digite su colesterol mg/dl" required>
							<span class="input-group-addon"><i
									class="glyphicon glyphicon-ok form-control-feedback"></i></span>
						</div>
					</div>

					<div class="form-group">
						<label for="InputEmail">HDLCOL- mg/dl</label>
						<div class="input-group">
							<input type="number" class="form-control" id="HDLCOL" name="HDL"
								placeholder="digite el valor del HDL-COL" required>
							<span class="input-group-addon"><i
									class="glyphicon glyphicon-ok form-control-feedback"></i></span>
						</div>


					</div>
	<div class="form-group">
						<label for="InputEmail">triglicéridos</label>
						<div class="input-group">
							<input type="number" class="form-control" id="tri" name="tri"
								placeholder="digite el valor de su triglicéridos" required>
							<span class="input-group-addon"><i
									class="glyphicon glyphicon-ok form-control-feedback"></i></span>
						</div>


					</div>

					<div class="form-group">
						<label for="InputEmail">tencion arterial</label>
						<div class="input-group">
							<input type="number" class="form-control" id="PAS" name="pas"	placeholder="por favor digite su tension arterial(PAS)" required>
					
							<input type="number" class="form-control" id="PAD" name="pad"
								placeholder="por favor digite su tension arterial(PAD)" required>

							<span class="input-group-addon"><i
									class="glyphicon glyphicon-ok form-control-feedback"></i></span>
						</div>
					</div>
					
						<div class="form-group">
						<label for="InputEmail">IMC</label>
						<div class="input-group">
							<input type="number" class="form-control" id="imc" name="imc"
								placeholder="digite el valor de su indice de masa corporal" required>
							<span class="input-group-addon"><i
									class="glyphicon glyphicon-ok form-control-feedback"></i></span>
						</div>


					</div>


					<div class="mb-3">
						<div class="form-check">
							<label>sufres de diabetes:</label>
							<select id="diabetes" name="diabetes">
								<option value="si">si</option>
								<option value="no">no</option>

							</select>
							<br>
							<label>fumas tabaco:</label>
							<select id="tabaco" name="tabaco">
								<option value="si">si</option>
								<option value="no">no</option>

							</select>
							<br>
								<label>antecedentes familiares:</label>
							<select id="antecedentes" name="ante">
								<option value="si">si</option>
								<option value="no">no</option>

							</select>

						</div>
					</div>
					<br>

					<button type="button" class="btn btn-success mb-3 " id="btncalcular" onclick="validar()">calcular
						flaminghan </button>
						
						<input type="submit" value="cargar" class="btn btn-dark">
						
										
					<button type="reset" class="btn btn-danger " id="btnlimpiar" onclick="limpiar()">limpiar 
					
					</button>
					
					
				</div>
			</form>

			<hr class="featurette-divider hidden-lg">
			<div class="col-md-5 col-md-push-1 address">
				<address>
					<h3 id="resultado"></h3>
				</address>

			</div>
		</div>
	</div>
</div>
<br>
<br>

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
          
          <h5 class="text-uppercase fw-bold mb-4" style="color: #778899">
            <i class="fas fa-gem me-3"></i>proposito del proyecto
          </h5>
          <p class="col-md-6 col-md-offset-3 text-center wrap_title" style="color: #778899">
          lograr que las personas pueda
          consultar acerca de su salud cardiovascular llenando un formulario y este haga una prediccion del riesgo cardiovascular en los próximos 10 años
          </p>
        </div>

        
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

<script src="/Modelo/BackEnd/js/main.js"></script>

</body>

</html>
