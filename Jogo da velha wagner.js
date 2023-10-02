	letra = "X";
 
	function joga(celula){
		let celulaclicada = document.getElementById(celula).innerHTML;
		if (celulaclicada == "X" || celulaclicada == "O"){
			alert("Opa, este quadrado já foi escolhido!");
		}else{
			document.getElementById(celula).innerHTML = letra;
			if (letra == "X"){
				letra = "O";
			}else{
				letra = "X";
			}
		}
	}
 
	function verifica() {
		let c1 = document.getElementById('cel11').innerHTML;
		let c2 = document.getElementById('cel12').innerHTML;
		let c3 = document.getElementById('cel13').innerHTML;
		let c4 = document.getElementById('cel21').innerHTML;
		let c5 = document.getElementById('cel22').innerHTML;
		let c6 = document.getElementById('cel23').innerHTML;
		let c7 = document.getElementById('cel31').innerHTML;
		let c8 = document.getElementById('cel32').innerHTML;
		let c9 = document.getElementById('cel33').innerHTML;
		
		if(c1 != '' && c2 != '' && c3 != ''
		   c1 == c2 && c2 ==c3 || // testando a primeira linha

		   c4 != '' && c5 != c6 != '' &&
		   c4 == c5 && c5 == c6 || // testando a segunda linha
		   
		   c7 != '' && c8 != '' && c9 != '' &&
		   c7 == c8 && c8 == c9 || // testando a primeira coluna

		   c2 != '' && c5 != '' && c8 != '' &&
		   c2 == c5 && c5 == c8 || // testando a segunda coluna

		   c3 != '' && c6 != '' && c9 != '' &&
		   c3 == c6 && c6 == c9 || // testando a terceira coluna

		   c1 != '' && c5 != '' && c7 != '' &&
		   c1 == c5 && c5 == c7 || // testando a primeira diagonal

		   c3 != '' && c5 != '' && c7 != '' &&
		   c3 == c5 && c5 == c7) { //testando a segunda diagonal */

		   alert('Valeu, voce ganhou!!');
		   }
		   
		   }

		   function novo (){
			document.getElementById('cel1').innerHTML = '';
			document.getElementById('cel2').innerHTML = '';
			document.getElementById('cel3').innerHTML = '';
			document.getElementById('cel4').innerHTML = '';
			document.getElementById('cel5').innerHTML = '';
			document.getElementById('cel6').innerHTML = '';
			document.getElementById('cel7').innerHTML = '';
			document.getElementById('cel8').innerHTML = '';
			document.getElementById('cel9').innerHTML = '';
		   }

		   function novos() {
			for(let i = 1; i <= 9; i++){
				let celula = 'cel';
				document.getElementById('cel'+ i).innerHTML
			}
		   }
		
	
	