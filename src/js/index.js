const form = document.getElementById("contact__form");
const nameInput = document.querySelector(".input-name");
const surnameInput = document.querySelector(".input-surname");
const emailInput = document.querySelector(".input-email");
const telephoneInput = document.querySelector(".input-telephone");
const contactsList = document.getElementById("contacts");

const loadContacts = () => {
  contactsList.innerHTML = "";
  const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  contacts.forEach((contact, index) => {
    const li = document.createElement("li");
    li.textContent = `${contact.name} ${contact.surname} - ${contact.email} - ${contact.telephone}`;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "10px";
    deleteButton.addEventListener("click", () => {
      deleteContact(index);
    });
    li.appendChild(deleteButton);
    contactsList.appendChild(li);
  });
};


const addContact = () => {
  const name = nameInput.value;
  const surname = surnameInput.value;
  const email = emailInput.value;
  const telephone = telephoneInput.value;
  const newContact = { name, surname, email, telephone };

  let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  contacts.push(newContact);
  localStorage.setItem("contacts", JSON.stringify(contacts));

  loadContacts();
  form.reset();
};


const deleteContact = (index) => {
  let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  contacts.splice(index, 1);
  localStorage.setItem("contacts", JSON.stringify(contacts));
  loadContacts();
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addContact();
});

loadContacts();
