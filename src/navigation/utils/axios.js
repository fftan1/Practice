import { Platform } from 'react-native';
import axios from 'axios';
import { name as appName } from '../../../app.json';

const ames247Axios = axios.create({
  baseURL: 'https://cloud.softech.vn/mobile/ames247/api',
  headers: {
    Platform: Platform.OS,
    AppName: appName,
    'Content-Type': 'application/json; charset=utf-8',
  },
});

export default ames247Axios;
