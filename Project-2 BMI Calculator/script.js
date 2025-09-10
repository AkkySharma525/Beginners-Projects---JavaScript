const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        if(bmi>24.9){
            results.innerHTML = `<span style="color: red";> <h4>Your BMI is ${bmi}</h4>You are Over-weight </span>`;
        } else if(bmi<18.6){
            results.innerHTML = `<span style="color: red";> <h4>Your BMI is ${bmi}</h4>You are Under-weight </span>`;
        }else{
            results.innerHTML = `<span style="color: green";> <h4>Your BMI is ${bmi}</h4>Congrats!! You are in Normal Range </span>`;
        }
    }
})