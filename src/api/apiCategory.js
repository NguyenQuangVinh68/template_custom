import axiosClient from "./axiosClient";

const apiCategory = {
    getAll(){
        const url = "/category"
        return axiosClient.get(url)
    }
}

export default apiCategory