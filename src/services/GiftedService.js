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


}

export const giftedService = new GiftedService()