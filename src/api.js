import axios from 'axios';

export const searchRepos = async term => {
    const url =`https://api.github.com/users/${term}/repos`;
    const response = axios.get(url);

    return response; 
 }


