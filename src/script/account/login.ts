import { getPasswordNull, userExists } from "../api";

export async function check(user: string): Promise<number> {
    let status: number = 0;
    if(await userExists(user)) {
        console.log(await getPasswordNull(user));
        if(await getPasswordNull(user)) {
            status = 1;
        } else {
            status = 2;
        }
    } 
    /* 
    ステータスコードの意味
    0: ユーザーが存在しない
    1: パスワードがnull
    2: パスワードがnullでない
    */   
    return status;
}