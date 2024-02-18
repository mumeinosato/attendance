import { getPasswordNull } from "../api"; 

export async function setPassword(user: string, password: string): Promise<boolean> {
    let status = true;
    /*
    ステータスコード
    true: 成功
    false: パスワードがすでに設定されている
    */

    if (await getPasswordNull(user)) {
        setPassword(user, password);
    } else {
        status = false;
    }    
    return status;
}