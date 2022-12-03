import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://638b6aaf81df38ab3468b289.mockapi.io";

export const fetchContacts  = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact   = createAsyncThunk(
  "contacts/addContact",
    async ({ name, phone }, thunkAPI) => {
       const contactMarkUp = {
      name,
      phone,
    };
    try {
      const response = await axios.post(`/contacts/${contactMarkUp}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact    = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);