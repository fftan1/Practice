
import { Alert, AsyncStorage } from 'react-native';
// import _ from 'lodash';
import { put, takeEvery } from 'redux-saga/effects';
import * as ActionTypes from '../actions/types';
import ames247 from '../../utils/axios';
import NavigationService from '../../../../NavigationService';

const TITLE_MESSAGE = 'AMES ENGLISH';

function* checkLogin(action) {
  console.log("TCL: function*checkLogin -> action", action)
  const putModel = { type: '' };
  const alertModal = { title: 'AMES ENGLISH', message: '' };
  const { navigatorNamed } = NavigationService;
  const ref = NavigationService.getNavigator(navigatorNamed.MyNavigator);
  try {
    if (action.username.length === 0) {
      Alert.alert(TITLE_MESSAGE, 'Tên đăng nhập không được để trống');
      yield put({ type: ActionTypes.AUTH_LOGIN_FAIL });
      return;
    }
    if (action.password.length === 0) {
      Alert.alert(TITLE_MESSAGE, 'Mật khẩu không được để trống');
      yield put({ type: ActionTypes.AUTH_LOGIN_FAIL });
      return;
    }

    const response = yield ames247.post('/login-ames-app', {
      UserName: action.username,
      Password: action.password,
    });
    console.log("TCL: function*checkLogin -> response", response)
    let myAiUser = {};
    if (response.data.message === 'OK') {
      const { users } = response.data;
      console.log("TCL: function*checkLogin -> users", users)
      users.loginMyAi = JSON.parse(users.loginMyAi);
      if (users.loginMyAi.message === 'OK') {
        users.loginMyAi = users.loginMyAi.user;
        console.log("TCL: function*checkLogin -> users.loginMyAi", users.loginMyAi)
        // users.loginMyAi.id = users.loginMyAi.id || users.loginMyAi.userId || users.loginMyAi.Id;
        // if (users.loginMyAi.userRoles) {
        //   // console.log(users.loginMyAi.userRoles);
        //   users.loginMyAi.userRoles = JSON.parse(users.loginMyAi.userRoles);
        //   users.loginMyAi.userRoles = users.loginMyAi.userRoles.map((x) => x.Name);
        // }
        console.log("TCL: function*checkLogin -> test")
        myAiUser = users.loginMyAi;
        yield put({ type: ActionTypes.AUTH_LOGIN_SUCCESS, loginUser: myAiUser });
        ref._navigation.navigate('STACK');
        return;
      }
      alertModal.message = 'sai sai';
      putModel.type = ActionTypes.AUTH_LOGIN_FAIL;
    }
  } catch (error) {
    // console.log("TCL: function*checkLogin -> error", error);
    putModel.error = error;
    putModel.type = ActionTypes.AUTH_LOGIN_ERROR_NETWORK;
    alertModal.message = 'internet error';
  }
  yield put(putModel);
  Alert.alert(alertModal.title, alertModal.message);
  ref._navigation.navigate('LOGIN_SC');
}

// const { navigatorNamed } = NavigationService;
//         const ref = NavigationService.getNavigator(navigatorNamed.MyNavigator);
//         // navigationService.navigate("QuestionScreen", { selectedAssignment });
//         ref._navigation.navigate('STACK');

export default function* sagas() {
  yield takeEvery(ActionTypes.AUTH_LOGIN, checkLogin);
}

// data: {
//   message: "OK"
//   users: {
//     loginMyAi: {
//       description: "Đăng nhập thành công"
//       message: "OK"
//       user: {
//         Avatar: null
//         ClassName: null
//         Email: ""
//         FullName: "tan"
//         GroupId: null
//         Id: 36551
//         ModuleId: ""
//         Phone: "0101010100"
//         Profile: null
//         PronunciationLevel: "Interactive"
//         Roles: "MYAI-STUDENTS"
//         SchoolId: null
//         SpeechRecognitionAPI: null
//         Status: "ACTIVE"
//         StudentId: 36551
//         UserId: 36551
//         UserName: "0101010100"
//         UserRoles: "[{"ID":5,"Name":"MYAI - STUDENTS"}]"
//         VerifyCode: null
//       }
//     }
//   }
// }