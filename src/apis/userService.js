import axios from './config';

class UserService {
    getUserInfoById (userId) {
        return axios.get(`/get_user_info_by_id?id=${userId}`);
    }

    uploadProfilePhoto (photoStr, userId) {
        return axios.post('/upload_profile_photo', { photoStr, userId });
    }

    getProfilePhoto (picId) {
        return axios.get(`/get_profile_photo?picId=${picId}`);
    }
}

export default new UserService();
