
import { createElt, createForm, createTab } from "../services/create.js";
import { getDoctors, getDoctorsBy, getDoctorBySeasons, getDoctorByActor } from "./get.js";
import { toFirstStrUpperC } from "../services/use.js";


export function display(){
    //gerer les toggle
}

export async function displayImgList(){
    const listeNav = document.querySelector('.nav__liste')
    const containerListe = document.querySelector('.liste__container')
    listeNav.onclick= () => {
        containerListe.classList.toggle('display')
    }
    const doctors = await getDoctors()
    doctors.forEach(doctor => {
        const container = document.querySelector('.container')
        let img = createElt('img','', {
            src: doctor.image,
            alt: doctor.numero,
            class: 'element'
        })
        container.append(img)
        }
    );  
}

export function displaySearchTab(){
    const selectNav = document.querySelector('.nav__search')
    const containerSelect = document.querySelector('.select__container')
    const select = document.querySelector('select')
    selectNav.onclick = () => {
        containerSelect.classList.toggle('display')
    }
    select.selectedIndex = 0
    select.addEventListener('change', ()=>{
        const choiceValue = select.value
        const choiceText = select[select.selectedIndex].textContent
        if(document.querySelector('form')){
            document.querySelector('form').remove()  
        }
        if(choiceValue === 'choice'){
            return
        }
        createForm(choiceText, choiceValue)
    })
}

export function displayTab(){
    const select = document.querySelector('select')
    select.addEventListener('click', ()=>{
        if(document.querySelector('form')){
            const button = document.querySelector('.button__search')
            button.addEventListener('click', async (e) =>{
                e.preventDefault()
                if(document.querySelector('table')){
                    let tables = document.querySelectorAll('table')
                    tables.forEach(table => {
                        table.remove()
                    });
                }
                const input = document.querySelector('.input')
                const inputValue = input.value
                const critere = input.parentElement.id
                if(critere === 'Nom'){
                    const inputBis = document.querySelector('.inputBis')
                    const inputBisValue = inputBis.value
                    const critereBis = inputBis.parentElement.id
                    displayDoctors(critere, toFirstStrUpperC(inputValue), critereBis, toFirstStrUpperC(inputBisValue))
                }else{
                    displayDoctors(critere, inputValue)
                    }
                })
        }}) 
}

async function displayDoctors(critere, value, critereBis = '', ValueBis = ''){
    try {
        if(critere === 'seasons'){
            const doctor = await getDoctorBySeasons(value)
            createTab(doctor.image, doctor.numDoctor, doctor.actor.lastName, doctor.actor.firstName, doctor.seasons)
            
        }else if(critere ==='Nom'){
            const doctors = await getDoctorByActor(critere, value, critereBis, ValueBis)
            doctors.forEach(doctor => {
                createTab(doctor.image, doctor.numDoctor, doctor.actor.lastName, doctor.actor.firstName, doctor.seasons)
            });
        }else{
            const  doctor = await getDoctorsBy(critere, value)
            createTab(doctor.image, doctor.numDoctor, doctor.actor.lastName, doctor.actor.firstName, doctor.seasons)
        }
    } catch (error) {
        console.log(error.message);
        alert(`Ce docteur n'existe pas (encore..)`)
        // window.open('../404.html', 'Détail!!','menubar=no, scrollbars=no, top=100, left=100, width=500, height=400')
        throw new Error (`Ce docteur n'existe pas (encore..)`)
    }
    
}



