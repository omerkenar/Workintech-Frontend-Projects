import axios from "axios";

export const getContacts = async () => {
  let data = [];
  await axios
    .get("https://65b36193770d43aba479a2f2.mockapi.io/users")
    .then((response) => {
      data = response.data;
    });
  return data;
};

export const getContactDetails = async (id) => {
  let data = {};
  if (!id) {
    return data;
  }
  await axios
    .get(`https://65b36193770d43aba479a2f2.mockapi.io/users/${id}`)
    .then((response) => {
      data = response.data;
    });
  return data;
};

export const addContact = async (contact) => {
  let data = {};
  await axios
    .post("https://65b36193770d43aba479a2f2.mockapi.io/users", contact)
    .then((response) => {
      data = response.data;
    });
  return data;
};

export const deleteContact = async (id) => {
  let data = [];
  await axios
    .delete(`https://65b36193770d43aba479a2f2.mockapi.io/users/${id}`)
    .then((response) => {
      data = response.data;
    });
  return data;
};
