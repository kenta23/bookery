
import axios from "axios";
import { BASE_URL } from "./utils";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { AuthorInfo } from "@/types";

export async function initialData() {
     const data = await fetch('https://www.googleapis.com/books/v1/volumes?q=intitle:Harry%20Potter%20and%20the%20Sorcerer%27s%20Stone', {
           method: 'GET',
     }).then(res => res.json());
     return data;
}

export async function getNewReleasesBooks() {
      return await axios.get(`${BASE_URL}?q=new+releases&maxResults=40&orderBy=newest`);
}

export async function paginateNewReleaseBooks(index: number | string, sort: string) {
      return await axios.get(`${BASE_URL}?q=new+releases&startIndex=${index.toString()}&maxResults=20&orderBy=${sort}`);
}


export async function queryBook(formData: FormData) {   
            const query = formData.get('search')?.toString();
            // return await axios.post(`${BASE_URL}?q=${query?.toString}&startIndex=${0}&maxResults=40&orderBy=newest`);
            return redirect(`/search?q=${query}&startIndex=${0}&maxResults=40&orderBy=newest&filter=partial`);     
}

export async function getBookById(id: string) {
      const data = await axios.get(`${BASE_URL}/${id}`).then((res) => res.data);

      return data;
}

export async function getAuthorInfo(name: string[]) {
       const response = await axios.get(`https://openlibrary.org/search/authors.json?q=${name[0].replace(/\s+/g, '+').toLowerCase()}`)

       return response.data as AuthorInfo;
}

export async function filterBooks (query: string, startIndex: string, maxResults: string, orderBy: string, filter: string) {
      return await axios.get(`${BASE_URL}?q=${query}&startIndex=${startIndex})}&maxResults=${maxResults}&orderBy=${orderBy}&filter=${filter}`);
}


