function customRender(reactElement,container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // container.appendChild(domElement)

    //the above method is the same as below but it is less efficient

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop === 'children'){
            continue
        }
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)}
    //This is how react works in the background


const reactElement = {
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank'
    },
    children:'Click me to go to google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)