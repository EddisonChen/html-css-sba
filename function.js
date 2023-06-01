const imperial = document.getElementById("imperial");
const metric = document.getElementById("metric");
const heightInput = document.getElementById("height-input");
const weightInput = document.getElementById("weight-input");
const submitButton = document.getElementById("submit-button");
const result = document.getElementById("result-message");
const male = document.getElementById("male");
const female = document.getElementById("female");
const sexContainer = document.getElementById("sex");
const setAge = document.getElementById("age");
const setActivityLevel = document.getElementById("activity-level");
const setBodyFatPercentage = document.getElementById("body-fat-percentage");

let unitType = null;
let heightUnit = null;
let weightUnit = null;

imperial.addEventListener('click', () => {
    heightInput.innerHTML = (
        `Height: 
            <select id="height">
                <option value="55">4ft 7in</option>
                <option value="56">4ft 8in</option>
                <option value="57">4ft 9in</option>
                <option value="58">4ft 10in</option>
                <option value="59">4ft 11in</option>
                <option value="60">5ft 0in</option>
                <option value="61">5ft 1in</option>
                <option value="62">5ft 2in</option>
                <option value="63">5ft 3in</option>
                <option value="64">5ft 4in</option>
                <option value="65">5ft 5in</option>
                <option value="66">5ft 6in</option>
                <option value="67">5ft 7in</option>
                <option value="68">5ft 8in</option>
                <option value="69" selected>5ft 9in</option>
                <option value="70">5ft 10in</option>
                <option value="71">5ft 11in</option>
                <option value="72">6ft 0in</option>
                <option value="73">6ft 1in</option>
                <option value="74">6ft 2in</option>
                <option value="75">6ft 3in</option>
                <option value="76">6ft 4in</option>
                <option value="77">6ft 5in</option>
                <option value="78">6ft 6in</option>
                <option value="79">6ft 7in</option>
                <option value="80">6ft 8in</option>
                <option value="81">6ft 9in</option>
                <option value="82">6ft 10in</option>
                <option value="83">6ft 11in</option>
                <option value="84">7ft 0in</option>
            </select>`
    )
    weightInput.innerHTML = (
        `Weight: <input type="number" placeholder="Weight in LBs" id="weight" pattern="[1-9]|[1-9][0-9]|[1-9][0-9][0-9]">`
    )
    unitType = "imperial"
    heightUnit = "inches"
    weightUnit = "pounds"
    console.log(unitType)
})

metric.addEventListener('click', () => {
    heightInput.innerHTML = (
        `Height: <input type="number" id="height" placeholder="Height In CM">`
    )
    weightInput.innerHTML = (
        `Weight: <input type="number" placeholder="Weight in KGs" id="weight" pattern="[1-9]|[1-9][0-9]|[1-9][0-9][0-9]">`
    )
    unitType = "metric";
    heightUnit = "centimeters"
    weightUnit = "kilograms"
    console.log(unitType)
})

let height = null;
let weight = null;
let sex = null;
let age = null;
let activityLevel = "sedentary";
let bodyFatPercentage = null;

setActivityLevel.addEventListener("change", () => {
    activityLevel = setActivityLevel.value;
    console.log(activityLevel)
})

setBodyFatPercentage.addEventListener('change', () => {
    bodyFatPercentage = setBodyFatPercentage.value
    console.log(bodyFatPercentage)
})

const setHeight = () => {
    const heightValue = document.getElementById("height");
    height = heightValue.value;
    console.log(height)
}

const setWeight = () => {
    const weightValue = document.getElementById("weight");
    weight = weightValue.value;
    console.log(weight)
}

setAge.addEventListener('change', () => {
    age = setAge.value
    console.log(age)
})

sexContainer.addEventListener('click', () => {
    if (male.checked) {
        sex = male.value;
    } else if (female.checked) {
        sex = female.value
    }
    console.log(sex)
})

let bmrCalories = null;
let tdeeCalories = null;
let bmi = null;
let bmiClass = null;
let calorieActivityRange = {};
let lbm = null;

const mifflinStJeor = (weight, height, age, sex) => {
    bmrCalories = ((10*weight) + (6.25*height) - (5*age) + sex)
}

const beor = (weight, height) => {
    if (sex=="male") {
        lbm = ((.407*weight) + (.267*height) - 19.2)
    } else if (sex =="female"){
        lbm = ((.252*weight) + (.473*height) - 48.3)
    }
}

const katchMcArdle = () => {
    bmrCalories = (370 + (21.6*lbm))
}

const calorieCalculation = () => {
    const convertedHeight = parseInt(height)*2.54
    const convertedWeight = parseInt(weight)/2.205
    let sexNumericValue = null;
    if (sex == "male") {
        sexNumericValue = 5
    } else {
        sexNumericValue = - 161
    }
    if (bodyFatPercentage == null || bodyFatPercentage == "") {
        if (unitType == "imperial") {
            mifflinStJeor(convertedWeight, convertedHeight, age, sexNumericValue)
            console.log("using imperial", height, weight, sexNumericValue, age)
        } else {
            mifflinStJeor(weight, height, age, sexNumericValue)
            console.log("using metric", height, weight, sexNumericValue, age)
        }
    } 
    else {
        if (unitType == "imperial") {
            beor(convertedWeight, convertedHeight)
            katchMcArdle()
            console.log("using imperial, katch", height, weight, sexNumericValue, age)
        } else {
            beor(weight, height)
            katchMcArdle()
            console.log("using metric, katch", height, weight, sexNumericValue, age)
        }
    }
    console.log(bmrCalories)
    calorieActivityRange = {
        "bmr": bmrCalories.toFixed(),
        "sedentary": (bmrCalories * 1.2).toFixed(),
        "lightExercise": (bmrCalories * 1.275).toFixed(),
        "moderateExercise": (bmrCalories * 1.55).toFixed(),
        "heavyExercise": (bmrCalories * 1.725).toFixed(),
        "athlete": (bmrCalories * 1.9).toFixed()
    }
}

const bmiCalculation = () => {
    if (unitType == "imperial") {
        bmi = (703 * (weight/Math.pow(height, 2))).toFixed(1)
    } else {
        bmi = (weight/Math.pow((height/100), 2)).toFixed(1)
    }
    if (bmi < 18.5) {
        bmiClass = "underweight"
    } else if (bmi >= 18.5 && bmi < 25) {
        bmiClass = "normal weight"
    } else if (bmi >= 25 && bmi < 30) {
        bmiClass = "overweight"
    } else if (bmi >= 30) {
        bmiClass = "obese"
    }
}

// const resultMessage = (
//     <div>
//         <p>You are a ${age} year old ${sex} that is ${height} ${heightUnit} tall and weighs ${weight} ${weightUnit}.</p>
//         <h2>Your maintenance calories: ${calorieActivityRange[activityLevel]} per day</h2>
//         <table>
//             <tr>
//                 <td>Basal Metabolic Rate</td>
//                 <td>${calorieActivityRange["bmr"]}</td>
//             </tr>
//             <tr>
//                 <td>Sedentary</td>
//                 <td>${calorieActivityRange["sedentary"]}</td>
//             </tr>
//             <tr>
//                 <td>Light Exercise</td>
//                 <td>${calorieActivityRange["lightExercise"]}</td>
//             </tr>
//             <tr>
//                 <td>Moderate Exercise</td>
//                 <td>${calorieActivityRange["moderateExercise"]}</td>
//             </tr>
//             <tr>
//                 <td>Heavy Exercise</td>
//                 <td>${calorieActivityRange["bmr"]}</td>
//             </tr>
//             <tr>
//                 <td>Athlete</td>
//                 <td>${calorieActivityRange["athlete"]}</td>
//             </tr>
//         </table>
//         <div>
//             <h3>BMI Score: ${bmi}</h3>
//             <p>You are classified as ${bmiClass}</p>
//             <table>
//                 <tr>
//                     <td>18.5 or Under</td>
//                     <td>Underweight</td>
//                 </tr>
//                 <tr>
//                     <td>18.5 - 24.99</td>
//                     <td>Normal Weight</td>
//                 </tr>
//                 <tr>
//                     <td>25 - 29.99</td>
//                     <td>Overweight</td>
//                 </tr>
//                 <tr>
//                     <td>30 or Over</td>
//                     <td>Obese</td>
//                 </tr>
//             </table>
//         </div>
//     </div>
// )

submitButton.addEventListener('click', () => {
    setHeight()
    setWeight()
    calorieCalculation()
    bmiCalculation()
    if (height && weight && sex) {
        result.innerHTML = (
            `<div>
            <p>You are a ${age} year old ${sex} that is ${height} ${heightUnit} tall and weighs ${weight} ${weightUnit}.</p>
            <h2>Your maintenance calories: ${calorieActivityRange[activityLevel]} per day</h2>
            <table>
                <tr>
                    <td>Basal Metabolic Rate</td>
                    <td>${calorieActivityRange["bmr"]} calories per day</td>
                </tr>
                <tr>
                    <td>Sedentary</td>
                    <td>${calorieActivityRange["sedentary"]} calories per day</td>
                </tr>
                <tr>
                    <td>Light Exercise</td>
                    <td>${calorieActivityRange["lightExercise"]} calories per day</td>
                </tr>
                <tr>
                    <td>Moderate Exercise</td>
                    <td>${calorieActivityRange["moderateExercise"]} calories per day</td>
                </tr>
                <tr>
                    <td>Heavy Exercise</td>
                    <td>${calorieActivityRange["heavyExercise"]} calories per day</td>
                </tr>
                <tr>
                    <td>Athlete</td>
                    <td>${calorieActivityRange["athlete"]} calories per day</td>
                </tr>
            </table>
            <div>
                <h3>BMI Score: ${bmi}</h3>
                <p>You are classified as ${bmiClass}</p>
                <table>
                    <tr>
                        <td>18.5 or Under</td>
                        <td>Underweight</td>
                    </tr>
                    <tr>
                        <td>18.5 - 24.99</td>
                        <td>Normal Weight</td>
                    </tr>
                    <tr>
                        <td>25 - 29.99</td>
                        <td>Overweight</td>
                    </tr>
                    <tr>
                        <td>30 or Over</td>
                        <td>Obese</td>
                    </tr>
                </table>
            </div>
        </div>`
        );
    } else {
        result.innerHTML = (
            `<p>bad dog</p>`
        )
    }
})









