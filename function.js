const imperial = document.getElementById("imperial");
const metric = document.getElementById("metric");
const heightInput = document.getElementById("height-input");
const weightInput = document.getElementById("weight-input");
const submitButton = document.getElementById("submit-button");
const result = document.getElementById("result-message");
const male = document.getElementById("male");
const female = document.getElementById("female")

let unitType = null;

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
    unitType = "imperial";
})

metric.addEventListener('click', () => {
    heightInput.innerHTML = (
        `Height: <input type="number" id="height" placeholder="Height In CM">`
    )
    weightInput.innerHTML = (
        `Weight: <input type="number" placeholder="Weight in KGs" id="weight" pattern="[1-9]|[1-9][0-9]|[1-9][0-9][0-9]">`
    )
    unitType = "metric";
})

let height = null;
let weight = null;
let sex = null;

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

male.addEventListener('click', () => {
    sex = "male";
})

female.addEventListener('click', () => {
    sex = "female";
})

submitButton.addEventListener('click', () => {
    setHeight()
    setWeight()
    if (height && weight &&sex) {
        result.innerHTML = (
            `<p>good job</p>`
        )
    } else {
        result.innerHTML = (
            `<p>bad dog</p>`
        )
    }
})





