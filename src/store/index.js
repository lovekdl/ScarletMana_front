
import LoginStore from "./login.strore"
import React from "react"
import MessageStore from "./message.store"
import ResourceStore from "./resource.store"
class RootStore {
	constructor() {
		this.loginStore = new LoginStore()
		this.MessageStore = new MessageStore()
		this.ResourceStore = new ResourceStore()
	}
}

const rootStore = new RootStore()
const context = React.createContext(rootStore)
const useStore = () => React.useContext(context)

export {useStore}