// Этот компонент создает кнопку "Домой" для возврата на index
// Он сам устанавливает себе стили и встраивает себя в страницу
const burger = document.createElement("a");
burger.setAttribute('id', 'burger')
burger.setAttribute('href', '../../../../index.html')
burger.textContent = "back";
burger.style.cssText = `
    position: absolute; 
    top: 0;
    left: 0;
    color: rgb(0, 0, 0);
    text-decoration: none;
    margin: 10px;
    font-weight: 900;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15vw; 
    height: 15vw; 
    min-width: 45px;
    min-height: 30px;
    max-width: 60px;
    max-height: 50px;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.2);
    z-index:99999999;
`
document.body.appendChild(burger);
