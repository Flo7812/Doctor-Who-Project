
export function createElt(tagName, text = '', atributs = {} ){
    const element = document.createElement(tagName)
    element.textContent = text
    for(const [atr, value =''] of Object.entries(atributs)){
        element.setAttribute(atr, value)
    }
    return element
}

export const createForm = (choiceText, choiceValue) =>{
    const container = document.querySelector('.form__search--container')
    const form = createElt('form')
    const button = createElt('button','chercher', {
        class: 'button__search',
        type: 'submit',
    })
    if(choiceValue != 'actor'){
        const label = createElt('label',`${choiceText}: `, {
            class: 'label',
            id: choiceValue
        })
        const input = createElt('input','', {
            class: 'input',
            placeholder: `Entrer le ${choiceText}`,
            required: ''
        })
        container.append(form)
        form.appendChild(label)
        label.appendChild(input)
        form.append(button)
    }else{
        const label = createElt('label',`Nom: `, {
            class: 'label',
            id: 'Nom'
        })
        const labelBIs = createElt('label',`Prenom : `, {
            class: 'label',
            id: 'Prenom'
        })
        const input = createElt('input','', {
            class: 'input',
            placeholder: `Entrer le Nom`,
            required: ''
        })
        const inputBis = createElt('input','', {
            class: 'inputBis',
            placeholder: `Entrer le Prenom`,
            required: ''
        })
        const span = createElt('span', ' et/ou ')
        container.append(form)
        form.appendChild(label)
        label.appendChild(input)
        form.appendChild(span)
        form.appendChild(labelBIs)
        labelBIs.appendChild(inputBis)
        form.append(button)
    }
}

export const createTab = (imgUrl, numDoc, lastName, firstName, seasons) =>{
    const container = document.querySelector('.table__container')
    const table = createElt('table')
    container.appendChild(table)
    //1ere ligne
    const thead = createElt('thead')
    table.appendChild(thead)
    const tr = createElt('tr','',{
        class: 'tr'
    })
    thead.appendChild(tr)
    const th = createElt('th', `Docteur n° ${numDoc}`, {
        colspan: "5"
    })
    tr.appendChild(th)
    
    //2eme ligne
    const tbody = createElt('tbody')
    table.appendChild(tbody)
    
    const tr0 = createElt('tr','',{
        class: 'tr0'
    })
    let td = createElt('td', '', {
        id: "td",
        rowspan: "2"
    })
    let img = createElt('img', '', {
        src: imgUrl
    })
    let tdLastName = createElt('td', `Nom de l'acteur`)
    let tdFirstName = createElt('td',`Prenom de l'acteur`)
    let tdSaisons = createElt('td',`Saison(s)`)
    let tdButton = createElt('td',``,{
        rowspan: "2"
    })
    let buttonTab = createElt('button','Cliquer ici',{})
    tbody.appendChild(tr0)
    tr0.appendChild(td)
    td.appendChild(img)
    tr0.appendChild(tdLastName)
    tr0.appendChild(tdFirstName)
    tr0.appendChild(tdSaisons)
    tr0.appendChild(tdButton)
    tdButton.appendChild(buttonTab)
    
    //3eme ligne 
    let tr1 = createElt('tr', '', {
        class: 'tr1'
    })
    
    let tdLastNameValue = createElt('td', lastName)
    let tdFirstNameValue = createElt('td', firstName)
    let tdSaisonsValue = createElt('td', seasons)
    tbody.appendChild(tr1)
    tr1.appendChild(tdLastNameValue)
    tr1.appendChild(tdFirstNameValue)
    tr1.appendChild(tdSaisonsValue)
}