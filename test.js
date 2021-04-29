
test('probando metodo get', () => {
    const expect = "[{\"id\":1,\"isbn\":1,\"titulo\":\"La comunidad del anillo\"}]"
    const result =     
        request({
            url: "http://localhost:3001/libros/1",
            json: false
        }, function (error, response, body) {
    
            if (!error && response.statusCode === 200) {
                // Pintamos la respuesta JSON en navegador.
                res.setHeader("Content-Type", "application/json");
                res.send(body) 
            }
        })
    
    console.log(expect);
    console.log(result);
    expect(result).toBe(expect)
    
})