import axios from "axios";


const API_URL = "http://127.0.0.1:3000";


export async function getPasswordNull(user: string): Promise<boolean> {
  try {
    const response = await axios.get(`${API_URL}/passwordNull/${user}`);
    //nullならtrueが返ってくる
    return response.data.passwordIsNull;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
}

export async function login(user: string, password: string): Promise<boolean> {
  try {
    const response = await axios.post(`${API_URL}/login`, { user, password });
    return response.data;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
}

export async function getAccountInfo(user: string): Promise<any> {
  try {
    console.log(`${API_URL}/accountInfo/${user}`);
    const response = await axios.get(`${API_URL}/accountInfo/${user}`);
    return response.data;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
}

export async function setPassword(user: string, password: string): Promise<void> {
  console.log(user, password);
  try {
    await axios.post(`${API_URL}/setPassword`, { user, password });
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
}

export async function userExists(user: string): Promise<boolean> {
  try {
    const response = await axios.get(`${API_URL}/userExists/${user}`);
    return response.data.exists;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
}

export async function accountList(): Promise<any> {
  try {
    const response = await axios.get(`${API_URL}/accountList`);
    return response.data;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
}