const tasks = document.getElementById("tasks");
const add_task = document.getElementById("add");
const reset_list = document.getElementById("reset");
const input = document.getElementById("new");

add_task.addEventListener("click", () => {
    if (input.value.trim() === "") {
        alert("No task entered, type your task.");
        input.style.border = "1px solid red";
    } else {
        input.style.border = "1px solid #ccc";

        const task = document.createElement("div");
        task.className = "task";

        const taskSpan = document.createElement("span");
        taskSpan.textContent = input.value;

        const closeBtn = document.createElement("button");
        closeBtn.textContent = "X";
        closeBtn.className = "close";
        closeBtn.addEventListener("click", () => {
            tasks.removeChild(task);
        });
        task.appendChild(taskSpan);
        task.appendChild(closeBtn);

        // Ajout dans le container principal
        tasks.appendChild(task);
        

        input.value = "";
        input.focus();
    }
});

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.keyCode === 13) {if (input.value.trim() === "") {
        alert("No task entered, type your task.");
        input.style.border = "1px solid red";
    } else {
        input.style.border = "1px solid #ccc";

        const task = document.createElement("div");
        task.className = "task";

        const taskSpan = document.createElement("span");
        taskSpan.textContent = input.value;

        const closeBtn = document.createElement("button");
        closeBtn.textContent = "X";
        closeBtn.className = "close";
        closeBtn.addEventListener("click", () => {
            tasks.removeChild(task);
        });
        task.appendChild(taskSpan);
        task.appendChild(closeBtn);

        // Ajout dans le container principal
        tasks.appendChild(task);
        

        input.value = "";
        input.focus();
    }
}});

reset_list.addEventListener("click", () => {
    tasks.innerHTML ="<h3>Tasks</h3>";
})

input.addEventListener("keydown",(event) => {
    if (event.key == "Escape") {
        tasks.innerHTML = "<h3>Tasks</h3>";
    }
})