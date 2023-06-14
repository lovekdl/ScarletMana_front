import {computed, makeAutoObservable} from 'mobx'
import {http, setTokenFromLocalStorage, getTokenFromLocalStorage} from '../utils'
class MessageStore {
  maxLength = 30

  messages = []
  buffer_messages = []
  constructor() {
		this.messages = this.messages.slice(-this.maxLength)
		makeAutoObservable(this,{
			reversedMessages : computed
		})

		setInterval(() => {
      async function getMessage() {
        const ret = await http.post('/api/message', {
          token:getTokenFromLocalStorage()
        })
        return ret
      }
      const ret = getMessage()
      ret.then(res => {
				var jsonArray = JSON.parse(res.data.message);
				for(var i = 0; i < jsonArray.length; ++i) {
					this.buffer_messages.push(jsonArray[i])
				}
      }).catch(e => {
        console.log(e)
      })
    }, 2000);

		setInterval(() => {
      if(this.buffer_messages.length > 0) {
				var firstElement = this.buffer_messages.shift();
				this.addMessage(firstElement)
			}
    }, 2000);

  }
  get reversedMessages() {
		return this.messages.slice().reverse();
	}
  addMessage = (newMessage) => {
    
		const newItem = {
			id: Date().now,
			content: newMessage,
			showTransition:false
		}
		this.messages.push(newItem)
    if (this.messages.length > this.maxLength) {
      this.messages = this.messages.slice(-this.maxLength)
    }
		setTimeout(() => {
			this.setMessages(this.messages.map((item) => item.id===newItem.id? {...item,showTransition: true} : item));
		}, 50);
  }
	setMessages = (newMessages) => {
		this.messages = newMessages
	}
}

export default MessageStore