import axios from "axios";
import {FullResponse} from "../types/typesResponse";

const DATA = {
    "fileHash": "0190983f-d7be-7895-bc40-5f403f0bc287",
    "format": "xlsx",
    "withEventHandlers": false
};
const TOKEN = '6b2a6b4c-51c4-4beb-94b8-250d12d023b1';
const CONFIG = {
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    }
};
const URL = 'https://zdkhiu5mp5dwa.elma365.ru/pub/v1/app/test_sreda/test_task/list';

export async function RequestingData(){
    return axios<FullResponse>({
        method: 'post',
        url: URL,
        data: DATA,
        headers: CONFIG.headers,
    });
}
