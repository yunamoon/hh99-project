import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@/stores/user/user.sliec.jsx";

// 스토어 생성
const store = configureStore({
    reducer: {
      user: userSlice
    }
});

// 스토어의 상태를 가져오는 함수
export const getRootState = store.getState;

// 액션을 디스패치하는 함수
export const dispatchAction = store.dispatch;

// 스토어를 내보냅니다.
export default store;
