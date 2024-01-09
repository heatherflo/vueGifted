import { AppState } from "../AppState"
import { api } from "./AxiosService"
import { Gift } from "../models/Gift"


class GiftedService {

  async getGifts() {
    console.log('getting gifts 🎁')
    const response = await api.get('api/gifts')
    console.log('got gift', response.data)
    AppState.gifts = response.data.map(gift => new Gift(gift))

  }

  async openGift(id) {
    console.log('opening gifts', id)
    const response = await api.put(`api/gifts/${id}`, { opened: true })
  }


}

export const giftedService = new GiftedService()