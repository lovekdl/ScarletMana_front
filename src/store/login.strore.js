import {makeAutoObservable} from 'mobx'
import {http, setTokenFromLocalStorage, getTokenFromLocalStorage} from '../utils'
class LoginStore {
	token = getTokenFromLocalStorage()||''
	constructor() {
		//mobx 设置响应式
		makeAutoObservable(this)
	}
	getTokenByLogin = async ({username, password}) => {
		//调用登录接口
		console.log('password is ' + password)
		const ret = await http.post('api/login',{
			username,
			password,
		})
		console.log(ret)
		this.setToken(ret.data.token)
			
	}
	getTokenByRegister = async ({username, password}) => {
		//调用注册接口
		const ret = await http.post('/api/register', {
			username,
			password
		})
		this.setToken(ret.data.token)
	}
	setToken = (token)=> {
		this.token = token
		setTokenFromLocalStorage(this.token)
	}
}

export default LoginStore