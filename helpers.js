const { default: axios } = require('axios')

module.exports = {
  async fetchTicker (stockCode) {
    const { data } = await axios({
      method: 'get',
      url: `https://api.infomoney.com.br/ativos/${stockCode}/detalhe?type=json`
    })
    return data
  }
}
