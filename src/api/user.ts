/*
 * @Author: your name
 * @Date: 2019-12-12 18:05:43
 * @LastEditTime: 2019-12-16 17:43:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yunyu-app\src\api\user.ts
 */
import instance from './default'

export function getUserInfo() {
    return instance.get('/api/getUserInfo')
}
