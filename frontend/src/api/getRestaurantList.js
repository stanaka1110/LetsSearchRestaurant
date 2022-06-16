import axios from 'axios'

const KEY = '690acc86d576acaa'

// axiosのインスタンス作成
const hotpepper = axios.create({
    baseURL: 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1'
})

export const fetchSearchData = async () => {
    //大エリアコード=Z011(東京)のお店を検索
    return await hotpepper.get('', {
        params: {
            key: KEY,
            large_area: 'Z011',
            format: 'json'
        }
    });
}