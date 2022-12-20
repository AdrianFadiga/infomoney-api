const { default: axios } = require('axios')

module.exports = {
  async getByStockCode (req, res) {
    const { stockCode } = req.params
    const { data } = await axios({
      method: 'get',
      url: `https://api.infomoney.com.br/ativos/${stockCode}/detalhe?type=json`
    })
    return res.json(data)
  },

  async getCarousel (_req, res) {
    const { data } = await axios({
      method: 'get',
      url: 'https://api.infomoney.com.br/ativos/ticker?type=json'
    })
    return res.json(data)
  },

  async getStocks (_req, res) {
    const { data: { Data } } = await axios({
      method: 'get',
      url: 'https://api.infomoney.com.br/markets/high-low/b3?sector=Todos&orderAtributte=Volume&pageIndex=1&pageSize=15&search=&type=json'
    })
    return res.json(Data)
  }
}

// getAll orderBy volume
// 'https://api.infomoney.com.br/markets/high-low/b3?sector=Todos&orderAtributte=Volume&pageIndex=1&pageSize=15&search=&type=json'

// getAll orderBy aumento;
// 'https:// api.infomoney.com.br/markets/high-low/b3?sector=Todos&orderAtributte=High&pageIndex=1&pageSize=15&search=&type=json'

// getAll orderBy queda;
// 'https:/tributte=Low&pageIndex=1&pageSize=15&search=&type=json'
// /api.infomoney.com.br/markets/high-low/b3?sector=Todos&orderA
// carrossel infoMoney:
// verificar de sempre passar a hora e o minuto na hora de fazer a requisição
// 'https://api.infomoney.com.br/ativos/ticker?type=json&_=1412'

// 'https://api.infomoney.com.br/ativos/petr4/detalhe?type=json'
