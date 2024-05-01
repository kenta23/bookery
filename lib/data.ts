import axios from "axios";
import { BASE_URL } from "./utils";

export async function initialData() {
     const data = await fetch('https://www.googleapis.com/books/v1/volumes?q=intitle:Harry%20Potter%20and%20the%20Sorcerer%27s%20Stone', {
           method: 'GET',
     }).then(res => res.json());
     return data;
}

export async function getNewReleasesBooks() {
      return await axios.get(`${BASE_URL}?q=new+releases&maxResults=40&orderBy=newest&key=AIzaSyDuKjHDD2K3fLJavwgB2RVXveWt6hyoryY`);
}

export async function paginateNewReleaseBooks(index: number | string, sort: string) {
      return await axios.get(`${BASE_URL}?q=new+releases&startIndex=${index.toString()}&maxResults=20&orderBy=${sort}`);
}


