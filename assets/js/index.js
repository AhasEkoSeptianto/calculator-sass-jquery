var num_cal = "0";
var res_calculator = {
	firstNum: null,
	resNum: null,
	operation: null,
}

var operatEnum = {
	'+':'sum',
	'-': 'subtraction',
	'*': 'multiplication',
	'/': 'divide',
	'%': 'modulus',

	'sum': '+',
	'subtraction': '-',
	'multiplication': 'x',
	'divide': '/',
	'modulus': '%',
}


// setup button concat number calculator 1-9
const DOM_resValue = (val) => {

	// eliminasi ketika user klik button akan menghilangkan nulai nol terawal
	if (num_cal.substring(0,1) === "0") {
		num_cal = num_cal.substring(1);
		$('#output').val(num_cal);
	}else {
		$('#output').val(val)
	}
}

// membuat beberapa kali btn event jquery dengan loop
for (let i=0; i<=9; i++){
	$(`#${i}`).click(() => {
		num_cal = num_cal + i;
		DOM_resValue(num_cal);
	});
}

// setup btn
$('#c').click(() => {
	num_cal = "0";
	res_calculator = { firstNum: null, resNum: null, operation: null };

	$('#operation').val('');
	$('#firstNum').val('', () => {
		$('#output').val("0");
	});
})

$("#posNeg").click(() => {
	num_cal = (parseInt(num_cal) * -1).toString();
	$('#output').val(num_cal);
})

$('#del').click(() => {
	num_cal = num_cal.slice(0, -1);
	$('#output').val(num_cal);
})



// func action count
const count = (operation) => {
	if (res_calculator.firstNum === null || $('#firstNum').val() === "") {
		res_calculator = {
			...res_calculator,
			firstNum: parseInt(num_cal),
			operation: operation,
		}
	} else {
		switch(operation){
			case operatEnum['+'] :{
				res_calculator = {
					...res_calculator,
					firstNum: res_calculator.firstNum + parseInt(num_cal),
					operation: operation,
				}
				break;
			}
			case operatEnum['-'] : {
				res_calculator = {
					...res_calculator,
					firstNum: res_calculator.firstNum - parseInt(num_cal),
					operation: operation,
				}
				break;
			}
			case operatEnum['*'] : {
				res_calculator = {
					...res_calculator,
					firstNum: res_calculator.firstNum * parseInt(num_cal),
					operation: operation,
				}
				break;
			}
			case operatEnum['/'] : {
				res_calculator = {
					...res_calculator,
					firstNum: res_calculator.firstNum / parseInt(num_cal),
					operation: operation,
				}
				break;
			}
			case operatEnum['%'] : {
				res_calculator = {
					...res_calculator,
					firstNum: res_calculator.firstNum % parseInt(num_cal),
					operation: operation,
				}
				break;
			}
			default: {
				break;
			}
		}
	}

	num_cal = "0";
	$('#firstNum').val(res_calculator.firstNum);
	$('#output').val("0");
	$('#operation').val(operatEnum[res_calculator.operation]);
}

// setup btn jquery operation
$('#sum').click(() => {
	count(operatEnum['+']);
})

$('#subtraction').click(() => {
	count(operatEnum['-']);
});

$('#multiplication').click(() => {
	count(operatEnum['*']);
});

$('#divide').click(() => {
	count(operatEnum['/']);
});

$('#modulus').click(() => {
	count(operatEnum['%']);
});



// hitung
$('#count').click(() => {
	switch (res_calculator.operation){

		case operatEnum['+'] : {
			res_calculator = {
				...res_calculator,
				firstNum: res_calculator.firstNum + parseInt(num_cal),
				resNum: res_calculator.firstNum + parseInt(num_cal),
			};
			break;
		}
		case operatEnum['*'] : {
			res_calculator = {
				...res_calculator,
				firstNum: res_calculator.firstNum * parseInt(num_cal),
				resNum: res_calculator.firstNum * parseInt(num_cal),
			}
			break;
		}
		case operatEnum['-'] : {
			res_calculator = {
				...res_calculator,
				firstNum: res_calculator.firstNum - parseInt(num_cal),
				resNum: res_calculator.firstNum - parseInt(num_cal),
			}
			break;
		}
		case operatEnum['/'] : {
			res_calculator = {
				...res_calculator,
				firstNum: res_calculator.firstNum / parseInt(num_cal),
				resNum: res_calculator.firstNum / parseInt(num_cal),
			}
			break;
		}
		case operatEnum['%'] : {
			res_calculator = {
				...res_calculator,
				firstNum: res_calculator.firstNum % parseInt(num_cal),
				resNum: res_calculator.firstNum % parseInt(num_cal),
			}
			break;
		}

		default: {
			break;
		}

	}

	num_cal = res_calculator.resNum;

	$('#firstNum').val("");
	$('#output').val(res_calculator.resNum);
});