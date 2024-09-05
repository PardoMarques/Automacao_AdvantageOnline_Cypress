describe('Teste API: Login', () => {
  it('Realizar a chamada de login com sucesso', () => {
    cy.request({
      method: 'POST',
      url: 'https://advantageonlineshopping.com/accountservice/ws/AccountCreateRequest',
      headers: {
        'accept': 'application/xml, text/xml, */*; q=0.01',
        'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
        'content-type': 'text/xml; charset=UTF-8',
        'cookie': '_gid=GA1.2.1546739600.1725508258; userCart=%7B%22userId%22%3A-1%2C%22productsInCart%22%3A%5B%5D%7D; _ga=GA1.2.960802132.1725508258; _ga_TBPYED8WSW=GS1.1.1725532385.2.1.1725533874.0.0.0; _ga_56EMNRF2S2=GS1.2.1725532381.2.1.1725533943.60.0.0',
        'origin': 'https://advantageonlineshopping.com',
        'priority': 'u=1, i',
        'referer': 'https://advantageonlineshopping.com/',
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'soapaction': 'com.advantage.online.store.accountserviceAccountCreateRequest',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
        'x-kl-ajax-request': 'Ajax_Request',
        'x-requested-with': 'XMLHttpRequest'
      },
      body: `<?xml version="1.0" encoding="UTF-8"?>
        <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
          <soap:Body>
            <AccountCreateRequest xmlns="com.advantage.online.store.accountservice">
              <accountType>USER</accountType>
              <address>Rua teste</address>
              <allowOffersPromotion>true</allowOffersPromotion>
              <cityName>Sao Paulo</cityName>
              <countryId>Brazil,br</countryId>
              <email>email_cy@testes.com</email>
              <firstName></firstName>
              <lastName></lastName>
              <loginName>Teste</loginName>
              <password>Testes@123</password>
              <phoneNumber></phoneNumber>
              <stateProvince>123</stateProvince>
              <zipcode>00000001</zipcode>
            </AccountCreateRequest>
          </soap:Body>
        </soap:Envelope>`
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
})