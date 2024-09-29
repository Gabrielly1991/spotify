const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Landing Page Tests', () => {
  let document;

  beforeAll(() => {
    // Carrega o HTML no JSDOM
    const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
    document = new JSDOM(html).window.document;
  });

  test('o primeiro título do carrossel deve ser "Música para todos"', () => {
    const firstCarouselTitle = document.querySelector('#carousel-spotify .carousel-item.active h1').textContent.trim();
    expect(firstCarouselTitle).toBe('Música para todos');
  });

  test('o segundo título do carrossel deve ser "As melhores rádios"', () => {
    const secondCarouselTitle = document.querySelectorAll('#carousel-spotify .carousel-item h1')[1].textContent.trim();
    expect(secondCarouselTitle).toBe('As melhores rádios');
  });

  test('deve conter imagens nos serviços', () => {
    const imagens = document.querySelectorAll('.caixa img');
    expect(imagens.length).toBeGreaterThan(0);
  });

  test('ao clicar no logo da navbar, deve direcionar para a página correta', () => {
    const logoLink = document.querySelector('.navbar-brand').href;
    expect(logoLink).toBe('https://www.spotify.com/br-pt/premium');
  });

  test('ao clicar no botão ouça agora, deve direcionar para a página correta', () => {
    const link = document.querySelector('.btn-link').href;
    expect(link).toBe('https://open.spotify.com/');
  });
  
});
