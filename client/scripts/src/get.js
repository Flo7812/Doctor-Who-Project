

export async function getDoctors(){
    const url = `http://localhost:3011/Doctors`
    const r = await fetch(url)
    try {
        if(r.ok === true){
            const result = await r.json()
            return result
        }else{
            throw new Error('serveur indisponible')
        }
        } catch (error) {
            console.log(error);
            alert(error)
        }
    
}

export async function getDoctorsBy(critere, value){
    const url = `http://localhost:3011/Doctors?${critere}=${value}`
    const r = await fetch(url)
    try {
        if(r.ok === true){
            const result = await r.json()
            return result[0]    
        }else{
            throw new Error ('serveur indisponible')
    } 
    }catch (error) {
        console.log(error);
        alert(error)
    }
}

export async function getDoctorBySeasons(value){
    const doctors = await getDoctors()
        for (const doctor of doctors) {
            if (doctor.seasons.includes(parseInt(value))) {
                console.log(doctor);
                return doctor
            }
        }  
}

export async function getDoctorByActor(critere, value, critereBis, valueBis){
    critere = 'lastName'
    critereBis = 'firstName'
    if(!value && !valueBis){
        return
    }
    let url = `http://localhost:3011/Doctors?actor.${critere}=${value}&actor.${critereBis}=${valueBis}`
    try {
        const r = await fetch(url)
        const doctor = await r.json()
        return doctor
    } catch (error) {
        console.log(error);
            alert(error)
    }
}