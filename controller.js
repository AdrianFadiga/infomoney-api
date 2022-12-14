const getAll = (req, res) => {
  return res.json('oi bom dia')
}
// getAll orderBy volume
// 'https://api.infomoney.com.br/markets/high-low/b3?sector=Todos&orderAtributte=Volume&pageIndex=1&pageSize=15&search=&type=json'

// getAll orderBy aumento;
// 'https:// api.infomoney.com.br/markets/high-low/b3?sector=Todos&orderAtributte=High&pageIndex=1&pageSize=15&search=&type=json'

// getAll orderBy queda;
// 'https://api.infomoney.com.br/markets/high-low/b3?sector=Todos&orderAtributte=Low&pageIndex=1&pageSize=15&search=&type=json'

// carrossel infoMoney:
// 'https://api.infomoney.com.br/ativos/ticker?type=json&_=1412'
module.exports = { getAll }
