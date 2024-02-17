import mysql from 'mysql';
//import dotenv from 'dotenv';

//dotenv.config();

const connection = mysql.createConnection({
    host: import.meta.env.DB_HOST,
    user: import.meta.env.DB_USER,
    password: import.meta.env.DB_PASSWORD,
    database: import.meta.env.DB_NAME,
    port: parseInt(import.meta.env.DB_PORT || '3306'),
});

connection.connect((err: mysql.MysqlError) => {
    if (err){
        console.error('error connecting: ' + err);
        return;
    }    
    console.log('success');
});

export function authenticate(loginId: string, password: string): Promise<any>{
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM `user` WHERE name = ?';

        connection.query(query, [loginId], (err: mysql.MysqlError | null, result: any[]) => {
            if (err){
                reject(new Error(err.message));
            }

            if (result.length === 0){
                reject(new Error('No user'));
            }

            const user = result[0];

            if(user.password === password){
                resolve(user);
            }else{
                reject(new Error('Password is wrong'));
            }
        });
    });
}