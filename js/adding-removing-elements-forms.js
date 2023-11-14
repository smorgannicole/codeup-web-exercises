const createDependentCard = () => {
    const nmrOfDependents = document.querySelectorAll(".dependent").length;
    const dependent = document.createElement("div");
    dependent.classList.add("row", "row-gap-3", "dependent");
    dependent.innerHTML = `
        <div class="col-6">
            <label for="dependents[${nmrOfDependents}][firstName]" class="form-label">First Name</label>
            <input type="text" class="form-control" name="dependents[${nmrOfDependents}][firstName]">
        </div>
        <div class="col-6">
            <label for="dependents[${nmrOfDependents}][lastName]" class="form-label">Last Name</label>
            <input type="text" class="form-control" name="dependents[${nmrOfDependents}][lastName]">
        </div>
        <div class="col-12">
            <label for="dependents[${nmrOfDependents}][relationship]" class="form-label">Relationship</label>
            <select name="dependents[${nmrOfDependents}][relationship]" class="form-select"
                id="dependents[${nmrOfDependents}][relationship]">
                <option value="spouse">Spouse</option>
                <option value="child">Child</option>
                <option value="parent">Parent</option>
                <option value="grandparent">Grandparent</option>
                <option value="grandchild">Grandchild</option>
                <option value="sibling">Sibling</option>
                <option value="other">Other</option>
            </select>
        </div>
        <div class="col-12">
            <button class="btn btn-danger removeDependent">Remove Dependent</button>
        </div>
    `;
    const removeBtn = dependent.querySelector(".removeDependent");
    removeBtn.addEventListener("click", (e) => {
        dependent.remove();
    });
    // tie a bow on it, give it a kiss, and send it to the dom
    document.querySelector("#dependents").prepend(dependent);
};

// MAIN
(() => {
    const addDependentBtn = document.querySelector("button#addDependent");
    addDependentBtn.addEventListener("click", (e) => {
        e.preventDefault();
        createDependentCard();
    });
})();