const tableKey = "cms-table";

let clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", () => {
  localStorage.removeItem(tableKey);
});

let cmsTable;
let cmsTableDemo = {
  "bobby Jones": {
    phone: "0303948484",
    email: "bobbysjones@gmail.com",
  },

  "George Romero": {
    phone: "34359454954",
    email: "gerorgeromero@gmail.com",
  },
};

let refreshDOMTable = () => {
  let cmsTableKeys = Object.keys(cmsTable);
  let tableContainer = document.getElementById("cmsTableContainer");
  let oldTableBody = document.getElementById("tableBody");
  tableContainer.removeChild(oldTableBody);

  newTableBody.id = "tableBody";

  for (let i = 0; i < cmsTableKeys.length; i++) {
    let currentRow = document.createElement("div");
    let currentNameCol = document.createElement("div");
    let currentPhoneCol = document.createElement("div");
    let currentEmailCol = document.createElement("div");
    let currentEditBtn = document.createElement("div");
    let currentDeleteBtn = document.createElement("div");

    currentRow.className = "cms-table-row";
    currentNameCol.className = "cms-table-column cms-name";
    currentPhoneCol.className = "cms-table-column cms-phone";
    currentEmailCol.className = "cms-table-column cms-email";
    currentEditBtn.className = "cms-table-column cms-edit";
    currentDeleteBtn.className = "cms-table-column cms-delete";

    currentNameCol.innerHTML = cmsTableKeys[i];
    currentPhoneCol.innerHTML = cmsTable[cmsTableKeys[i]].phone;
    currentEmailCol.innerHTML = cmsTable[cmsTableKeys[i]].email;

    currentEditBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    currentDeleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

    currentRow.appendChild(currentNameCol);
    currentRow.appendChild(currentPhoneCol);
    currentRow.appendChild(currentEmailCol);
    currentRow.appendChild(currentEditBtn);
    currentRow.appendChild(currentDeleteBtn);
    newTableBody.appendChild(currentRow);
  }

  let enableDisableNewUserModal = (option) => {
    let newPersonName = document.getElementById("newPersonName");
    let newPersonPhone = document.getElementById("newPersonPhone");
    let newPersonEmail = document.getElementById("newPersonEmail");
    newPersonName.value = "";
    newPersonPhone.value = "";
    newPersonEmail.value = "";

    let newPersonModal = document.getElementById("newPersonModal");
    let backdrop = document.getElementById("backdrop");
  };
};
